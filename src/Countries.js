import React from "react";

import "./App.css";

class Countries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
    };
  }

  getCountries = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    this.setState({
      countries: data,
    });
  };

  componentDidMount() {
    console.log("Mounting");
    this.getCountries();
  }

  conuntry = {
    name: "India",
    flag: "https://flagcdn.com/in.svg",
    capital: "Delhi",
  };

  render() {
    // this.getCountries();
    //[<h1>1</h1>, <h1>2</h1>, <h1>3</h1>]
    console.log(this.state.countries);
    return (
      <div
        style={{
          display: "flex",
          backgroundColor: "lightblue",
          flexWrap: "wrap",
          minHeight: "100vh",
          overflowY: "auto",
          padding: "25px",
        }}
      >
        {this.state.countries.map((country) => {
          // console.log(country.name.common);
          return (
            <div
              style={{
                backgroundColor: "white",
                height: "300px",
                width: "200px",
                margin: "20px",
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: "30px",
              }}
            >
              <img
                src={country.flags.svg}
                height="100px"
                width="180px"
                alt="country flag"
              />
              <br />
              <br />
              <div>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{country.name.common}</div>
              <br />
              <br />
              <br />
              <a href={`/countries/FBC/${country.name.common}`}>View Details</a>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Countries;
