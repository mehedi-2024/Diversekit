import React from 'react'

export default function ButtonPrimary({children}) {
  return (
    <button className='px-[14px] py-[6px]  cursor-pointer rounded-lg border border-gray-600/20 shadow hover:shadow-lg active:scale-95 text-sm font-medium text-[#36364A]'>{children}</button>
  )
}
