import React, { useState, useEffect, Fragment } from "react";

import Confirmed from "./Confirmed";
import Recovered from "./Recovered";
import Deaths from "./Deaths";

export default function CountryCard() {
  const [globalApiData, setGlobalApiData] = useState({
    globalData: null,
    dailyData: null,
  });

  useEffect(() => {
    const fetchGlobalData = async () => {
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
      //   setGlobalApiData({ countryData: resJson[0], dailyData: resJson[1] });
      // } catch (err) {
      //   console.log(err);
      // }
      fetch("https://covid19.mathdro.id/api/")
        .then((response) => response.json())
        .then((data) => setGlobalApiData({ globalData: data }));
    };
    fetchGlobalData();
  }, []);

  return (
    <section>
      <h2>Global Information</h2>
      {/* !globalApiData.dailyData <-- api currently down, add back in to ternary when working*/}
      {!globalApiData.globalData ? (
        <p>Loading...</p>
      ) : (
        <Fragment>
          <Confirmed confirmed={globalApiData.globalData.confirmed} />
          <Recovered recovered={globalApiData.globalData.recovered} />
          <Deaths deaths={globalApiData.globalData.deaths} />
        </Fragment>
      )}
    </section>
  );
}
