import React from 'react';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      foodType: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value.toLowerCase() });
  }

  handleClick(event) {
    const { id } = event.target;
    this.setState({ foodType: id });

  }

  render() {
    return (
      <>
        <form className="search-form mobile">
          <div className="location-container">
            <input
              required
              id="location"
              type="text"
              name="location"
              className="location-search"
              placeholder="Location"
              onChange={this.handleChange}
              value={this.state.value} />
          </div>
          <div className="food-type-container">
            <div onClick={this.handleClick} className="food-type" id="korean">Korean</div>
            <div onClick={this.handleClick} className="food-type" id="italian">Italian</div>
            <div onClick={this.handleClick} className="food-type" id="chinese">Chinese</div>
            <div onClick={this.handleClick} className="food-type" id="burgers">Burgers</div>
            <div onClick={this.handleClick} className="food-type" id="japanese">Japanese</div>
            <div onClick={this.handleClick} className="food-type" id="thai">Thai</div>
            <div onClick={this.handleClick} className="food-type" id="mexican">Mexican</div>
            <div onClick={this.handleClick} className="food-type" id="pizza">Pizza</div>
            <div onClick={this.handleClick} className="food-type" id="vietnamese">Vietnamese</div>
          </div>
          <div className="search-button-container">
            <button className="search-button" type="submit">Search</button>
          </div>
        </form>
        <form className="search-form desktop">
          <div className="location-container">
            <input
              required
              id="location"
              type="text"
              name="location"
              className="location-search"
              placeholder="Location"
              onChange={this.handleChange} />
            <button className="search-button" type="submit">Search</button>
          </div>
          <div className="food-type-container">
            <div className="column-one-third left">
              <button className="food-type" id="korean">Korean</button>
            </div>
            <div className="column-one-third center">
              <button className="food-type" id="italian">Italian</button>
            </div>
            <div className="column-one-third right">
              <button className="food-type" id="chinese">Chinese</button>
            </div>
            <div className="column-one-third left">
              <button className="food-type" id="burgers">Burgers</button>
            </div>
            <div className="column-one-third center">
              <button className="food-type" id="japanese">Japanese</button>
            </div>
            <div className="column-one-third right">
              <button className="food-type" id="thai">Thai</button>
            </div>
            <div className="column-one-third left">
              <button className="food-type" id="mexican">Mexican</button>
            </div>
            <div className="column-one-third center">
              <button className="food-type" id="pizza">Pizza</button>
            </div>
            <div className="column-one-third right">
              <button className="food-type" id="vietnamese">Vietnamese</button>
            </div>
          </div>
        </form>
      </>
    );
  }
}
