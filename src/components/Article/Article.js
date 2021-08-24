import React from 'react';
import './Article.css';

function Article({ title, paragraph }) {
  return (
    <article className="article">
      <h3 className="article__title">{ title }</h3>
      <p className="article__paragraph">{ paragraph }</p>
    </article>
  );
}

export default Article;
