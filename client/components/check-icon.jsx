import React from 'react';

export default class CheckIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantsDB: []
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

  // componentDidMount() {
  //   fetch('/api/randomizeList')
  //     .then(res => res.json())
  //     .then(businesses => this.setState({ restaurantsDB: businesses }));
  // }

  render() {
    return (
      <i onClick={this.handleClick} className="far fa-check-circle unchecked"></i>
    );
  }
}
