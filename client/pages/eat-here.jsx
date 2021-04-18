import React from 'react';
// import RestaurantHours from '../components/restaurant-hours';

export default class EatHere extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: null,
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
    return (
      <div className="placeholder"></div>
    );
  }
}
