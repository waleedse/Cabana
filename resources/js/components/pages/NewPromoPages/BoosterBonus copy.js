import React from 'react';
import "./components/newPromoPage.css"
const BoosterBonus = () => {
    return (
        <div>
            <div className="newPromoBg" style={{ backgroundImage: "url('/assets/images/booster-bonus.png')", height: '700px' }}>
                <div>
                    <div className='title'><span className='titleLg'> Booster Bonus</span></div>
                    <div style={{ fontSize: '22px' }} className='title title2'>30% Bonus applied to your Deposit into the live account. <br></br>Boost your trading potential with 30% Deposit
                        Bonus. <br></br>Booster Bonus helps you maximize your profit with larger trading lots available.
                    </div>
                    <button className='btn  btn-danger btn-lg rounded mt-3' style={{ backgroundColor: '#A2237E' }} onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }}>Get Started</button>
                    {/* <a href="/bonus-terms"> <div className='text'>*Terms and conditions apply</div></a> */}
                </div>
            </div>
            <div className='container fifty_per_page'>
                <div className='row mt-5'>
                    <div className='col-md-12'>
                        <h4 className='text-bold title title2 text-center text-dark'>CLAIM YOUR  BONUS IN 3 EASY STEPS</h4>
                        <div className='row mt-5'>
                            <div className='col-md-4 text-center'>
                                <img style={{ width: '40%' }} src="/assets/images/verified-account.png"></img>
                                <h4 className='text mt-2' style={{ fontSize: '18px' }}>Register with Aurum Markets Premium Bonus Account
                                </h4>
                            </div>
                            <div className='col-md-4 text-center'>
                                <img style={{ width: '40%' }} src="/assets/images/deposit.png"></img>
                                <h4 className='text mt-2' style={{ fontSize: '18px' }}>Make a Minimum Deposit of $100 (USD)</h4>
                            </div>
                            {/* <div className='col-md-3 text-center'>
                                <img style={{ width: '40%' }} src="/assets/images/save-money.png"></img>
                                <h4 className='text mt-2' style={{ fontSize: '18px' }}> Request Bonus</h4>
                            </div> */}
                            <div className='col-md-4 text-center'>
                                <img style={{ width: '40%' }} src="/assets/images/money.png"></img>
                                <h4 className='text mt-2' style={{ fontSize: '18px' }}>Receive 30% Bonus in your account</h4>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
            <div className='mt-5 '>
                <img src='/assets/images/dollar-bonus.png' style={{ width: '100%' }}></img>
            </div>

            <h4 className='text  text-center text-dark mt-5 px-3' style={{ fontSize: '24px', fontWeight: 700 }}>     The Booster Bonus is limited to maximum of $1,000 (USD) per profile.
                <br></br>
                The Bonus will be credited to the Trading Account right aŌer the deposit is made into the Premium
                Bonus Account
            </h4>
            <div className='text-center mt-3'>
                <button className='btn  btn-dark rounded' onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }}>Get Started</button>
            </div>
            {/*
            <div className="newPromoBg px-0 mt-4" style={{ backgroundImage: "url('/assets/images/crystals.png')", height: '450px', backgroundPosition: 'inherit' }}>
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
                            <li>The Bonus will be applicable only for Premium Bonus Account.</li>
                            <li>Deposit by Internal transfer will not qualify for bonus</li>
                            <li>Transfer of funds between accounts will not be considered for this bonus promotion.
                                The Bonus will be automatically removed in following scenarios:</li>
                            <ul>
                                <li> If equity falls under the bonus amount.</li>
                                <li> Once equity has fallen below the bonus amount, bonus can be removed any time even if it
                                    comes back above the bonus amount (Subject to the system processing speed).</li>
                                <li> If any withdrawal or internal transfer results the equity falling below Deposit + Bonus
                                    amount. For Example: Client has deposited $1,000 and received $300 Bonus = $1,300
                                    (Equity), if equity goes below $1,300 upon transfer or withdrawal, bonus will be removed.</li>
                            </ul>
                            <strong>Bonus Cancellation</strong>
                            <li>If the Company suspects that the Client has abused or aƩempted to abuse the Terms and Conditions
                                contained herein, or otherwise acted in a bad faith towards the Company, then the Company reserves
                                the right, at its sole discretion, to deny, withhold or withdraw from that Client the Bonus and, if
                                necessary, block and/or terminate the Client’s access to the Premium Bonus Account.</li>
                            <li>In such cases, the Company will not be liable for any other consequences that result from the Bonus
                                cancellation and/or removal. If the Client has Open Positions and in the event, that any losses incurred
                                as a result of such cancelation of the Bonus the Company will not be held liable.</li>
                            <li>The decision whether the Client is abusing and/or manipulating the Company’s trading plaƞorm
                                and/or its Bonus is at the Company’s sole and exclusive discretion. The Company reserves the right to
                                revoke or change the Bonus at any time. In such cases the Company may at its sole and absolute
                                discretion give the Client the option to either continue using the Bonus already provided, accept the
                                new Terms and Conditions of Bonus, or to cancel the Bonus without any cost and without being
                                considered that the Bonus conditions have not been fulfilled.</li>
                            <li>The Company does not recommend taking the Bonus unless the Client knows how to make it work in
                                his/her advantage.</li>
                            <strong>Acknowledgements and Risk Warnings</strong>
                            <li>The Client understands that the Bonus gives him/her increased value and extra trading leverage.</li>
                            <li>Having said that a caution must be exercised at all times when using the Bonus. Having a Bonus, does
                                allow the client to make larger than usual profit however it also carries the risk of a higher loss. The
                                client understands this risk and the company will not be held responsible under any circumstances.</li>
                            <li>The Client hereby acknowledges that Forex and Contract for Differences (“CFDs “) are leveraged
                                products which involve a high level of risk. It should be noted that when trading in the aforementioned
                                products, it is possible for Clients to lose all their invested capital. These products may not be suitable
                                for everyone and Clients should ensure that they understand the risks involved. Electing to utilize the
                                Bonus may increase the risk of losing all assets. Clients should seek an independent advice, if
                                necessary.</li>
                            <strong>Prohibited Activities:</strong>
                            <li>Hedging trading positions internally (using other trading accounts held with Aurum Markets) or
                                externally (using other trading accounts held with other brokers) to avoid market risk is strictly
                                prohibited.</li>
                            <li>Any form of arbitrage, abuse, fraud, manipulation, cash-back arbitrage, or deceiƞul or fraudulent
                                activity will result in the nullification of the Promotion and the real trading accounts associated with
                                Aurum Markets, along with any transactions or profits gained therein.</li>
                            <li>Prohibited trading techniques, such as "arbitrage trading," "picking/sniping," the use of certain
                                automated trading systems or "Expert Advisors," and abusive trading strategies aimed at riskless
                                profit, are strictly forbidden. These activities include opening opposite orders, particularly during
                                volatile market conditions, news announcements, opening gaps, or when the underlying instrument
                                is suspended or restricted on a particular market, between the same or different trading accounts.</li>
                            <strong>Consequences of Prohibited Activities:</strong>
                            <li>If the Company determines that a Client has engaged in any of the above prohibited activities, it may
                                take one or more of the following actions at its sole discretion, without prior notice:</li>
                            <ul>
                                <li> Close the Client's account.</li>
                                <li> Suspend the Client's account indefinitely.</li>
                                <li> Conduct an investigation on the Client's account for an indefinite period.</li>
                                <li> Impose a penalty fee on the Client equal to or greater than the amount of money
                                    gained from using prohibited techniques.</li>
                                <li> Close the account, confiscate profits resulting from prohibited trading techniques,
                                    and return the original deposit(s) to the account holder. If profits arising from
                                    Prohibited Trading have already been withdrawn, the Company may confiscate
                                    profits from the Client's related accounts to make up for the difference.</li>
                            </ul>
                            <strong>General</strong>
                            <li> The client’s profile must be verified to obtain this Booster Bonus. For verification, clients have
                                to upload their verification documents along with a live selfie.</li>
                            <li> The Booster Bonus is available on Premium Bonus Account both MT4/MT5 Trading plaƞorms.</li>
                            <li> Aurum Markets reserves the right to disqualify any user, if there is a suspicion of misuse or
                                abuse of fair rules.</li>
                            <li> Aurum Markets may cancel a client's bonus at any time without prior notification.</li>
                            <li> Any situation not described in these rules shall be subject to the Company's decision.</li>
                            <li> Aurum Markets reserves the right to change, update or cancel this promotion without any
                                prior notification.</li>
                            <li> The above Bonus is subject to the Company’s Terms of Business available on the Company’s
                                website and Client Area which may be amended from time to time.</li>
                            <li> In case of any discrepancy between the meanings of any translated versions of this Agreement,
                                or any other communications forming part of this Agreement in any other language the
                                meaning of the English language version shall prevail.</li>
                            <li> This Bonus promotion is for Pakistan, Bangladesh, GCC Countries, Nigeria, Malaysia and
                                Indonesia.</li>
                            <li> This promotion will run from 15th Jun 2023 until further notice.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoosterBonus;
