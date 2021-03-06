import React from 'react';
import BeersAPI from '../utils/api';

class BeerDetail extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    let newId = this.props.match.params.id;
    const beersService = new BeersAPI();
    beersService.getBeer(newId).then((response) => {
      console.log(response);
      this.setState({
        beers: response.data,
      });
    });
  }

  render() {
    return (
      <div>
        <img src={this.state.beers.image_url}></img>
        <h1>{this.state.beers.name}</h1>
        <h3>{this.state.beers.tagline}</h3>
        <h3>{this.state.beers.attenuation_level}</h3>
        <p>{this.state.beers.first_brewed}</p>
        <p>{this.state.beers.description}</p>
        <p>
          <strong>Contributed by:</strong> {this.state.beers.contributed_by}
        </p>
      </div>
    );
  }
}

export default BeerDetail;
