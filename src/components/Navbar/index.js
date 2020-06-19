import React from "react";
import NavMes from "../Navmes";
import "./style.css";

// Component for the Navbar
function Navbar(props) {
    return (
      <nav className="navbar">
        <ul>
          <li className="brand">
            <a href="/">Clicky Game</a>
          </li>
          <NavMes score={props.score} topScore={props.topScore} />
          <li>
            Score: {props.score} | Top Score: {props.topScore}
          </li>
        </ul>
      </nav>
    );
  }
export default Navbar;