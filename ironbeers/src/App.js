import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import addBeer from './components/addBeer.js';
import AllBeers from './components/AllBeers';
import BeerDetail from './components/BeerDetail';
import RandomBeer from './components/RandomBeer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={AllBeers} />
          <Route exact path="/beers/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={addBeer} />
          <Route path="/beers/:id" component={BeerDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
