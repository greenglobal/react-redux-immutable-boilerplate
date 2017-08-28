import React from 'react';
import PropTypes from 'prop-types'
import { RenderRoutes } from 'base/routes';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

const Root = ({ store, routes, history }) => (
  <Provider store={store}>
    <Router>
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
