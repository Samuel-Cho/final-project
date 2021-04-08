import React from 'react';
import Home from './pages/home';
import Header from './components/header';
import { parseRoute } from './lib';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', event => {
      const route = parseRoute(window.location.hash);
      this.setState({ route });
    });
  }

  render() {
    // console.log(this.state);
    return (
    <>
      <Header />
      <Home />
    </>
    );
  }
}
