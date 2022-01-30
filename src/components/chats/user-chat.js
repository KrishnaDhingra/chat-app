import React, { useEffect, useRef } from 'react'

export default function UserChat({text, chat}) {
    const scrollRef = useRef()

    useEffect(() => {
        scrollRef.current?.scrollIntoView({behavior: "smooth"})
    }, [chat])

    return (
        <div 
        className="chats ml-auto flex flex-col gap-1 w-max min-w-[200px] sm:max-w-[450px] max-w-[320px]" ref={scrollRef}>

            <p className="text-sm bg-chatPrimary px-4 p-3 rounded-md rounded-br-none text-left text-primary">{text}</p>
            
            <p className="text-xs text-right text-secondary">11:50</p>
        </div>
    )
}