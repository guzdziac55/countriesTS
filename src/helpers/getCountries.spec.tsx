import { getCountries } from './getCountries'
type Country = {
    code: string
    name: string
}

interface Continent {
    code: string
    name: string
    countries: Country[]
}

interface ContinentData {
    continents: Continent[]
}

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
        expect(getCountries(mockData, '').length).toEqual(5)
    })

    it('countries from continent Asia arg: AS', () => {
        expect(getCountries(mockData, 'AS').length).toEqual(3)
    })

    it('countries from continent Africa arg: AF', () => {
        expect(getCountries(mockData, 'AF').length).toEqual(2)
    })

    it('all countries objects', () => {
        expect(getCountries(mockData, '')).toEqual(mockResult)
    })

    it('empty array', () => {
        expect(getCountries(mockData, 'xxxx')).toEqual([])
    })

    it('no data', () => {
        expect(getCountries(mockData, 'xxx').length).toEqual(0)
    })
})
