import React from "react";
// import Counter from "../Counter";
import "./style.css";

function Navbar(props) {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li className="brand">
            <a href="/">Clicky Game</a>
            </li>
          <li className="">
            Click an image to begin!
          </li>
          <li>
            Current Score: {props.count}&nbsp;&nbsp;|&nbsp;&nbsp;Top Score: {props.score}
          </li>
        </ul>
      </nav>
    </div>

  )
}

export default Navbar;
