import React from "react";
import { useParams } from "react-router";
import { useQuery, gql } from "@apollo/client";

const GET_COUNTRY = gql`
  query Country($code: ID!) {
    country(code: $code) {
      name
      code
      emoji
      languages {
        name
      }
    }
  }
`;

export const CountryDetails = () => {
  const { code } = useParams();

  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: { code },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      CountryDetails
      <p>{data.country.code}</p>
      <p>{data.country.name}</p>
      <p>{data.country.emoji}</p>
      {data.country.languages.map((language) => (
        <p>{language.name}</p>
      ))}
    </div>
  );
};
