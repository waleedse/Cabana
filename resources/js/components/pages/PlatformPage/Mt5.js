import React, { Component } from 'react';

class Mt4 extends Component {
    render() {
        return (
            <div>
                <div className="mt5Bg">
                    <div>
                        <img className="mt4icontop" src="/assets/images/mt5.png"></img>
                        <div className='title_'><span className='titleLg'>MT5 Client Platform</span><br /></div>
                        <div className=' title2'>A powerful platform for Forex and Exchange markets</div>
                    </div>
                </div>
                <div className="container  ">
                    <h1 className="texct-center mt4title">Elevate Your Trading With Aurum Markets Mt5 Platform</h1>
                    <h6 className="acard_text text-left">
                        Successful trading on financial markets begins with a comfortable and multi-functional trading platform. MetaTrader 5 is the best choice for the modern trader!<br /><br />

                        MetaTrader 5 is an institutional multi-asset platform offering outstanding trading possibilities and technical analysis tools, as well as enabling the use of automated trading systems (trading robots) and copy trading. MetaTrader 5 is an all-in-one platform for trading Forex and Futures.<br /><br />

                        MetaTrader 5 allows you to enjoy the freedom of movement to the full extent — you can stay active while trading from smartphones and tablets. By choosing the most convenient way from a variety of options, you can trade 24 hours a day!<br /><br />

                        Additional services expand the functionality of the platform making its capabilities almost limitless. MetaTrader 5 offers the built-in Market of trading robots, Copy Trading and the Virtual Hosting service (Forex VPS). Use all these services from one place, and access new trading opportunities!<br /><br />
                    </h6>
                    <div className="text-right">
                        <img className="arrow_img" src="/assets/images/mt4arrow.png"></img>
                    </div>
                </div>
                <div className="bt4_bottom mt-3 ">
                    <div className="container">
                        <div className="row py-5">
                            <div className="col-md-6 text-center">
                                <h2 className="mt4title_">MetaTrader5</h2>
                                <button onClick={() => { window.open('https://portal.aurummarkets.com/login/', '_self') }} className="btn download_mmt4">DOWNLOAD MT5 PLATFORM</button>
                                <img className="mt4icons" src="/assets/images/mt4icons.png"></img>
                            </div>
                            <div className="col-md-6 text-center">
                                <img className="mt4_graph" src="/assets/images/mt5_bottom_.png"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Mt4;
