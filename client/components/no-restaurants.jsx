import React from 'react';
import { AppContext } from '../lib';

export default class NoRestaurant extends React.Component {
  render() {
    if (this.context.route.path === 'searchResults') {
      return (
        <div className="no-restaurant-container">
          <p className="no-restaurant">No Restaurants Available</p>
        </div>
      );
    } else {
      return (
        <div className="no-restaurant-container">
          <p className="no-restaurant white">No Restaurants Available</p>
        </div>
      );
    }
  }
}

NoRestaurant.contextType = AppContext;
