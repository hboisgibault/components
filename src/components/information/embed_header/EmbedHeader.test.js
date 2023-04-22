import React from 'react';
import { render, screen } from '@testing-library/react';
import { EmbedHeader } from './EmbedHeader';
import { IntlProvider } from 'react-intl';

describe('EmbedHeader', () => {
    it('renders header label, title and link with correct href value', () => {
        const title = 'Test Title';
        const titleRedirectUrl = '/test-url';
        const headerLabel = 'Test Label';
        const { getByText } = render(
            <IntlProvider locale="en">
                <EmbedHeader title={title} titleRedirectUrl={titleRedirectUrl} headerLabel={headerLabel} />
            </IntlProvider>
        );
        expect(getByText(headerLabel)).toBeInTheDocument();
        expect(getByText(title)).toBeInTheDocument();
        expect(screen.getByText(/Test Title/i).closest('a')).toHaveAttribute('href', '/test-url');
    });

    it('renders online users count if provided', () => {
        const onlineUsersCount = 5;
        const { getByTestId } = render(
            <IntlProvider locale="en">
                <EmbedHeader onlineUsersCount={onlineUsersCount} />
            </IntlProvider>
        );
        expect(getByTestId('online-users-count')).toHaveTextContent(`${onlineUsersCount} utilisateurs en ligne`);
        expect(getByTestId('online-users-count-mobile')).toHaveTextContent(`${onlineUsersCount} utilisateurs en ligne`);
    });

    it('applies textLeft and isSmallPadding classNames when props are provided', () => {
        const textLeft = true;
        const isSmallPadding = true;
        const { getByTestId } = render(
            <IntlProvider locale="en">
                <EmbedHeader textLeft={textLeft} isSmallPadding={isSmallPadding} />
            </IntlProvider>
        );
        expect(getByTestId('debate-name')).toHaveClass('smallPadding');
        expect(getByTestId('debate-name')).toHaveClass('left');
    });
});