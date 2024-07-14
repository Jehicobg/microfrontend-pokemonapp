import { render, screen } from '@testing-library/react';
import LoadingPokemonCard from '.';

describe('LoadingPokemonCard', () => {
    it('renders the loading spinner', () => {
        render(<LoadingPokemonCard />);

        const loadingCard = screen.getByTestId('loader');
        expect(loadingCard).toBeInTheDocument();

        const loader = screen.getByTestId('loader');
        expect(loader).toBeInTheDocument();
        expect(loader).toHaveClass('loader');
    });

});
