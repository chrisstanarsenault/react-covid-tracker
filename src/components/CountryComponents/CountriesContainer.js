import React, { useState, useEffect } from "react";

import GlobalCard from "./CountryCards/GlobalCard";
import CountryCard from "./CountryCards/CountryCard";
import CountryListInput from "./Inputs/CountryListInput";

export default function CountriesContainer() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCountryData, setSelectedCountryData] = useState("");

  const getSelectedCountry = (e) => {
    setSelectedCountry(e.target.value);

    fetch(
      `https://covid19.mathdro.id/api/countries/${e.target.value.toLowerCase()}`
    )
      .then((response) => response.json())
      .then((data) => setSelectedCountryData(data));
  };

  useEffect(() => {
    fetch("https://covid19.mathdro.id/api/countries")
      .then((response) => response.json())
      .then((data) => {
        setCountryList(data);
      });
  }, []);
  return (
    <section>
      <h1>Chris's React Covid Tracker</h1>
      <GlobalCard />
      <CountryListInput
        countries={countryList}
        getSelectedCountry={getSelectedCountry}
      />
      <CountryCard
        selectedCountry={selectedCountry}
        selectedCountryData={selectedCountryData}
      />
    </section>
  );
}
