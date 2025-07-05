'use client'

import React, { useState } from 'react'
import Navbar from '../components/global/Navbar';
import { IoIosArrowDown } from "react-icons/io";
import EmailSubmit from '../components/home/EmailSubmit';
import Footer from '../components/global/Footer';



export default function page() {

    const [openId, setOpenId] = useState(null)
    const [previousId, setPreviousId] = useState(null)

    const faqData = [
        {
            id: 1,
            question: "What is this platform about?",
            answer: "This platform helps developers build faster using pre-made UI components.",
            category: "general",
        },
        {
            id: 2,
            question: "Is there a free trial available?",
            answer: "Yes, we offer a 14-day free trial for all new users.",
            category: "general",
        },
        {
            id: 3,
            question: "How can I reset my password?",
            answer: "Go to account settings and click 'Reset Password'.",
            category: "general",
        },
        {
            id: 4,
            question: "What are components in this system?",
            answer: "Components are pre-built UI elements like buttons, cards, and modals.",
            category: "components",
        },
        {
            id: 5,
            question: "Can I customize the components?",
            answer: "Yes, all components are fully customizable using Tailwind CSS.",
            category: "components",
        },
        {
            id: 6,
            question: "Are your components mobile responsive?",
            answer: "Absolutely. All components are responsive and work well on all devices.",
            category: "components",
        },
        {
            id: 7,
            question: "How do I access premium components?",
            answer: "Premium components are available under the Pro plan.",
            category: "components",
        },
        {
            id: 8,
            question: "What payment methods are accepted?",
            answer: "We accept credit/debit cards and PayPal.",
            category: "billing",
        },
        {
            id: 9,
            question: "Can I get a refund?",
            answer: "Yes, refunds are available within 7 days of purchase for valid reasons.",
            category: "billing",
        },
        {
            id: 10,
            question: "Do you offer team billing?",
            answer: "Yes, our Pro and Enterprise plans support team billing and invoicing.",
            category: "billing",
        },
        {
            id: 11,
            question: "Is my payment information secure?",
            answer: "Yes, we use Stripe for secure and encrypted payment processing.",
            category: "billing",
        },
        {
            id: 12,
            question: "How do I update my billing details?",
            answer: "You can update your billing info from the Account > Billing section.",
            category: "billing",
        },
    ];

    const manageOpeningFAQ = (id) => {

        if (previousId === id) {
            setOpenId(null)
            setPreviousId(null)
        } else {
            setOpenId(id)
            setPreviousId(id)
        }
    }

    return (
        <div className='max-w-[1440px] mx-auto rounded-t-3xl  bg-[linear-gradient(to_bottom,_theme(colors.purple.100)_0%,_white_30%)]'>

            <div className='px-6 sm:px-10'>
                <section>
                    <div className='h-fit max-w-[1440px] mx-auto mt-3 rounded-3xl pb-3 relative overflow-hidden  px-5 lg:px-10'>

                        <div className="h-16">
                            <Navbar />
                        </div>

                        <section className='flex flex-col items-center mt-10 pb-4 mb-16' >
                            <h4 className='text-indigo-950 w-fit font-[500] px-2  rounded-full border border-gray-400/50 mb-6 bg-purple-50'>Answer your question!</h4>
                            <h1 className="md:text-6xl text-5xl w-[90%] md:w-[75%] xl:w-[60%] text-center text-indigo-950 font-semibold leading-16 tracking-tight
            ">
                                Frequently <br />
                                Asked Questions
                            </h1>
                            <p className='text-center w-[80%] lg:w-[48%] mt-2'>
                                Everything you need to know about the product and billing.
                            </p>
                        </section>


                    </div>
                </section>

                {/* faq section */}
                <section className='max-w-[650px] mx-auto flex flex-col gap-16'>
                    {/* General  */}
                    <div>
                        {/* faq title  */}
                        <h3 className="text-2xl text-gray-700 font-semibold mb-4">
                            General
                        </h3>

                        {/* faq  */}

                        <div className='flex flex-col gap-4'>
                            {
                                faqData.filter(data => data.category === 'general').map((data) => {
                                    return <div key={data.id}>
                                        <div className='bg-white rounded-xl  px-4  shadow'>
                                            {/* question */}
                                            <div
                                                onClick={() => {
                                                    manageOpeningFAQ(data.id)
                                                }}
                                                className='flex justify-between gap-3 py-4 items-center cursor-pointer font-semibold'
                                            >{data.question}
                                                <span className={`duration-300 ${openId === data.id && 'rotate-180'}`}><IoIosArrowDown /></span>
                                            </div>

                                            {/* ans  */}
                                            <div className={`grid duration-300 ${openId === data.id ? 'grid-rows-[1fr] pb-4 mt-2' : 'grid-rows-[0fr]'}`}>
                                                <div className={` overflow-hidden`}>
                                                    {data.answer}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>

                    {/* components  */}
                    <div>
                        {/* faq title  */}
                        <h3 className="text-2xl text-gray-700 font-semibold mb-4">
                            Components
                        </h3>

                        {/* faq  */}

                        <div className='flex flex-col gap-4'>
                            {
                                faqData.filter(data => data.category === 'components').map((data) => {
                                    return <div key={data.id}>
                                        <div className='bg-white rounded-xl  px-4  shadow'>
                                            {/* question */}
                                            <div
                                                onClick={() => {
                                                    manageOpeningFAQ(data.id)
                                                }}
                                                className='flex justify-between gap-3 py-4 items-center cursor-pointer font-semibold'
                                            >{data.question}
                                                <span className={`duration-300 ${openId === data.id && 'rotate-180'}`}><IoIosArrowDown /></span>
                                            </div>

                                            {/* ans  */}
                                            <div className={`grid duration-300 ${openId === data.id ? 'grid-rows-[1fr] pb-4 mt-2' : 'grid-rows-[0fr]'}`}>
                                                <div className={` overflow-hidden`}>
                                                    {data.answer}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>

                    {/* billing  */}
                    <div>
                        {/* faq title  */}
                        <h3 className="text-2xl text-gray-700 font-semibold mb-4">
                            Billing
                        </h3>

                        {/* faq  */}

                        <div className='flex flex-col gap-4'>
                            {
                                faqData.filter(data => data.category === 'billing').map((data) => {
                                    return <div key={data.id}>
                                        <div className='bg-white rounded-xl  px-4  shadow'>
                                            {/* question */}
                                            <div
                                                onClick={() => {
                                                    manageOpeningFAQ(data.id)
                                                }}
                                                className='flex justify-between gap-3 py-4 items-center cursor-pointer font-semibold'
                                            >{data.question}
                                                <span className={`duration-300 ${openId === data.id && 'rotate-180'}`}><IoIosArrowDown /></span>
                                            </div>

                                            {/* ans  */}
                                            <div className={`grid duration-300 ${openId === data.id ? 'grid-rows-[1fr] pb-4 mt-2' : 'grid-rows-[0fr]'}`}>
                                                <div className={` overflow-hidden`}>
                                                    {data.answer}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </section>

                {/* email submit  */}
                <section className='my-28'>
                    <EmailSubmit />
                </section>
            </div>

            {/* footer  */}
            <section>
                <Footer />
            </section>
        </div>
    )
}


