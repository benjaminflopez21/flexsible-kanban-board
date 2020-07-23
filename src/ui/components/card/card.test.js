import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Card from './card.component';
import CardModel from '../../../models/card';

describe('Card test', () => {

    test('Render card', () => {
        let card = CardModel.fromJson({
            title: 'Card 1',
            description: 'test',
            tag: 'CEO',
            assignee: 'Benjamin Lopez'
        });

        const { getByText } = render(<Card
            model={card}
            onEdit={()=>{}}
            onDelete={()=>{}}
        />);

        expect(getByText(/Card 1/i)).toBeInTheDocument();
        expect(getByText(/test/i)).toBeInTheDocument();
        expect(getByText(/CEO/i)).toBeInTheDocument();
        expect(getByText(/Benjamin Lopez/i)).toBeInTheDocument();
    });

    test('DropDown menu', () => {
        let card = CardModel.fromJson({
            title: 'Card 1',
            description: 'test',
            tag: 'CEO'
        });

        const { getByText, getByTestId } = render(<Card
            model={card}
            onEdit={()=>{}}
            onDelete={()=>{}}
        />);

        const menuButton = getByTestId('open-menu-button');
        fireEvent.click(menuButton);

        expect(getByText(/Edit/i)).toBeInTheDocument();
        expect(getByText(/Delete/i)).toBeInTheDocument();

    });
      

});

