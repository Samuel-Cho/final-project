import React from 'react';

export default class CheckIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantsDbAliases: props.restaurantsDbAliases,
      restaurant: {
        id: props.restaurant.id,
        alias: props.restaurant.alias,
        url: props.restaurant.url,
        imageUrl: props.restaurant.image_url,
        name: props.restaurant.name,
        location: props.restaurant.location,
        rating: props.restaurant.rating,
        reviewCount: props.restaurant.review_count
      },
      isSelected: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (this.state.isSelected === false) {
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
          this.setState({ isSelected: true });
        });
    } else {
      const reqDelete = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.restaurant)
      };
      fetch('/api/delete', reqDelete)
        .then(res => res.json())
        .then(results => {
          this.setState({ isSelected: false });
        });
    }
  }

  componentDidMount() {
    const aliasCheck = this.state.restaurant.alias;
    const { restaurantsDbAliases: aliases } = this.state;
    const alias = aliases.filter(aliasObject => aliasObject.alias === aliasCheck);
    if (alias.length !== 0) {
      this.setState({ isSelected: true });
    } else {
      this.setState({ isSelected: false });
    }
  }

  render() {
    if (this.state.isSelected === false) {
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
