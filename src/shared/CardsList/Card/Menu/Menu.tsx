import React, { createRef } from 'react';
import { generateId } from '../../../../utils/react/generateRandomIndex';
import { Dropdown } from "../Dropdown/Dropdown";
import stylesMenu from './menu.css';
import { MenuButton } from './MenuButton';
import { GenericList } from './MenuList';
import { commentsIcon, complainIcon, hideIcon, saveButton, shareIcon } from './svg';

/*
 Since the menu will be a drop-down menu in the future, 
 it is worth separating it separately, 
 as it will become larger in the future. 
 It will also accept the drop-down list itself, so it will be easier 
 for it to be a separate.
 */

 const LIST = [
  { As: 'a' as const,
   icon: commentsIcon, 
  text: 'Комментарии',
href: '#'},
  { As: 'a' as const, 
  icon: shareIcon, 
  text: 'Поделиться',
href: '#'},
  { As: 'a' as const, 
  icon: hideIcon, 
  text: 'Скрыть',
href: '#'},
  { As: 'a' as const, 
  icon: saveButton, 
  text: 'Сохранить',
href: '#'},
  { As: 'a' as const, 
  icon: complainIcon, 
  text: 'Пожаловаться',
href: '#'},
].map(generateId);

export function Menu() {

  return (
    <div className={stylesMenu.menu}>
        <div style={{ padding: '20px' }}>
                <br />
            <Dropdown 
                isOpen={false}
                button={<MenuButton />}
            >
              <GenericList list={LIST}/>
            </Dropdown>
        </div>
      </div>
  );
}
