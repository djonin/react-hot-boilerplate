import React from 'react';
import {connect} from 'react-redux';

const removeWorkItem = (name) => {
    return {
        type: 'REMOVE_ITEM',
        name
    };
};

const toggleFlagOnItem = (name) => {
    return {
        type: 'TOGGLE_FLAG',
        name
    };
};

const mapStateToWorkItemProps = (
    state,
    ownProps
) => {
    return {
        flagged: state.items[ownProps.name].flagged,
        name: ownProps.name
    };
};
const mapDispatchToWorkItemProps = (
    dispatch,
    ownProps
) => {
    return {
        onRemoveClick: () => {
            dispatch(
                removeWorkItem(ownProps.name)
            );
        },
        onFlagToggleClick: (flagged) => {
            dispatch(
                toggleFlagOnItem(ownProps.name)
            );
        }
    };
};
const WorkItem = (
    { flagged,
    name,
    onRemoveClick,
    onFlagToggleClick }
) => {
    return (
        <div className="outer">
            <div className="inner">
                <button onClick={onRemoveClick}>
                    x
                </button>
            </div>
            <div className="inner">
                <div className={flagged ? "flagged" : ""}>{name}</div>
            </div>
            <div className="inner">
                <button onClick={onFlagToggleClick}> {flagged ? "Un-flag" : "Flag"} </button>
            </div>
        </div>
    );
};
const WorkItemContainer = connect(mapStateToWorkItemProps, mapDispatchToWorkItemProps)(WorkItem);

export default WorkItemContainer;