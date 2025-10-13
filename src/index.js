import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from "./serviceWorker";
import { Provider } from 'react-redux';
import rootReducer from './slice';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';
import './i18n/index';

const store = configureStore({ reducer: rootReducer, devTools: true });

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();

