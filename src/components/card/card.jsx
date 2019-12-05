import React from "react";
import "./card.scss";
export default function card({ food }) {
  console.log(food.image);

  return (
    <div className="card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${food.image})` }}
      />
      <div className="card-info">
        <div className="card-info-title">{food.title}</div>
      </div>
    </div>
  );
}
