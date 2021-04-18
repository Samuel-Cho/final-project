import React from 'react';
// import StarRating from '../components/star-rating';

export default class EatHere extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // restaurantChosen: null,
      restuaran: null,
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
        // this.setState({ dayOfWeek: day, restaurantChosen: results[index] });
      });
  }

  // componentDidUpdate(prevState) {
  //   const { dayOfWeek } = this.state;
  //   if (dayOfWeek !== prevState.dayOfWeek && dayOfWeek !== null) {
  //     fetch(`/api/business/${this.state.restaurantChosen.id}`)
  //       .then(res => res.json())
  //       .then(result => {
  //         this.setState({ restaurantRender: result[0] });
  //       });
  //   }
  // }

  render() {
    // console.log(this.state);
    return (
      <div className="placeholder"></div>
    );
  }
}
