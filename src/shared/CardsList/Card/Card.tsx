import React from 'react';
import stylesCard from './card.css';
import { TextContent } from './TextContent';
import { Preview } from './Preview';
import { Menu } from './Menu';
import { Controls } from './Controls';

interface ICardProps {
  cardInfo: {
    text: string;
      postUrl: string;
      name: string;
      avatarUrl: string;
      avatarAlt: string;
      userUrl: string;
      postDate: string;
      imageUrl: string;
      imageAlt: string;
      commentsNumber: number;
      karmaValue: number;
  };
}


export function Card(props: ICardProps) {
  return (
      <li className={stylesCard.card}>
        <TextContent cardInfo={props.cardInfo} />
        <Preview cardInfo={props.cardInfo} />
        <Menu />
        <Controls cardInfo={props.cardInfo} />
    </li>
  );
}
