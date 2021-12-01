import React from "react";
import "./App.css";
import Countries from "./Countries";
import CountryDetailFBC from "./CountryDetailFBC";
import CountryDetailCBC from "./CountryDetailCBC";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/**
 * CountryDetailFBC - Function based component - http://localhost:3000/countries/FBC/india
 * CountryDetailCBC - Class based component - http://localhost:3000/countries/CBC/india
 */

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/countries">
            <Route index element={<Countries />} />
            <Route path="FBC/:country" element={<CountryDetailFBC />} />
            <Route path="CBC/:country" element={<CountryDetailCBC />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;

// /countries ----- list page
// /countries/countryName ---detail page
