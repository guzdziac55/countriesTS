import React from 'react'
import { Link } from 'react-router-dom'

interface CountryItemProps {
    code: string
    name: string
}

export const CountryItem: React.FC<CountryItemProps> = ({ code, name }) => {
    return (
        <Link
            className="bg-indigo-800 m-2 p-2 px-4 rounded text-white cursor-pointer hover:bg-indigo-900 hover:-translate-y-0.5"
            to={`${code}`}
        >
            <p className="">{`${name} - ${code}`}</p>
        </Link>
    )
}
