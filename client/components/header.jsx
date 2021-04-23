import React from 'react';
import { AppContext } from '../lib';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path: this.props.path
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.path !== prevProps.path) {
      this.setState({ path: this.props.path });
    }
  }

  render() {
    const { handleClick } = this.context;
    const { path } = this.state;
    if (path === 'searchResults') {
      return (
        <>
          <header className="mobile">
            <div className="drawer-container column-one-fourth">
              <i className="fas fa-bars drawer" onClick={handleClick}></i>
            </div>
            <div className="app-name-container column-three-fourth">
              <a href="#" className="app-name">Teeter Taste</a>
            </div>
          </header>
          <header className="desktop">
            <div className="drawer-container column-one-fourth">
              <i className="fas fa-bars drawer" onClick={handleClick}></i>
              <h2>Restaurant List</h2>
            </div>
            <div className="app-name-container column-three-fourth">
              <a href="#" className="app-name">Teeter Taste</a>
            </div>
          </header>
        </>
      );
    } else {
      return (
        <header>
          <div className="drawer-container column-one-fourth">
            <i className="fas fa-bars drawer" onClick={handleClick}></i>
          </div>
          <div className="app-name-container column-three-fourth">
            <a href="#" className="app-name">Teeter Taste</a>
          </div>
        </header>
      );
    }
  }
}

Header.contextType = AppContext;
