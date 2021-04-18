import React from 'react';
// import RestaurantHours from '../components/restaurant-hours';
// import { restaurantHours } from '../lib';

export default class EatHere extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {},
      dayOfWeek: null
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
            this.setState({ dayOfWeek: day, restaurant: result });
          });
      });
  }

  render() {
    // console.log(this.state);
    // if (this.state.dayOfWeek !== null) {
    //   const open = this.state.restaurant.hours[0].open[this.state.dayOfWeek].start;
    //   const close = this.state.restaurant.hours[0].open[this.state.dayOfWeek].end;
    //   const openHour = restaurantHours(open);
    //   const closeHour = restaurantHours(close)
    //   console.log('open:', openHour);
    //   console.log('close:', closeHour);
    // }
    return (
      <>

        <div className="placeholder"></div>
      </>
    );
  }
}
