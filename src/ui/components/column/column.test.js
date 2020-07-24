import React from 'react';
import { render } from '@testing-library/react';
import Column from './column.component';

describe('Column test', () => {

    test('Render empty Column', () => {
        const { getByText } = render(<Column 
            title="Column 1"
            loading={false}
            placeHolderCount={1}
        />);
      
        const columnElement = getByText(/Column 1/i);
        expect(columnElement).toBeInTheDocument();

        const labelElement = getByText(/No cards here/i);
        expect(labelElement).toBeInTheDocument();

    });

    test('Loading Column', () => {
        const {getByTestId } = render(<Column 
            title="Column 1"
            loading={true}
            placeHolderCount={1}
        />);
      
        const skeletonElement = getByTestId('card-skeleton');
        expect(skeletonElement).toBeInTheDocument();
    });

});


