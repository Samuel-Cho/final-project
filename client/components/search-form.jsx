import React from 'react';

const foodTypeList = [
  {
    id: 'korean',
    position: 'left',
    text: 'Korean'
  },
  {
    id: 'italian',
    position: 'center',
    text: 'Italian'
  },
  {
    id: 'chinese',
    position: 'right',
    text: 'Chinese'
  },
  {
    id: 'burgers',
    position: 'left',
    text: 'Burgers'
  },
  {
    id: 'japanese',
    position: 'center',
    text: 'Japanese'
  },
  {
    id: 'thai',
    position: 'right',
    text: 'Thai'
  },
  {
    id: 'mexican',
    position: 'left',
    text: 'Mexican'
  },
  {
    id: 'pizza',
    position: 'center',
    text: 'Pizza'
  },
  {
    id: 'vietnamese',
    position: 'right',
    text: 'Vietnamese'
  }
];

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      foodType: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value.toLowerCase() });
  }

  handleClick(event) {
    const { id } = event.target;
    this.setState({ foodType: id });
  }

  handleSubmit(event) {
    event.preventDefault();

  }

  render() {
    let divItemsMobile = null;
    if (this.state.foodType === '') {
      divItemsMobile = foodTypeList.map(foodType => {
        return (
          <div onClick={this.handleClick} className="food-type" id={foodType.id} key={foodType.id}>{foodType.text}</div>
        );
      });
    } else {
      divItemsMobile = foodTypeList.map(foodType => {
        if (foodType.id === this.state.foodType) {
          return (
            <div onClick={this.handleClick} className="food-type selected" id={foodType.id} key={foodType.id}>{foodType.text}</div>
          );
        } else {
          return (
            <div onClick={this.handleClick} className="food-type" id={foodType.id} key={foodType.id}>{foodType.text}</div>
          );
        }
      });
    }
    let divItemsDesktop = null;
    if (this.state.foodType === '') {
      divItemsDesktop = foodTypeList.map(foodType => {
        return (
          <div key={foodType.id} className={`column-one-third ${foodType.position}`}>
            <div onClick={this.handleClick} className="food-type" id={foodType.id}>{foodType.text}</div>
          </div>
        );
      });
    } else {
      divItemsDesktop = foodTypeList.map(foodType => {
        if (foodType.id === this.state.foodType) {
          return (
            <div key={foodType.id} className={`column-one-third ${foodType.position}`}>
              <div onClick={this.handleClick} className="food-type selected" id={foodType.id}>{foodType.text}</div>
            </div>
          );
        } else {
          return (
            <div key={foodType.id} className={`column-one-third ${foodType.position}`}>
              <div onClick={this.handleClick} className="food-type" id={foodType.id}>{foodType.text}</div>
            </div>
          );
        }
      });
    }
    return (
      <>
        <form onSubmit={this.handleSubmit} className="search-form mobile">
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
            {divItemsMobile}
          </div>
          <div className="search-button-container">
            <button className="search-button" type="submit">Search</button>
          </div>
        </form>
        <form onSubmit={this.handleSubmit} className="search-form desktop">
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
            {divItemsDesktop}
          </div>
        </form>
      </>
    );
  }
}
