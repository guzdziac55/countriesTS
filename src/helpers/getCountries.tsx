import { ContinentData, Country } from '../components/types'
import { SelectOption } from '../components/types'

export function getCountries(
    { continents }: ContinentData,
    option: SelectOption | null
): Country[] {
    const filteredContinents = option
        ? continents.filter((continent) => continent.code === option.value)
        : continents // null

    // Alt version: filteredContinents.map(continent => continent.countries).flat();
    return filteredContinents.flatMap((continent) => continent.countries)
}
