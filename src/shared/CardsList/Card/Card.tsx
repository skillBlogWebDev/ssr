import React from 'react';
import stylesCard from './card.css';
import { TextContent } from './TextContent';
import { Preview } from './Preview';
import { Menu } from './Menu';
import { Controls } from './Controls';


export function Card() {
  return (
    <li className={stylesCard.card}>
      <TextContent />
      <Preview />
      <Menu />
      <Controls />
    </li>
  );
}
