import React from "react";

import Confirmed from "./Confirmed";
import Recovered from "./Recovered";
import Deaths from "./Deaths";

export default function ProvinceCard(props) {
  const { provinceData } = props;
  return (
    <section>
      <h3>Stats for: {provinceData.provinceState}</h3>
      <Confirmed confirmed={provinceData.confirmed} />
      <Recovered recovered={provinceData.recovered} />
      <Deaths deaths={provinceData.deaths} />
    </section>
  );
}
