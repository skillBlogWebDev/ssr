import React, { useState } from "react";
import { hot } from 'react-hot-loader/root';
import { Layout } from "./shared/Layout";
import './main.global.css';
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { MyList } from "./GenericList/GenericList";
import { generateId } from './utils/react/generateRandomIndex';
import { merge } from "./utils/js/merge";

const LIST = [
    { value: 'some' },
    { value: 'other some' },
    { value: 'some' }
].map(generateId);

function AppComponent() {
    const [list, setList] = useState(LIST);

    const handleItemClick = (id: string) => {
        setList(list.filter(item => item.id !== id));
    }

    return (
        <Layout>
            <Header />
            <Content>
                <CardsList />
                <MyList list={LIST.map(merge({ onClick: handleItemClick }))}/>
            </Content>
        </Layout>
    );
}

export const App = hot(() => <AppComponent />);