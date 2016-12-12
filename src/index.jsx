import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Provider} from 'react-redux';

import reducer from './reducer';
import {setState} from './action_creators';
import {AppContainer} from './components/App';
import './sass/style.sass';


let middleware = [thunk];
if(process.env.NODE_ENV === 'development') middleware.push(logger());

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

store.dispatch(setState({count: 4}));

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
