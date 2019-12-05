import React from "react";
import "./mainBody.scss";
import MainBodyHeader from "./mainBodyHeader/mainBodyHeader";
import SlidersList from "./slidersList";
export default function mainBody() {
  return (
    <div className="mainBody">
      <MainBodyHeader />
      <SlidersList />
    </div>
  );
}
