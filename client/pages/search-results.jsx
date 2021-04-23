import React from 'react';
import StarRating from '../components/star-rating';
import CheckIcon from '../components/check-icon';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      foodType: props.foodType,
      restaurants: [],
      restaurantsDbAliases: []
    };
  }

  componentDidMount() {
    fetch(`/api/search/${this.state.location}/${this.state.foodType}`)
      .then(res => res.json())
      .then(businesses => this.setState({ restaurants: businesses.businesses }));
    fetch('/api/randomizerList')
      .then(res => res.json())
      .then(aliases => this.setState({ restaurantsDbAliases: aliases }));
  }

  render() {
    const restaurants = this.state.restaurants;
    const divRestaruants = restaurants.map(restaurant => {
      return (
        <div key={restaurant.alias} className="restaurant one-third-column" id={restaurant.id}>
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
    return (
      <>
        <div className="restaurant-list-container mobile">
          <h2 className="restaurant-list-header">Restuarant List</h2>
          {divRestaruants}
        </div>
        <div className="restaurant-list-container desktop">
          {divRestaruants}
        </div>
      </>
    );
  }
}
