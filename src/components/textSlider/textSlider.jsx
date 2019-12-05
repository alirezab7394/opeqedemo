import React, { Component } from "react";
import "./textSlider.scss";
import Circles from "./circles";
import Caption from "./caption";
export default class TextSlider extends Component {
  state = { active: 0 };

  render() {
    let setActive = index => {
      this.setState({ active: index });
      clearTimeout(timeOut);
    };
    let timeOut;
    let { captions } = this.props;
    let { active } = this.state;
    function setActiveTime() {
      timeOut = setTimeout(() => {
        if (active === captions.length - 1) setActive(0);
        if (active < captions.length - 1) setActive(active + 1);
      }, 5000);
    }
    setActiveTime();
    return (
      <div className="textSlider">
        <div className="textandbutton flex-11">
          <Caption captions={captions} active={active} />
        </div>
        <Circles
          activeNum={this.state.active}
          circlesNum={captions}
          setActive={setActive}
        />
      </div>
    );
  }
}
