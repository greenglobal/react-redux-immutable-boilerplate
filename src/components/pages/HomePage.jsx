import React from 'react';
import {MasterLayout} from 'layouts';
import Home from 'modules/home';
import axios from 'axios';
import Promise from 'bluebird';
import {Categories} from 'api';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <MasterLayout>
        <Home />
      </MasterLayout>
    );
  }
}

HomePage.fetchData = function(options) {

  const { store } = options;
  // return store.dispatch(Categories.actions.categories()).then(function(response) {
  //   return Promise.resolve(response);
  // }).catch(function(err) {
  //   return Promise.reject(err);
  // });

  return Promise.resolve();
}

export default HomePage;
