import { render, screen } from '@testing-library/react';
import PokemonName from '.';

describe('PokemonName', () => {
    it('renders the Pokemon name correctly', () => {
        const name = 'Pikachu';
        render(<PokemonName name={name} />);

        const pokemonNameElement = screen.getByText(name);
        expect(pokemonNameElement).toBeInTheDocument();
    });

});
