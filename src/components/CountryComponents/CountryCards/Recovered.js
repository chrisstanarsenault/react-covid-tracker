import React from "react";

export default function CountryRecovered(props) {
  return (
    <article className="border text-center bg-green-400 text-green-200 w-64 py-6 shadow-xl rounded-xl font-bold">
      <h3 className="text-4xl">Recovered</h3>
      <p className="text-3xl">{props.recovered}</p>
    </article>
  );
}
