import React, { Component } from "react";
import "./HeaderText.scss";

export class HeaderText extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <h2 className="header-text">{children}</h2>
      </div>
    );
  }
}

export default HeaderText;
