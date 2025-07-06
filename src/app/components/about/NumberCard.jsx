import React from 'react'
import TagText from '../reuseable/TagText'

export default function NumberCard() {
  return (
    <div className='flex justify-center items-center flex-col p-8 border border-gray-700/20 shadow rounded-xl w-full md:max-w-[400px] bg-white'>
        <TagText>Launched In</TagText>

        <h2 className='text-5xl font-bold mt-3'>2017</h2>
    </div>
  )
}
