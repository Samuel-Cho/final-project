import React from 'react';
// import StarRating from '../components/star-rating';

export default class EatHere extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantChosen: null,
      restuarantRender: null,
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
        this.setState({ dayOfWeek: day, restaurantChosen: results[index] });
      });
  }

  render() {
    // console.log(this.state);
    return (
      <div className="placeholder"></div>
    );
  }
}
