import React from 'react';
import { restaurantHours } from '../lib';
import StarRating from '../components/star-rating';
import Loading from '../components/loading';

export default class EatHere extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {},
      dayOfWeek: null,
      loading: true
    };
  }

  componentDidMount() {
    const date = new Date();
    const day = date.getDay();
    fetch('/api/randomizerListAll')
      .then(res => res.json())
      .then(results => {
        const index = Math.floor(Math.random() * (results.length));
        const restaurantChosen = results[index];
        fetch(`/api/business/${restaurantChosen.id}`)
          .then(res => res.json())
          .then(result => {
            this.setState({ dayOfWeek: day, restaurant: result, loading: false });
          });
      });
  }

  render() {
    const { restaurant } = this.state;
    if (this.state.dayOfWeek !== null) {
      const open = this.state.restaurant.hours[0].open[this.state.dayOfWeek].start;
      const close = this.state.restaurant.hours[0].open[this.state.dayOfWeek].end;
      const openHour = restaurantHours(open);
      const closeHour = restaurantHours(close);
      return (
        <>
          <Loading loading={this.state.loading} />
          <div className="eat-here-container mobile">
            <div className="eat-here-header">
              <h2 className="eat-here">Eat Here!</h2>
            </div>
            <div className="eat-here-details">
              <div className="eat-here-image-container">
                <img className="eat-here-restaurant-image" src={restaurant.image_url}></img>
              </div>
              <div className="eat-here-bottom-container">
                <div className="eat-here-detail-container">
                  <p className="eat-here-restaurant-name">{restaurant.name}</p>
                  <p className="eat-here-restaurant-address">{restaurant.location.address1}</p>
                  <div className="eat-here-restaurant-rating">
                    <StarRating rating={restaurant.rating} />
                  </div>
                  <p className="eat-here-restaurant-review-count">{`Based on ${restaurant.review_count} Review`}</p>
                </div>
              </div>
            </div>
            <div className="visit-yelp-button-container">
              <a className="visit-yelp-button" href={restaurant.url} target="_blank" rel="noreferrer">Visit Yelp</a>
            </div>
          </div>
          <div className="eat-here-container desktop">
            <div className="eat-here-header">
              <h2 className="eat-here">Eat Here!</h2>
            </div>
            <div className="eat-here-details">
              <div className="eat-here-image-container">
                <img className="eat-here-restaurant-image" src={restaurant.image_url}></img>
              </div>
              <div className="eat-here-bottom-container">
                <div className="eat-here-detail-container">
                  <p className="eat-here-restaurant-name">{restaurant.name}</p>
                  <p className="eat-here-hours">{`${openHour} - ${closeHour}`}</p>
                  <p className="eat-here-restaurant-address">{restaurant.location.address1}</p>
                  <div className="eat-here-restaurant-rating">
                    <StarRating rating={restaurant.rating} />
                  </div>
                  <p className="eat-here-restaurant-review-count">{`Based on ${restaurant.review_count} Review`}</p>
                  <div className="visit-yelp-button-container">
                    <a className="visit-yelp-button" href={restaurant.url} target="_blank" rel="noreferrer">Visit Yelp</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return <Loading loading={this.state.loading} />;
    }
  }
}
