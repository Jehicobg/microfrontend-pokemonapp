import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from '.';

describe('Title component', () => {
    it('renders the title text correctly', () => {
        const titleText = 'Pokemon APP';
        render(<Title text={titleText} />);
        const titleElement = screen.getByText(titleText);
        expect(titleElement).toBeInTheDocument();
    });
});
