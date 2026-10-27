import React, { Component } from 'react';
import HeroSec2 from './components/HeroSec2';
import TradingInstrumentLeft from "./components/TradingInstrumentLeft";
import TradingInstrumentRight from "./components/TradingInstrumentRight";
class ProtectionofFunds extends Component {
    render() {
        return (
            <div>
                <HeroSec2
                    title="Protection of Funds"
                    // text="Our Best Practices for the Protection of Your Funds "
                    // text2="Aurum Markets ensures the security of funds and personal data of its clients in the best possible manner. It is our first priority to protect your deposits in every possible way. Here are some of the measures we take to ensure funds protection: "
                    bg="protectionfundbanner.jpg"
                />
                <div id="trading_instruments">
                    <div className="greyBg">
                        <div className="basicRow  text-center">
                            <h4 className="aboutDetailTitle">
                                Our Best Practices for the Protection of
                                <br />  Your Funds
                            </h4>
                            <p className="textFont">
                                Aurum Markets ensures the security of funds and personal data of its clients in the best possible manner.
                                It is our first priority to protect your
                                deposits in every possible way. Here are some of the measures we take to ensure funds protection
                            </p>
                        </div>
                    </div>

                    <TradingInstrumentLeft
                        title="Exclusive Accounts"
                        text="As per global practice and international regulation standards, Aurum Markets has
                taken essential steps to ensure the protection and exclusivity of its clients. There’s a separate account for each client to keep
                their funds separated and protected from the company's balance sheets. This keeps your funds secure and safe guarded."
                        imgUrl="/assets/images/exclusiveaccounts.jpg"
                    // learnMoreLink=""
                    />
                    <TradingInstrumentRight
                        title="SSL-protected Personal Information"
                        text="The security of personal details of our clients is of utmost priority.
                We use highly secure transparent proxy Secure Sockets Layer encryption (SSL) and decryption
                between the client and the server to protect your personal data and financial transactions.
                The SSL is protected with 128-bit encryption, which makes your browsing safe and your data inaccessible to any third parties."
                        imgUrl="/assets/images/sslprotected.jpg"
                    // learnMoreLink="/precious-metals"
                    />
                    <TradingInstrumentLeft
                        title="Protect & Verify Your Account"
                        text="Aurum Markets follows a proper protocol to verify your account by submitting your personal ID scan and an address proof.
                This simple measure will make sure your transactions are authorized and secured.                "
                        imgUrl="/assets/images/protectandverifyaccount.jpg"
                    // learnMoreLink="/comodoties"
                    />
                    <TradingInstrumentRight
                        title="Synchronized Deposit & withdrawal Procedure"
                        text="Withdrawal from a live account requires an email confirmation, this fully protected verification allows
                you to ensure that no one can ever access your trading account. It is also required that you use the same payment
                details for deposits and withdrawals.
                Thus, under no circumstances can Aurum Markets transfer your withdrawal to an unauthorized third party."
                        imgUrl="/assets/images/SynchronizedDeposit&withdrawal.jpg"
                    // learnMoreLink="/cfd-incdices"
                    />
                    <TradingInstrumentLeft
                        title="Personal Account Manager"
                        text="Each client is assigned an associate for his account who would be managing the workings of his client’s trading account and all the personal information and account details are kept safe and protected with the manager assigned. This ensure your details are fully protected with a backup in case you lose any important or confidential information."
                        imgUrl="/assets/images/PersonalAccountManager.jpg"
                    // learnMoreLink="/comodoties"
                    />
                    <TradingInstrumentRight
                        title="Advanced Security & Protection"
                        text="Our technical services are monitored 24/7 by a dedicated team of highly professional security engineers and technical specialists.
                They have developed and maintained top level protection, so any data loss, damage or other technical issues are highly unlikely."
                        imgUrl="/assets/images/AdvancedSecurity&Protection.jpg"
                    // learnMoreLink="/cfd-incdices"
                    />
                    <div className="mt-5"></div>
                </div>
            </div>
        );
    }
}

export default ProtectionofFunds
