import React from "react";

export default function CountryListInput(props) {
  const { countryList, getSelectedCountry } = props;
  return (
    <form className="text-xl my-5 xs:mx-3 xs:flex xs:flex-col xs:items-center">
      <label htmlFor="countries">Choose a country: </label>
      <select
        className="border border-black"
        name="countries"
        id="countries"
        onChange={getSelectedCountry}
      >
        <option value="----------">----------</option>
        {countryList.length !== 0 &&
          countryList.countries.map((country) => {
            return (
              <option
                key={`${country.name.toLowerCase()}-select`}
                value={country.name}
              >
                {country.name}
              </option>
            );
          })}
      </select>
    </form>
  );
}
