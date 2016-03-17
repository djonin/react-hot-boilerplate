const addWorkItem = (name) => {
    return {
        type: 'ADD_ITEM',
        item: { name: name, flagged: false }
    }
};

const itemTextUpdated = (value) => {
    return {
        type: 'ITEM_TEXT_UPDATED',
        value : value
    };
};

export default { addWorkItem, itemTextUpdated };