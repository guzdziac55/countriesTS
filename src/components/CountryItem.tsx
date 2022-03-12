import React from 'react'
import { Link } from 'react-router-dom'

interface CountryItemProps {
    code: string
    name: string
}

export const CountryItem: React.FC<CountryItemProps> = ({ code, name }) => {
    return (
        <Link
            className="flex flex-col h-full w-24 h-24 sm:h-32 sm:w-32 justify-center items-center align-center rounded text-xs sm:text-sm sm:p-2 text-gray-900 bg-gray-100 shadow-lg cursor-pointer hover:bg-indigo-200 hover:-translate-y-0.5"
            to={`${code}`}
        >
            <p className="text-center text-l ">{name}</p>
            <p className="text-center font-medium font-italic mt-1">{code}</p>
        </Link>
    )
}
