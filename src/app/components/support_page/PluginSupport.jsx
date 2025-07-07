import React from 'react'
import H6 from '../reuseable/H6';
import H4 from '../reuseable/H4';

export default function PluginSupport() {
    const tools = [
        {
            title: "Chrome Extension",
            image: "image/chrome.png",
        },
        {
            title: "Figma Plugin",
            image: "image/figma.png",
        },
        {
            title: "Boosters",
            image: "image/boosters.png",
        },
    ];

    return (
        <div>
            <div className='text-center mb-6'>
                <H4>Apps & Plugin Support</H4>
            </div>
            <div className='flex gap-4 justify-center flex-wrap'>
                {
                    tools.map((data, index) => {
                        return (
                            <div key={index} className='shadow rounded-xl border border-gray-600/10 flex flex-col items-center justify-center gap-3 w-[170px] h-[139px] bg-white text-center'>

                                <img src={data.image} className='w-[55px] h-[55px] rounded-xl' alt="" />
                                <H6>{data.title}</H6>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
