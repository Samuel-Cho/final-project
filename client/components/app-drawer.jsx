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
                <i className="fas fa-search search-icon">Search Restaruant</i>
              </li>
              <li onClick={handleClick}>
                <i className="fas fa-list list-icon">Restaurant List</i>
              </li>
              <li onClick={handleClick}>
                <i className="fas fa-check-circle check-circle-icon">Randomize List</i>
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
