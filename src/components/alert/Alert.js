import React, { Component } from "react";
import "./Alert.scss";

let removeAlert = () => {
  document.getElementById("alertBar").remove();
};

export class Alert extends Component {
  render() {
    const { show, alertType, text } = this.props;

    if (show) {
      return (
        <div className={`${alertType} alert-bar`} id="alertBar">
          <div className="alert-bar__content">
            <p className="alert-bar__content--p">{text}</p>
            <button
              className="alert-bar__content--button"
              onClick={removeAlert}
            >
              <i class="fas fa-bomb"></i>
            </button>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default Alert;
