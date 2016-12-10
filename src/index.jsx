import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from './components/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import './sass/style.sass';

import reducer from './reducer';
import {setState} from './action_creators';

const store = createStore(reducer);
store.dispatch(setState({count: 4}));

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
