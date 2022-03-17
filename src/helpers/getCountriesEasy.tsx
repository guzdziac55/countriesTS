import { SelectOption } from '../components/types'
import { Country } from '../components/typ'

export const getCountriesEasy = (
    contries: Country[],
    option: readonly SelectOption[] | null
): any => {
    return option?.length
        ? option
              .map((opt) =>
                  contries.filter(
                      (country) => country.continent.code === opt.value
                  )
              )
              .flat()
        : contries
}
