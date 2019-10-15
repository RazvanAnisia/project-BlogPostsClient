import React from 'react';

import { formatDate } from '../../utils/index';
export default function BlogList({
  data,
  handleDeleteClick,
  handlePostSelect
}) {
  return (
    <div className="posts-container">
      {data.map(el => (
        <div className="post-card" key={el['_id']}>
          <h3>{el.title}</h3>
          <p>{el.description}</p>
          <p className="date-details">
            Originally posted on: {formatDate(el.date)}
          </p>
          <span
            className="delete-btn"
            onClick={() => handleDeleteClick(el['_id'])}>
            x
          </span>
          <a className="read-more-btn" href={'#'}>
            Read More
          </a>
          <button className="btn" onClick={() => handlePostSelect(el['_id'])}>
            Update post
          </button>
        </div>
      ))}
    </div>
  );
}
