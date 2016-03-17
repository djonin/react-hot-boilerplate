import expect from 'expect';
import Actions from '../../actions/NewItemBoxActions';

describe('addWorkItemActionTest', () => {
    it('should create an action to add a new item to the list', () => {
        const name = 'test name';
        const expectedAction = {
            type:'ADD_ITEM',
            item: {name: name, flagged: false}
        };
        expect(Actions.addWorkItem(name)).toEqual(expectedAction);
    });
});

describe('itemTextUpdatedActionTest', () => {
    it('should create an action to update the input text', () => {
        const value = 'test input';
        const expectedAction = {
            type:'ITEM_TEXT_UPDATED',
            value
        };
        expect(Actions.itemTextUpdated(value)).toEqual(expectedAction);
    });
});