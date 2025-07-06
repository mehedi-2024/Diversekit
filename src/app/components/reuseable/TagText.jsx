import React from 'react'

export default function TagText({children}) {
  return (
    <div className='py-[5px] px-[13px] border border-[#11023B]/10 bg-indigo-300/10 rounded-full text-sm text-[#11023B]'>
        <p>{children}</p>
    </div>
  )
}
