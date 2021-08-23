import React from 'react';
import stylesTextContent from './textContent.css';
import stylesUserLink from './userLink.css';
import stylesTitle from './title.css';
import stylesUserBlock from './userBlock.css';

/**
 I am creating this component separately for user information. To make it clearer that it should have a separate manipulation.
 This will give me a better understanding of his data.
*/

interface ITextContentProps {
  cardInfo: {
    text: string;
    postUrl: string;
    name: string;
    avatarUrl: string;
    avatarAlt: string;
    userUrl: string;
    postDate: string;
  };
}

export function TextContent(props: ITextContentProps) {
  return (
    <div className={stylesTextContent.textContent}>
      <div className="metaData">
          <div className={stylesUserLink.userLink}>
            <img
              className={stylesUserBlock.avatarImage}
              src={props.cardInfo.avatarUrl}
              alt={props.cardInfo.avatarAlt}
              />
              <a href={props.cardInfo.userUrl} className={stylesUserLink.username}>{props.cardInfo.name}</a>
              <span className={stylesUserBlock.createdAt}>
                <span className={stylesTextContent.publishedLabel}>Опубликовано</span>
                {props.cardInfo.postDate}
              </span>
          </div>
        </div>
        <h2 className={stylesTitle.title}>
          <a href={props.cardInfo.postUrl} className="post-link">
          {props.cardInfo.text}
          </a>
        </h2>
      </div>
  );
}
