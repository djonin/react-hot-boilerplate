import React from 'react';
import {connect} from 'react-redux';
import {getField, Form, Field} from 'react-redux-form';

const addWorkItemAction = (name) => {
    return {
        type: 'ADD_ITEM',
        item: { name: name, flagged: false }
    }
};

//action creator
const itemTextUpdatedAction = (value) => {
    return {
        type: 'ITEM_TEXT_UPDATED',
        value : value
    };
};

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
            dispatch(itemTextUpdatedAction(e.target.value));
        },
        addWorkItem: (value) => {
            dispatch(addWorkItemAction(value));
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