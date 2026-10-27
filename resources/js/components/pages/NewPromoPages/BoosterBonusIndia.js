import React from 'react';
import "./components/newPromoPage.css"
const BoosterBonusIndia = () => {
    return (
        <div>
            <div className="newPromoBg" style={{ backgroundImage: "url('/assets/images/booster-bonus.png')", height: '700px' }}>
                <div>
                    <div className='title'><span className='titleLg'> Booster Bonus</span></div>
                    <div style={{ fontSize: '22px' }} className='title title2'>100% Bonus applied to your Deposit into the live account.
                        <br></br> Boost your trading potential with 100% Deposit Bonus.
                        <br></br>
                        Booster Bonus helps you maximize your profit with larger trading lots available.  </div>
                    <button className='btn  btn-danger btn-lg rounded mt-3' style={{ backgroundColor: '#A2237E' }} onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }}>Get Started</button>
                    {/* <a href="/bonus-terms"> <div className='text'>*Terms and conditions apply</div></a> */}
                </div>
            </div>
            <div className='container fifty_per_page'>
                <div className='row mt-5'>
                    <div className='col-md-12'>
                        <h4 className='text-bold title title2 text-center text-dark'>CLAIM YOUR  BONUS EASY STEPS</h4>
                        <div className='row mt-5'>
                            <div className='col-md-3 text-center'>
                                <img style={{ width: '40%' }} src="/assets/images/verified-account.png"></img>
                                <h4 className='text mt-2' style={{ fontSize: '18px' }}>Sign up with Aurum Markets</h4>
                            </div>
                            <div className='col-md-3 text-center'>
                                <img style={{ width: '40%' }} src="/assets/images/deposit.png"></img>
                                <h4 className='text mt-2' style={{ fontSize: '18px' }}>Complete the profile verification process by uploading the verification documents and a live selfie.</h4>
                            </div>
                            <div className='col-md-3 text-center'>
                                <img style={{ width: '40%' }} src="/assets/images/save-money.png"></img>
                                <h4 className='text mt-2' style={{ fontSize: '18px' }}>Request a Booster Bonus Account.</h4>
                            </div>
                            <div className='col-md-3 text-center'>
                                <img style={{ width: '40%' }} src="/assets/images/money.png"></img>
                                <h4 className='text mt-2' style={{ fontSize: '18px' }}>Deposit minimum of $100 in the Booster Bonus Account.</h4>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
            <div className='mt-5 '>
                <img src='/assets/images/dollar-bonus.png' style={{ width: '100%' }}></img>
            </div>

            <h4 className='text  text-center text-dark mt-5 px-3' style={{ fontSize: '24px', fontWeight: 700 }}>      IT'S TIME TO ENJOY YOUR REWARDS WITH OUR 100% BONUS OFFER    </h4>
            <div className='text-center mt-3'>
                <button className='btn  btn-dark rounded' onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }}>Get Started</button>
            </div>

            {/* <div className="newPromoBg px-0 mt-4" style={{ backgroundImage: "url('/assets/images/crystals.png')", height: '450px', backgroundPosition: 'inherit' }}>
                <div className='container  mb-5'>
                    <div className='text-light text-center'>
                        <h1 className='title titlelg text-bold '>
                            100% Booster Bonus

                        </h1>
                        <br></br>
                        <h4>
                            Double your trading game with a minimum deposit of  $100 only
                        </h4> <br></br>
                        <h4>
                            DOUBLE TRading power with 100% Booster Bonus
                        </h4> <br></br>
                        <h4>
                            TRADE FOR AS LOW AS $100
                        </h4> <br></br>
                        <div className='text-center mt-3'>
                            <button className='btn  btn-danger btn-lg rounded mt-3' style={{ backgroundColor: '#A2237E' }} onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }}>Get Started</button>
                        </div>
                    </div>
                </div>
            </div> */}




            <div className=' mt-5'>
                <div className='container'>
                    <h4 className='text-bold title title2 text-center pt-4 text-dark'>Promotion Rules</h4>
                    <div className=''>
                        <ul>
                            <li> The Booster Bonus is limit to 10,000 USD per profile. </li>
                            <li>The Bonus will be deposited to the Trading Account right after the deposit into trading account. </li>
                            <li>The Bonus will be applicable only for Premium Bonus Account,  Standard Bonus Account and Micro Bonus Account.</li>
                            <li>The Bonus cannot be transferred between the Trading Accounts.</li>
                            <li>The Bonus will be removed automatically in below mentioned cases:</li>
                            <ul>
                                <li>	If equity fallsunder the bonus amount.</li>
                                <li>	Once equity has fallen below the bonus amount, bonus can be removed any time even if it comes back above the bonus amount (Subject to the system processing speed).</li>
                                For Example: Client has deposited 1000 USD and received 1000 USD Bonus = 2000 USD(Equity), if equity goes below 2000 USD upon transfer or withdrawal, bonus will be removed.
                                <li>	If any withdrawal or internal transfer results the equity falling below Deposit+ Bonus amount. </li>
                            </ul>

                            <li> If the Company suspects that the Client has abused or attempted to abuse the Terms and Conditions contained herein, or otherwise acted in a bad faith towards the Company, then the Company reserves the right, at its sole discretion, to deny, withhold or withdraw from that Client the Bonus and, if necessary, block and/or terminate the Client’s access to the Trading Account.</li>

                            <li>In such cases, the Company will not be liable for any other consequences that result from the Bonus cancellation and/or removal. If the Client has Open Positions and in the event, that any losses incurred as a result of such cancelation of the Bonus the Company will not be held liable.</li>

                            <li>The decision whether the Client is abusing and/or manipulating the Company’s trading platform and/or its Bonus is at the Company’s sole and exclusive discretion. The Company reserves the right to revoke or change the Bonus at any time. In such cases the Company may at its sole and absolute discretion give the Client the option to either continue using the Bonus already provided, accept the new Terms and Conditions of Bonus, or to cancel the Bonus without any cost and without being considered that the Bonus conditions have not been fulfilled.</li>

                            <li>The Company does not recommend taking the Bonus unless the Client knows how to make it work in his/her advantage.</li>
                            <li> The Client understands that the Bonus gives him/her increased value and extra trading leverage. Having said that a caution must be exercised at all times when using the Bonus. By using the Bonus higher trades may be closed thus more money can be made, however the Client may also lose a lot of money. </li>

                            <li>The Client hereby acknowledges that Forex and Contract For Differences (“CFDs“) are leveraged products which involve a high level of risk. It should be noted that when trading in the aforementioned products, it is possible for Clients to lose all their invested capital. These products may not be suitable for everyone and Clients should ensure that they understand the risks involved. Electing to utilize the Bonus may increase the risk of losing all assets. Clients should seek an independent advice, if necessary. </li>
                            <li>The above Bonus is subject to the Company’s Terms of Business available on the   Company’s       website and Client Area which may be amended from time to time. </li>
                            <li> In case of any discrepancy between the meanings of any translated versions of this Agreement, or any other communications forming part of this Agreement in any other language the meaning of the English language version shall prevail.</li>

                            <li>Forex trading can be very risky and is not appropriate for all investors. Forex trade regulation depends on the jurisdiction. kindly ensure you country regulation before investing.</li>
                            <li>This promotion will run from 2nd of October 2023 until 30th of December 2023</li>


                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoosterBonusIndia;
