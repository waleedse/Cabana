import React, { Component } from 'react';

class StrategyManage extends Component {
    render() {
        return (
            <div>
                <img src="/assets/images/s_manager.png" style={{ width: '100%' }}></img>
                <div className="card_light  promoOpenAcc">
                    <div className="container">
                        <h2 className="atitle">Become a Strategy Manager with Aurum Markets</h2>

                        <div className="px-5">
                            <div className="row">
                                <h1 className="col-md-3 "></h1>
                                <div>
                                    <div className="d-flex ml-2">
                                        <img style={{ width: '20px' }} src="/assets/images/promoDone.png"></img>
                                        Open an account as a Strategy Manager within minutes.
                                    </div>
                                    <div className="d-flex ml-2">
                                        <img style={{ width: '20px' }} src="/assets/images/promoDone.png"></img>
                                        Boost your earnings by allowing others to follow your trading strategies
                                    </div>
                                </div>
                            </div>

                            <div className='row ml-auto mt-5 mr-auto'>
                                <h1 className="col-md-4 "></h1>
                                <button onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }} className='btnAcc liveAccBtn'>
                                    BECAME A STRATEGY MANAGER</button>
                                <button onClick={() => { window.open('/PAMM', '_self') }}
                                    className='btnAcc liveAccBtn ml-0 ml-md-4'>
                                    MANAGER RATING</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container mb-5">
                    <h1 className="atitle text-dark">
                        Hundreds of Strategy Managers are already earning more. Why not
                        join them?
                    </h1>
                    <h5>Becoming a Strategy Manager is simple. When you open an account as a manager, you’ll have one execution price for all of your copied trades with no hidden
                        fees. You’ll also be able to easily share your trading stats on social channels. <br></br><br></br>

                        We’ve created a dedicated space for our Strategy Managers where their trading statistics are automatically displayed in appealing detail, and ready for you to
                        share on your social channels. All you have to do is trade well, keep making those potential gains, and we’ll do the rest!</h5>
                </div>
                <div className="strategy_manager_bg">
                    <div className="container text-light">
                        <h1 className="atitle text-light">
                            Already have a tested strategy that works for you?
                        </h1>
                        <h5>The more your following grows, the higher up you get in our Top Performing Strategy Manager ranking page, where investors can discover your
                            return rate, risk level, check out your newsfeed and more. <br></br>
                            <br></br>

                            This page is publicly available for all of the thousands of daily website visitors we get, offering you maximum exposure worldwide.
                            <br></br><br></br>
                            Past performance does not guarantee future results.
                            <br></br><br></br>
                        </h5>

                        <div className='row ml-auto mt-5 mr-auto promoOpenAcc bg-transparent'>
                            <h1 className="col-md-4 "></h1>
                            <button onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }} className='btnAcc liveAccBtn'>
                                BECAME A STRATEGY MANAGER</button>
                            <button onClick={() => { window.open('/PAMM', '_self') }}
                                className='btnAcc liveAccBtn ml-0 ml-md-4'>
                                MANAGER RATING</button>
                        </div>



                    </div>
                </div>
            </div>


        );
    }
}

export default StrategyManage;
