import React from 'react';
import {  Link } from "react-router-dom";
import "./navbar.css";

const NavBar= () =>{
  return (
    <div className="NavBar">
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/gallery">Gallery</Link>
        </li>
        <li>
            <Link to="/inspect">Inspect</Link>
        </li>
    </ul>
</div>
  );
}
export default NavBar;
