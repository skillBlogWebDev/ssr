import React from "react";

// const withIdKey = withKey('id');

// function Feed(props: { blocks: IBlockProps[] }) {
//     return (
//         <div>
//             {props.blocks.map(withIdKey(Block))}
//         </div>
//     );
// }

// function Block(props: IBlockProps) {
//     return (
//         <div>{props.title}</div>
//     );
// }

// interface IBlockProps {
//     title: string;
//     id: string;
// }

// function withKey(key?: string) {
//     return <E, T extends React.ComponentType<E>>(component: T) => 
//         (props: E, index: number) => 
//             React.createElement(
//                 component,
//                 { ...props, key: key ? props[key as keyof E] : index }, 
//                 [],
//             );
// }

// function Input({ onChange, value }: { onChange: (value: string) => void, value: string }) {
//     return (
//         <input value={value} onChange={getValue(onChange)}  />
//     );
// }

// function Checkbox(props: { onChange: (value: boolean) => void, value: boolean }) {
//     return (
//         <input type='checkbox' checked={props.value} onChange={getChecked(props.onChange)}  />
//     );
// }

// function pickFromSyntheticEvent<T extends HTMLElement>() {
//     return <K extends keyof T>(key: K) => 
//     <E extends ((t: T[K]) => void)>(fn: E)=> 
//     (e: React.SyntheticEvent<T>) => 
//     fn(e.currentTarget[key])
// }

// export const getValue = pickFromSyntheticEvent<HTMLInputElement>()('value');
// export const getChecked = pickFromSyntheticEvent<HTMLInputElement>()('checked');
//////////////////////////////////////////////////////////////////////////////////////

// function notStandardLink(props: any) {
//     return (
//         <a onClick={preventDefault(stopPropagation(props.onClick))}>Hello!</a>
//     );
// }


// function preventDefault<T extends (e: any) => void>(fn: T) {
//     return <E extends React.SyntheticEvent<any>>(e: E) => {
//         e.preventDefault();
//         fn(e);
//     }
// }

// function stopPropagation<T extends (e: any) => void>(fn: T) {
//     return <E extends React.SyntheticEvent<any>>(e: E) => {
//         e.stopPropagation();
//         fn(e);
//     }
// }