import { Country } from './../components/types'

export function filterCountries(countries: Country[], filterPhrase: string) {
    if (filterPhrase === '') return countries
    const filtered = countries.filter((country) =>
        country.name.toLowerCase().includes(filterPhrase.toLowerCase())
    )

    return filtered
}
