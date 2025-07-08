import React from 'react'
import Navbar from '../components/global/Navbar'
import TagText from '../components/reuseable/TagText'
import H1 from '../components/reuseable/H1'
import P from '../components/reuseable/P'
import TemplatesCard from '../components/home/TemplatesCard'
import H4 from '../components/reuseable/H4'
import ButtonGradient from '../components/buttons/ButtonGradient'
import ButtonPrimary from '../components/buttons/ButtonPrimary'
import EmailSubmit from '../components/home/EmailSubmit'
import Footer from '../components/global/Footer'

export default function page() {
    return (
        <div className=' mx-1 md:mx-2 pt-2 mt-1 '>
            <div className="bg-[linear-gradient(to_bottom,_theme(colors.purple.100)_0%,_white_30%)] rounded-t-3xl">

                {/* hero  */}
                <section className='overflow-hidden px-4 lg:px-10'>
                    <Navbar />

                    <div className='h-fit max-w-[1440px] mx-auto mt-3 pb-3 relative overflow-hidden '>

                        <img src="/image/ring.png" className='mx-auto mt-6 sm:mt-12 w-96' alt="" />

                        <div className='flex flex-col items-center mt-10 pb-4 mb-16' >
                            <TagText>Flowbase Template Store</TagText>
                            <div className="mt-6 mb-2">
                                <H1>
                                    Premium Templates for<br className='hidden md:inline' />
                                    Webflow, Figma & Framer.
                                </H1>
                            </div>
                            <div className="text-center mb-6">
                                <P>
                                    Discover our collection of premium templates, that you can use to build complete <br className='hidden md:inline' /> projects faster. Webflow templates sold exclusively through the Webflow <br className='hidden md:inline' /> marketplace
                                </P>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Webflow & Figma Templates */}
                <section className='max-w-[1179px] mx-auto px-8 my'>
                    <div className="flex sm:justify-between gap-5 sm:gap-2 flex-col sm:flex-row sm:items-end mb-8">
                        <div>
                            <H4>Webflow & Figma Templates</H4>
                            <p className="text-gray-500 mt-2 mr-2 sm:text-md flex items-center gap-2">Sold with our partners at <ButtonGradient>Webflow</ButtonGradient></p>
                        </div>
                        <div className="w-fit">
                            <ButtonPrimary>Browse All</ButtonPrimary>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-12">
                        <TemplatesCard />
                        <TemplatesCard />
                        <TemplatesCard />
                        <TemplatesCard />
                        <TemplatesCard />
                        <TemplatesCard />
                        <TemplatesCard />
                        <TemplatesCard />
                    </div>
                </section>

                {/* Framer & Figma Templates */}
                <section className='max-w-[1179px] mx-auto px-8 my-20'>
                    <div className="flex sm:justify-between gap-5 sm:gap-2 flex-col sm:flex-row sm:items-end mb-8">
                        <div>
                            <H4>Framer & Figma Templates</H4>
                        </div>
                        <div className="w-fit">
                            <ButtonPrimary>Browse All</ButtonPrimary>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-12">
                        <TemplatesCard />
                        <TemplatesCard />
                        <TemplatesCard />
                        <TemplatesCard />
                        <TemplatesCard />
                        <TemplatesCard />
                        <TemplatesCard />
                        <TemplatesCard />
                    </div>
                </section>

                <section className='px-4'>
                    <EmailSubmit />
                </section>
            </div>

            <Footer />
        </div>
    )
}
