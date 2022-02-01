import React from 'react'

export default function SearchBar({onChange}) {
    return (
        <input 
            onChange={(e) => onChange(e.target.value)}
            type="text" 
            placeholder="Search for a friend..." 
            className="bg-inputBg px-3 py-2 rounded-md text-primary outline-none border border-transparent focus:border-focus placeholder:text-sm w-full"></input>
    )
}