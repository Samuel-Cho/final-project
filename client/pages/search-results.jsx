import React from 'react';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      foodType: props.foodType,
      restaurants: []
    };
  }

  componentDidMount() {
    fetch(`/api/search/${this.state.location}/${this.state.foodType}`)
      .then(res => res.json())
      .then(businesses => this.setState({ restaurants: businesses.businesses }));
  }

  render() {
    // console.log(this.state.restaurants);
    const restaurants = this.state.restaurants;
    let divRestaruant = null;
    divRestaruant = restaurants.map(restaurant => {
      return (
        <div key={restaurant.alias} className="restaurant">
          <div className="image-container">
            <img className="restaurant-image" src={restaurant.image_url}></img>
          </div>
          <div className="detail-container">
            <p className="restaurant-name">{restaurant.name}</p>
            <p className="restaurant-address">{restaurant.location.address1}</p>
            <div className="restaurant-rating">{restaurant.rating}</div>
            <p className="restaurant-review-count">{`Based on ${restaurant.review_count} Review`}</p>
          </div>
          <div className="select-icon-container">
            <i className="far fa-check-circle unchecked"></i>
          </div>
        </div>
      );
    });
    return (
      <div className="restaurant-list-container">
        {divRestaruant}
      </div>
    );
  }
}
