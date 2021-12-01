import { Component } from "react";
import ReactMapGL from "react-map-gl";

class CountryDetailCBC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: null,
    };
  }

  getCountryDetails = async () => {
    const res = await fetch(
      "https://restcountries.com/v3.1/name/India?fullText=true"
    );

    const [data] = await res.json();
    console.log(data);
    this.setState({
      country: data,
    });
  };

  componentDidMount() {
    this.getCountryDetails();
  }

  render() {
    const country = this.state.country;

    return (
      country && (
        <div
          style={{
            padding: "20px",
          }}
        >
          <h1>{country.name.common}</h1>
          <div
            style={{
              display: "flex",
            }}
          >
            <div style={{ width: "50%" }}>
              <img
                src={country.flags.svg}
                alt="India"
                height="70%"
                width="70%"
              />
            </div>
            <div style={{ width: "50%", padding: "10px" }}>Map</div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
              }}
            >
              <div
                style={{
                  width: "10%",
                }}
              >
                <b>Region</b>
                <p>{country.region}</p>
              </div>
              <div
                style={{
                  width: "10%",
                }}
              >
                <b>Sub Region</b>
                <p>{country.subregion}</p>
              </div>
              <div
                style={{
                  width: "20%",
                }}
              >
                <b>Languges</b>
                <p>{Object.values(country.languages).join(", ")}</p>
              </div>
              <div
                style={{
                  width: "10%",
                }}
              >
                <b>Population</b>
                <p>{country.population}</p>
              </div>
              <div
                style={{
                  width: "10%",
                }}
              >
                <b>Timezone</b>
                <p>{country.timezones}</p>
              </div>
            </div>
          </div>
        </div>
      )
    );
  }
}

export default CountryDetailCBC;
