import React from 'react';

export default function SortButton({ handleSortByDate, sortChronologically }) {
  return (
    <button onClick={handleSortByDate} className="sort-btn">
      See
      {sortChronologically ? (
        <span className="sort-param"> OLDEST</span>
      ) : (
        <span className="sort-param"> LATEST</span>
      )}
    </button>
  );
}
