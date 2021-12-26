import React from 'react'
import { BigHead } from "@bigheads/core";
import { getRandomOptions  } from "../bigheads";

export default function OtherUsersOnline() {

    const imageArray = [1, 2, 3, 4, 5]
    
    return (
        <section className="users-online relative h-full w-full pl-8 pr-7 flex flex-col justify-center gap-2 bg-transparent">
            <div className="flex justify-between">
                <h2 className="text-primary font-semibold">Online Now</h2>
                <span className="bg-inputBg rounded-md py-1 px-2 text-xs text-primary font-semibold">12</span>
            </div>
            <div className="overflow-x-auto w-full flex gap-[8px] justify-start mt-3">
                {imageArray.map(() => {
                    return (
                        <div key={Math.random()} className="relative w-[3.5rem] h-[3.5rem]">
                            <BigHead className="h-full w-full rounded-full" {...getRandomOptions()} />

                            <div className="online-dots rounded-full bg-red-500 absolute bottom-0 left-10 right-0 border border-white"></div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}