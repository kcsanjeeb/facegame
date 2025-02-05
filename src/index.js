import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
 
  <React.StrictMode>
      <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
    </PersistGate>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
); 

reportWebVitals();
