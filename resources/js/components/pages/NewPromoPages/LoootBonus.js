import React from 'react';
import "./components/newPromoPage.css"
const UltimateBonus = () => {
    return (
        <div>
            <div className="newPromoBg" style={{ backgroundImage: "url('/assets/images/lootbanner.jpg')", height: '700px' }}>
                <div>
                    <div className='title'><span className='titleLg'> WIN</span><br></br>
                        EXCLUSIVE GIFTS FOR TRADING
                    </div>
                    <div style={{ fontSize: '22px' }} className='title title2'>

                        Trade with Aurum Markets now & get a chance to
                        win maximum prizes</div>
                    {/* <button className='btn  btn-danger btn-lg rounded mt-3' style={{ backgroundColor: '#A2237E' }} onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }}>Get Started</button> */}
                    {/* <a href="/bonus-terms"> <div className='text'>*Terms and conditions apply</div></a> */}
                </div>
            </div>
            <div className='container fifty_per_page'>
                <div className='row mt-5'>
                    <div className='col-md-12'>
                        <h4 className='text-bold title title2 text-center text-dark'>How to Claim Your Bonus</h4>
                        <div className='row mt-5'>
                            <div className='col-md-4 text-center'>
                                <img style={{ width: '40%' }} src="/assets/images/forex.png"></img>
                                <h4 className='text mt-2' style={{ fontSize: '18px' }}>Trade</h4>
                            </div>
                            <div className='col-md-4 text-center'>
                                <img style={{ width: '40%' }} src="/assets/images/coin-collecting.png"></img>
                                <h4 className='text mt-2' style={{ fontSize: '18px' }}>Collect Prizes Lot</h4>
                            </div>
                            {/* <div className='col-md-3 text-center'>
                                <img style={{ width: '40%' }} src="/assets/images/save-money.png"></img>
                                <h4 className='text mt-2' style={{ fontSize: '18px' }}> Request Bonus</h4>
                            </div> */}
                            <div className='col-md-4 text-center'>
                                <img style={{ width: '40%' }} src="/assets/images/gift.png"></img>
                                <h4 className='text mt-2' style={{ fontSize: '18px' }}>Redeem Them For Prizes</h4>
                            </div>
                        </div>

                    </div>
                </div>
            </div>




            <div className="newPromoBg px-0 mt-4" style={{ backgroundImage: "url('/assets/images/loot2.jpg')", height: '450px', backgroundPosition: 'inherit' }}>
                <div className='container  mb-5'>
                    <div className='text-light text-center'>
                        <h1 className='title titlelg text-bold '>
                            How prize lots are calculated

                        </h1>
                        <br></br>
                        <h4>
                            <span className='titlelg title'> 1</span>
                            Traded lot
                            =
                            <span className='titlelg title'> 1</span>
                            Prize lot
                        </h4> <br></br>
                        <h6>
                            * Prize lots are calculated for closed orders only
                        </h6> <br></br>

                    </div>
                </div>
            </div>
            <div className="newPromoBg px-0 " style={{ backgroundImage: "url('/assets/images/loot3.jpg')", height: '450px', backgroundPosition: 'inherit' }}>
                <div className='container  mb-5'>
                    <div className='text-light text-center'>
                        <h1 className='title titlelg text-bold '>
                            The more you Trade, the more chances to win exclusive prizes

                        </h1>
                        <br></br>
                        <h4>
                            Offering premium prizes for every trader at Aurum Markets.
                        </h4> <br></br>
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

export default UltimateBonus;
