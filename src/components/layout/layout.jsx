import React, { useState } from "react";
import "./layout.scss";
import Header from "../header/header";
import MainImage from "../mainImage/mainImage";
import MainBody from "../mainBody/mainBody";

export default function Layout() {
  const [headerColor, setheaderColor] = useState(0);
  let setHeaderColor = () => {
    if (window.scrollY < 82) setheaderColor(0);
    else setheaderColor(1);
  };
  return (
    <div
      className="layout"
      onWheel={() => setHeaderColor()}
      onScroll={() => setHeaderColor()}
    >
      <Header headerColor={headerColor} />
      <MainImage />
      <MainBody />
    </div>
  );
}
