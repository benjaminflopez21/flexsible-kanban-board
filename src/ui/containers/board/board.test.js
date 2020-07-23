import React from 'react';
import { render,fireEvent } from '@testing-library/react';
import Board from './board.component';

describe('Board test', () => {

    test('Has three columns', () => {
        const { getByText } = render(<Board />);
      
        const columnOneElement = getByText(/To Do/i);
        expect(columnOneElement).toBeInTheDocument();

        const columnTwoElement = getByText(/In Progress/i);
        expect(columnTwoElement).toBeInTheDocument();

        const columnThreeElement = getByText(/Done/i);
        expect(columnThreeElement).toBeInTheDocument();


    });

    test('Open/Close create card form', () => {
        const { getByText } = render(<Board />);
      
        const newCardButtonElement = getByText(/Add new Card/i);
        expect(newCardButtonElement).toBeInTheDocument();

        fireEvent.click(newCardButtonElement)
      
        const modalHeaderElement = getByText(/Create/i);
        expect(modalHeaderElement).toBeInTheDocument();
      
        const cancelButtonElement = getByText(/Cancel/i);
        expect(cancelButtonElement).toBeInTheDocument();

        fireEvent.click(cancelButtonElement);

        expect(modalHeaderElement).not.toBeInTheDocument();
      });
      

});

