import React from 'react';
import {connect} from 'react-redux';
import WorkItem from './WorkItem';

const mapStateToWorkItemListProps = (state) => {

    return {
        workItems: state.items
    };
};
const WorkItemList = (
    { workItems }
) => {
    console.log('work items', workItems);
    return (
        <ul>
            {
                Object.keys(workItems).map((key) => {
                    var item = workItems[key];
                    return (
                        <li key={key}>
                            <div>
                                <WorkItem name={item.name} id={item.id}/>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    );
};
const WorkItemListContainer = connect(mapStateToWorkItemListProps)(WorkItemList);

export default WorkItemListContainer;