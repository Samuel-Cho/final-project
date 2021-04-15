import React from 'react';

export default class CheckIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantsDbAliases: props.restaurantsDbAliases,
      restaurant: props.restaurant
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.className === 'far fa-check-circle unchecked') {
      event.target.className = 'fas fa-check-circle checked';
    } else {
      event.target.className = 'far fa-check-circle unchecked';
    }
  }

  render() {
    // console.log(this.state);
    const aliasCheck = this.state.restaurant.alias;
    const { restaurantsDbAliases: aliases } = this.state;
    const alias = aliases.filter(alias => alias === aliasCheck);
    // console.log(aliasCheck);
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
