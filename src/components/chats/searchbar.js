import React from 'react'

export default function SearchBar() {
    return (
        <input type="text" placeholder="Search for a message..." className="px-3 py-2 rounded-md border outline-none border-gray-100 bg-transparent focus:border-focus placeholder:text-sm max-w-[500px] w-full"></input>
    )
}