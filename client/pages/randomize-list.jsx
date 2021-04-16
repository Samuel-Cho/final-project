import React from 'react';
import StarRating from '../components/star-rating';
import CheckIcon from '../components/check-icon';

export default class RandomizeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantDbAliases: [],
      restaurants: []
    };
  }

  componentDidMount() {
    fetch('/api/randomizerList')
      .then(res => res.json())
      .then(aliases => this.setState({ restaurantsDbAliases: aliases }));
    fetch('/api/randomizerListAll')
      .then(res => res.json(res))
      .then(results => {
        const restaurantsConverted = results.map(restaurant => {
          const restaurantConverted = {
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
        this.setState({ restaurants: restaurantsConverted });
      });
  }

  render() {
    const restaurants = this.state.restaurants;
    const divRestaruants = restaurants.map(restaurant => {
      return (
        <div key={restaurant.alias} className="restaurant-randomize one-third-column">
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
        </div>
      );
    });
    // if (this.state.restaurants.length !== 0) {
    return (
        <div className="container">
          <div className="randomize-list-container">
            {divRestaruants}
          </div>
          <div className="randomize-button-container">
            <button className="randomize-button">Randomize</button>
          </div>
        </div>
    );
    // } else {
    //   return null;
    // }
  }
}
