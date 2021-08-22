import React from 'react';
import stylesPreview from './preview.css';

/**
 I decided to make this picture a separate component, 
 since this is the largest element in the card and it will 
 be more convenient to make it separate from everything.
 */

export function Preview() {
  return (
    <div className={stylesPreview.preview}>
      <img src="http://placeimg.com/640/480/nature" alt="" className={stylesPreview.previewImg} />
    </div>
  );
}
