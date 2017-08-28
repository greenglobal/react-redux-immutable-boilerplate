import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

import { Router, Route, Switch } from 'react-router-dom';
import { matchRoutes, renderRoutes } from 'react-router-config';

import {createHashHistory} from 'history';
import { syncHistoryWithStore } from 'react-router-redux';

import {routes} from 'base/routes';
import {store} from 'base/reducers';
import {Root} from 'components/pages';

const hashHistory = createHashHistory();
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render((
  <Root store={store} routes={routes} history={history}/>
), document.getElementById('root'));
