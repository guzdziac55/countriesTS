export type Country = {
    code: string
    name: string
}
export type CountryInfo = {
    code: string
    name: string
    emoji: string
    languages: {
        name: string
    }[]
}

export type Continent = {
    code: string
    name: string
    countries: Country[]
}

export type ContinentData = {
    continents: Continent[]
}

export type SelectOption = {
    label: string
    value: string
}
