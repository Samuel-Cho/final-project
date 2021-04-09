import React from 'react';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      foodType: props.foodType
    };
  }

  render() {
    // console.log(this.state);
    return <div>placeholder</div>;
  }
}
