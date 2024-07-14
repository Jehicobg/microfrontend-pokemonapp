import React from 'react';
import { render, waitFor } from '@testing-library/react';
import RemoteComponentContainer from '.';

jest.mock('../../molecules/LoadRemoteComponent/index.tsx', () => ({ appPath }: { appPath: string }) => {
    const components: { [key: string]: React.ReactNode } = {
        'app1/App': <div data-testid="app1-component">Mocked App1 Component</div>,
        'app2/App': <div data-testid="app2-component">Mocked App2 Component</div>,
        'app3/App': <div data-testid="app3-component">Mocked App3 Component</div>,
    };
    return components[appPath] || null;
});

describe('RemoteComponentContainer', () => {
    it('renders RemoteComponentContainer correctly', async () => {
        const { getByTestId } = render(<RemoteComponentContainer />);

        // Espera a que se rendericen todos los componentes remotos
        await waitFor(() => {
            expect(getByTestId('app1-component')).toBeInTheDocument();
            expect(getByTestId('app2-component')).toBeInTheDocument();
            expect(getByTestId('app3-component')).toBeInTheDocument();
        });
    });
});
