import React from 'react';
import Home from './pages/home';
import Header from './components/header';
import { parseRoute, AppContext } from './lib';
import SearchResults from './pages/search-results';
import PageWrapper from './components/page-wrapper';
import AppDrawer from './components/app-drawer';
import RandomizeList from './pages/randomize-list';
import EatHere from './pages/eat-here';
import Loading from './components/loading';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash),
      drawerClosed: true,
      loading: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (this.state.drawerClosed === true) {
      this.setState({ drawerClosed: false });
    } else {
      this.setState({ drawerClosed: true });
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', event => {
      const route = parseRoute(window.location.hash);
      this.setState({ route });
    });
  }

  renderPage() {
    if (this.state.route.path === '' || this.state.route.path === 'search') {
      return <Home />;
    } else if (this.state.route.path === 'searchResults') {
      return (
        <SearchResults
          location={this.state.route.params.get('location')}
          foodType={this.state.route.params.get('foodType')} />
      );
    } else if (this.state.route.path === 'randomize') {
      return <RandomizeList />;
    } else if (this.state.route.path === 'eatHere') {
      return <EatHere />;
    }
  }

  render() {
    const { route, drawerClosed, loading } = this.state;
    const { handleClick } = this;
    const contextValue = { route, drawerClosed, handleClick, loading };
    return (
      <AppContext.Provider value={contextValue}>
        <>
          <PageWrapper path={this.state.route.path}>
            <Loading />
            <AppDrawer />
            <Header path={this.state.route.path}/>
            {this.renderPage()}
          </PageWrapper>
        </>
      </AppContext.Provider>
    );
  }
}
