import React from 'react';
import StarRating from '../components/star-rating';
import CheckIcon from '../components/check-icon';

export default class RandomizeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantsDbAliases: [],
      restaurants: []
    };
  }

  componentDidMount() {
    fetch('/api/randomizerListAll')
      .then(res => res.json())
      .then(results => {
        const restaurantsConverted = results.map(restaurant => {
          const restaurantConverted = {
            id: restaurant.id,
            alias: restaurant.alias,
            url: restaurant.url,
            image_url: restaurant.imageUrl,
            name: restaurant.name,
            location: {
              address1: restaurant.address1
            },
            rating: restaurant.rating,
            review_count: restaurant.reviewCount
          };
          return restaurantConverted;
        });
        const restaurantAliases = results.map(restaurant => {
          return { alias: restaurant.alias };
        });
        this.setState({ restaurantsDbAliases: restaurantAliases, restaurants: restaurantsConverted });
      });
  }

  render() {
    const restaurants = this.state.restaurants;
    const divRestaruants = restaurants.map(restaurant => {
      return (
        <li key={restaurant.alias} className="restaurant-randomize one-third-column" id={restaurant.id}>
          <div className="image-container">
            <a href={restaurant.url} target="_blank" rel="noreferrer">
              <img className="restaurant-image" src={restaurant.image_url}></img>
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
                <p className="restaurant-review-count">{`Based on ${restaurant.review_count} Review`}</p>
              </div>
            </a>
            <div className="select-icon-container">
              <CheckIcon restaurant={restaurant} restaurantsDbAliases={this.state.restaurantsDbAliases} />
            </div>
          </div>
        </li>
      );
    });
    return (
      <>
        <div className="container mobile">
          <div className="randomize-list-container">
            <h2 className="randomize-list-header">Randomize List</h2>
            <ul className="ul-randomize-list">
              {divRestaruants}
            </ul>
          </div>
          <div className="randomize-button-container">
            <a className="randomize-button" href="#eatHere">Randomize</a>
          </div>
        </div>
        <div className="container desktop">
          <div className="randomize-list-container">
            <ul className="ul-randomize-list">
              {divRestaruants}
            </ul>
          </div>
          <div className="randomize-button-container">
            <a className="randomize-button" href="#eatHere">Randomize</a>
          </div>
        </div>
      </>
    );
  }
}
