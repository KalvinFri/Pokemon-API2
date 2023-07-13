// imports
import React from 'react';
import './home.css'

const Home = () =>{
  return (
    // Text on screen, and sets things in classes so they can be styled with css
    <div className='Home'>

      <h3>Home</h3>
        <p>Welcome to Pokedex!</p>
        <p>Check out all the pokemon at Gallery or search one specific one at Inspect</p>
    </div>
  );
}
export default Home;