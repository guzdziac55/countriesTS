import { ContinentData, SelectOption } from '../components/types'

export const continentsOptions = (
    data: ContinentData | undefined
): SelectOption[] | undefined => {
    if (!data) return

    return data.continents.map(({ code, name }) => ({
        label: name,
        value: code,
    }))
}
