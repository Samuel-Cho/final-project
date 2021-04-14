import React from 'react';
import StarRating from '../components/star-rating';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      foodType: props.foodType,
      restaurants: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.target.className = 'fas fa-check-circle checked';
  }

  componentDidMount() {
    fetch(`/api/search/${this.state.location}/${this.state.foodType}`)
      .then(res => res.json())
      .then(businesses => this.setState({ restaurants: businesses.businesses }));
  }

  render() {
    const restaurants = this.state.restaurants;
    const divRestaruantMobile = restaurants.map(restaurant => {
      return (
        <a key={restaurant.alias} className="restaurant-link" href={restaurant.url} target="_blank" rel="noreferrer">
          <div className="restaurant one-third-column">
            <div className="image-container">
              <img className="restaurant-image" src={restaurant.image_url}></img>
            </div>
            <div className="detail-container">
              <p className="restaurant-name">{restaurant.name}</p>
              <p className="restaurant-address">{restaurant.location.address1}</p>
              <div className="restaurant-rating">
                <StarRating rating={restaurant.rating} />
              </div>
              <p className="restaurant-review-count">{`Based on ${restaurant.review_count} Review`}</p>
            </div>
            <div className="select-icon-container">
              <i onClick={this.handleClick} className="far fa-check-circle unchecked"></i>
            </div>
          </div>
        </a>
      );
    });
    const divRestaruantDesktop = restaurants.map(restaurant => {
      return (
        <a key={restaurant.alias} className="restaurant-link one-third-column" href={restaurant.url} target="_blank" rel="noreferrer">
          <div className="restaurant">
            <div className="image-container">
              <img className="restaurant-image" src={restaurant.image_url}></img>
            </div>
            <div className="bottom-container">
              <div className="detail-container">
                <p className="restaurant-name">{restaurant.name}</p>
                <p className="restaurant-address">{restaurant.location.address1}</p>
                <div className="restaurant-rating">
                  <StarRating rating={restaurant.rating} />
                </div>
                <p className="restaurant-review-count">{`Based on ${restaurant.review_count} Review`}</p>
              </div>
              <div className="select-icon-container">
                <i className="far fa-check-circle unchecked"></i>
              </div>
            </div>
          </div>
        </a>
      );
    });
    return (
      <>
        <div className="restaurant-list-container mobile">
          {divRestaruantMobile}
        </div>
        <div className="restaurant-list-container desktop">
          {divRestaruantDesktop}
        </div>
      </>
    );
  }
}
