import React from "react";
// import Counter from "../components/Counter";
import "./style.css";

function InfoHeader(props) {
  return (
    <div className="wider">
        <header className="header">
            <h1>
                Healthy Salad Clicky Game!
            </h1>
            <h3>
                Click on an ingredient to earn points, but you can only add each ingredient one time!
            </h3>
        </header>
    </div>

  )
}

export default InfoHeader;
