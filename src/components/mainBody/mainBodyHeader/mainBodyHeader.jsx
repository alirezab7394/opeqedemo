import React, { Component } from "react";

import "./mainBodyHeader.scss";

export default class MainBodyHeader extends Component {
  state = { delivery: "true" };
  render() {
    let { delivery } = this.state;
    return (
      <div className="MBHeader">
        <div className="MBHeader-bar flex-11">
          <div className="MBHeader-dtype">
            <div
              className={delivery ? "MBHeader-dtype__d1" : "MBHeader-dtype__p1"}
            >
              {delivery ? "ASAP Delivery" : "ASAP Pickup"}
            </div>
            <div
              className={delivery ? "MBHeader-dtype__d2" : "MBHeader-dtype__p2"}
            >
              {delivery ? "What's Your Address ?" : "395 Santa Monica Pier"}
            </div>
          </div>
          <button className="blackButton" style={{ margin: "0 20px" }}>
            Change
          </button>
          <div className="MBHeader-selector">
            <div
              className="MBHeader-selector__d "
              onClick={() => this.setState({ delivery: true })}
            >
              Delivery{" "}
            </div>
            <div className="MBHeader-selector__or">or</div>
            <div
              className="MBHeader-selector__p"
              onClick={() => this.setState({ delivery: false })}
            >
              Pickup
            </div>
            <div className="divider"></div>
            <div className="MBHeader-selector__c">Catering</div>
            <div
              className="MBHeader-selector__active"
              style={{
                width: delivery ? "59px" : "47px",
                transform: delivery ? "translateX(0px)" : "translateX(84px)"
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
