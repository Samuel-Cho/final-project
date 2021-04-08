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
            {divItemsMobile}
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
            {divItemsDesktop}
            {/* <div className="column-one-third left">
              <div className="food-type" id="korean">Korean</div>
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
            </div> */}
          </div>
        </form>
      </>
    );
  }
}
