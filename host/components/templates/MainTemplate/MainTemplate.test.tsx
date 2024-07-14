import React from 'react';
import { render, fireEvent, act, waitFor, getByRole } from '@testing-library/react';
import MainTemplate from '.';

describe('MainTemplate', () => {
    it('renders MainTemplate correctly', async () => {
        const handleButtonClick = jest.fn();
        const { getByText } = render(<MainTemplate handleButtonClick={handleButtonClick} />);

        await waitFor(() => {
            expect(getByText('Pokemon App Challenge')).toBeInTheDocument();
            expect(getByText('Cambiar pokémon')).toBeInTheDocument();
        })
    });

    it('executes handleButtonClick once when button is clicked', () => {
        const handleButtonClick = jest.fn();
        const { getByText } = render(<MainTemplate handleButtonClick={handleButtonClick} />);
        act(() => {
            fireEvent.click(getByText('Cambiar pokémon'));
        });

        expect(handleButtonClick).toHaveBeenCalledTimes(1);
    })
});
