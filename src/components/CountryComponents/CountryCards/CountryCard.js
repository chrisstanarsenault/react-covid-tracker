import React, { useState, useEffect, Fragment } from "react";

import Confirmed from "./Confirmed";
import Recovered from "./Recovered";
import Deaths from "./Deaths";
import ProvinceCard from "./ProvinceCard";
import CountryListInput from "../Inputs/CountryListInput";
import ProvinceStateList from "../Inputs/ProvinceStateList";

export default function CountryCard(props) {
  const { addCommas } = props;

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
        if (selectedProvince) {
          setSelectedProvinceData([]);
        }
      });
  }, [selectedCountryData]);

  return (
    <section className="border-2 rounded shadow-lg flex flex-col items-center mt-10 mb-5 bg-white">
      <h2 className="text-4xl font-bold">Specific Country Information</h2>
      <CountryListInput
        getSelectedCountry={getSelectedCountry}
        countryList={countryList}
      />
      {selectedCountryData.countryData && (
        <Fragment>
          <h3 className="text-3xl">
            Stats For: <span className="text-4xl">{selectedCountry}</span>
          </h3>
          {selectedCountry === "Canada" && (
            <ProvinceStateList
              selectedCountry={selectedCountry}
              getSelectedProvinceData={getSelectedProvinceData}
            />
          )}
          <div className="flex xl:flex-row xs:flex-col justify-center xl:space-x-32 xs:space-x-0 xl:space-y-0 p-4 xs:space-y-10">
            <Confirmed
              confirmed={addCommas(
                selectedCountryData.countryData.confirmed.value
              )}
            />
            <Recovered
              recovered={addCommas(
                selectedCountryData.countryData.recovered.value
              )}
            />
            <Deaths
              deaths={addCommas(selectedCountryData.countryData.deaths.value)}
            />
          </div>
        </Fragment>
      )}
      {Object.keys(selectedProvinceData).length !== 0 && (
        <ProvinceCard
          provinceData={selectedProvinceData}
          addCommas={addCommas}
        />
      )}
    </section>
  );
}
