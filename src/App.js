import React, { Component } from "react";
import CountryList from "./components/CountryList";

class App extends Component {
  state = {
    countries: [],
    search: null,
  };

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ countries: data });
      })
      .catch(console.log);
  }

  handleSearch = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
  };

  render() {
    // eslint-disable-next-line array-callback-return
    const countriesProp = this.state.countries.filter((data) => {
      if (this.state.search == null) {
        return data;
      } else if (
        data.name.toLowerCase().includes(this.state.search.toLowerCase())
      ) {
        return data;
      }
    });

    return (
      <CountryList countries={countriesProp} handleSearch={this.handleSearch} />
    );
  }
}

export default App;
