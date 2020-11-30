import React from 'react';
import BeersAPI from '../utils/api';
import { Link } from 'react-router-dom';

class AllBeers extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    const beersService = new BeersAPI();
    beersService.getAll().then((response) => {
      console.log(response);
      this.setState({
        beers: response.data,
      });
    });
    console.log(this.state.beers);
  }
  render() {
    return (
      <div>
        {this.state.beers.map((beer) => {
          return (
            <div>
              <img src={beer.image_url}></img>
              <Link to={`/beers/${beer._id}`}>
                <h1>{beer.name}</h1>
              </Link>
              <p>{beer.tagline}</p>
              <p>
                <strong>Created by:</strong> {beer.name}
              </p>
              <hr></hr>
            </div>
          );
        })}
      </div>
    );
  }
}
export default AllBeers;
