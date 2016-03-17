import expect from 'expect';
import Actions from '../../actions/WorkItemActions';

describe('removeWorkItemTest', () => {
   it('should create an action to remove an item', () => {
       const name = 'test name';
       const expectedAction = {
           type:'REMOVE_ITEM',
           name
       };
       expect(Actions.removeWorkItem(name)).toEqual(expectedAction);
   });
});

describe('toggleFlagOnItemTest', () => {
    it('should create an action to toggle flag on an item', () => {
        const name = 'test name';
        const expectedAction = {
            type:'TOGGLE_FLAG',
            name
        };
        expect(Actions.toggleFlagOnItem(name)).toEqual(expectedAction);
    });
});