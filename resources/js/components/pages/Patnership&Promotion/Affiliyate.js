import React, { Component } from 'react';
import StepsToOpenAccount from '../Deposit&WithdrawPage/components/StartTraingingSteps';
import TradingComponent from "../LandingPage/components/TradingComponent";
import HeroSec2 from '../TradingInstrumentsPages/components/HeroSec2';

class Affiliyate extends Component {
    render() {
        return (
            <div>
                {/* <HeroSec2
                  title="Affiliate"
                  text="Best IB & Affiliate Program by Aurum Markets"
                  bg="affiliyatebg.png"
                >

                </HeroSec2> */}
                <div className="affliateBg">
                    <div>
                        <div className='title_'><span className='titleLg'>Affiliate</span><br /></div>
                        <div className=' title2'>Best IB & Affiliate Program by Aurum Markets</div>
                    </div>
                </div>
                <div className="main-section mb-5">
                    <h1 className="texct-center atitle">Benefits of joining us</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 px-2 mt-3">
                                <div className="card  card_light">
                                    <h6 className="acard_text">
                                        The right to work under the Aurum Markets brand
                                        which helps to raise trust amongst potential clients as
                                        the brand is already recognized.
                                        <br />
                                        <br />
                                    </h6>
                                    <img className="acard_img" src="/assets/images/aicon1.png"></img>
                                </div>
                            </div>
                            <div className="col-md-6 px-2 mt-3">
                                <div className="card  card_light">
                                    <h6 className="acard_text">
                                        High partnership rewards (60% of the revenue that Aurum Markets
                                        Capitals generates from all referred users and 25% of the
                                        commission earned by all sub affiliates brought to the
                                        company).
                                    </h6>
                                    <img className="acard_img" src="/assets/images/aicon2.png"></img>
                                </div>
                            </div>

                            <div className="col-md-6 px-2 mt-3">
                                <div className="card  card_dark">
                                    <h6 className="acard_text text-light">
                                        Minor initial investment.
                                        <br />
                                        <br />
                                    </h6>
                                    <img className="acard_img" src="/assets/images/aicon3.png"></img>
                                </div>
                            </div>
                            <div className="col-md-6 px-2 mt-3">
                                <div className="card  card_dark">
                                    <h6 className="acard_text text-light">
                                        Opportunity to create a network of own developed
                                        affiliates.
                                    </h6>
                                    <img className="acard_img" src="/assets/images/aicon4.png"></img>
                                </div>
                            </div>


                            <div className="col-md-6 px-2 mt-3">
                                <div className="card  card_light">
                                    <h6 className="acard_text">
                                        Opportunity to create and develop a good representative
                                        web page.<br />
                                        <br />
                                    </h6>
                                    <img className="acard_img" src="/assets/images/aicon5.png"></img>
                                </div>
                            </div>
                            <div className="col-md-6 px-2 mt-3 ">
                                <div className="card  card_light">
                                    <h6 className="acard_text">
                                        Overall support from the company: in establishing a new office, advertising and marketing activities,
                                        staff training and general assisting in the daily business activities.

                                    </h6>
                                    <img className="acard_img" src="/assets/images/aicon6.png"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <StepsToOpenAccount></StepsToOpenAccount>
            </div>
        );
    }
}

export default Affiliyate;
