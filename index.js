/**
 * @format
 */
 import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import RaceReducer from "./DataStore/RaceReducer";

const combinedReducers = combineReducers({ Race: RaceReducer});
const combinedStore = createStore(combinedReducers);
const RNRedux = () => (
    <Provider store={combinedStore}>
        <App />
    </Provider>
)
AppRegistry.registerComponent(appName, () => RNRedux);
