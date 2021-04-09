import React from 'react';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      foodType: props.foodType,
      restaurants: null
    };
  }

  componentDidMount() {
    fetch(`/api/search/${this.state.location}/${this.state.foodType}`)
      .then(res => res.json())
      .then(businesses => this.setState({ restaurants: businesses.businesses }));
  }

  render() {
    // console.log(this.state);
    return (
      <div className="searchResultContainer">

      </div>
    );
  }
}
