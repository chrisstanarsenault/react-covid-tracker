import React, { useState, useEffect, Fragment } from "react";

import Confirmed from "./Confirmed";
import Recovered from "./Recovered";
import Deaths from "./Deaths";
import ProvinceStateList from "../Inputs/ProvinceStateList";

export default function CountryCard(props) {
  const { selectedCountry, selectedCountryData } = props;
  const [countryApiData, setCountryApiData] = useState({
    countryData: null,
    dailyData: null,
  });

  useEffect(() => {
    const fetchCountryData = async () => {
      // daily api is currently down, uncomment when working again and remove single fetch request
      // const urls = [
      //   "https://covid19.mathdro.id/api/",
      //   "https://covid19.mathdro.id/api/daily",
      // ];
      // try {
      //   let res = await Promise.all(urls.map((e) => fetch(e)));
      //   let resJson = await Promise.all(res.map((e) => e.json()));
      //   resJson = resJson.map((e) => {
      //     return e;
      //   });
      //   setCountryApiData({ countryData: resJson[0], dailyData: resJson[1] });
      // } catch (err) {
      //   console.log(err);
      // }
      fetch("https://covid19.mathdro.id/api/")
        .then((response) => response.json())
        .then((data) => setCountryApiData({ countryData: data }));
    };
    fetchCountryData();
  }, []);

  return (
    <section>
      <h2>Specific Country Information</h2>
      {selectedCountryData && (
        <Fragment>
          <h3>Stats For: {selectedCountry}</h3>
          <ProvinceStateList
            countryData={selectedCountryData}
            selectedCountry={selectedCountry}
          />
          <Confirmed confirmed={selectedCountryData.confirmed} />
          <Recovered recovered={selectedCountryData.recovered} />
          <Deaths deaths={selectedCountryData.deaths} />
        </Fragment>
      )}
    </section>
  );
}
