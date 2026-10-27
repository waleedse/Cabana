import React from 'react';
import HeroSection from '../AboutUsPage/components/HeroSection';
import StepsToOpenAccount from '../Deposit&WithdrawPage/components/StepsToOpenAccount';
import TradingComponent from '../LandingPage/components/TradingComponent';

const SafetyOfFunds = () => {
    return (
        <div>

            <HeroSection title="CLIENT'S SAFETY OF FUNDS" text="Aurum Markets - True ECN Forex Broker" />
            <div className=' footerLinkPage'>
                <div className="basicRow">
                    Aurum Markets has thousands of clients from all around the world, thanks to our regulations and emphasis on safety and security of funds.
                    <br /><br />
                    Regardless of the situation, our number one aim is to protect our clients’ investment. Our clients trust our services as we create a reliable and safe environment.
                    <div className="qTitle text-center">Encryption</div>
                    <div className="basicText">To ensure our clients’ investment is as safe as possible, all communications in Aurum Markets uses Secure Sockets Layer (SSL). We keep all customer information and transactions confidential. We make sure that the client data reaches the right place through server authentication and user identification policies. We prevent unauthorized access and data theft by encrypting the data. At the same time, we make sure there are no changes to the data during transmission.</div>


                    <div className="qTitle text-center">Fund Segregation</div>
                    <div className="basicText">As we are dealing with a lot of funds, we have separate accounts for our operational funds and client funds. To make sure the funds are secure, we store them only in the best banks around the world. Aurum Markets will never use our clients’ funds for any company investment or operations. As a result of this, our clients’ data is secure and protected at all times.</div>
                    <div className="qTitle text-center">International Regulation</div>
                    <div className="basicText">As we place a high value on our client's funds, We use only the latest standards and technologies in our platform. Traders from all around the world trust our services because we keep the funds in separate bank accounts. Traders will have a peace of mind when they use our platform and services.</div>
                    <div className="qTitle text-center">Partnership with banks</div>
                    <div className="basicText">At Aurum Markets, we gained the trust of our clients as we store their funds in accounts from reputed banks. If you want more information regarding our partnership with banks, take a look at the accounts section.</div>
                </div>
            </div>
            {/* <TradingComponent /> */}
            {/* <StepsToOpenAccount /> */}
        </div>
    );
};

export default SafetyOfFunds;
