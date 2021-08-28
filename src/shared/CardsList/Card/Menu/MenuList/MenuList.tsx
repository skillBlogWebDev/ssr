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
      <ul className={styles.menuList}>
          {list.map(({ As = 'a', text, icon, id, href }) => (
              <li className={styles.menuListItem}>
                <As
              className={styles.menuListLink}
              key={id}
              href={href}
              >
              {icon}{text}
              </As>
              </li>
          ))}
      </ul>
  );
}