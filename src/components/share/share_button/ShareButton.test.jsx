import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ShareButton } from './ShareButton';
import { IntlProvider } from 'react-intl';
import { ConfigProvider } from '@logora/debate.data.config_provider';

describe('ShareButton', () => {
    it('should render button with share text', () => {
        const { getByText, queryAllByRole } = render(
            <IntlProvider locale="en">
                <ConfigProvider config={{theme:{}}}>
                    <ShareButton 
                        showText
                        shareUrl="https://example.com/share-link"
                        shareTitle="Here is an interesting link"
                        shareText="Hello, I stumbled upon this interesting article about asteroids. You should check it out !"
                    />
                </ConfigProvider>
            </IntlProvider>
        );
        expect(getByText("Share")).toBeTruthy();
        expect(queryAllByRole("button")).toHaveLength(0);
    });

    it('should not show text if props false', () => {
        const { queryByText, queryAllByRole } = render(
            <IntlProvider locale="en">
                <ConfigProvider config={{theme:{}}}>
                    <ShareButton 
                        shareUrl="https://example.com/share-link"
                        shareTitle="Here is an interesting link"
                        shareText="Hello, I stumbled upon this interesting article about asteroids. You should check it out !"
                    />
                </ConfigProvider>
            </IntlProvider>
        );
        expect(queryByText("Share")).toBeNull();
        expect(queryAllByRole("button")).toHaveLength(0);
    });

    it('should show share box when clicking on button', async () => {
        const { getByText, queryAllByRole } = render(
            <IntlProvider locale="en">
                <ConfigProvider config={{theme:{}}}>
                    <ShareButton 
                        showText
                        shareUrl="https://example.com/share-link"
                        shareTitle="Here is an interesting link"
                        shareText="Hello, I stumbled upon this interesting article about asteroids. You should check it out !"
                    />
                </ConfigProvider>
            </IntlProvider>
        );
        expect(getByText("Share")).toBeTruthy();

        userEvent.click(getByText("Share"));

        await waitFor(() => {
            expect(queryAllByRole("button")).toHaveLength(4);
        });
    });

    it('should close box when click outside', async () => {
        const { getByText, queryAllByRole } = render(
            <IntlProvider locale="en">
                <ConfigProvider config={{theme:{}}}>
                    <ShareButton 
                        showText
                        shareUrl="https://example.com/share-link"
                        shareTitle="Here is an interesting link"
                        shareText="Hello, I stumbled upon this interesting article about asteroids. You should check it out !"
                    />
                </ConfigProvider>
            </IntlProvider>
        );
        expect(getByText("Share")).toBeTruthy();

        userEvent.click(getByText("Share"));

        await waitFor(() => {
            expect(queryAllByRole("button")).toHaveLength(4);
        });

        userEvent.click(document.body);

        await waitFor(() => {
            expect(queryAllByRole("button")).toHaveLength(0);
        });
    });
});