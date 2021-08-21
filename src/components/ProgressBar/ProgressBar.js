import React from 'react';
import './ProgressBar.css';

function ProgressBar({ title, caption, isSmall }) {
  return (
    <figure className={`progress-bar ${isSmall ? 'progress-bar_small' : 'progress-bar_big'}`}>
      <div className={`progress-bar__title ${isSmall ? 'progress-bar__title_small' : 'progress-bar__title_big'}`}>{title}</div>
      <figcaption className="progress-bar__caption">{caption}</figcaption>
    </figure>
  );
}

export default ProgressBar;
