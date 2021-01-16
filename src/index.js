
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import App from './routes/App';

const initialState = {
  loading: false,
  counterStore: [],
  createNewCounterModal: false,
  shareCounterStore: false,
  selectedCounterStore: [],
}

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);