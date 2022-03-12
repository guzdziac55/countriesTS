import React from 'react'
import { Link } from 'react-router-dom'

interface CountryItemProps {
    code: string
    name: string
}

export const CountryItem: React.FC<CountryItemProps> = ({ code, name }) => {
    return (
        <Link
            className="flex flex-col h-15 justify-center items-center bg-gray-100 h-32 w-32 m-1 p-1 align-center rounded text-sm text-gray-900 drop-shadow-md cursor-pointer hover:bg-indigo-200 hover:-translate-y-0.5"
            to={`${code}`}
        >
            <p className="text-center text-l ">{name}</p>
            <p className="text-center font-medium font-italic mt-1">{code}</p>
        </Link>
    )
}
