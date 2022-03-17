import React, { useState, useMemo } from 'react'
import { useQuery, gql } from '@apollo/client'
import Select from 'react-select'
import { filterCountries } from '../helpers/filterCountries'
// import { getCountries } from '../helpers/getCountries'
// import { continentsOptions } from '../helpers/continentsOptions'
import { CountryItem } from './CountryItem'
import { SelectOption } from './types'
import { getContinentsOptionsFromData } from '../helpers/continentsOptionsEasy'

import { ContinentsAndCountriesData } from './typ'
import { getCountriesEasy } from '../helpers/getCountriesEasy'
// import { count } from 'console'

const GET_CONTINENTS_AND_COUNTRIES = gql`
    query {
        continents {
            code
            name
        }
        countries {
            code
            name
            continent {
                code
                name
            }
        }
    }
`

// const GET_ALL_DATA = gql`
//     query {
//         continents {
//             code
//             name
//         }
//         continents {
//             code
//             name
//             countries {
//                 code
//                 name
//             }
//         }
//     }
// `

export const Countries = () => {
    const { loading, error, data } = useQuery<ContinentsAndCountriesData>(
        GET_CONTINENTS_AND_COUNTRIES
    )

    const [option, setOption] = useState<readonly SelectOption[]>([])
    const [text, setText] = useState<string>('')

    const continentsSelectOptions = useMemo(
        () => getContinentsOptionsFromData(data),
        [data]
    )

    if (loading)
        return <p className="text-3xl mt-5 text-center font-bold">Loading...</p>
    if (error)
        return <p className="text-3xl mt-5 text-center font-bold">Error :(</p>
    if (!data)
        return (
            <div className="text-3xl mt-5 text-center font-bold">
                No data Displayed
            </div>
        )

    const { countries } = data

    const selectedCountries = getCountriesEasy(countries, option)
    const filteredCountries = filterCountries(selectedCountries, text)
    // const selectedCountries = getCountries(data, option)

    const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const handleChange = (selectedOption: readonly SelectOption[]) => {
        setOption(selectedOption)
    }

    return (
        <>
            <h1 className="text-3xl mt-5 text-center font-bold">
                Select country
            </h1>
            <div className="flex flex-col items-center mx-5 sm:flex-row sm:items-stretch my-5 justify-items-center gap-5 justify-center align-center">
                <input
                    placeholder="Find Country ..."
                    className="shadow appearance-none border w-full h-10 sm:h-10 sm:w-1/4 rounded px-4 text-gray-700 leading-tight"
                    value={text}
                    onChange={(e) => onChangeText(e)}
                ></input>
                <Select
                    value={option}
                    isMulti={true}
                    isClearable={true}
                    className="shadow appearance-none border rounded w-full sm:w-1/4 text-gray-700 leading-tight"
                    options={continentsSelectOptions}
                    onChange={handleChange}
                ></Select>
            </div>

            <div className="grid justify-items-center align-center grid-cols-small-fill sm:grid-cols-auto-fill p-4 gap-4 sm:grid-cols-auto-fill sm:p-5 sm:m-5 rounded-xl drop-shadow-md">
                {filteredCountries?.map((country) => (
                    <CountryItem
                        name={country.name}
                        code={country.code}
                        key={country.code}
                    />
                ))}
            </div>
        </>
    )
}
