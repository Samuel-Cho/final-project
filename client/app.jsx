import React from 'react';
import Home from './pages/home';
import Header from './components/header';
import { parseRoute } from './lib';
import SearchResults from './pages/search-results';
import PageWrapper from './components/page-wrapper';

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

  renderPage() {
    if (this.state.route.path === '') {
      return <Home />;
    } else if (this.state.route.path === 'searchResults') {
      return (
        <SearchResults
          location={this.state.route.params.get('location')}
          foodType={this.state.route.params.get('foodType')} />
      );
    }
  }

  render() {
    return (
    <>
      <PageWrapper path={this.state.route.path}>
        <Header />
        {this.renderPage()}
      </PageWrapper>
    </>
    );
  }
}
