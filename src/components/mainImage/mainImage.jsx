import React from "react";

import TextSlider from "../textSlider/textSlider";
import "./mainImage.scss";
import HomeHeader from "../../assets/HomeHeader.jpg";
import captions from "./captions";
export default function mainImage() {
  return (
    <div
      className="mainImage"
      style={{ backgroundImage: `url(${HomeHeader})` }}
    >
      <TextSlider captions={captions} />
    </div>
  );
}
