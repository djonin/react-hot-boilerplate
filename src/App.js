import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose } from 'redux';
import ReactDOM from 'react-dom';
import WorkItemList from './WorkItemList';
import NewItemBox from './NewItemBox';
import WorkItemOps from './reducers/WorkItemOpsReducer';
const createLogger = require(`redux-logger`);

const WorkItemApp = () => (
    <div>
        <WorkItemList />
        <NewItemBox />
    </div>
);

let middlewares = [createLogger({})];

const WorkItemAppContainer = () => {
    const store = compose(applyMiddleware(...middlewares))(createStore)(WorkItemOps);
    return (
        <Provider store={store}>
            <WorkItemApp />
        </Provider>
    );
};

export default WorkItemAppContainer;