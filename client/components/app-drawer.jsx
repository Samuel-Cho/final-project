import React from 'react';
import AppContext from '../lib';

export default class AppDrawer extends React.Component {
  render() {
    const { drawerClosed, handleClick } = this.context;
    return (
      <div onClick={handleClick}>{`placeholder ${drawerClosed}`}</div>
    );
  }
}

AppDrawer.contextType = AppContext;
