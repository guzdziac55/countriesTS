import React from "react";
import { useParams } from "react-router";
import { useQuery, gql } from "@apollo/client";
import { count } from "console";

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

// interface CountryDetailsProps {
//   code: string;
//   name: string;
//   emoji: string;
//   languages: {
//     name: string;
//   }[];
// }

// interface CountryVariable {
//   code: string | undefined;
// }

export const CountryDetails = () => {
  const { code } = useParams();

  console.log("aaaaaaaaa");
  console.log(code);

  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: { code },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (!data) return <p>there is no data </p>;

  const abc = { ...data.country };
  const { name, emoji, languages } = abc;

  return (
    <div>
      {data && (
        <div>
          <p>{data.code}</p>
          <p>{data.name}</p>
          <p>{data.emoji}</p>
          {/* {data.languages.map((language) => (
            <p>{language.name}</p>
          ))} */}
        </div>
      )}
    </div>
  );
};
