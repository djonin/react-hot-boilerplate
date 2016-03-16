import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose } from 'redux';
import ReactDOM from 'react-dom';
import WorkItemList from './WorkItemList';
import NewItemBox from './NewItemBox';
const createLogger = require(`redux-logger`);

const workItemOps = (state = {items:{}, itemBoxValue: ""}, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            var newItems = Object.assign({}, state.items);
            newItems[action.item.name] = action.item;
            return Object.assign({}, state, {itemBoxValue: "", ['items'] : newItems });
        case 'REMOVE_ITEM':
            var newItems = Object.assign({}, state.items);
            delete newItems[action.name];
            return Object.assign({}, state, {['items'] : newItems });
        case 'TOGGLE_FLAG':
            var newItems = Object.assign({}, state.items);
            newItems[action.name].flagged = !newItems[action.name].flagged;
            return Object.assign({}, state, {['items'] : newItems });
        case 'ITEM_TEXT_UPDATED':
            return Object.assign({}, state, { itemBoxValue: action.value } );
        default:
            return state;
    }
};

const WorkItemApp = () => (
    <div>
        <WorkItemList />
        <NewItemBox />
    </div>
);

let middlewares = [createLogger({})];

const WorkItemAppContainer = () => {
    const store = compose(applyMiddleware(...middlewares))(createStore)(workItemOps);
    return (
        <Provider store={store}>
            <WorkItemApp />
        </Provider>
    );
};

export default WorkItemAppContainer;