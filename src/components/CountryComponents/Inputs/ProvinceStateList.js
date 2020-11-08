import React, { useState, useEffect } from "react";

export default function ProvinceStateList(props) {
  const { selectedCountry, getSelectedProvinceData } = props;
  const [provStates, setProvStates] = useState([]);

  useEffect(() => {
    fetch(
      `https://covid19.mathdro.id/api/countries/${selectedCountry}/confirmed`
    )
      .then((response) => response.json())
      .then((data) => {
        data.forEach((i) => setProvStates((prev) => [...prev, i]));
      });
  }, [selectedCountry]);

  const getOptionsToShow = (provState, index) => {
    if (provState.admin2 && provState.provinceState) {
      return (
        <option
          key={`${provState.admin2}-option-${index}`}
          value={`${provState.admin2}`}
        >
          {provState.admin2}
        </option>
      );
    } else if (!provState.admin2 && provState.provinceState) {
      return (
        <option
          key={`${provState.provinceState}-option-${index}`}
          value={`${provState.provinceState}`}
        >
          {provState.provinceState}
        </option>
      );
    } else if (!provState.provinceState && !provState.admin2) {
      return <option value="no state">No province/state details</option>;
    }
  };
  return (
    <form className="text-xl mt-3 mb-5 xs:mx-3 xs:flex xs:flex-col xs:items-center">
      <label htmlFor="provinces">Choose a province: </label>
      <select
        className="border border-black"
        name="provinces"
        id="provinces"
        onChange={getSelectedProvinceData}
      >
        <option>--------------</option>
        {provStates.length !== 0 &&
          provStates.map((provState, index) =>
            getOptionsToShow(provState, index)
          )}
      </select>
    </form>
  );
}
