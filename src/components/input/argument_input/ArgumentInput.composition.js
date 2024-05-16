import React from "react";
import { ArgumentInput } from "./ArgumentInput";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "@logora/debate.data.config_provider";
import { IconProvider } from '@logora/debate.icons.icon_provider';
import * as regularIcons from '@logora/debate.icons.regular_icons';
import { IntlProvider } from "react-intl";
import { faker } from '@faker-js/faker';
import { ToastProvider } from '@logora/debate.dialog.toast_provider';
import { ModalProvider } from '@logora/debate.dialog.modal';
import { dataProvider, DataProviderContext } from '@logora/debate.data.data_provider';
import { AuthContext } from '@logora/debate.auth.use_auth';
import { ListProvider } from '@logora/debate.list.list_provider';
import { InputProvider } from '@logora/debate.input.input_provider';
import { IdProvider } from "react-use-id-hook";

const httpClient = {
    get: () => null,
    post: (url, data, config) => {
        return new Promise(function(resolve, reject) {
            resolve({ data: { success: true, data: { resource: vote } }});
        });
    },
    patch: () => null,
    delete: (url, data, config) => {
        return new Promise(function(resolve, reject) {
            resolve({ data: { success: true, data: {} }});
        });
    }
};

const data = dataProvider(httpClient, "https://mock.example.api");

const debate = {
    id: faker.datatype.number(),
    name: faker.lorem.word(),
    positions: [
        {
            id: faker.datatype.number(),
            name: faker.lorem.word(),
        },
        {
            id: faker.datatype.number(),
            name: faker.lorem.word(),
        }
    ],

}

const currentUser = {
    id: faker.datatype.number(),
    full_name: faker.name.fullName(),
    image_url: faker.image.avatar(),
    points: faker.datatype.number()
}

export const DefaultArgumentInput = () => {
    return (
        <BrowserRouter>
            <ConfigProvider>
                <IconProvider library={regularIcons}>
                    <IntlProvider locale="en">
                        <DataProviderContext.Provider value={{ dataProvider: data }}>
                            <AuthContext.Provider value={{ currentUser: currentUser, isLoggedIn: true }}>
                                <ToastProvider>
                                    <ModalProvider>
                                        <ListProvider>
                                            <IdProvider>
                                                <InputProvider>
                                                    <ArgumentInput
                                                        onSubmit={() => {}}
                                                        groupId={debate.id}
                                                        groupName={debate.name}
                                                        positions={debate.positions}
                                                        disabledPositions={[]}
                                                        listId={"argumentList"}
                                                        positionId={debate.positions[0].id}
                                                        hideSourceAction={false}
                                                        avatarSize={48}
                                                        placeholder={"Add an argument..."}
                                                    />
                                                </InputProvider>
                                            </IdProvider>
                                        </ListProvider>
                                    </ModalProvider>
                                </ToastProvider>
                            </AuthContext.Provider>
                        </DataProviderContext.Provider>
                    </IntlProvider>
                </IconProvider>
            </ConfigProvider>
        </BrowserRouter>
    );
};

export const ReplyArgumentInput = () => {
    return (
        <BrowserRouter>
            <ConfigProvider>
                <IconProvider library={regularIcons}>
                    <IntlProvider locale="en">
                        <DataProviderContext.Provider value={{ dataProvider: data }}>
                            <AuthContext.Provider value={{ currentUser: currentUser, isLoggedIn: true }}>
                                <ToastProvider>
                                    <ModalProvider>
                                        <ListProvider>
                                            <IdProvider>
                                                <InputProvider>
                                                    <ArgumentInput
                                                        onSubmit={() => {}}
                                                        groupId={debate.id}
                                                        groupName={debate.name}
                                                        positions={debate.positions}
                                                        disabledPositions={[]}
                                                        listId={"argumentList"}
                                                        positionId={debate.positions[0].id}
                                                        hideSourceAction={false}
                                                        avatarSize={40}
                                                        isReply
                                                        placeholder={"Your reply..."}
                                                    />
                                                </InputProvider>
                                            </IdProvider>
                                        </ListProvider>
                                    </ModalProvider>
                                </ToastProvider>
                            </AuthContext.Provider>
                        </DataProviderContext.Provider>
                    </IntlProvider>
                </IconProvider>
            </ConfigProvider>
        </BrowserRouter>
    );
};

export const ArgumentInputWithoutSourceAction = () => {
    return (
        <BrowserRouter>
            <ConfigProvider>
                <IconProvider library={regularIcons}>
                    <IntlProvider locale="en">
                        <DataProviderContext.Provider value={{ dataProvider: data }}>
                            <AuthContext.Provider value={{ currentUser: currentUser, isLoggedIn: true }}>
                                <ToastProvider>
                                    <ModalProvider>
                                        <ListProvider>
                                            <IdProvider>
                                                <InputProvider>
                                                    <ArgumentInput
                                                        onSubmit={() => {}}
                                                        groupId={debate.id}
                                                        groupName={debate.name}
                                                        positions={debate.positions}
                                                        disabledPositions={[]}
                                                        listId={"argumentList"}
                                                        positionId={debate.positions[0].id}
                                                        hideSourceAction
                                                        avatarSize={48}
                                                        placeholder={"Add an argument..."}
                                                    />
                                                </InputProvider>
                                            </IdProvider>
                                        </ListProvider>
                                    </ModalProvider>
                                </ToastProvider>
                            </AuthContext.Provider>
                        </DataProviderContext.Provider>
                    </IntlProvider>
                </IconProvider>
            </ConfigProvider>
        </BrowserRouter>
    );
};

export const ArgumentInputDisabled = () => {
    return (
        <BrowserRouter>
            <ConfigProvider>
                <IconProvider library={regularIcons}>
                    <IntlProvider locale="en">
                        <DataProviderContext.Provider value={{ dataProvider: data }}>
                            <AuthContext.Provider value={{ currentUser: currentUser, isLoggedIn: true }}>
                                <ToastProvider>
                                    <ModalProvider>
                                        <ListProvider>
                                            <IdProvider>
                                                <InputProvider>
                                                    <ArgumentInput
                                                        onSubmit={() => {}}
                                                        groupId={debate.id}
                                                        groupName={debate.name}
                                                        positions={debate.positions}
                                                        disabledPositions={[]}
                                                        disabled
                                                        listId={"argumentList"}
                                                        positionId={debate.positions[0].id}
                                                        hideSourceAction
                                                        avatarSize={48}
                                                        placeholder={"Add an argument..."}
                                                    />
                                                </InputProvider>
                                            </IdProvider>
                                        </ListProvider>
                                    </ModalProvider>
                                </ToastProvider>
                            </AuthContext.Provider>
                        </DataProviderContext.Provider>
                    </IntlProvider>
                </IconProvider>
            </ConfigProvider>
        </BrowserRouter>
    );
};

export const ArgumentPositionDisabled = () => {
    return (
        <BrowserRouter>
            <ConfigProvider>
                <IconProvider library={regularIcons}>
                    <IntlProvider locale="en">
                        <DataProviderContext.Provider value={{ dataProvider: data }}>
                            <AuthContext.Provider value={{ currentUser: currentUser, isLoggedIn: true }}>
                                <ToastProvider>
                                    <ModalProvider>
                                        <ListProvider>
                                            <IdProvider>
                                                <InputProvider>
                                                    <ArgumentInput
                                                        onSubmit={() => {}}
                                                        groupId={debate.id}
                                                        groupName={debate.name}
                                                        positions={debate.positions}
                                                        disabledPositions={[{id: debate.positions[0].id, name: debate.positions[0].name}]}
                                                        listId={"argumentList"}
                                                        positionId={debate.positions[0].id}
                                                        hideSourceAction
                                                        avatarSize={48}
                                                        placeholder={"Add an argument..."}
                                                    />
                                                </InputProvider>
                                            </IdProvider>
                                        </ListProvider>
                                    </ModalProvider>
                                </ToastProvider>
                            </AuthContext.Provider>
                        </DataProviderContext.Provider>
                    </IntlProvider>
                </IconProvider>
            </ConfigProvider>
        </BrowserRouter>
    );
};

export const DisabledArgumentInputForVisitors = () => {
    return (
        <BrowserRouter>
            <ConfigProvider config={{ actions: { disableInputForVisitor: true }, auth: { type: "social" } }}>
                <IconProvider library={regularIcons}>
                    <IntlProvider locale="en">
                        <DataProviderContext.Provider value={{ dataProvider: data }}>
                            <AuthContext.Provider value={{ currentUser: currentUser, isLoggedIn: false }}>
                                <ToastProvider>
                                    <ModalProvider>
                                        <ListProvider>
                                            <IdProvider>
                                                <InputProvider>
                                                    <ArgumentInput
                                                        onSubmit={() => {}}
                                                        groupId={debate.id}
                                                        groupName={debate.name}
                                                        positions={debate.positions}
                                                        disabledPositions={[]}
                                                        listId={"argumentList"}
                                                        positionId={debate.positions[0].id}
                                                        hideSourceAction={false}
                                                        avatarSize={48}
                                                        placeholder={"Add an argument..."}
                                                    />
                                                </InputProvider>
                                            </IdProvider>
                                        </ListProvider>
                                    </ModalProvider>
                                </ToastProvider>
                            </AuthContext.Provider>
                        </DataProviderContext.Provider>
                    </IntlProvider>
                </IconProvider>
            </ConfigProvider>
        </BrowserRouter>
    );
};

export const FocusOnInitArgumentInput = () => {
    return (
        <BrowserRouter>
            <ConfigProvider>
                <IconProvider library={regularIcons}>
                    <IntlProvider locale="en">
                        <DataProviderContext.Provider value={{ dataProvider: data }}>
                            <AuthContext.Provider value={{ currentUser: currentUser, isLoggedIn: true }}>
                                <ToastProvider>
                                    <ModalProvider>
                                        <ListProvider>
                                            <IdProvider>
                                                <InputProvider>
                                                    <ArgumentInput
                                                        onSubmit={() => {}}
                                                        groupId={debate.id}
                                                        groupName={debate.name}
                                                        positions={debate.positions}
                                                        disabledPositions={[{id: debate.positions[0].id, name: debate.positions[0].name}]}
                                                        listId={"argumentList"}
                                                        positionId={debate.positions[0].id}
                                                        hideSourceAction
                                                        avatarSize={48}
                                                        placeholder={"Add an argument..."}
                                                        focusOnInit={true}
                                                    />
                                                </InputProvider>
                                            </IdProvider>
                                        </ListProvider>
                                    </ModalProvider>
                                </ToastProvider>
                            </AuthContext.Provider>
                        </DataProviderContext.Provider>
                    </IntlProvider>
                </IconProvider>
            </ConfigProvider>
        </BrowserRouter>
    );
};