import React from 'react'
import H4 from '../reuseable/H4'
import P from '../reuseable/P'

export default function JoinClub() {
    return (
        <div className='flex flex-col items-center justify-center gap-4 text-center text-indigo-950 py-10 sm:py-16 bg-indigo-100 rounded-xl  px-3'>
            <H4>
                Unlock the world's <br />
                largest design library
            </H4>
            <P>
                Flowbase is the world's largest premium library of Webflow, Figma & Framer <br className='hidden sm:inline' />components and tools. Build better, faster with Flowbase
            </P>
            <button className='py-1 px-3 bg-white rounded-md border border-gray-600/20 shadow cursor-pointer hover:bg-gray-50 active:scale-95'>Join the Club</button>
        </div>
    )
}
