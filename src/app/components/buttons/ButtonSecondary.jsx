import React from 'react'

export default function ButtonSecondary({ children }) {
    return (
        <button className='px-[14px] py-[6px] cursor-pointer rounded-lg border border-gray-600/20 shadow hover:shadow-lg active:scale-95 text-sm font-medium text-white bg-indigo-500'>{children}</button>
    )
}
