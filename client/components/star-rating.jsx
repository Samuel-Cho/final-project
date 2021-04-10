import React from 'react';

export default function StarRating(props) {
  const rating = props.rating;
  if (rating === 5) {
    return (
      <>
        <i className="fas fa-star star"></i>
        <i className="fas fa-star star"></i>
        <i className="fas fa-star star"></i>
        <i className="fas fa-star star"></i>
        <i className="fas fa-star star"></i>
      </>
    );
  } else if (rating === 4.5) {
    return (
      <>
        <i className="fas fa-star star"></i>
        <i className="fas fa-star star"></i>
        <i className="fas fa-star star"></i>
        <i className="fas fa-star star"></i>
        <i className="fas fa-star-half-alt star"></i>
      </>
    );
  } else if (rating === 4) {
    return (
      <>
        <i className="fas fa-star star"></i>
        <i className="fas fa-star star"></i>
        <i className="fas fa-star star"></i>
        <i className="fas fa-star star"></i>
        <i className="far fa-star star"></i>
      </>
    );
  } else if (rating === 3.5) {
    return (
      <>
        <i className="fas fa-star star"></i>
        <i className="fas fa-star star"></i>
        <i className="fas fa-star star"></i>
        <i className="fas fa-star-half-alt star"></i>
        <i className="far fa-star star"></i>
      </>
    );
  } else if (rating === 3) {
    return (
      <>
        <i className="fas fa-star star"></i>
        <i className="fas fa-star star"></i>
        <i className="fas fa-star star"></i>
        <i className="far fa-star star"></i>
        <i className="far fa-star star"></i>
      </>
    );
  } else if (rating === 2.5) {
    return (
      <>
        <i className="fas fa-star star"></i>
        <i className="fas fa-star star"></i>
        <i className="fas fa-star-half-alt star"></i>
        <i className="far fa-star star"></i>
        <i className="far fa-star star"></i>
      </>
    );
  } else if (rating === 2) {
    return (
      <>
        <i className="fas fa-star star"></i>
        <i className="fas fa-star star"></i>
        <i className="far fa-star star"></i>
        <i className="far fa-star star"></i>
        <i className="far fa-star star"></i>
      </>
    );
  } else if (rating === 1.5) {
    return (
      <>
        <i className="fas fa-star star"></i>
        <i className="fas fa-star-half-alt star"></i>
        <i className="far fa-star star"></i>
        <i className="far fa-star star"></i>
        <i className="far fa-star star"></i>
      </>
    );
  } else if (rating === 1) {
    return (
      <>
        <i className="fas fa-star star"></i>
        <i className="far fa-star star"></i>
        <i className="far fa-star star"></i>
        <i className="far fa-star star"></i>
        <i className="far fa-star star"></i>
      </>
    );
  } else if (rating === 0.5) {
    return (
      <>
        <i className="fas fa-star-half-alt star"></i>
        <i className="far fa-star star"></i>
        <i className="far fa-star star"></i>
        <i className="far fa-star star"></i>
        <i className="far fa-star star"></i>
      </>
    );
  } else {
    return (
      <>
        <i className="far fa-star star"></i>
        <i className="far fa-star star"></i>
        <i className="far fa-star star"></i>
        <i className="far fa-star star"></i>
        <i className="far fa-star star"></i>
      </>
    );
  }
}
