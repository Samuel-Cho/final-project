import React from 'react';

export default function PageWrapper(props) {
  const background = props.path === 'searchResults'
    ? 'bg-pattens-blue'
    : props.path === ''
      ? 'bg-white'
      : 'bg-venice-blue';
  return (
    <div className={background}>
      {props.children}
    </div>
  );
}
