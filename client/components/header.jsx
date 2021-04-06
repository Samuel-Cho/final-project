import React from 'react';

export default function Header(props) {
  return (
    <header>
      <div className="drawer-container">
        <i className="fas fa-bars"></i>
      </div>
      <div className="app-name-container">
        <h1 className="app-name">Teeter Taste</h1>
      </div>
    </header>
  );
}
