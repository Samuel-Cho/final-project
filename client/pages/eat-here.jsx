import React from 'react';

export default class EatHere extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restuarant: null,
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
    return (
      <div className="placeholder"></div>
    );
  }
}
