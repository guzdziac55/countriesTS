import { ContinentData, SelectOption } from '../components/types'

export const continentsOptions = (
    data: ContinentData | undefined
): SelectOption[] | undefined => {
    if (data) {
        let result: SelectOption[] = []
        data.continents.forEach((continent) => {
            result.push({ label: continent.name, value: continent.code })
        })
        return result
    }
    return undefined
}
