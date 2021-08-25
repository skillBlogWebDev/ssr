import React, { useState } from "react";
import { hot } from 'react-hot-loader/root';
import { Layout } from "./shared/Layout";
import './main.global.css';
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { GenericList } from "./GenericList/GenericList";
import { generateId, generateRandomString } from './utils/react/generateRandomIndex';
import { merge } from "./utils/js/merge";

const LIST = [
    { As: 'li' as const, text: 'some',},
    { As: 'li' as const, text: 'other some',},
    { As: 'li' as const, text: 'some',}
].map(generateId);

function AppComponent() {
    const [list, setList] = useState(LIST);

    const handleItemClick = (id: string) => {
        setList(list.filter(item => item.id !== id));
    }

    const handleAdd = () => {
      setList(list.concat(generateId({ text: generateRandomString(), As: 'li' as const })));
    }

    return (
        <Layout>
            <Header />
            <Content>
                <CardsList />
                <button onClick={handleAdd}>Add Element</button>
                <GenericList list={list.map(merge({ onClick: handleItemClick }))}/>
            </Content>
        </Layout>
    );
}

export const App = hot(() => <AppComponent />);