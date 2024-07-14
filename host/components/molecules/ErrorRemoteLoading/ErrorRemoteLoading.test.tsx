import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorRemoteLoading from '.';

describe('ErrorRemoteLoading component', () => {
    it('renders the error message and application number correctly', () => {
        const errorMessage = 'Error in poke api';
        const applicationNumber = 1;

        render(<ErrorRemoteLoading message={errorMessage} numberApp={applicationNumber} />);

        const errorMessageElement = screen.getByText(`${errorMessage} ${applicationNumber}`);
        expect(errorMessageElement).toBeInTheDocument();
    });
});
