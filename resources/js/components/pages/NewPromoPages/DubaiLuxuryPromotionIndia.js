import React from 'react';
import "./components/newPromoPage.css"
const DubaiLuxuryPromotionIndia = () => {
    return (
        <div>
            <div className="newPromoBg" style={{ backgroundImage: "url('/assets/images/Design4_2-min.jpg')", height: '700px' }}>
                <div>
                    <div className='title'><span className='titleLg'> Dubai Luxury Trip Promotion</span></div>
                    <div style={{ fontSize: '22px' }} className='title title2'>Aurum Markets is thrilled to introduce
                        the "Dubai Luxury Trip PromoCon," <br />a unique opportunity designed to combine
                        financial achievements <br />with an extravagant travel experience.
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
                                <h4 className='text mt-2' style={{ fontSize: '18px' }}>Make a minimum deposit of $10,000 in your Aurum Markets trading account
                                    method</h4>
                            </div>
                            {/* <div className='col-md-3 text-center'>
                                <img style={{ width: '40%' }} src="/assets/images/save-money.png"></img>
                                <h4 className='text mt-2' style={{ fontSize: '18px' }}> Request Bonus</h4>
                            </div> */}
                            <div className='col-md-4 text-center'>
                                <img style={{ width: '40%' }} src="/assets/images/money.png"></img>
                                <h4 className='text mt-2' style={{ fontSize: '18px' }}>2.	Achieve a minimum trading volume of 1000 qualiﬁed standard lots during the Promotion Period. (minimum diﬀerence between open and close should not be less than 2 minutes)</h4>
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
                        <h3 className='text' style={{ fontSize: '18px' }}>By participating in this exclusive promotion, you stand a chance to secure a truly
                            luxurious Dubai trip, which includes:
                            <br /><br />- 4 nights Luxury trip in Dubai for the winner.
                            <br />- Round-trip economy class airline tickets to the vibrant city of Dubai.
                            <br />- A luxurious stay at a top-tier hotel for a set number of nights.
                            <br />- Visa processing fees for your visit to the United Arab Emirates.
                            <br />- Visit to Dubai's most sought-after attractions.
                            <br />- See Trip details below for full list of included items.
                            <br /><br />The Dubai Luxury Trip is designed to offer you a taste of opulence that only Dubai
                            can provide, and it's all within your reach by meeting the minimum deposit and
                            trading volume requirements.
                        </h3>
                    </div>
                    <div className='col-md-4 '>
                        <img src='/assets/images/dubai-trip.jpg' style={{ width: '80%', borderRadius: '7px' }}></img>
                    </div>
                </div>
            </div>

            <h4 className='text  text-center text-dark mt-5 px-3' style={{ fontSize: '24px', fontWeight: 700 }}>   Explore the Dubai Luxury Trip Promotion
                <br></br>

            </h4>
            <h6 className='text  text-center text-dark  px-3' style={{ fontSize: '18px', fontWeight: 600 }}>
                The Dubai Luxury Trip Promotion is not just another trading incentive; it's your <br />
                ticket to an extravagant voyage to the dazzling city of Dubai. Aurum Markets oﬀers <br />
                you the chance to experience the epitome of luxury in one of the world's most iconic destinations.
            </h6>
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

                            <li> <strong>	Eligibility </strong></li>
                            <ul>
                                <li> The Dubai Luxury Trip Promotion (hereinaWer referred to as the "Promotion") is open to all clients of Aurum Markets.</li>

                                <li>	Participants must hold an active trading account with Aurum Markets.</li>

                                <li>	Clients must have completed the necessary identity veriﬁcation and account validation procedures.</li>

                                <li>	Participants must adhere to all applicable laws and regulations governing forex trading.</li>
                            </ul>
                            <li><strong>	Qualiﬁcation Requirement </strong></li>
                            <ul>
                                <li>	To qualify for the Dubai Luxury Trip Promotion, Participants are required to deposit a minimum amount of $10,000 into their Aurum Markets trading account during the Promotion Period.</li>

                                <li>	In addition to the minimum deposit requirement, Participants must also achieve a minimum trading volume of 1000 qualiﬁed standard lots (minimum diﬀerence between open and close should not be less than 2 minutes) during the Promotion Period to become eligible for the Dubai Luxury Trip.</li>

                                <li>	This oﬀer is only valid on Standard, Ultra and Elite Account.</li>
                            </ul>
                            <li>	<strong>Promotion Period </strong></li>
                            <ul>
                                <li>The Promotion Period begins on February 15th 2024 and concludes on MMay 15th 2024. All eligible deposits and trading activities must occur within this speciﬁed timeframe.
                                </li></ul>


                            <li><strong>	Dubai Luxury Trip Details </strong></li>

                            <ul>
                                <li>Participants	who	meet	the	minimum	deposit	and	trading	volume requirements will qualify for the Dubai Luxury Trip, which encompasses:
                                </li><li>	4 nights Luxury trip in Dubai for the winner.</li>
                                <li>	Round-trip economy class airline ticket to Dubai.</li>
                                <li>	A lavish stay at a prestigious hotel for 4 nights.</li>
                                <li>Visa processing fees for your visit to the United Arab Emirates.</li>
                                <li>	Chauﬀeured transport during the stay for the expeditions</li>
                                <li>	Airport pick up and drop oﬀ</li>
                                <li>	Daily breakfast at the hotel</li>
                                <li>	Dubai City Tour</li>
                                <li>	Marina Dhow Cruise Dinner</li>
                                <li>	Dessert Safari with Dinner and Entertainment</li>
                                <li>	Visit to Burj Khalifa</li>
                                <li>	The Dubai Luxury Trip does not cover additional expenses such as meals, personal expenses, travel insurance, or any other costs not explicitly mentioned above.
                                </li></ul>
                            <li>	<strong>Notiﬁcation and Redemption </strong></li>
                            <ul>
                                <li>	Participants who meet the minimum deposit and trading volume requirements will receive notiﬁcation from Aurum Markets via email within 15 business days aWer the end of the Promotion Period.

                                </li><li>	To redeem the Dubai Luxury Trip, Participants must adhere to the instructions provided in the notiﬁcation email, including the submission of any required documentation.
                                </li></ul>
                            <li><strong>	General Terms </strong></li>
                            <ul>
                                <li>	Prohibited Activities</li>
                                <ul>
                                    <li>	Engaging in hedging trading positions, internally or externally, to avoid market risk is strictly prohibited.

                                    </li><li>	Any form of arbitrage, abuse, fraud, manipulation, cash-back arbitrage, or deceitful or fraudulent activity will lead to the nulliﬁcation of the Promotion and the associated trading accounts along with any transactions or proﬁt gained therein.

                                    </li><li>	Prohibited trading techniques, such as "arbitrage trading," "picking/sniping," the use of certain automated trading systems or "Expert Advisors," and abusive trading strategies aimed at riskless proﬁt, are strictly forbidden. These activities include opening opposite orders, particularly during volatile market conditions, news announcements, opening gaps, or when the underlying instrument is suspended or restricted on a particular market, between the same or diﬀerent trading accounts.
                                    </li></ul>
                                <li>	Consequences of Prohibited Activities</li>
                                <ul>
                                    If Aurum Markets determines that a client has engaged in prohibited activities, it may take various actions at its sole discretion, including but may not limited to:

                                    <li>	Closing the Client’s account.</li>
                                    <li>	Suspend the Client’s account indeﬁnitely.</li>
                                    <li>	Conducting investigations.</li>
                                    <li>	Imposing penalty fee on the client equal to or greater than the amount of money gained from using prohibited techniques.
                                    </li><li>	Close the account, conﬁscate proﬁts resulting from prohibited trading techniques, and return the original deposit(s) to the account holder. If proﬁts arising from Prohibited Trading have already been withdrawn, the Company may conﬁscate proﬁts from the Client's related accounts to make up for the diﬀerence.
                                    </li><li>	Verify the eligibility of Participants at any stage of the Promotion.
                                    </li></ul>
                                <li>	The Dubai Luxury Trip is non-transferable and cannot be exchanged for cash or other promotional oﬀers.
                                </li>
                                <li>	Participants are responsible for all taxes, fees, and other charges associated with the Dubai Luxury Trip.


                                </li><li>	Aurum Markets shall not be liable for any delay, suspension, or cancellation of the Promotion due to circumstances beyond its control.
                                </li></ul>
                            <li>	<strong>Governing Law and Jurisdiction </strong> </li>
                            <ul>
                                <li>These Terms and the Promotion shall be governed by and construed in accordance with the applicable laws. Any disputes arising under or in connection with this Promotion shall be subject to the exclusive decision of Aurum Markets.
                                </li>
                            </ul>
                            <li> <strong>	Withdrawal </strong>
                                <ul>
                                    <li>	If you withdraw any of your own funds aWer activating the Promotion, the Promotion will be cancelled. However, you are allowed to withdraw proﬁts from your trading activities at any time.
                                    </li><li>	To withdraw proﬁts, your withdrawable balance must always be greater than your deposited balance according to the provided formula.
                                    </li>
                                </ul>
                            </li>
                            <li>Balance ± Floating - Margin Required = Withdrawable Balance</li>

                            <li> <strong>	Disqualiﬁcation and Decisions </strong></li>
                            <ul>
                                <li>	Aurum Markets reserves the right to disqualify any user suspected of misusing or abusing the Promotion's rules.</li>

                                <li>	If the Promotion is cancelled, it cannot be reinstated.</li>
                            </ul>

                            <li> <strong>	Modiﬁcation or Cancellation </strong></li>
                            <ul>
                                <li>	Aurum Markets reserves the right to change, update, or cancel this Promotion at any time without prior notiﬁcation. Such changes may include modiﬁcations to eligibility criteria, rewards, duration, or any other aspect of the Promotion.</li>

                                <li>	Any modiﬁcations or cancellations will be at the sole discretion of Aurum Markets, and participants will not be entitled to any compensation or claim in such cases.</li>

                            </ul>

                            <li> <strong>	Use of Information </strong> </li>
                            <ul>
                                <li>	By participating in the Promotion, you acknowledge and agree that the information provided during the registration process may be used by Aurum Markets for marketing purposes. </li>

                                <li>	By participating in the Dubai Luxury Trip Promotion, Participants acknowledge that they have read, understood, and agreed to these Dubai Luxury Trip Terms and Conditions. It is your responsibility to review these Terms and any updates or changes made by Aurum Markets. Failure to adhere to these Terms may result in disqualiﬁcation from the Promotion and the forfeiture of any rewards or beneﬁts associated with it. </li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DubaiLuxuryPromotionIndia;
