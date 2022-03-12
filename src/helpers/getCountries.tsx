import { ContinentData, Country } from '../components/types'
import { SelectOption } from '../components/types'

export function getCountries(
    { continents }: ContinentData,
    option: readonly SelectOption[] | null
): Country[] {
    const filteredContinents = option?.length
        ? option
              .map((opt) =>
                  continents.filter((continent) => continent.code === opt.value)
              )
              .flat()
        : continents

    console.log(filteredContinents)

    return filteredContinents.map((continent) => continent.countries).flat()
    // Alt version: filteredContinents.map(continent => continent.countries).flat();
}
