import { Component, useEffect, useState } from "react";
import { useParams } from "react-router";
import ReactMapGL from "react-map-gl";

// hooks --> special functions - functional component - must not be inisde any conditionals - use

const CountryDetailFBC = () => {
  // this.state = {
  //   country: null,
  // };

  //useState --- returns --- [variable, setVariable]

  //componentDidMount - useEffect(() => {
  // logic
  // }, [])

  //useEffect

  const [countryDetails, setCountryDetails] = useState(null);
  let params = useParams();
  const [viewport, setViewport] = useState({
    latitude: 22.0,
    longitude: 77.0,
    zoom: 3,
  });

  console.log({ params });

  useEffect(() => {
    const getCountryDetails = async () => {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${params.country}?fullText=true`
      );

      const [data] = await res.json();
      console.log(data);
      setCountryDetails(data);
    };

    (async () => getCountryDetails())();
  }, []);

  return (
    countryDetails && (
      <div
        style={{
          padding: "20px",
        }}
      >
        <h1>{countryDetails.name.common}</h1>
        <div
          style={{
            display: "flex",
          }}
        >
          <div style={{ width: "50%" }}>
            <img
              src={countryDetails.flags.svg}
              alt="India"
              height="70%"
              width="70%"
            />
          </div>
          <div style={{ width: "50%", padding: "10px" }}>
            <ReactMapGL
              {...viewport}
              width="100%"
              height="100%"
              onViewportChange={(viewport) => setViewport(viewport)}
              mapboxApiAccessToken="pk.eyJ1Ijoic21peWFrYXdhIiwiYSI6ImNqcGM0d3U4bTB6dWwzcW04ZHRsbHl0ZWoifQ.X9cvdajtPbs9JDMG-CMDsA"
            />
          </div>
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
              <p>{countryDetails.region}</p>
            </div>
            <div
              style={{
                width: "10%",
              }}
            >
              <b>Sub Region</b>
              <p>{countryDetails.subregion}</p>
            </div>
            <div
              style={{
                width: "20%",
              }}
            >
              <b>Languges</b>
              <p>{Object.values(countryDetails.languages).join(", ")}</p>
            </div>
            <div
              style={{
                width: "10%",
              }}
            >
              <b>Population</b>
              <p>{countryDetails.population}</p>
            </div>
            <div
              style={{
                width: "10%",
              }}
            >
              <b>Timezone</b>
              <p>{countryDetails.timezones}</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default CountryDetailFBC;
