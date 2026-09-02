 'use client';
import React, { useEffect } from 'react';

const TermsConditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Terms & Conditions | दैनिक सबसे तेज़';
    }, []);

    return (
        <div className="w-full max-w-[1270px] mx-auto px-4 py-10">
            <h1 className="text-3xl md:text-4xl font-black mb-6 text-gray-900 border-b pb-4">Terms and Conditions (नियम एवं शर्तें)</h1>
            <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                <p>These terms and conditions outline the rules and regulations for the use of दैनिक सबसे तेज़'s Website, located at dainiksabsetej.com.</p>
                <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use दैनिक सबसे तेज़ if you do not agree to take all of the terms and conditions stated on this page.</p>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. License</h2>
                <p>Unless otherwise stated, दैनिक सबसे तेज़ and/or its licensors own the intellectual property rights for all material on दैनिक सबसे तेज़. All intellectual property rights are reserved. You may access this from दैनिक सबसे तेज़ for your own personal use subjected to restrictions set in these terms and conditions.</p>
                <p>You must not:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Republish material from दैनिक सबसे तेज़ without proper credit.</li>
                    <li>Sell, rent or sub-license material from दैनिक सबसे तेज़.</li>
                    <li>Reproduce, duplicate or copy material from दैनिक सबसे तेज़.</li>
                    <li>Redistribute content from दैनिक सबसे तेज़ (unless content is specifically made for redistribution, like our E-Paper cuttings).</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. E-Paper and Content Sharing</h2>
                <p>We provide a feature to generate and share "E-Paper cuttings" of our news articles. Users are allowed to share these generated images on social media platforms (such as WhatsApp, Facebook, etc.) provided that the original branding, watermarks, and source links are not altered, obscured, or removed.</p>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. User Comments</h2>
                <p>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. दैनिक सबसे तेज़ does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of दैनिक सबसे तेज़, its agents and/or affiliates.</p>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">4. Content Liability</h2>
                <p>We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>
            </div>
        </div>
    );
};

export default TermsConditions;




