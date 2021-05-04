import React from 'react';
import { AppContext } from '../lib';

export default class Loading extends React.Component {
  render() {
    if (this.context.loading === true) {
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

Loading.contextType = AppContext;
