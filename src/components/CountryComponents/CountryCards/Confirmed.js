import React from "react";

export default function CountryConfirm(props) {
  return (
    <article>
      <h3>Confirmed</h3>
      <p>{props.confirmed}</p>
    </article>
  );
}
