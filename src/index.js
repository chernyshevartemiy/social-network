import React from 'react';
import store from "./redux/store";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StoreContext, {Provider} from "./storeContext";

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

rerenderEntireTree(store)

store.subscribe( () => {
    let state = store.getState()
    rerenderEntireTree(state)
})

