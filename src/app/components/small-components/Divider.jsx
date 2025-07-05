import React from 'react'
import { IoIosInfinite } from "react-icons/io";


export default function Divider() {
    return (
        <div className='w-[90%] mx-auto my-20 border-t border-gray-200 flex justify-center'>
            <div className='px-4 md:px-8 py-2 bg-white -mt-5 text-gray-200'>
                <IoIosInfinite size={25} />
            </div>
        </div>
    )
}
