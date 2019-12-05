import React from "react";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./header.scss";

import Navbar from "./navbar";
export default function Header({ headerColor }) {
  return (
    <header
      style={{
        backgroundColor: `${
          headerColor === 0 ? "rgb(239, 239, 239)" : "rgb(207, 207, 207)"
        }`
      }}
    >
      <div className="header flex-11">
        <div>
          <Logo className="header-logo" />
        </div>
        <Navbar iconColor={headerColor} />
      </div>
    </header>
  );
}
