import React from 'react';
import "./components/newPromoPage.css"
const UmrahpackagePromotion = () => {
    return (
        <div>
            <div className="newPromoBg" style={{ backgroundImage: "url('/assets/images/booster-bonus.png')", height: '700px' }}>
                <div>
                    <div className='title'><span className='titleLg'> Umrah Package Promotion</span></div>
                    <div style={{ fontSize: '22px' }} className='title title2'>Start your journey of faith with Aurum Markets today, <br />and let your dreams take flight.
                    </div>
                    <button className='btn  btn-danger btn-lg rounded mt-3' style={{ backgroundColor: '#A2237E' }} onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }}>Get Started</button>
                    {/* <a href="/bonus-terms"> <div className='text'>*Terms and conditions apply</div></a> */}
                </div>
            </div>
            <div className='container fifty_per_page'>
                <div className='row mt-5'>
                    <div className='col-md-12'>
                        <h4 className='text-bold title title2 text-center text-dark'>Participate with Ease
                        </h4>
                        <div className='row mt-5'>
                            <div className='col-md-4 text-center'>
                                <img style={{ width: '40%' }} src="/assets/images/verified-account.png"></img>
                                <h4 className='text mt-2' style={{ fontSize: '18px' }}>Register with Aurum Markets Premium Bonus Account
                                </h4>
                            </div>
                            <div className='col-md-4 text-center'>
                                <img style={{ width: '40%' }} src="/assets/images/deposit.png"></img>
                                <h4 className='text mt-2' style={{ fontSize: '18px' }}>Make a minimum deposit of $2500 in your Aurum Markets trading account during the
                                    promotion period</h4>
                            </div>
                            {/* <div className='col-md-3 text-center'>
                                <img style={{ width: '40%' }} src="/assets/images/save-money.png"></img>
                                <h4 className='text mt-2' style={{ fontSize: '18px' }}> Request Bonus</h4>
                            </div> */}
                            <div className='col-md-4 text-center'>
                                <img style={{ width: '40%' }} src="/assets/images/money.png"></img>
                                <h4 className='text mt-2' style={{ fontSize: '18px' }}>Achieve a minimum trading volume of 200 standard lots during the Promotion Period</h4>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
            {/* <div className='mt-5 '>
                <img src='/assets/images/dollar-bonus.png' style={{ width: '100%' }}></img>
            </div> */}
            <div className='container-fluid mt-5 px-5'>

                <div className='row '>
                    <div className='col-md-5 offset-md-2'>
                        <h1 className='text-bold title title2 text-dark'>What Awaits You?</h1>
                        <h3 className='text' style={{ fontSize: '18px' }}>By participating in this exclusive promotion, you stand a chance to secure an all-inclusive
                            Umrah Package, which includes:
                            <br /><br />- Round-trip airline ticket to the sacred destination
                            <br />- Comfortable accommodation for the duration of your stay
                            <br />- Umrah visa processing fees
                            <br />- Reliable ground transportation within the destination city
                            <br />- Guided assistance during your Umrah pilgrimage

                            <br /><br />Your spiritual journey becomes more accessible than ever, by meeting the minimum
                            deposit and trading volume requirements, you can transform your forex trading success
                            into a journey of faith that will stay with you forever
                        </h3>
                    </div>
                    <div className='col-md-4 '>
                        <img src='/assets/images/types-of-umrah.jpg' style={{ width: '80%', borderRadius: '7px' }}></img>
                    </div>
                </div>
            </div>

            {/* <h4 className='text  text-center text-dark mt-5 px-3' style={{ fontSize: '24px', fontWeight: 700 }}>   Explore the Dubai Luxury Trip Promotion
            <br></br>

               </h4> */}
            {/* <h6 className='text  text-center text-dark  px-3' style={{ fontSize: '18px', fontWeight: 600 }}>
           The Dubai Luxury Trip Promotion is not just another trading incentive; it's your <br />
           ticket to an extravagant voyage to the dazzling city of Dubai. Aurum Markets oﬀers <br />
           you the chance to experience the epitome of luxury in one of the world's most iconic destinations.
           </h6>
            <div className='text-center mt-3'>
                <button className='btn  btn-dark rounded' onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }}>Get Started</button>
            </div> */}
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
                            <li><strong>Eligibility:</strong>
                                <ul>
                                    <li>The Promotion is open to all clients of Aurum Markets who meet the following criteria:</li>
                                    <li>The client has a live trading account with Aurum Markets.</li>
                                    <li>The client has completed the necessary identity verification and account validation procedures.</li>
                                    <li>The client is in compliance with all applicable laws and regulations governing forex trading.</li>
                                </ul>
                            </li>

                            <li><strong>Qualification Requirement:</strong>
                                <ul>
                                    <li>To be eligible for the Umrah Package Promotion, Participants must make a minimum deposit of $2500 in their trading account during the Promotion Period.</li>
                                    <li>In addition to the minimum deposit requirement, Participants must also achieve a minimum trading volume of 500 qualified standard lots (any trade which is open for less than 2 minutes will not be considered as a qualified lot) during the Promotion Period to qualify for the Umrah Package.</li>
                                    <li>This offer is only valid on Standard, Ultra, and Elite Account.</li>
                                </ul>
                            </li>

                            <li><strong>Promotion Period:</strong>
                                <ul>
                                    <li>The Promotion Period is defined as the period starting from 15th February 2024 and ending on 15th May 2024. All eligible deposits and trading activity must occur within this specified timeframe.</li>
                                </ul>
                            </li>

                            <li><strong>Umrah Package Details:</strong>
                                <ul>
                                    <li>Participants who meet the minimum deposit and trading volume requirements will qualify for the Umrah Package, which includes:
                                        <ul>
                                            <li>Round-trip airline tickets to the destination of the Umrah pilgrimage.</li>
                                            <li>Accommodation at a reputable hotel for 7 number of nights.</li>
                                            <li>Umrah visa processing fees.</li>
                                            <li>Ground transportation within the destination city.</li>
                                            <li>Guided assistance during the Umrah pilgrimage.</li>
                                            <li>The Umrah Package does not include any additional expenses, such as meals, personal expenses, travel insurance, or any other costs not explicitly mentioned in the section above.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li><strong>Notification and Redemption:</strong>
                                <ul>
                                    <li>Participants who meet the minimum deposit and trading volume requirements will be notified by Aurum Markets via email within 15 business days after the end of the Promotion Period.</li>
                                    <li>To redeem the Umrah Package, Participants must follow the instructions provided in the notification email, including the submission of any required documentation.</li>
                                </ul>
                            </li>

                            <li><strong>General Terms:</strong>
                                <ul>
                                    <li>Aurum Markets reserves the right to:
                                        <ul>
                                            <li>Modify or cancel the Promotion at any time without prior notice.</li>
                                            <li>Disqualify any Participant who violates these Terms or engages in fraudulent or unethical trading practices.</li>
                                        </ul>
                                    </li>

                                    <li><strong>Prohibited Activities:</strong>
                                        <ul>
                                            <li>Hedging trading positions internally (using other trading accounts held with Aurum Markets) or externally (using other trading accounts held with other brokers) to avoid market risk is strictly prohibited.</li>
                                            <li>Any form of arbitrage, abuse, fraud, manipulation, cashback arbitrage, or deceitful or fraudulent activity will result in the nullification of the Promotion and the real trading accounts associated with Aurum Markets, along with any transactions or profits gained therein.</li>
                                            <li>Prohibited trading techniques, such as "arbitrage trading," "picking/sniping," the use of certain automated trading systems or "Expert Advisors," and abusive trading strategies aimed at riskless profit, are strictly forbidden. These activities include opening opposite orders at the same time or within 2 minutes of each order, opening opposite orders particularly during volatile market conditions, news announcements, opening gaps, or when the underlying instrument is suspended or restricted on a particular market, between the same or different trading accounts.</li>
                                        </ul>
                                    </li>

                                    <li><strong>Consequences of Prohibited Activities:</strong>
                                        <ul>
                                            <li>If the Company determines that a Client has engaged in any of the above prohibited activities, it may take one or more of the following actions at its sole discretion, without prior notice:
                                                <ul>
                                                    <li>Close the Client's account.</li>
                                                    <li>Suspend the Client's account indefinitely.</li>
                                                    <li>Conduct an investigation on the Client's account for an indefinite period.</li>
                                                    <li>Impose a penalty fee on the Client equal to or greater than the amount of money gained from using prohibited techniques.</li>
                                                    <li>Close the account, confiscate profits resulting from prohibited trading techniques, and return the original deposit(s) to the account holder. If profits arising from Prohibited Trading have already been withdrawn, the Company may confiscate profits from the Client's related accounts to make up for the difference.</li>
                                                    <li>Verify the eligibility of Participants at any stage of the Promotion.</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>

                                    <li><strong>The Umrah Package is non-transferable and cannot be exchanged for cash or any other promotional offer.</strong></li>
                                    <li><strong>Participants are responsible for all taxes, fees, and other charges associated with the Umrah Package.</strong></li>
                                    <li><strong>Aurum Markets shall not be liable for any delay, suspension, or cancellation of the Promotion due to circumstances beyond its control, including, but not limited to, force majeure events.</strong></li>
                                </ul>
                            </li>

                            <li><strong>Governing Law and Jurisdiction:</strong>
                                <ul>
                                    <li>These Terms and the Promotion shall be governed by and construed in accordance with the laws. Any disputes arising under or in connection with this Promotion shall be subject to the exclusive decision of Aurum Markets.</li>
                                </ul>
                            </li>

                            <li><strong>Withdrawal:</strong>
                                <ul>
                                    <li>If you withdraw any of your own funds after activating the Promotion, the Promotion will be cancelled. However, you are allowed to withdraw profits from your trading activities at any time.</li>
                                    <li>To withdraw profits, your withdrawable balance must always be greater than your deposited balance according to the formula:
                                        <ul>
                                            <li>Balance ± Floating - Margin Required = Withdrawable Balance.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li><strong>Disqualification and Decisions:</strong>
                                <ul>
                                    <li>Aurum Markets reserves the right to disqualify any user suspected of misusing or abusing the fair rules of the Promotion. Any situation not described in these rules shall be subject to the Company's decision.</li>
                                    <li>If the Promotion is cancelled, it cannot be reinstated.</li>
                                </ul>
                            </li>

                            <li><strong>Modification or Cancellation:</strong>
                                <ul>
                                    <li>Aurum Markets reserves the right to change, update, or cancel this Promotion at any time without prior notification. Such changes may include, but are not limited to, modifying the eligibility criteria, rewards, duration, or any other aspect of the Promotion.</li>
                                    <li>Any modifications or cancellations will be at the sole discretion of Aurum Markets, and participants will not be entitled to any compensation or claim in such cases.</li>
                                </ul>
                            </li>

                            <li><strong>Use of Information:</strong>
                                <ul>
                                    <li>By participating in the Promotion, you acknowledge and agree that the information provided during the registration process may be used by Aurum Markets for marketing purposes.</li>
                                    <li>By participating in the Umrah Package Promotion, Participants acknowledge that they have read, understood, and agreed to these Terms and Conditions. It is your responsibility to review these Terms and any updates or changes made by Aurum Markets. Failure to adhere to these Terms may result in disqualification from the Promotion and the forfeiture of any rewards or benefits associated with it.</li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UmrahpackagePromotion;
