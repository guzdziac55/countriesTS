import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Countries } from '../components/Countries'
import { CountryDetails } from '../components/CountryDetails'
import { NotFound } from '../components/NotFound '

export const RoutesConfig = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Countries />} />
                <Route path=":countryCode" element={<CountryDetails />}></Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
