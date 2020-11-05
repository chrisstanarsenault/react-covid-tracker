import React from "react";

export default function CountryDeath(props) {
  return (
    <article>
      <h3>Deaths</h3>
      <p>{props.deaths.value}</p>
    </article>
  );
}
