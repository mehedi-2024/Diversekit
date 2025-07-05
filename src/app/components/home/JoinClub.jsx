import React from 'react'

export default function JoinClub() {
    return (
        <div className='flex flex-col items-center justify-center gap-4 text-center text-indigo-950 py-10 sm:py-16 bg-indigo-100 rounded-xl  px-3'>
            <h2 className='text-3xl font-semibold'>
                Unlock the world's <br />
                largest design library
            </h2>
            <p>
                Flowbase is the world's largest premium library of Webflow, Figma & Framer <br />components and tools. Build better, faster with Flowbase
            </p>
            <button className='py-1 px-3 bg-white rounded-md border border-gray-600/20 shadow cursor-pointer hover:bg-gray-50 active:scale-95'>Join the Club</button>
        </div>
    )
}
