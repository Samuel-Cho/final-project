import React from 'react';
import { AppContext } from '../lib';

export default class AppDrawer extends React.Component {
  render() {
    const { drawerClosed, handleClick } = this.context;
    if (drawerClosed === false) {
      return (
        <div className="app-drawer-container">
          <div className="modal" onClick={handleClick}></div>
          <div className="menu-container">
            <h2>Menu</h2>
            <ul>
              <li onClick={handleClick}>
                <i className="fas fa-search search-icon search"></i>
                <p className="search">Search Restaurant</p>
              </li>
              <li onClick={handleClick}>
                <i className="fas fa-list list-icon searchResults"></i>
                <p className="searchResults">Restaurant List</p>
              </li>
              <li onClick={handleClick}>
                <i className="fas fa-check-circle check-circle-icon"></i>
                <p>Randomize List</p>
              </li>
            </ul>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

AppDrawer.contextType = AppContext;
