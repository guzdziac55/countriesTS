import React, { useState, useMemo } from "react";
import { useQuery, gql } from "@apollo/client";
import Select, { SingleValue } from "react-select";
import { filterCountries } from "../helpers/filterCountries";
import { getCountries } from "../helpers/getCountries";
import { continentsOptions } from "../helpers/continentsOptions";
import { CountryItem } from "./CountryItem";
import classes from "./Countries.module.css";
import { ContinentData, SelectOption } from "./types";

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
  const [option, setOption] = useState<string>("");
  const [text, setText] = useState<string>("");

  console.log("our data");
  console.log(data);

  const continents = useMemo(() => continentsOptions(data), [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (!data) return <div>No data Displayed</div>;

  const selectedCountries = getCountries(data, option);
  const filteredCountries = filterCountries(selectedCountries, text);

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onChangeContinent = (option: SingleValue<SelectOption>) => {
    if (option) setOption(option.value);
  };

  return (
    <>
      <h1>Country list:</h1>
      {loading && <p>{loading}</p>}
      {error && <p>{error}</p>}

      <input value={text} onChange={(e) => onChangeText(e)}></input>
      <Select options={continents} onChange={onChangeContinent}></Select>
      <div className={classes.container}>
        {filteredCountries.map((country) => (
          <CountryItem
            name={country.name}
            code={country.code}
            key={country.code}
          />
        ))}
      </div>
    </>
  );
};
