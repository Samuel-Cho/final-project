import React from 'react';
import { AppContext } from '../lib';

export default class Header extends React.Component {
  render() {
    const { handleClick } = this.context;
    return (
      <header>
        <div className="drawer-container column-one-fourth">
          <i className="fas fa-bars drawer" onClick={handleClick}></i>
        </div>
        <div className="app-name-container column-three-fourth">
          <a href="#" className="app-name">Teeter Taste</a>
        </div>
      </header>
    );
  }
}

Header.contextType = AppContext;
