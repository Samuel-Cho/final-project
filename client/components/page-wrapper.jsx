import React from 'react';

export default function PageWrapper(props) {
  if (props.path === 'searchResults') {
    return (
      <div className="background bg-pattens-blue">
        {props.children}
      </div>
    );
  } else if (props.path === '' || props.path === 'search') {
    return (
      <div className="background bg-white">
        {props.children}
      </div>
    );
  } else {
    return (
      <div className="background bg-venice-blue">
        {props.children}
      </div>
    );
  }
}
