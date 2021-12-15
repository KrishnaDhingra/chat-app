import React from 'react'

export default function SearchBar() {
    return (
        <input 
        type="text" 
        placeholder="Search for a message..." 
        className="bg-inputBg px-3 py-2 rounded-md text-primary outline-none border border-transparent focus:border-focus placeholder:text-sm max-w-[500px] w-full"></input>
    )
}