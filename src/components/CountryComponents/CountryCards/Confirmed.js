import React from "react";

export default function CountryConfirm(props) {
  return (
    <article className="border text-center bg-orange-400 text-orange-200 w-64 py-6 shadow-xl rounded-xl font-bold">
      <h3 className="text-4xl">Confirmed</h3>
      <p className="text-3xl">{props.confirmed}</p>
    </article>
  );
}
