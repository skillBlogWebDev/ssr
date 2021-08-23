import React from 'react';
import stylesPreview from './preview.css';

/**
 I decided to make this picture a separate component, 
 since this is the largest element in the card and it will 
 be more convenient to make it separate from everything.
 */

interface IPreviewProps {
  cardInfo: {
    imageUrl: string;
    imageAlt: string;
  };
}

export function Preview(props: IPreviewProps) {
  return (
    <div className={stylesPreview.preview}>
      <img src={props.cardInfo.imageUrl} alt={props.cardInfo.imageUrl} className={stylesPreview.previewImg} />
    </div>
  );
}
