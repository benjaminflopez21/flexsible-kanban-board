import { 
    setTest,
    setProd,
    loadCards,
    addCard,
    editCard,
    removeCard
 } from './cardService';
 import CardModel from '../models/card';

beforeAll(() => {
    setTest();
});

afterAll(() => {
    setProd()
});

describe('Cards service test', () => {
    test('Load empty Cards', () => {
        expect(loadCards().todo.length).toEqual(0);
    });

    test('Create a card', () => {
        let card = CardModel.fromJson({
            title: 'Card 1',
            description: 'test',
            tag: 'CEO'
        });
        expect(card).toEqual({
            title: 'Card 1',
            description: 'test',
            tag: 'CEO'
        });
        expect(card.dueDate).toBeFalsy();
    });
      
    test('add Car', () => {
        let card = CardModel.fromJson({
            title: 'Card 1',
            description: 'test',
            tag: 'CEO'
        });
        expect(addCard(card).todo.length).toEqual(1);
        let card2 = CardModel.fromJson({
            title: 'Card 2',
            description: 'test 2',
            tag: 'CEO'
        });
        expect(addCard(card2).todo.length).toEqual(2);
    });

    test('Edit Card', () => {
        let card = loadCards().todo[0];
        card.title = 'Card 3';
        expect(editCard(card).todo[0].title).toEqual('Card 3');
    });

    test('Delete Card', () => {
        let length = loadCards().todo.length;
        let card = loadCards().todo[0];
        expect(removeCard(card).todo.length).toEqual(length - 1);
    });
});

