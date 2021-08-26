import React from 'react';
import styles from './menulist.css';

interface iItem {
  text: string;
  id: string;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
  icon?: any;
}

interface IGenericListProps {
  list: iItem[];
}

export function GenericList({ list }: IGenericListProps) {
  return (
      <ul>
          {list.map(({ As = 'div', text, icon, className, id, href }) => (
              <As
              className={className}
              key={id}
              href={href}
              >
              {icon}{text}
              </As>
          ))}
      </ul>
  );
}