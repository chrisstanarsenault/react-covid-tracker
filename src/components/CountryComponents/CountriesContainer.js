import React from "react";

import GlobalCard from "./CountryCards/GlobalCard";
import CountryCard from "./CountryCards/CountryCard";

export default function CountriesContainer() {
  return (
    <section>
      <h1>Chris's React Covid Tracker</h1>
      <GlobalCard />
      <CountryCard />
    </section>
  );
}
