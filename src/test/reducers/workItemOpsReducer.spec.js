import expect from 'expect';
import reducer from '../../reducers/WorkItemOpsReducer';

describe('workItemOps reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual(
            {
                items:{},
                itemBoxValue: ""
            }
        );
    });
    it('should handle ADD_ITEM', () => {
        let item = {
            name: 'test item',
            flagged: true
        };
        expect(
            reducer({items: {}, itemBoxValue: "testvalue"}, {
                type: 'ADD_ITEM',
                item: item
            })
        ).toEqual(
            {
                items:{ [item.name] : item},
                itemBoxValue: "testvalue"
            }
        );
    });
    it('should handle REMOVE_ITEM', () => {
        let items = {
            itemone: {name: 'itemone', flagged: true},
            itemtwo: {name: 'itemtwo', flagged: false}
        };
        let finalitems = {
            itemtwo: {name: 'itemtwo', flagged: false}
        };
        expect(
            reducer({items: items, itemBoxValue: "testvalue"}, {
                type: 'REMOVE_ITEM',
                name: 'itemone'
            })
        ).toEqual(
            {
                items: finalitems,
                itemBoxValue: "testvalue"
            }
        );
    });
    it('should handle TOGGLE_FLAG', () => {
        let items = {
            itemone: {name: 'itemone', flagged: true},
            itemtwo: {name: 'itemtwo', flagged: false}
        };
        let finalitems = {
            itemone: {name: 'itemone', flagged: false},
            itemtwo: {name: 'itemtwo', flagged: false}
        };
        expect(
            reducer({items: items, itemBoxValue: "testvalue"}, {
                type: 'TOGGLE_FLAG',
                name: 'itemone'
            })
        ).toEqual(
            {
                items: finalitems,
                itemBoxValue: "testvalue"
            }
        );
    });
    it('should handle ITEM_TEXT_UPDATED', () => {
        let items = {
            itemone: {name: 'itemone', flagged: true},
            itemtwo: {name: 'itemtwo', flagged: false}
        };
        expect(
            reducer({items: items, itemBoxValue: "testvalue"}, {
                type: 'ITEM_TEXT_UPDATED',
                value: 'test text'
            })
        ).toEqual(
            {
                items: items,
                itemBoxValue: "test text"
            }
        );
    });
});