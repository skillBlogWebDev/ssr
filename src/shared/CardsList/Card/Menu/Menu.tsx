import React from 'react';
import stylesMenu from './menu.css';

/*
 Since the menu will be a drop-down menu in the future, 
 it is worth separating it separately, 
 as it will become larger in the future. 
 It will also accept the drop-down list itself, so it will be easier 
 for it to be a separate.
 */

export function Menu() {
  return (
    <div className={stylesMenu.menu}>
      <button className={stylesMenu.menuButton}>
          <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9"/>
            <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9"/>
            <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9"/>
          </svg>
        </button>
      </div>
  );
}
