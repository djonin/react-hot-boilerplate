export default (state = {items:{}, itemBoxValue: ""}, action) => {
    var newItems= {};
    switch (action.type) {
        case 'ADD_ITEM':
            newItems = Object.assign({}, state.items);
            newItems[action.item.name] = action.item;
            return Object.assign({}, state, {['items'] : newItems });
        case 'REMOVE_ITEM':
            newItems = Object.assign({}, state.items);
            delete newItems[action.name];
            return Object.assign({}, state, {['items'] : newItems });
        case 'TOGGLE_FLAG':
            newItems = Object.assign({}, state.items);
            newItems[action.name].flagged = !newItems[action.name].flagged;
            return Object.assign({}, state, {['items'] : newItems });
        case 'ITEM_TEXT_UPDATED':
            return Object.assign({}, state, { itemBoxValue: action.value } );
        default:
            return state;
    }
};