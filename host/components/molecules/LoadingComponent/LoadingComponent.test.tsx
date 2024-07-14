import React from 'react';
import { render, screen } from '@testing-library/react';
import LoadingComponent from '.';

describe('LoadingComponent', () => {
    it('renders the loading message and application number correctly', () => {
        const applicationNumber = 1;

        render(<LoadingComponent numberApp={applicationNumber} />);

        const loadingMessageElement = screen.getByText(`Cargando aplicación ${applicationNumber}`);
        expect(loadingMessageElement).toBeInTheDocument();
    });
});
