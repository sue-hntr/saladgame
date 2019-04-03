import React from "react";
import "./style.css";

function SaladCard(props) {
  return (
   <div onClick={ () => {props.handleClick(props.id)}} >
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
      </div>
    </div>
  );
}

export default SaladCard;
