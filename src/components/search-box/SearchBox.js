import React, { Component } from "react";
import "./Search.scss";

const onKeyUp = (event, callback) => {
  let input = document.getElementById("searchBoxInput");

  callback(input.value);
};

export class SearchForm extends Component {
  render() {
    const { callback } = this.props;
    return (
      <div className="search-box-container">
        <div className="search-box">
          <input
            onKeyUp={event => onKeyUp(event, callback)}
            type="text"
            className="search-box__text"
            placeholder="Type here"
            id="searchBoxInput"
            // ref={node => (input = node)}
          />
          <a className="search-box__button" href="#">
            <i className="fas fa-search"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default SearchForm;
