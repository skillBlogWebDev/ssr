import React from 'react';
import stylesTextContent from './textContent.css';
import stylesUserLink from './userLink.css';
import stylesTitle from './title.css';
import stylesUserBlock from './userBlock.css';

/**
 I am creating this component separately for user information. To make it clearer that it should have a separate manipulation.
 This will give me a better understanding of his data.
*/

export function TextContent() {
  return (
    <div className={stylesTextContent.textContent}>
      <div className="metaData">
          <div className={stylesUserLink.userLink}>
            <img
              className={stylesUserBlock.avatarImage}
              src="http://placeimg.com/20/20/nature"
              alt="avatar"
              />
              <a href="#user-url" className={stylesUserLink.username}>Дмитрий Гришин</a>
              <span className={stylesUserBlock.createdAt}>
                <span className={stylesTextContent.publishedLabel}>Опубликовано</span>
                4 часа назад
              </span>
          </div>
        </div>
        <h2 className={stylesTitle.title}>
          <a href="#post-url" className="post-link">
          Следует отметить, что новая модель организационной деятельности...
          </a>
        </h2>
      </div>
  );
}
