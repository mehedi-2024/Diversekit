'use client'

import React, { useState } from 'react'
import Navbar from '../components/global/Navbar';
import { IoIosArrowDown } from "react-icons/io";
import EmailSubmit from '../components/home/EmailSubmit';
import Footer from '../components/global/Footer';
import H1 from '../components/reuseable/H1';
import P from '../components/reuseable/P';
import H4 from '../components/reuseable/H4';
import H5 from '../components/reuseable/H5';
import TagText from '../components/reuseable/TagText';



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
        <div className='mx-1 md:mx-2 rounded-t-3xl  bg-[linear-gradient(to_bottom,_theme(colors.purple.100)_0%,_white_30%)]'>

            <section>
                <div className='h-fit  mt-3 rounded-3xl pb-3 overflow-hidden px-5 lg:px-10'>

                    {/* nav  */}
                    <Navbar />

                    {/* hero  */}
                    <section className='flex flex-col items-center mt-10 pb-4 mb-16' >
                        <div>
                            <img src="/image/ring.png" alt="" />
                        </div>
                        <div>
                            <div className='w-fit mx-auto'>
                                <TagText>Answer your question!</TagText>
                            </div>
                            <H1>
                                Frequently <br />
                                Asked Questions
                            </H1>
                            <P className='text-center w-[80%] lg:w-[48%] mt-2'>
                                Everything you need to know about the product and billing.
                            </P>
                        </div>
                    </section>

                </div>
            </section>

            <div className='px-6 sm:px-10 max-w-[1440px] mx-auto'>

                {/* faq section */}
                <section className='max-w-[650px] mx-auto flex flex-col gap-16'>
                    {/* General  */}
                    <div>
                        {/* faq title  */}
                        <div className="pb-4">
                            <H4>General</H4>
                        </div>

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
                                            ><H5>{data.question}</H5>
                                                <span className={`duration-300 ${openId === data.id && 'rotate-180'}`}><IoIosArrowDown /></span>
                                            </div>

                                            {/* ans  */}
                                            <div className={`grid duration-300 ${openId === data.id ? 'grid-rows-[1fr] pb-4 mt-2' : 'grid-rows-[0fr]'}`}>
                                                <div className={` overflow-hidden`}>
                                                    <P>{data.answer}</P>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>

                    {/* Components  */}
                    <div>
                        {/* faq title  */}
                        <div className="pb-4">
                            <H4>Components</H4>
                        </div>

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
                                            ><H5>{data.question}</H5>
                                                <span className={`duration-300 ${openId === data.id && 'rotate-180'}`}><IoIosArrowDown /></span>
                                            </div>

                                            {/* ans  */}
                                            <div className={`grid duration-300 ${openId === data.id ? 'grid-rows-[1fr] pb-4 mt-2' : 'grid-rows-[0fr]'}`}>
                                                <div className={` overflow-hidden`}>
                                                    <P>{data.answer}</P>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>

                    {/* Billing  */}
                    <div>
                        {/* faq title  */}
                        <div className="pb-4">
                            <H4>Billing</H4>
                        </div>

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
                                            ><H5>{data.question}</H5>
                                                <span className={`duration-300 ${openId === data.id && 'rotate-180'}`}><IoIosArrowDown /></span>
                                            </div>

                                            {/* ans  */}
                                            <div className={`grid duration-300 ${openId === data.id ? 'grid-rows-[1fr] pb-4 mt-2' : 'grid-rows-[0fr]'}`}>
                                                <div className={` overflow-hidden`}>
                                                    <P>{data.answer}</P>
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


