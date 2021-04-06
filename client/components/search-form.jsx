import React from 'react';

export default class SearchForm extends React.Component {
  render() {
    return (
      <form className="search-form">
        <div className="location-container">
          <input
            required
            id="location"
            type="text"
            name="location"
            className="location-search" />
        </div>
        <div className="food-type-container">
          <button className="food-type" id="korean">Korean</button>
          <button className="food-type" id="italian">Italian</button>
          <button className="food-type" id="chinese">Chinese</button>
          <button className="food-type" id="burgers">Burgers</button>
          <button className="food-type" id="japanese">Japanese</button>
          <button className="food-type" id="thai">Thai</button>
          <button className="food-type" id="mexican">Mexican</button>
          <button className="food-type" id="pizza">Pizza</button>
          <button className="food-type" id="vietnamese">Vietnamese</button>
        </div>
        <div className="search-button-container">
          <button className="submit-button" type="submit">Search</button>
        </div>
      </form>
    );
  }
}
