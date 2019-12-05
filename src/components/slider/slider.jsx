import React, { Component } from "react";
import "./slider.scss";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import Food from "../../assets/menu";
import Card from "../card/card";
export default class Slider extends Component {
  state = { move: 0, max: Food.length * 380 + Food.length * 5 * 2 };
  setMove = movement => {
    let { max } = this.state;
    let { move } = this.state;
    if (move + movement >= 0) this.setState({ move: 0 });
    else if (move + movement <= -max) this.setState({ move: -max + 380 });
    else if (!(move + movement > 0)) this.setState({ move: move + movement });
  };
  setBarMove = () => {
    let { max } = this.state;
    let { move } = this.state;

    if (move + 380 >= max) return "0%";
    else if (-move + 380 >= +max) return "100%";
    else if (move === 0) return "0%";
    else if (move < 0) return (-move * 100) / max + "%";
    else if (move >= 0) return (move * 100) / max + "%";
  };
  render() {
    return (
      <div className="slider">
        <div className="slider-title">American</div>

        <div className="slider-bar">
          <div
            className="slider-bar__full"
            style={{
              left: this.setBarMove()
            }}
          ></div>
        </div>
        <div
          className="slider-icon"
          onClick={() => this.setMove(+380)}
          style={{ left: "50px", transform: "rotate(180deg)" }}
        >
          <Arrow className="slider-icon-svg" />
        </div>
        <div
          className="slider-icon"
          onClick={() => this.setMove(-380)}
          style={{ right: "+50px" }}
        >
          <Arrow className="slider-icon-svg" />
        </div>
        <div className="slider-slider">
          <div
            className="slider-slider-inner"
            style={{ transform: `translateX(${this.state.move}px)` }}
          >
            {Food.map(item => (
              <Card food={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
