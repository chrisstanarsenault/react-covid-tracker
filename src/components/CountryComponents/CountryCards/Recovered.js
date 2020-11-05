import React from "react";

export default function CountryRecovered(props) {
  return (
    <article>
      <h3>Recovered</h3>
      <p>{props.recovered.value}</p>
    </article>
  );
}
