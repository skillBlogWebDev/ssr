import React, { useState } from "react";
import { hot } from 'react-hot-loader/root';
import { setConfig } from 'react-hot-loader';
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import './main.global.css';

setConfig({
    showReactDomPatchNotification: false
});

function AppComponent() {
    return (
        <Layout>
            <Header />
            <Content>
                <CardsList />
            </Content>
        </Layout>
    );
}

export const App = hot(() => <AppComponent />);