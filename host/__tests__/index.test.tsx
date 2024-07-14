import React from 'react';
import { render, fireEvent, act, waitFor } from '@testing-library/react';
import Host from '@/pages';

describe('Host Component', () => {
    it('handles pokemon change when button is clicked', async () => {
        const dispatchEventMock = jest.spyOn(document, 'dispatchEvent');

        await waitFor(() => {
            const { getByRole } = render(<Host />);
            act(() => {
                fireEvent.click(getByRole('button', { name: 'Cambiar pokémon' }));
            });

            expect(dispatchEventMock).toHaveBeenCalled();
            expect(dispatchEventMock.mock.calls[0][0].type).toBe('pokemonChange');

            const customEvent = dispatchEventMock.mock.calls[0][0] as CustomEvent<number>;
            expect(customEvent.detail).toBeDefined();
            expect(typeof customEvent.detail).toBe('number');
        })

    });

    it('handles pokemon change with correct detail', async () => {
        const dispatchEventMock = jest.spyOn(document, 'dispatchEvent');

        await waitFor(() => {
            const { getByRole } = render(<Host />);
            act(() => {
                fireEvent.click(getByRole('button', { name: 'Cambiar pokémon' }));
            });

            expect(dispatchEventMock).toHaveBeenCalledWith(expect.objectContaining({
                type: 'pokemonChange',
                detail: expect.any(Number),
            }));
        })
    });

    it('handles pokemon change with valid detail', async () => {
        const dispatchEventMock = jest.spyOn(document, 'dispatchEvent');

        await waitFor(() => {
            const { getByRole } = render(<Host />);

            act(() => {
                fireEvent.click(getByRole('button', { name: 'Cambiar pokémon' }));
            });

            const customEvent = dispatchEventMock.mock.calls[0][0] as CustomEvent<number>;
            expect(customEvent.detail).toBeGreaterThanOrEqual(1);
            expect(customEvent.detail).toBeLessThanOrEqual(151);
        });

    });
});
