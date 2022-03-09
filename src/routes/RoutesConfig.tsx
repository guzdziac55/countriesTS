import { Route, Routes } from "react-router-dom";
import { Countries } from "../components/Countries";
import { CountryDetails } from "../components/CountryDetails";

export const RoutesConfig = () => {
  return (
    <Routes>
      <Route index element={<Countries />} />
      <Route path=":code" element={<CountryDetails />}></Route>
    </Routes>
  );
};
