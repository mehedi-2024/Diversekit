import React from 'react'

export default function EmailSubmit() {
    return (
        <div className='flex flex-col max-w-[700px] mx-auto items-center justify-center gap-4 text-center text-indigo-950 min-h-96 bg-indigo-100 rounded-xl'>
            <p className='px-3 text-sm rounded-full border border-gray-600/30'>No-code content to your inbox</p>
            <h2 className='text-3xl font-semibold'>
                Join our community and <br />
                claim free products
            </h2>
            <p>
                No Spam. Only sweet content and updates of our products. <br />
                Join 55,000+ other creators in our community
            </p>
            <div className='flex flex-col sm:flex-row gap-3 items-center'>
                <input type="text" placeholder='Email address...' className='w-72 p-2 text-sm rounded-lg border border-gray-600/40 bg-white outline-0 focus:border-indigo-500 ' />
                <button className='py-1 px-3 bg-indigo-500 text-white rounded-md border border-gray-600/20 shadow cursor-pointer hover:bg-indigo-400 active:scale-95'>Submit</button>
            </div>
        </div>
    )
}

