import React, { Fragment } from "react";

import Confirmed from "./Confirmed";
import Recovered from "./Recovered";
import Deaths from "./Deaths";

export default function ProvinceCard(props) {
  const { provinceData, addCommas } = props;
  return (
    <Fragment>
      <hr className="mt-3 w-2/3 border-gray-600"></hr>
      <section className="mt-3 mb-5">
        <h3 className="text-3xl text-center">
          Stats for:{" "}
          <span className="text-4xl">{provinceData.provinceState}</span>
        </h3>
        <article className="flex xl:flex-row xs:flex-col justify-center xl:space-x-32 xs:space-x-0 xl:space-y-0 p-4 xs:space-y-10">
          <Confirmed confirmed={addCommas(provinceData.confirmed)} />
          <Recovered recovered={addCommas(provinceData.recovered)} />
          <Deaths deaths={addCommas(provinceData.deaths)} />
        </article>
      </section>
    </Fragment>
  );
}
