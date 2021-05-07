import React from 'react';
import StarRating from '../components/star-rating';
import CheckIcon from '../components/check-icon';
import Loading from '../components/loading';
import NoRestaurants from '../components/no-restaurants';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      foodType: props.foodType,
      restaurants: [],
      restaurantsDbAliases: [],
      loading: true
    };
  }

  componentDidMount() {
    fetch(`/api/search/${this.state.location}/${this.state.foodType}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return false;
        }
      })
      .then(businesses => {
        if (businesses) {
          fetch('/api/randomizerList')
            .then(res => {
              if (res.ok) {
                return res.json();
              } else {
                return false;
              }
            })
            .then(aliases => {
              if (aliases) {
                this.setState({ restaurants: businesses.businesses, restaurantsDbAliases: aliases, loading: false });
              } else {
                this.setState({ loading: false, restaurantsDbAliases: ['error'] });
              }
            })
            .catch(err => {
              console.error(err);
              this.setState({ loading: false, restaurantsDbAliases: ['error'] });
            });
        } else {
          this.setState({ loading: false, restaurants: ['error'] });
        }
      })
      .catch(err => {
        console.error(err);
        this.setState({ loading: false, restaurants: ['error'] });
      });
  }

  render() {
    const { restaurants, restaurantsDbAliases } = this.state;
    if (restaurants[0] === 'error' || restaurantsDbAliases[0] === 'error') {
      return (
        <>
          <Loading loading={this.state.loading} />
          <div className="restaurant-list-container mobile">
            <h2 className="restaurant-list-header">Restuarant List</h2>
            <NoRestaurants error={true} />
          </div>
          <div className="restaurant-list-container desktop">
            <NoRestaurants error={true} />
          </div>
        </>
      );
    } else if (restaurants.length !== 0) {
      const divRestaruants = restaurants.map(restaurant => {
        return (
          <li key={restaurant.alias} className="restaurant one-third-column" id={restaurant.id}>
            <div className="image-container">
              <a href={restaurant.url} target="_blank" rel="noreferrer">
                <img className="restaurant-image" alt="restaurant image" src={restaurant.image_url}></img>
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
          <Loading loading={this.state.loading} />
          <div className="restaurant-list-container mobile">
            <h2 className="restaurant-list-header">Restuarant List</h2>
            <ul className="ul-restaurant-list">
              {divRestaruants}
            </ul>
          </div>
          <div className="restaurant-list-container desktop">
            <ul className="ul-restaurant-list">
              {divRestaruants}
            </ul>
          </div>
        </>
      );
    } else {
      return (
        <>
          <Loading loading={this.state.loading} />
          <div className="restaurant-list-container mobile">
            <h2 className="restaurant-list-header">Restuarant List</h2>
            <NoRestaurants />
          </div>
          <div className="restaurant-list-container desktop">
            <NoRestaurants />
          </div>
        </>
      );
    }
  }
}
