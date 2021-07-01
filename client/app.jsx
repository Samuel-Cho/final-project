import React from 'react';
import Home from './pages/home';
import Search from './pages/search';
import Header from './components/header';
import { parseRoute, AppContext } from './lib';
import SearchResults from './pages/search-results';
import PageWrapper from './components/page-wrapper';
import AppDrawer from './components/app-drawer';
import RandomizeList from './pages/randomize-list';
import EatHere from './pages/eat-here';
import CheckIconFail from './components/check-icon-fail';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash),
      drawerClosed: true,
      checkIconModalClosed: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.closeCheckIconModal = this.closeCheckIconModal.bind(this);
  }

  handleClick(event) {
    if (this.state.drawerClosed === true) {
      this.setState({ drawerClosed: false });
    } else {
      this.setState({ drawerClosed: true });
    }
  }

  closeCheckIconModal(data) {
    this.setState({ checkIconModalClosed: data });
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
    } else if (this.state.route.path === 'search') {
      return <Search />;
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
    const { route, drawerClosed, checkIconModalClosed } = this.state;
    const { handleClick, closeCheckIconModal } = this;
    const contextValue = { route, drawerClosed, handleClick, closeCheckIconModal };
    return (
      <AppContext.Provider value={contextValue}>
        <>
          <PageWrapper path={this.state.route.path}>
            <AppDrawer />
            <CheckIconFail closed={checkIconModalClosed} />
            <Header path={this.state.route.path}/>
            {this.renderPage()}
          </PageWrapper>
        </>
      </AppContext.Provider>
    );
  }
}
