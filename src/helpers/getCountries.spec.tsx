import { getCountries } from './getCountries'
import { ContinentData } from './../components/types'

const mockData: ContinentData = {
    continents: [
        {
            name: 'Africa',
            code: 'AF',
            countries: [
                {
                    name: 'Angola',
                    code: 'AO',
                },
                {
                    name: 'Burkina Faso',
                    code: 'BF',
                },
            ],
        },
        {
            name: 'Asia',
            code: 'AS',
            countries: [
                {
                    name: 'United Arab Emirates',
                    code: 'AE',
                },
                {
                    name: 'Afghanistan',
                    code: 'AF',
                },
                {
                    name: 'Armenia',
                    code: 'AM',
                },
            ],
        },
    ],
}

const mockResult = [
    {
        name: 'Angola',
        code: 'AO',
    },
    {
        name: 'Burkina Faso',
        code: 'BF',
    },
    {
        name: 'United Arab Emirates',
        code: 'AE',
    },
    {
        name: 'Afghanistan',
        code: 'AF',
    },
    {
        name: 'Armenia',
        code: 'AM',
    },
]

describe('getCountries function return', () => {
    it('all countries from input data', () => {
        expect(getCountries(mockData, null).length).toEqual(5)
    })

    it('countries from continent Asia arg: AS', () => {
        expect(
            getCountries(mockData, [{ label: 'Asia', value: 'AS' }]).length
        ).toEqual(3)
    })

    it('countries from continent Africa arg: AF', () => {
        expect(
            getCountries(mockData, [{ label: 'Africa', value: 'AF' }]).length
        ).toEqual(2)
    })

    it('all countries objects', () => {
        expect(getCountries(mockData, null)).toEqual(mockResult)
    })

    it('empty array', () => {
        expect(
            getCountries(mockData, [{ label: 'xxx', value: 'xxxx' }])
        ).toEqual([])
    })

    it('no data', () => {
        expect(
            getCountries(mockData, [{ label: 'xxx', value: 'xxxx' }]).length
        ).toEqual(0)
    })
})
