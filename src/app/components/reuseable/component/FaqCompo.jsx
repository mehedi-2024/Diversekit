'use client'
import TagText from '../TagText';
import H2 from '../H2';
import P from '../P';
import H4 from '../H4';
import H5 from '../H5';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

export default function FaqCompo() {
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
        <div>
            {/* faq section */}
            <section className='max-w-[650px] mx-auto flex flex-col gap-16 py-12'>
                {/* faq head  */}
                <div className='text-center px-5 mb-3'>
                    <div className='w-fit mx-auto'>
                        <TagText>FAQ</TagText>
                    </div>

                    <H2>
                        Frequently <br />
                        Asked Questions
                    </H2>
                    <div className=' mt-2'>
                        <P>
                            Everything you need to know about the product and billing.
                        </P>
                    </div>
                </div>

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
        </div>
    )
}
