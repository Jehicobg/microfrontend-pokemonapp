import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '.';

describe('Button component', () => {
    it('renders the button with the correct title', () => {
        render(<Button onClick={() => { }} title="Click me" />);
        const buttonElement = screen.getByText(/click me/i);
        expect(buttonElement).toBeInTheDocument();
    });

    it('calls onClick when the button is clicked', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick} title="Click me" />);
        const buttonElement = screen.getByText(/click me/i);
        fireEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('applies the correct CSS class', () => {
        render(<Button onClick={() => { }} title="Click me" />);
        const buttonElement = screen.getByText(/click me/i);
        expect(buttonElement).toHaveClass('button');
    });

    it('displays the correct title attribute', () => {
        render(<Button onClick={() => { }} title="Click me" />);
        const buttonElement = screen.getByTitle(/click me/i);
        expect(buttonElement).toBeInTheDocument();
    });

    it('has the correct id attribute', () => {
        render(<Button onClick={() => { }} title="Click me" />);
        const buttonElement = screen.getByText(/click me/i);
        expect(buttonElement).toHaveAttribute('id', 'changePokemonButton');
    });

    it('handles multiple clicks correctly', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick} title="Click me" />);
        const buttonElement = screen.getByText(/click me/i);
        fireEvent.click(buttonElement);
        fireEvent.click(buttonElement);
        fireEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(3);
    });

    it('does not call onClick when button is disabled', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick} title="Click me" disabled />);
        const buttonElement = screen.getByText(/click me/i);
        fireEvent.click(buttonElement);
        expect(handleClick).not.toHaveBeenCalled();
    });
});
