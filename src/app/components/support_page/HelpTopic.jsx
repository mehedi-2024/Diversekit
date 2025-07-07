import React from 'react'
import H5 from '../reuseable/H5';
import GraySm from '../reuseable/GraySm';


export default function HelpTopics() {
    const helpTopics = [
        {
            title: "Account & Billing",
            description: "Includes changing your email or password and deleting your account.",
        },
        {
            title: "Privacy & Security",
            description: "Learn how to manage your data, control permissions, and stay safe online.",
        },
        {
            title: "Login Help",
            description: "Troubleshoot issues with signing in, two-factor authentication, and account recovery.",
        },
        {
            title: "Subscription Plans",
            description: "Understand different subscription options and how to upgrade or cancel your plan.",
        },
        {
            title: "Notifications",
            description: "Manage your notification preferences and alerts across devices.",
        },
        {
            title: "App Settings",
            description: "Customize app features, language preferences, and appearance.",
        },
        {
            title: "Device Management",
            description: "View and manage devices connected to your account.",
        },
        {
            title: "Troubleshooting",
            description: "Fix common issues like crashes, loading problems, or syncing errors.",
        },
        {
            title: "Data Usage",
            description: "Find out how much data the app uses and how to reduce it.",
        },
        {
            title: "Community & Guidelines",
            description: "Learn about community rules, reporting content, and blocked users.",
        },
        {
            title: "Feedback & Support",
            description: "Send us feedback or contact our support team for help.",
        },
        {
            title: "Integrations",
            description: "Explore third-party integrations and how to connect external apps.",
        },
    ];

    return (
        <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-6'>
            {
                helpTopics.map((data, index) => {
                    return (
                        <div key={index} className='p-6 shadow rounded-xl border border-gray-600/10 flex flex-col gap-2 w-full'>
                            <div className='w-8 h-8 shadow rounded-md mb-4 border border-gray-600/10'></div>

                            <div className='grow flex flex-col justify-end gap-2'>
                                <H5>{data.title}</H5>
                                <GraySm>{data.description}</GraySm>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
