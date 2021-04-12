import React from 'react';

export default function StarRating(props) {
  const rating = props.rating;
  const starElements = Array(5).fill(null).map((_, index) => {
    if (index + 1 <= rating) {
      return <i key={index} className="fas fa-star star" />;
    }
    if (index + 0.5 === rating) {
      return <i key={index} className="fas fa-star-half-alt star" />;
    }
    return <i key={index} className="far fa-star star" />;
  });
  return starElements;
}
