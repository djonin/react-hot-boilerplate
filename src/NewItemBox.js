import React from 'react';
import {connect} from 'react-redux';
import {getField, Form, Field} from 'react-redux-form';
import Actions from './actions/NewItemBoxActions';

const mapStateToNewItemBoxProps = (
    state
) => {
    return {
        value: state.itemBoxValue
    };
};
const mapDispatchToNewItemBoxProps = (
    dispatch
) => {
    return {
        onItemEntered: (e) => {
            dispatch(Actions.itemTextUpdated(e.target.value));
        },
        addWorkItem: (value) => {
            dispatch(Actions.addWorkItem(value));
        }
    };
};
const NewItemBox = (
    { onItemEntered, addWorkItem, value }
) => {

    return (
        <div>
            <form onSubmit={ (e) => {
                e.preventDefault();
                addWorkItem(value);
            }}>
                Work item name: <input type="text" value={value} onChange={onItemEntered}/>
            </form>
        </div>
    );
};
const NewItemBoxContainer = connect(mapStateToNewItemBoxProps, mapDispatchToNewItemBoxProps)(NewItemBox);

export default NewItemBoxContainer;