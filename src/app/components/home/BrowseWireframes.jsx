import React from 'react'

export default function BrowseWireframes() {
    return (
        <div className='text-indigo-950 py-10 w-full rounded-xl flex flex-col items-center text-center gap-5 relative bg-indigo-100'>
            <h4 className='text-lg flex items-center -mb-2'>Chalk<span className='text-xs font-semibold text-white bg-indigo-950 rounded px-1 py-[1px]'>UI</span></h4>
            <h2 className='text-center sm:text-2xl text-xl font-semibold'>
                The Designer & Developers <br />
                Foundation UI System
            </h2>
            <button className='py-1 px-3 bg-indigo-950 text-sm sm:text-[16px] text-white rounded-lg cursor-pointer hover:bg-indigo-900 active:scale-95'>Browse Wireframes </button>
        </div>
    )
}
