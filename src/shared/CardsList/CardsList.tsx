import React from 'react';
import { Card } from './Card/Card';
import styles from './cardslist.css';


export function CardsList() {
  const cardInfo = 
    {
      text: 'Следует отметить, что новая модель организационной деятельности...',
      postUrl: '#post-url',
      name: 'Дмитрий Гришин',
      avatarUrl: 'http://placeimg.com/20/20/nature',
      avatarAlt: 'avatar',
      userUrl: '#user-url',
      postDate: '2021/02/01 06:45:03',
      imageUrl: 'http://placeimg.com/640/480/nature',
      imageAlt: 'image',
      karmaValue: 234,
      commentsNumber: 14,
    };
  
  return (
    <ul className={styles.cardsList}>
      <Card cardInfo={cardInfo} />
    </ul>
  );
}
