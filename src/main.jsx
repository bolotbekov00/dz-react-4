import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import UserFormComponent from './components/UserFormComponet.jsx';
import UserDisplayComponent from './components/UsersDisplayComponent.jsx';
import userReducer from './components/reducer/reducer.js';

const store = createStore(userReducer);


const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <UserFormComponent />
            <UserDisplayComponent/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);