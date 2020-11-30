import React from 'react';
import BeersAPI from '../utils/api';

class addBeer extends React.Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  };
  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    const beersService = new BeersAPI();
    beersService.AddOne(this.state).then(() => {
      //Character at this state got added
      //Redirect to the characters list
      this.props.history.push('/beers');
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          ></input>
          <label>Tagline:</label>
          <input
            type="text"
            name="tagline"
            onChange={this.handleChange}
            value={this.state.tagline}
          ></input>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            onChange={this.handleChange}
            value={this.state.description}
          ></input>
          <label>First Brewed:</label>
          <input
            type="text"
            name="first-brewed"
            onChange={this.handleChange}
            value={this.state.first_brewed}
          ></input>
          <label>Brewers Tips:</label>
          <input
            type="text"
            name="description"
            onChange={this.handleChange}
            value={this.state.brewers_tips}
          ></input>
          <label>Attenuation:</label>
          <input
            type="text"
            name="description"
            onChange={this.handleChange}
            value={this.state.attenuation_level}
          ></input>
          <label>Contributed By:</label>
          <input
            type="text"
            name="description"
            onChange={this.handleChange}
            value={this.state.contributed_by}
          ></input>
          <button type="submit">Add New</button>
        </form>
      </div>
    );
  }
}

export default addBeer;
