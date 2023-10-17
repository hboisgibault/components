import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from '@logora/debate.data.config_provider';
import { IntlProvider } from 'react-intl';
import { AuthorBox } from './AuthorBox';
import { Location } from '@logora/debate.util.location';
import { faker } from '@faker-js/faker';

const author = {
    image_url: faker.image.avatar(),
    full_name: faker.name.fullName(),
    hash_id: faker.lorem.slug(),
    slug: faker.lorem.slug(),
    points: 52,
    last_activity: faker.date.recent(),
    description: faker.name.jobTitle(),
    is_expert: false
  };
  

let UserShowLocation = new Location('espace-debat/user/:userSlug', { userSlug: "" })

const routes = {
    userShowLocation: UserShowLocation,
}

describe('AuthorBox component', () => {
    it('should render with author data', () => {
        const { getByText, getByAltText, getAllByRole } = render(
            <BrowserRouter>
                <ConfigProvider routes={{ ...routes }}>
                    <IntlProvider locale="en">
                        <AuthorBox
                            avatarUrl={author.image_url}
                            hashId={author.hash_id}
                            points={author.points}
                            fullName={author.full_name}
                            isExpert={author.is_expert}
                        />
                    </IntlProvider>
                </ConfigProvider>
            </BrowserRouter>
        );

        const avatarImg = getByAltText("John Doe's profile picture");
        expect(avatarImg).toBeInTheDocument();
        expect(avatarImg).toHaveAttribute('src', author.image_url);
        expect(getByText('John Doe')).toBeInTheDocument();
        expect(getByText('1.2K')).toBeInTheDocument();
        expect(getByText('Eloquence title')).toBeInTheDocument();
        expect(getByText('Developer')).toBeInTheDocument();

        const authorLinkElements = getAllByRole('link');
        expect(authorLinkElements.length).toBe(2);
        expect(authorLinkElements[0]).toHaveAttribute(
            'href',
            `/espace-debat/user/${author.hash_id}`
        );
    });

    // it('should render without links', () => {
    //     const { getByText, queryByRole } = render(
    //         <BrowserRouter>
    //             <ConfigProvider routes={{ ...routes }}>
    //                 <IntlProvider locale="en">
    //                     <AuthorBox author={{ ...author, slug: '' }} disableLinks={true} />
    //                 </IntlProvider>
    //             </ConfigProvider>
    //         </BrowserRouter>
    //     );

    //     expect(getByText('John Doe')).toBeInTheDocument();
    //     expect(queryByRole('link')).not.toBeInTheDocument();
    //     expect(getByText('1.2K')).toBeInTheDocument();
    //     expect(getByText('Eloquence title')).toBeInTheDocument();
    //     expect(getByText('Developer')).toBeInTheDocument();
    // });

    // it('should render occupation if author has one', () => {
    //     const { getByText } = render(
    //         <BrowserRouter>
    //             <ConfigProvider routes={{...routes}}>
    //                 <IntlProvider locale="en">
    //                     <AuthorBox author={author} />
    //                 </IntlProvider>
    //             </ConfigProvider>
    //         </BrowserRouter>
    //     );
    //     expect(getByText(author.occupation)).toBeInTheDocument();
    // });

    // it('should render eloquence title if author has one', () => {
    //     const { getByText } = render(
    //         <BrowserRouter>
    //             <ConfigProvider routes={{...routes}}>
    //                 <IntlProvider locale="en">
    //                     <AuthorBox author={author} />
    //                 </IntlProvider>
    //             </ConfigProvider>
    //         </BrowserRouter>
    //     );
    //     expect(getByText("Eloquence title")).toBeInTheDocument();
    // });

    // it('should hide user info', () => {
    //     const { queryByText, getByAltText } = render(
    //         <BrowserRouter>
    //             <ConfigProvider routes={{ ...routes }}>
    //                 <IntlProvider locale="en">
    //                     <AuthorBox author={author} hideUserInfo={true} />
    //                 </IntlProvider>
    //             </ConfigProvider>
    //         </BrowserRouter>
    //     );

    //     const avatarImg = getByAltText("John Doe's profile picture");
    //     expect(avatarImg).toBeInTheDocument();
    //     expect(avatarImg).toHaveAttribute('src', author.image_url);
    //     expect(queryByText('John Doe')).not.toBeInTheDocument();
    //     expect(queryByText('1.2K')).not.toBeInTheDocument();
    //     expect(queryByText('Eloquence title')).not.toBeInTheDocument();
    //     expect(queryByText('Developer')).not.toBeInTheDocument();
    // });

    // it('should show author description', () => {
    //     const { getByText } = render(
    //         <BrowserRouter>
    //             <ConfigProvider routes={{ ...routes }}>
    //                 <IntlProvider locale="en">
    //                     <AuthorBox author={{ ...author, description: 'Lorem ipsum dolor sit amet' }} showDescription={true} />
    //                 </IntlProvider>
    //             </ConfigProvider>
    //         </BrowserRouter>
    //     );

    //     expect(getByText('Lorem ipsum dolor sit amet')).toBeInTheDocument();
    // });

    // it('should show is expert', () => {
    //     const { getByText } = render(
    //         <BrowserRouter>
    //             <ConfigProvider routes={{ ...routes }}>
    //                 <IntlProvider locale="en">
    //                     <AuthorBox author={{ ...author, is_expert: true }} />
    //                 </IntlProvider>
    //             </ConfigProvider>
    //         </BrowserRouter>
    //     );

    //     expect(getByText('Journalist')).toBeInTheDocument();
    // });
});