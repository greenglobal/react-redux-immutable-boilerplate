import React from 'react';
import PropTypes from 'prop-types';
import Route from 'react-router/Route';
import withRouter from 'react-router/withRouter';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import ConnectedSwitch from './connectedSwitch';

const RenderRoutes = ({routes, auth}) => {
  if (!routes) {
    return null;
  }

  return (
    <ConnectedSwitch>
      {routes.map((route, i) => (

        <Route key={i} path={route.path} exact={route.exact} render={(props) => (
          <div>

            {
              <route.component {...props} route={route} routes={route.routes}/>
            }
          </div>
        )}/>
      ))}
    </ConnectedSwitch>
  );
};

RenderRoutes.propTypes = {
  routes: PropTypes.array.isRequired,
  parent: PropTypes.array
};

const mapStateToProps = state => ({});

export default withRouter(connect(mapStateToProps, null)(RenderRoutes));
