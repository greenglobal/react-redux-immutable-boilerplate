import React from 'react';
import {RouterContext} from 'react-router';
import {store} from './routes/index.jsx';
import Promise from 'bluebird';
import ReactDOMServer from 'react-dom/server';
import { Server } from 'http';

import {Provider} from 'react-redux';

module.exports = {
  run: function() {
    var http = require('http');
    var path = require('path');
    var fs = require('fs');
    var express = require('express');
    var reactRouter = require('react-router');
    var ejs = require('ejs');

    const match = reactRouter.match;

    const routes = require('./routes/routes').default();
    const staticFiles = [
      '/*.png',
      '/*.svg',
      '/*.ttf',
      '/style.css',
      '/bundle.js'
    ];

    let render = function(req, renderProps, initialData) {
      return ReactDOMServer.renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps}/>
        </Provider>
      );
    }

    let getReduxPromise = (renderProps) => {
      let { query, params } = renderProps;

      let comp = renderProps.components[renderProps.components.length - 1];

      if (comp.fetchData) {
        return comp.fetchData({ query, params, store }).then(response => {
          return Promise.resolve(response)
        });
      } else {
        return Promise.resolve();
      }
    }


    const app = express();
    const server = new Server(app);

    app.use(express.static('/../build'));
    app.set('view engine', 'ejs');
    //app.set('views', path.join(__dirname, './'));

    staticFiles.forEach(file => {
      app.get(file, (req, res) => {
        const filePath = path.resolve(`build${req.url}` );
        res.sendFile( filePath );
      });
    });

    app.get('*', (request, response) => {
      let error = () => response.status(404).send('404');

      match({routes, location: request.url}, (err, redirect, renderProps) => {
        if (err) {
          error();
        } else if (redirect) {
          response.redirect(302, redirect.pathname + redirect.search)
        } else if (renderProps) {
          getReduxPromise(renderProps).then((initialData) => {
            let generatedContent = render(request, renderProps, initialData);

            const currentState =  store.getState();

            var cache = [];
            const reduxState = JSON.stringify(currentState, function(key, value) {
              if (typeof value === 'object' && value !== null) {
                if (cache.indexOf(value) !== -1) {
                    // Circular reference found, discard key
                    return;
                }
                // Store value in our collection
                cache.push(value);
              }
              return value;
            });
            cache = null;

            ejs.renderFile(
              path.resolve('./src/index.ejs' ),
              {
                generatedContent,
                reduxState
              }, {},
              function(err, str) {
                if (err) {
                  console.log(err);
                }
                response.status(200).send(str);
              });
          }).catch(error => {
            console.log(error);
          });

        } else {
          error();
        }
      });
    });

    server.listen(9000, function() {
      console.log(`Listening at http://localhost:${server.address().port}`);
    });
  }
}
