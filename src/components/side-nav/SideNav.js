import React, { Component } from "react";
import "./SideNav.scss";

const mediaQueryLimit = window.matchMedia("(max-width: 992px)");

export class SideNav extends Component {
  closeSideMenu = () => {
    let sideNav = document.getElementById("sideNav");
    sideNav.style.transition = "0.8s";
    sideNav.style.marginLeft = "-250px";

    let buttonClose = document.getElementById("close-button");
    buttonClose.style.display = "none";

    let buttonOpen = document.getElementById("open-button");
    buttonOpen.style.display = "block";
    buttonOpen.style.transition = "0.8s";
    buttonOpen.style.marginRight = "-50px";
    buttonOpen.style.color = "#3d3d3d";
    buttonOpen.style.fontSize = "25px";
  };

  openSideMenu = () => {
    let sideNav = document.getElementById("sideNav");
    sideNav.style.transition = "0.8s";
    sideNav.style.marginLeft = "0px";

    let buttonClose = document.getElementById("close-button");
    buttonClose.style.display = "block";

    let buttonOpen = document.getElementById("open-button");
    buttonOpen.style.display = "none";
  };

  mediaQuery = () => {
    if (mediaQueryLimit.matches) {
      /******* MOBILE VIEW *******/

      //Create dropdown button
      let sideNav = document.getElementById("sideNav");
      let dropDownButton = document.createElement("a");
      dropDownButton.id = "dropDownButton";
      dropDownButton.href = "#";
      dropDownButton.innerHTML = `<i id="dropDownButtonIcon" class="fas fa-bars"></i>`;

      //Make sure all links are NOT shown
      let links = document.getElementsByClassName("link");
      for (const link of links) {
        link.style.display = "none";
      }
      //Add a functin to the button
      dropDownButton.addEventListener("click", () => {
        let links = document.getElementsByClassName("link");
        for (const link of links) {
          if (link.style.display === "block") {
            link.style.display = "none";

            let dropDownButtonIcon = document.getElementById(
              "dropDownButtonIcon"
            );
            dropDownButtonIcon.style.color = "#f4f4f4";
          } else {
            link.style.display = "block";
            let dropDownButtonIcon = document.getElementById(
              "dropDownButtonIcon"
            );
            dropDownButtonIcon.style.color = "#c4e538";
          }
        }
      });
      //Insert button on side nav beginnig
      sideNav.insertAdjacentElement("afterbegin", dropDownButton);

      //Hide side close button
      let buttonClose = document.getElementById("close-button");
      buttonClose.style.display = "none";
    } else {
      /******* DESKTOP VIEW *******/
      let buttonClose = document.getElementById("close-button");
      buttonClose.style.display = "block";

      let dropDownButton = document.getElementById("dropDownButton");
      if (dropDownButton != null) {
        dropDownButton.remove();
      }

      //Make sure all links are shown
      let links = document.getElementsByClassName("link");
      for (const link of links) {
        link.style.display = "block";
      }
    }
  };

  componentDidMount() {
    this.mediaQuery();
    mediaQueryLimit.addListener(this.mediaQuery);
  }

  render() {
    return (
      <div id="sideNav" className="side-nav">
        <a
          href="#"
          onClick={this.closeSideMenu}
          className="side-nav__btn-close"
          id="close-button"
        >
          <i className="fas fa-times"></i>
        </a>
        <a
          href="#"
          onClick={this.openSideMenu}
          className="side-nav__btn-open"
          id="open-button"
        >
          <i id="open-button-icon" className="fas fa-bars"></i>
        </a>
        {this.props.children}
      </div>
    );
  }
}

export default SideNav;
