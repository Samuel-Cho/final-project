import React from 'react';
import { AppContext } from '../lib';

export default class NoRestaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.error !== this.props.error && prevState.error !== this.props.error) {
      this.setState({ error: this.props.error });
    }
  }

  render() {
    if (this.state.error === true) {
      if (this.context.route.path === 'searchResults') {
        return (
          <div className="no-restaurant-container">
            <p className="no-restaurant">Error connecting with API has occured</p>
          </div>
        );
      } else {
        return (
          <div className="no-restaurant-container">
            <p className="no-restaurant white">Error connecting with API has occured</p>
          </div>
        );
      }
    }
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
