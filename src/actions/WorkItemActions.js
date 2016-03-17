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

export default { removeWorkItem, toggleFlagOnItem };