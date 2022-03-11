import React, { useState, useMemo } from 'react'
import { useQuery, gql } from '@apollo/client'
import Select, { SingleValue } from 'react-select'
import { filterCountries } from '../helpers/filterCountries'
import { getCountries } from '../helpers/getCountries'
import { continentsOptions } from '../helpers/continentsOptions'
import { CountryItem } from './CountryItem'
import { ContinentData, SelectOption } from './types'

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
`

export const Countries = () => {
    const { loading, error, data } = useQuery<ContinentData>(GET_ALL_DATA)
    const [option, setOption] = useState<string>('')
    const [text, setText] = useState<string>('')

    const continents = useMemo(() => continentsOptions(data), [data])

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

    const selectedCountries = getCountries(data, option)
    const filteredCountries = filterCountries(selectedCountries, text)

    const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const onChangeContinent = (selectedOption: SingleValue<SelectOption>) => {
        if (selectedOption) setOption(selectedOption.value)
    }

    return (
        <>
            <h1 className="text-3xl mt-5 text-center font-bold">
                Select country
            </h1>
            <div className="flex my-5 flex-column justify-center gap-5">
                <input
                    placeholder="Find Country ..."
                    className="shadow appearance-none border rounded w-52 px-4 text-gray-700 leading-tight"
                    value={text}
                    onChange={(e) => onChangeText(e)}
                ></input>
                <Select
                    className="shadow appearance-none border rounded w-52 text-gray-700 leading-tight"
                    options={continents}
                    onChange={onChangeContinent}
                ></Select>
            </div>

            <div className="grid grid-cols-auto-fill gap-1 p-5 m-5 rounded-xl drop-shadow-md">
                {/* <div className="flex flex-row flex-wrap m-5 p-5 justify-center align-center bg-indigo-50 rounded-xl shadow leading-tight"> */}
                {filteredCountries.map((country) => (
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
