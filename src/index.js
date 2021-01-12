import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk  from 'redux-thunk';
import reducers from './reducers/index';

const initialState = {
  loading: false
}

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk)),
);

// You don't have to use `fetch` btw, use whatever you want
const getCounters = () =>
  fetch('/api/v1/counter', { method: 'get' })
    .then(res => res.json());

const App = () => {
  React.useEffect(() => {
    getCounters().then(console.log, console.error);
  }, []);

  return (
    <h1>Hello, Cornershop!</h1>
  );
};

ReactDOM.render(
<Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);