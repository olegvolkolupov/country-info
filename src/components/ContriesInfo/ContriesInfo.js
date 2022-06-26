import React, { Component } from "react";

import { alert } from "@pnotify/core";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/core/dist/PNotify.css";

import Search from "./Search";
import Data from "./Data";

import styles from "./ContriesInfo.module.css";

export default class ContriesInfo extends Component {
  state = {
    info: []
  };

  #URI = "https://restcountries.com/v3.1/name/";

  async renderInfo(countryName) {
    try {
      let countryInfoArray = await this.getCountryInfo(countryName);

      if (countryInfoArray.length > 10) {
        alert({
          text: "Enter the exact name of the country.",
          type: "notice",
          delay: 1500,
        });
      } else {
          this.setState({info: countryInfoArray});
      }
    } catch (error) {
      alert({
        title: "Error",
        text: `No country with this name found.`,
        type: "notice",
        delay: 1500,
      });
    }
  }

  async getCountryInfo(country) {
    try {
      let response = await fetch(this.#URI + country);
      if (response.ok) {
        let data = await response.json();
        return data;
      }
    } catch (error) {
      alert({
        title: "Error",
        text: `${error}`,
        type: "notice",
        delay: 2000,
      });
    }
  }

  handleSearchInput = (event) => {
    if (event.target.value !== "") {
      this.renderInfo(event.target.value);
    }
  };

  handleLink = (event) => {
    this.renderInfo(event.target.innerText);
  }

  render() {
    let {info} = this.state;
    return (
      <div className={styles.display}>
        <Search onHandleSearchInput={this.handleSearchInput} />
        <Data countryInfo={info} onHandleLink={this.handleLink} />
      </div>
    );
  }
}
