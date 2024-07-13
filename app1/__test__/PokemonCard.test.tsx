import React from 'react';
import { render, screen } from '@testing-library/react';
import PokemonRemoteApp from '@/pages';
import { usePokemon } from 'shared-components-challenge';

interface pokemon {
    name: string;
}

const MockLoadingPokemonCard = () => (
    <div data-testid="mock-loading-pokemon-card">Mock Loading...</div>
);
MockLoadingPokemonCard.displayName = 'MockLoadingPokemonCard';

jest.mock('../node_modules/shared-components-challenge/dist/components/molecules/LoadingPokemonCard', () => MockLoadingPokemonCard);

jest.mock('../node_modules/shared-components-challenge/dist/hooks/usePokemon.js', () => ({
    usePokemon: jest.fn(),
}));

const MockErrorPokemonCard = () => (
    <div data-testid="mock-error-pokemon-card">Mock Error...</div>
);
MockErrorPokemonCard.displayName = 'MockErrorPokemonCard';

jest.mock('../node_modules/shared-components-challenge/dist/components/molecules/ErrorPokemonCard', () => MockErrorPokemonCard);

const MockPokemonCard = ({ pokemon }: { pokemon: pokemon }) => (
    <div data-testid="mock-pokemon-card">{pokemon.name}</div>
);
MockPokemonCard.displayName = 'MockPokemonCard';

jest.mock('../node_modules/shared-components-challenge/dist/components/molecules/PokemonCard', () => MockPokemonCard);

describe('PokemonRemoteApp', () => {
    it('renders loading state initially', () => {
        (usePokemon as jest.Mock).mockReturnValue({ data: null, loading: true, error: null });
        render(<PokemonRemoteApp />);
        expect(screen.getByTestId('mock-loading-pokemon-card')).toBeInTheDocument();
    });

    it('renders error state', () => {
        (usePokemon as jest.Mock).mockReturnValue({ data: null, loading: false, error: true });
        render(<PokemonRemoteApp />);
        expect(screen.getByTestId('mock-error-pokemon-card')).toBeInTheDocument();
    });

    it('renders pokemon card on success', () => {
        const mockPokemonData = { name: 'Pikachu' };
        (usePokemon as jest.Mock).mockReturnValue({ data: mockPokemonData, loading: false, error: null });
        render(<PokemonRemoteApp />);
        expect(screen.getByTestId('mock-pokemon-card')).toHaveTextContent('Pikachu');
    });
});
