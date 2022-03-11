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

    if (loading)
        return <p className="text-3xl mt-5 text-center font-bold">Loading...</p>
    if (error)
        return <p className="text-3xl mt-5 text-center font-bold">Error :(</p>
    if (!data)
        return (
            <p className="text-3xl mt-5 text-center font-bold">
                there is no data
            </p>
        )

    const { country }: { country: CountryInfo } = data
    // TODO: I didn't manage to type useQuery properly, this is a temporary fix.
    // const country = data.country as CountryInfo

    return (
        <div className=".h-screen flex justify-center">
            <div className="max-w-md w-full my-5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-400 dark:border-gray-700">
                <div className="flex flex-col items-center p-5">
                    <div className="flex flex-row">
                        <h1 className="mb-1 text-xl font-medium text-gray-900 dark:text-white ">
                            {country.name}
                        </h1>
                        <span className="mx-0.5 -translate-y-0.5">
                            {country.emoji}
                        </span>
                    </div>

                    <span className="text-lg text-gray-500 dark:text-gray-400">
                        {country.code}
                    </span>

                    <h2 className="text-xl font-medium text-center text-gray-900">
                        Languages
                    </h2>
                    <div className="flex flex-row flex-wrap mt-2 justify-center">
                        {country.languages.map((language) => (
                            <div className="bg-indigo-400 m-2 p-1 px-5 rounded text-white">
                                <p key={language.name}>{language.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
