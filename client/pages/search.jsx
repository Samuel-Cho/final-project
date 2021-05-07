import React from 'react';
import SearchForm from '../components/search-form';

export default class Search extends React.Component {
  render() {
    return (
      <main className="search-container">
        <SearchForm />
      </main>
    );
  }
}
