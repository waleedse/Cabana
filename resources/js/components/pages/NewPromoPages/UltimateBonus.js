import React from 'react';
import "./components/newPromoPage.css"
const BoosterBonus = () => {
    return (
        <div>
            <div className="newPromoBg" style={{ backgroundImage: "url('/assets/images/ultimatebonus.jpg')", height: '700px' }}>
                <div>
                    <div className='title'><span className='titleLg'>   BECOME AN ULTIMATE WINNER</span><br></br>

                        with <span className='titleLg'> Ultimate Bonus</span>
                    </div>
                    <div style={{ fontSize: '22px' }} className='title title2'>
                        Sign up now to enjoy 100% + up to $50 Bonus on Your First Deposit!

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
                                <h4 className='text mt-2' style={{ fontSize: '18px' }}>Open Live Account</h4>
                            </div>
                            <div className='col-md-4 text-center'>
                                <img style={{ width: '40%' }} src="/assets/images/deposit.png"></img>
                                <h4 className='text mt-2' style={{ fontSize: '18px' }}>Make a Deposit  in your Account</h4>

                            </div>
                            {/* <div className='col-md-3 text-center'>
                                <img style={{ width: '40%' }} src="/assets/images/save-money.png"></img>
                                <h4 className='text mt-2' style={{ fontSize: '18px' }}> Request Bonus</h4>
                            </div> */}
                            <div className='col-md-4 text-center'>
                                <img style={{ width: '40%' }} src="/assets/images/money.png"></img>
                                <h4 className='text mt-2' style={{ fontSize: '18px' }}>Get Your Bonus  as Credit</h4>
                            </div>
                        </div>



                    </div>
                </div>
            </div>




            <div className="newPromoBg px-0 mt-4" style={{ backgroundImage: "url('/assets/images/ultimatebonus2.jpg')", height: '400px', backgroundPosition: 'inherit' }}>
                <div className='container  mb-5'>
                    <div className='text-light text-center'>
                        <h1 className='title titlelg text-bold '>
                            Ultimate Bonus Offer

                        </h1>
                        <br></br>
                        <h4>
                            Escalate Your trading goals with a minimum deposit of $50 only
                            & enjoy 100% + $50 (up to $750) Bonus.

                        </h4> <br></br>
                        <h4>
                            If you are searching for the best bonus offer for
                            forex traders, your search ends here!
                        </h4> <br></br>

                    </div>
                </div>
            </div>
            <div className="newPromoBg px-0 " style={{ backgroundImage: "url('/assets/images/ultimatebonus3.jpg')", height: '450px', backgroundPosition: 'inherit' }}>
                <div className='container  mb-5'>
                    <div className='text-light text-center'>
                        <h1 className='title titlelg text-bold '>
                            ENJOY THE BEST BONUS OFFER IN THE MARKET
                            TO ENHANCE YOUR TRADING

                        </h1>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className='text-center mt-3'>
                            <button className='btn  btn-danger btn-lg rounded mt-3' style={{ backgroundColor: '#A2237E' }} onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }}>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BoosterBonus;
