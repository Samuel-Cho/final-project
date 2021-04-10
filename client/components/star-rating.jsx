import React from 'react';

export default function StarRating(props) {
  const rating = props.rating;
  let starIcons = null;
  if (rating === '4.5') {
    starIcons = <>
        <i className="fas fa-star star"></i>
        <i className="fas fa-star star"></i>
        <i className="fas fa-star star"></i>
        <i className="fas fa-star star"></i>
        <i className="fas fa-star-half-alt star"></i>
      </>;
  }
  return (
    <>
      {starIcons}
    </>
  );
}
