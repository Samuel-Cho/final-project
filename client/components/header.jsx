import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="drawer-container column-one-fourth">
          <i className="fas fa-bars drawer"></i>
        </div>
        <div className="app-name-container column-three-fourth">
          <h1 className="app-name">Teeter Taste</h1>
        </div>
      </header>
    );
  }
}
