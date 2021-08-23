import React from "react";

interface iItem {
    value: string;
    id: string;
    onClick: (id: string) => void;
}

interface IMyListProps {
    list: iItem[];
}

export function MyList({ list }: IMyListProps) {
    return (
        <ul>
            {list.map(item => (
                <li onClick={() => item.onClick(item.id)} key={item.id}>{item.value}</li>
            ))}
        </ul>
    );
}