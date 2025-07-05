import React from 'react'

export default function NumberCard() {
  return (
    <div className='flex justify-center items-center flex-col p-8 border border-gray-700/20 shadow rounded-xl w-full md:max-w-[400px] bg-white'>
        <h4 className='text-indigo-950 w-fit font-[500] px-2  rounded-full border border-gray-400/50 mb-6 bg-purple-50 text-sm'>Launched In</h4>

        <h2 className='text-5xl font-bold'>2017</h2>
    </div>
  )
}
