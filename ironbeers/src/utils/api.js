import axios from 'axios';

class BeersAPI {
  constructor() {
    let service = axios.create({
      baseURL: `https://ih-beers-api2.herokuapp.com/beers`,
    });
    this.service = service;
  }
  getAll() {
    return this.service.get(`/`);
  }
  getBeer(id) {
    return this.service.get(`/${id}`);
  }
  getRandomBeer() {
    return this.service.get(`/random`);
  }
  AddOne(beer) {
    return this.service.post(`/new`, beer);
  }
  GetSearch(query) {
    return this.service.get(`/search?q=${query}`);
  }
}
export default BeersAPI;
