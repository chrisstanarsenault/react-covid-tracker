import React, { useState, useEffect, Fragment } from "react";

import Confirmed from "./Confirmed";
import Recovered from "./Recovered";
import Deaths from "./Deaths";

export default function CountryCard(props) {
  const { addCommas } = props;

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
    <section className="border-2 rounded shadow-lg flex flex-col items-center mt-10 mb-5 bg-white">
      <h2 className="text-4xl font-bold mt-3">Global Information</h2>
      {/* !globalApiData.dailyData <-- api currently down, add back in to ternary when working*/}
      {!globalApiData.globalData ? (
        <p>Loading...</p>
      ) : (
        <div className="flex xl:flex-row justify-center xl:space-x-32 p-4 xs:flex-col xs:space-x-0 xs:space-y-10">
          <Confirmed
            confirmed={addCommas(globalApiData.globalData.confirmed.value)}
          />
          <Recovered
            recovered={addCommas(globalApiData.globalData.recovered.value)}
          />
          <Deaths deaths={addCommas(globalApiData.globalData.deaths.value)} />
        </div>
      )}
    </section>
  );
}
