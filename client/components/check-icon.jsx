import React from 'react';

export default class CheckIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // restaurantsDbAliases: [],
      aliasCheck: props.alias
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
  //   fetch('/api/randomizerList')
  //     .then(res => res.json())
  //     .then(aliases => this.setState({ restaurantsDbAliases: aliases }));
  // }

  render() {
    // console.log(this.state);
    return (
      <i onClick={this.handleClick} className="far fa-check-circle unchecked"></i>
    );
  }
}
