import React from 'react';
import ReactDOM from 'react-dom/client';
import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import App from './App';
import reducer from "./store/reducer";
import './index.css';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);

