import React, { useState, useEffect, Fragment } from "react";

import Confirmed from "./Confirmed";
import Recovered from "./Recovered";
import Deaths from "./Deaths";
import ProvinceCard from "./ProvinceCard";
import CountryListInput from "../Inputs/CountryListInput";
import ProvinceStateList from "../Inputs/ProvinceStateList";

export default function CountryCard() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCountryData, setSelectedCountryData] = useState({
    countryData: null,
    dailyData: null,
  });
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedProvinceData, setSelectedProvinceData] = useState({});

  const getSelectedCountry = (e) => {
    setSelectedCountry(e.target.value);
    fetch(
      `https://covid19.mathdro.id/api/countries/${e.target.value.toLowerCase()}`
    )
      .then((response) => response.json())
      .then((data) =>
        setSelectedCountryData({ countryData: data, dailyData: null })
      );
  };

  const getSelectedProvinceData = (e) => {
    setSelectedProvince(e.target.value);

    fetch(
      `https://covid19.mathdro.id/api/countries/${selectedCountry}/confirmed`
    )
      .then((response) => response.json())
      .then((data) => {
        data.forEach((i) => {
          if (i.provinceState === e.target.value) {
            setSelectedProvinceData(i);
          }
        });
      });
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
      <h2>Specific Country Information</h2>
      <CountryListInput
        getSelectedCountry={getSelectedCountry}
        countryList={countryList}
      />
      {selectedCountryData.countryData && (
        <Fragment>
          <h3>Stats For: {selectedCountry}</h3>
          {selectedCountry === "Canada" && (
            <ProvinceStateList
              selectedCountry={selectedCountry}
              getSelectedProvinceData={getSelectedProvinceData}
            />
          )}
          <Confirmed
            confirmed={selectedCountryData.countryData.confirmed.value}
          />
          <Recovered
            recovered={selectedCountryData.countryData.recovered.value}
          />
          <Deaths deaths={selectedCountryData.countryData.deaths.value} />
        </Fragment>
      )}
      {Object.keys(selectedProvinceData).length !== 0 && (
        <ProvinceCard provinceData={selectedProvinceData} />
      )}
    </section>
  );
}
