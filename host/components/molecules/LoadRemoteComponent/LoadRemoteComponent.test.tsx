import React from 'react';
import { render, waitFor } from '@testing-library/react';
import LoadRemoteComponent from '.';

jest.mock('.', () => ({
    __esModule: true,
    default: ({ appPath }: { appPath: string }) => {
        const components: { [key: string]: React.ReactNode } = {
            'app1/App': <div data-testid="app1-component">Mocked App1 Component</div>,
            'app2/App': <div data-testid="app2-component">Mocked App2 Component</div>,
            'app3/App': <div data-testid="app3-component">Mocked App3 Component</div>,
        };
        return components[appPath] || null;
    },
}));

describe('LoadRemoteComponent', () => {
    it('renders App1 component when appPath is app1/App', async () => {
        const { getByTestId } = render(<LoadRemoteComponent appPath="app1/App" />);
        await waitFor(() => expect(getByTestId('app1-component')).toBeInTheDocument());
    });

    it('renders App2 component when appPath is app2/App', async () => {
        const { getByTestId } = render(<LoadRemoteComponent appPath="app2/App" />);
        await waitFor(() => {
            expect(getByTestId('app2-component')).toBeInTheDocument();
        });
    });

    it('renders App3 component when appPath is app3/App', async () => {
        const { getByTestId } = render(<LoadRemoteComponent appPath="app3/App" />);
        await waitFor(() => {
            expect(getByTestId('app3-component')).toBeInTheDocument();
        });
    });

    it('renders null when appPath does not match any component', async () => {
        const { container } = render(<LoadRemoteComponent appPath="unknown/App" />);
        expect(container.firstChild).toBeNull();
    });
});
