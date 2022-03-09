import React from "react";
import { useParams } from "react-router";
import { useQuery, gql } from "@apollo/client";

const GET_COUNTRY = gql`
  query Country($code: ID!) {
    country(code: $code) {
      name
      code
    }
  }
`;

interface CountryDetailsProps {
  code: string;
  name: string;
  emoji: string;
  languages: {
    name: string;
  }[];
}

interface CountryVariable {
  code: string | undefined;
}

export const CountryDetails = () => {
  const { code } = useParams();

  const { loading, error, data } = useQuery<
    CountryDetailsProps,
    CountryVariable
  >(GET_COUNTRY, {
    variables: { code },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const country = data ? data : undefined;

  return (
    <div>
      {country && (
        <div>
          <p>{country.code}</p>
          <p>{country.name}</p>
          <p>{country.emoji}</p>
          {country.languages.map((language) => (
            <p>{language.name}</p>
          ))}
        </div>
      )}
    </div>
  );
};
