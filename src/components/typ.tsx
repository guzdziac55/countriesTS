export type Continent = {
    code: string
    name: string
}

export type Country = {
    code: string
    name: string
    continent: {
        code: string
        name: string
    }
}

export type ContinentsAndCountriesData = {
    continents: Continent[]
    countries: Country[]
}
