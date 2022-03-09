import React, { useState, useMemo } from "react";
import { useQuery, gql } from "@apollo/client";
import Select from "react-select";
import classes from "./Countries.module.css";
import { CountryItem } from "./CountryItem";
// import { continentsOptions } from "../helpers/continentsOptions";
// import { getCountries } from "../helpers/getCountries";
// import { filterCountries } from "../helpers/filterCountries";

interface Country {
  code: string;
  name: string;
  // later emoji and languages
}

interface Continent {
  code: string;
  name: string;
  countries: Country[];
}

interface ContinentData {
  continents: Continent[];
}

const GET_ALL_DATA = gql`
  query {
    continents {
      code
      name
      countries {
        code
        name
      }
    }
  }
`;

export const Countries = () => {
  const { loading, error, data } = useQuery<ContinentData>(GET_ALL_DATA);
  const [option, setOption] = useState("");
  const [text, setText] = useState("");

  console.log(data);
  // // const countries = useMemo(() => allCountries(data), [data]);
  // const continents = useMemo(() => continentsOptions(data), [data]);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  // const selectedCountries = getCountries(data, option);
  // const filteredCountries = filterCountries(selectedCountries, text);

  // const handleChange = (option) => {
  //   setOption(option.value);
  // };

  // const handleTextChange = (e) => {
  //   setText(e.target.value);
  // };

  return (
    <>
      <h1>Country list:</h1>
      {loading && <p>{loading}</p>}
      {error && <p>{error}</p>}

      {/* <input value={text} onChange={(e) => handleTextChange(e)}></input> */}
      {/* <Select options={continents} onChange={handleChange}></Select> */}

      <div className={classes.container}>
        {/* {filteredCountries.map((country) => (
          <CountryItem
            name={country.name}
            code={country.code}
            key={country.code}
          />
        ))} */}
      </div>
    </>
  );
};
