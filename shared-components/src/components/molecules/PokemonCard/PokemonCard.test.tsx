import { render, screen } from '@testing-library/react';
import PokemonCard from '.';

describe('PokemonCard', () => {
    const mockPokemon = {
        name: 'Pikachu',
        sprites: {
            front_default: 'https://example.com/pikachu.png',
        },
    };

    it('renders PokemonSprite and PokemonName components', () => {
        render(<PokemonCard pokemon={mockPokemon} />);

        const pokemonSprite = screen.getByAltText(mockPokemon.name) as HTMLImageElement;
        expect(pokemonSprite).toBeInTheDocument();
        expect(pokemonSprite.src).toMatch(/\/_next\/image\?url=https%3A%2F%2Fexample.com%2Fpikachu.png/);

        const pokemonName = screen.getByText(mockPokemon.name);
        expect(pokemonName).toBeInTheDocument();
    });

});
