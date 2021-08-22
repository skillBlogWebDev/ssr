import React from 'react';
import { SearchBlock } from './SearchBlock';
import { ThreadTitle } from './ThreadTitle';
import styles from './header.css';
import { SortBlock } from './SortBlock';

export function Header() {
  return (
    <header className={styles.header}>
      <SearchBlock/>
      <ThreadTitle/>
      <SortBlock/>
    </header>
  );
}
