import React from 'react';
import HeroSection from '../AboutUsPage/components/HeroSection';

import StepsToOpenAccount from '../Deposit&WithdrawPage/components/StepsToOpenAccount';
import TradingComponent from '../LandingPage/components/TradingComponent';
import "./footerLinkPage.css"
const CookiePolicy = () => {
    return (
        <div>
            <HeroSection title="COOKIE POLICY" text="Aurum Markets - True ECN Forex Broker" />
            <div className=' footerLinkPage'>
                <div className="basicRow">

                    <div className='basicText'>Cookies are small pieces of information that are stored on your computer by a website you visit in order to enable you to perform certain functions on the website and regulate its content to your preference. They can store data on pages which you have provided key information for (e.g. when you provide a password) but only once you are asked and you accept to the storage of this information. Cookies may be used on some pages of the site for us to provide website users with a more customized web browsing experience; they are not used to determine the personal identity of anyone merely visiting the site.</div>
                    <div className="basicTitle">What kind of cookies we use</div>
                    <div className='qTitle'>Session cookies</div>
                    <div className='basicText'>These cookies are temporary cookies as they are deleted as soon as you close your browser. Session cookies are used to retain the information you provide us with as you navigate through each section of our website. You can choose to decline session cookies via your browser’s privacy settings but please note that this may have a negative impact on your browsing experience and particularly if these are declined across all websites.</div>
                    <div className="qTitle">Analytical cookies</div>
                    <div className='basicText'>Analytical cookies may include both temporary and more persistent cookies that we use to track how you use our website and for how long. Analytical cookies do not divulge any identifying information specific to your person but they do help us improve how we provide you with our content. Refer to your browser’s privacy settings on how you can opt-out of analytical cookies.</div>
                    <div className="qTitle">Functional cookies</div>
                    <div className='basicText'>Functional cookies record and save your choices in order to provide for a more seamless experience across our website. One way functional cookies do this is by remembering your language selection each time you visit us. Refer to your browser’s urgent privacy settings on how you can opt-out of functional cookies.</div>
                    <div className="qTitle">Third Party cookies</div>
                    <div className='basicText'>These cookies are used by third parties and mostly by social media websites like Google+, Facebook or YouTube. Third Party cookies allow us to offer you easy ways to share our content throughout your social media and also present you with the videos we post on YouTube. You can disable the use of these cookies through your browser’s privacy settings but please do note that this will also disable all the functions described above.</div>
                    <div className="qTitle">Why we use cookies</div>
                    <div className='basicText'>As already mentioned, we use cookies to ensure the optimal functionality of our website and cater our content to your personal preferences. As a regulated broker you may rest assured that any personal information we collect, through any means, will not be shared with third-parties.</div>

                </div>



            </div>
            {/* <TradingComponent /> */}
            {/* <StepsToOpenAccount title="Start Trading in 4 Steps" /> */}

        </div>
    );
};

export default CookiePolicy;
