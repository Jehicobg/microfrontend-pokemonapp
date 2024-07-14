import { render, screen } from '@testing-library/react';
import ErrorPokemonCard from '.';

describe('ErrorPokemonCard', () => {
    it('renders error message correctly', () => {
        render(<ErrorPokemonCard />);

        const errorMessage = screen.getByText(/Error fetching data in remote app/i);
        expect(errorMessage).toBeInTheDocument();
    });
});
