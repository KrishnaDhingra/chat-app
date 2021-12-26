import React from 'react'
import { BigHead } from "@bigheads/core";
import { getRandomOptions  } from "../bigheads";

export default function OtherUsersOnline() {

    const imageArray = [1, 2, 3, 4, 5, 6, 7, 8]
    
    return (
        <section className="users-online relative h-full max-w-[360px] pl-8 pr-7 flex flex-col justify-between gap-2 box-border">
            <div className="mt-5 flex justify-between">
                <h2 className="text-primary font-semibold">Online Now</h2>
                <span className="bg-inputBg rounded-md py-1 px-2 text-xs text-primary font-semibold">12</span>
            </div>
            <div className="users-online-inner overflow-x-auto w-full flex gap-[8px] justify-start mt-3 pb-4">
                {imageArray.map(() => {
                    return (
                        <div key={Math.random()} className="oveflow-x-auto relative">
                            <BigHead className="h-[56px] w-[56px] rounded-full" {...getRandomOptions()} />

                            <div className="online-dots rounded-full bg-red-500 absolute bottom-0 left-10 right-0 border border-white"></div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}