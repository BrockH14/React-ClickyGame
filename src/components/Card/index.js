import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} 
            role="img"
            aria-label="click item"
            onClick={() => props.handleClick(props.id)}
            />
        </div>
      </div>
  );
}

export default FriendCard;
