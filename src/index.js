import React from "react";
import ReactDOM from "react-dom";
import { store as reduxStore } from './state';
import { Provider } from 'react-redux';
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");

ReactDOM.render(
    <BrowserRouter>
    <Provider store={reduxStore}>
       <App />
    </Provider>
    </BrowserRouter>
, rootElement);