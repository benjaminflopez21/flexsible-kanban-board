import { canShow } from './filterService';
 import CardModel from '../models/card';

describe('Filter service test', () => {

    test('Can Show exact', () => {
        let card = CardModel.fromJson({
            title: 'Card 1',
            description: 'test',
            tag: 'CEO'
        });
        expect(canShow(card, 'CEO')).toEqual(true);
        expect(canShow(card, 'Card 1')).toEqual(true);
        expect(canShow(card, 'test')).toEqual(true);
    });

    test('Can Show startWith', () => {
        let card = CardModel.fromJson({
            title: 'Card 1',
            description: 'test',
            tag: 'CEO'
        });
        expect(canShow(card, 'CE')).toEqual(true);
        expect(canShow(card, 'Car')).toEqual(true);
        expect(canShow(card, 't')).toEqual(true);
    });

    test('Can Show no Case sensitive', () => {
        let card = CardModel.fromJson({
            title: 'Card 1',
            description: 'test',
            tag: 'CEO'
        });
        expect(canShow(card, 'card 1')).toEqual(true);
        expect(canShow(card, 'TEST')).toEqual(true);
        expect(canShow(card, 'ceo')).toEqual(true);
    });

    test('Can Show no show', () => {
        let card = CardModel.fromJson({
            title: 'Card 1',
            description: 'test',
            tag: 'CEO'
        });
        expect(canShow(card, 'Card 2')).toEqual(false);
        expect(canShow(card, 'text')).toEqual(false);
        expect(canShow(card, 'n')).toEqual(false);
    });

    test('Can Show empty filter', () => {
        let card = CardModel.fromJson({
            title: 'Card 1',
            description: 'test',
            tag: 'CEO'
        });
        expect(canShow(card, '')).toEqual(true);
    });
});

