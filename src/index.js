import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './redux/reduxStore'
import './index.css';
import App from './App';
import {Provider} from "react-redux"

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>
    );

}

rerenderEntireTree()

store.subscribe( () => {
    let state = store.getState()
    rerenderEntireTree(state)
})

