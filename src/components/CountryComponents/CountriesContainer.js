import React from "react";

import GlobalCard from "./CountryCards/GlobalCard";
import CountryCard from "./CountryCards/CountryCard";

export default function CountriesContainer() {
  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <section>
      <h1 className={"text-6xl xs:text-5xl font-bold text-center mt-3"}>
        Chris's React Covid Tracker
      </h1>
      <GlobalCard addCommas={numberWithCommas} />
      <CountryCard addCommas={numberWithCommas} />
    </section>
  );
}
