import { SelectOption } from '../components/types'
import { ContinentsAndCountriesData } from '../components/typ'

export const getContinentsOptionsFromData = (
    data: ContinentsAndCountriesData | undefined
): SelectOption[] | undefined => {
    if (!data) return
    return data.continents.map(({ name, code }) => ({
        label: name,
        value: code,
    }))
}
