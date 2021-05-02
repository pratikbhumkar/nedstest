/**
 * @format
 */
 import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import {RaceReducer, fetchRaces} from "./src/DataStore/RaceReducer";
import thunk from "redux-thunk";
const combinedReducers = combineReducers({ Race: RaceReducer});
const combinedStore = createStore(combinedReducers, applyMiddleware(thunk));
combinedStore.dispatch(fetchRaces)
const RNRedux = () => (
    <Provider store={combinedStore}>
        <App />
    </Provider>
)
AppRegistry.registerComponent(appName, () => RNRedux);
