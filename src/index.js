import React from 'react';
import store from "./redux/store";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <App state = {store.getState()} dispatch = {store.dispatch.bind(store)}/>
        </React.StrictMode>
    );

}

rerenderEntireTree(store)

store.subscribe(rerenderEntireTree)

