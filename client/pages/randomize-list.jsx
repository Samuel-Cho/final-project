import React from 'react';
import StarRating from '../components/star-rating';
import CheckIcon from '../components/check-icon';

export default class RandomizeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    };
  }

  render() {
    const restaurants = this.state.restaurants;
    const divRestaruants = restaurants.map(restaurant => {
      return (
        <div key={restaurant.alias} className="restaurant-randomize one-third-column">
          <div className="image-container">
            <a href={restaurant.url} target="_blank" rel="noreferrer">
              <img className="restaurant-image" src={restaurant.imageUrl}></img>
            </a>
          </div>
          <div className="bottom-container">
            <a className="restaurant-link" href={restaurant.url} target="_blank" rel="noreferrer">
              <div className="detail-container">
                <p className="restaurant-name">{restaurant.name}</p>
                <p className="restaurant-address">{restaurant.location.address1}</p>
                <div className="restaurant-rating">
                  <StarRating rating={restaurant.rating} />
                </div>
                <p className="restaurant-review-count">{`Based on ${restaurant.reviewCount} Review`}</p>
              </div>
            </a>
            <div className="select-icon-container">
              <CheckIcon restaurant={restaurant} restaurantsDbAliases={this.state.restaurantsDbAliases} />
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="restaurant-list-container">
        <div className="randomize-list-container">
          {divRestaruants}
        </div>
        <div className="randomize-button-container">
          <button className="randomize-button">Randomize</button>
        </div>
      </div>
    );
  }
}
