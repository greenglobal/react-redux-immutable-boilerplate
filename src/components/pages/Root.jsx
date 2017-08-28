import React from 'react';
import PropTypes from 'prop-types'
import { RenderRoutes } from 'base/routes';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

const Root = ({ store, routes, history }) => (
  <Provider store={store}>
    <Router history={history}>
      <RenderRoutes routes={routes} />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired
}

export default Root;
