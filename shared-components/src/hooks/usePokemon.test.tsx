import { renderHook, waitFor } from '@testing-library/react';
import axios from 'axios';
import usePokemon from './usePokemon';

jest.mock('axios');

describe('usePokemon hook', () => {
    it('should return data', async () => {
        const mockedPokemon = {
            name: 'bulbasaur',
            sprites: {
                front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
            },
        };

        (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({
            data: mockedPokemon,
        });

        const { result } = renderHook(() => usePokemon(1));

        expect(result.current).toEqual({
            data: null,
            loading: true,
            error: null,
        });

        await waitFor(() => {
            expect(result.current.data).toEqual(mockedPokemon);
            expect(result.current.loading).toBe(false);
            expect(result.current.error).toBe(null);
        });
    });

    it('handles errors correctly', async () => {
        const errorMessage = 'Error fetching Pokemon data';

        (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValue(
            new Error(errorMessage)
        );

        const { result } = renderHook(() => usePokemon(1));

        expect(result.current).toEqual({
            data: null,
            loading: true,
            error: null,
        });

        await waitFor(() => {
            expect(result.current.data).toBe(null);
            expect(result.current.loading).toBe(false);
            expect(result.current.error).toBe(errorMessage);
        });
    });

});
