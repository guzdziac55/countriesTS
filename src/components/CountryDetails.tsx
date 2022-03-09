import { useParams } from 'react-router'
import { useQuery, gql } from '@apollo/client'
import { CountryInfo } from './types'

const GET_COUNTRY = gql`
    query GetCountry($countryCode: ID!) {
        country(code: $countryCode) {
            name
            code
            emoji
            languages {
                name
            }
        }
    }
`

export const CountryDetails = () => {
    const { countryCode } = useParams()

    const { loading, error, data } = useQuery(GET_COUNTRY, {
        variables: { countryCode },
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
    if (!data) return <p>there is no data </p>

    const { country }: { country: CountryInfo } = data

    return (
        <div>
            {country && (
                <div>
                    <p>{country.code}</p>
                    <p>{country.name}</p>
                    <p>{country.emoji}</p>
                    {country.languages.map((language) => (
                        <p key={language.name}>{language.name}</p>
                    ))}
                </div>
            )}
        </div>
    )
}
