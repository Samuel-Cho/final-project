import React from 'react';
import { AppContext } from '../lib';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previousSearchParams: {
        foodType: null,
        location: 'orange county, ca'
      }
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { params } = this.context.route;
    const foodType = params.get('foodType');
    const location = params.get('location');
    if (location !== null && foodType !== null && (location !== this.state.previousSearchParams.location || foodType !== this.state.previousSearchParams.foodType)) {
      this.setState({
        previousSearchParams: {
          foodType,
          location
        }
      });
    }
  }

  render() {
    const { location, foodType } = this.state.previousSearchParams;
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
              <li>
                <a className="restaurant-list" onClick={handleClick} href={`#searchResults?location=${location}&foodType=${foodType}`}>
                  <i className="fas fa-list list-icon"></i>
                  <p>Restaurant List</p>
                </a>
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
