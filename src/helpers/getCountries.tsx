import { ContinentData, Country } from '../components/types'

export function getCountries(
    { continents }: ContinentData,
    code: string
): Country[] {
    const filteredContinents = code
        ? continents.filter((continent) => continent.code === code)
        : continents

    // Alt version: filteredContinents.map(continent => continent.countries).flat();
    return filteredContinents.flatMap((continent) => continent.countries)
}
