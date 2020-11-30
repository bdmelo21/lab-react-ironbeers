import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <BrowserRouter>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/beers/random-beer">Random</NavLink>
      </BrowserRouter>
    </nav>
  );
}

export default NavBar;
