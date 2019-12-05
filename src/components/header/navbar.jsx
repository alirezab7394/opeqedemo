import React from "react";

import "./navbar.scss";
import { ReactComponent as Logo } from "../../assets/shopBag.svg";
export default function navbar({ iconColor }) {
  return (
    <div className="navbar">
      <button className="cristalButton">Reservation</button>
      <button className="cristalButton">Orders</button>
      <button className="blackButton">Log In</button>
      <button className="greenTransparentButton">Sign Up</button>
      <button className="transparentButton">
        <Logo
          className="navbar-icon"
          style={{ fill: iconColor === 1 ? "rgb(105, 105, 105)" : "" }}
        />
      </button>
    </div>
  );
}
