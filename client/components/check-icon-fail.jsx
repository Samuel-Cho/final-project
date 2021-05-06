import React from 'react';
import { AppContext } from '../lib';

export default class CheckIconFail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkIconModalClosed: props.closed
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { closeCheckIconModal } = this.context;
    // this.setState({ checkIconModalClosed: true });
    closeCheckIconModal(true);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.open !== this.props.closed && prevState.checkIconModalClosed !== this.props.closed) {
      this.setState({ checkIconModalClosed: this.props.closed });
    }
  }

  render() {
    if (this.state.checkIconModalClosed === false) {
      return (
        <div className="fail-modal">
          <div className="fail-container">
            <p className="fail-text">Connection issue with database</p>
            <button type="button" onClick={this.handleClick} className="close-button">Close</button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

CheckIconFail.contextType = AppContext;
