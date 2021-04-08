import React from 'react';
import Home from './pages/home';
import Header from './components/header';
// import {parseRoute} from './lib';

export default class App extends React.Component {
  render() {
    return (
    <>
      <Header />
      <Home />
    </>
    );
  }
}
