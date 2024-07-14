import React from 'react';
import { render, act } from '@testing-library/react';
import PokemonRemoteApp from '@/pages';
import { usePokemon } from 'shared-components-challenge';

jest.mock('shared-components-challenge', () => ({
    usePokemon: jest.fn(),
    LoadingPokemonCard: () => <div data-testid="loading">Loading...</div>,
    ErrorPokemonCard: () => <div data-testid="error">Error...</div>,
    PokemonCard: ({ pokemon }: { pokemon: any }) => (
        <div data-testid="pokemon-card">{pokemon.name}</div>
    ),
}));

describe('PokemonRemoteApp', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders loading state while fetching data', () => {
        (usePokemon as jest.Mock).mockReturnValue({
            data: null,
            loading: true,
            error: null,
        });

        const { getByTestId } = render(<PokemonRemoteApp />);
        expect(getByTestId('loading')).toBeInTheDocument();
    });

    it('renders error state when there is an error', () => {
        (usePokemon as jest.Mock).mockReturnValue({
            data: null,
            loading: false,
            error: 'Error fetching Pokemon',
        });

        const { getByTestId } = render(<PokemonRemoteApp />);
        expect(getByTestId('error')).toBeInTheDocument();
    });

    it('renders PokemonCard when data is fetched', () => {
        (usePokemon as jest.Mock).mockReturnValue({
            data: { id: 1, name: 'Pikachu' },
            loading: false,
            error: null,
        });

        const { getByTestId } = render(<PokemonRemoteApp />);
        expect(getByTestId('pokemon-card')).toBeInTheDocument();
        expect(getByTestId('pokemon-card')).toHaveTextContent('Pikachu');
    });

    it('updates PokemonCard when pokemonChange event is dispatched', () => {
        const mockUsePokemon = usePokemon as jest.Mock;
        mockUsePokemon.mockReturnValue({
            data: { id: 1, name: 'Pikachu' },
            loading: false,
            error: null,
        });

        const { getByTestId } = render(<PokemonRemoteApp />);

        act(() => {
            const event = new CustomEvent<number>('pokemonChange', {
                detail: 2,
            });
            document.dispatchEvent(event);
        });

        expect(mockUsePokemon).toHaveBeenCalledWith(3);
        expect(getByTestId('pokemon-card')).toBeInTheDocument();
        expect(getByTestId('pokemon-card')).toHaveTextContent('Pikachu');
    });
});
