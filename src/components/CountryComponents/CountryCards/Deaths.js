import React from "react";

export default function CountryDeath(props) {
  return (
    <article className="border text-center bg-red-400 text-red-200 w-64 py-6 shadow-xl rounded-xl font-bold">
      <h3 className="text-4xl">Deaths</h3>
      <p className="text-3xl">{props.deaths}</p>
    </article>
  );
}
