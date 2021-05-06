import React from 'react';

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: props.loading
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.loading !== this.props.loading && prevState.loading !== this.props.loading) {
      this.setState({ loading: this.props.loading });
    }
  }

  render() {
    if (this.state.loading === true) {
      return (
        <div className="loading-modal">
          <div className="gif-container">
            <img className="loading-gif" alt="loading gif" src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif" />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
