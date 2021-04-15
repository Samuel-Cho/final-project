import React from 'react';

export default class CheckIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantsDbAliases: props.restaurantsDbAliases,
      restaurant: {
        alias: props.restaurant.alias,
        url: props.restaurant.url,
        imageUrl: props.restaurant.image_url,
        name: props.restaurant.name,
        location: props.restaurant.location,
        rating: props.restaurant.rating,
        reviewCount: props.restaurant.review_count
      }
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.className === 'far fa-check-circle unchecked') {
      const reqPost = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.restaurant)
      };
      fetch('/api/save', reqPost)
        .then(res => res.json())
        .then(results => {
          event.target.className = 'fas fa-check-circle checked';
        });
    } else {
      event.target.className = 'far fa-check-circle unchecked';
    }
  }

  render() {
    // console.log(this.state.restaurant);
    const aliasCheck = this.state.restaurant.alias;
    const { restaurantsDbAliases: aliases } = this.state;
    // console.log(aliases);
    const alias = aliases.filter(aliasObject => aliasObject.alias === aliasCheck);
    // console.log(alias);
    if (alias.length === 0) {
      return (
        <i onClick={this.handleClick} className="far fa-check-circle unchecked"></i>
      );
    } else {
      return (
        <i onClick={this.handleClick} className="fas fa-check-circle checked"></i>
      );
    }
  }
}
