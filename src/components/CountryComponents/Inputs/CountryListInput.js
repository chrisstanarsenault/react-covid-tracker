import React from "react";

export default function CountryListInput(props) {
  const { countries, getSelectedCountry } = props;
  return (
    <form>
      <label htmlFor="countries">Choose a country: </label>
      <select name="countries" id="countries" onChange={getSelectedCountry}>
        <option value="----------">----------</option>
        {countries.length !== 0 &&
          countries.countries.map((country) => {
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
