import React from 'react';
import { render } from '@testing-library/react';
import FromModal from './formModal.component';
import CardModel from '../../../models/card';

describe('Form modal test', () => {
    test('Render creation form modal', () => {
        const { getByText, getByPlaceholderText } = render(<FromModal
          show={true} 
          onClose={()=>{}}
          onSave={()=>{}}
        />);
      
        const modalHeaderElement = getByText(/Create/i);
        expect(modalHeaderElement).toBeInTheDocument();
      
        const titleFieldElement = getByPlaceholderText(/Title/i);
        expect(titleFieldElement).toBeInTheDocument();
        expect(titleFieldElement.value).toEqual('');
      
        const saveButtonElement = getByText(/Save/i);
        expect(saveButtonElement).toBeInTheDocument();
      
        const cancelButtonElement = getByText(/Cancel/i);
        expect(cancelButtonElement).toBeInTheDocument();
      });
      
      
      test('Render edit form modal', () => {
          let card = CardModel.fromJson({
              title: 'Title 1',
              description: 'Description 1',
              tag: 'CEO'
          });
        const {  getByText, getByPlaceholderText } = render(<FromModal
          model={card}
          show={true} 
          onClose={()=>{}}
          onSave={()=>{}}
        />);
      
        const modalHeaderElement = getByText(/Edit/i);
        expect(modalHeaderElement).toBeInTheDocument();
      
        const titleFieldElement = getByPlaceholderText(/Title/i);
        expect(titleFieldElement).toBeInTheDocument();
        expect(titleFieldElement.value).toEqual('Title 1');
      });
      
});


