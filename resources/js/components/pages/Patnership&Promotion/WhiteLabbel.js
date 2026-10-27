import React, { Component } from 'react';
import StepsToOpenAccount from '../Deposit&WithdrawPage/components/StepsforWhitelabel';

class WhiteLABEL extends Component {
    render() {
        return (
            <div>
                <div className="whiteBg">
                    <div>
                        <div className='title_'><span className='titleLg'>White Label Solutions</span><br /></div>
                        <div className=' title2'>Customised Forex Trading solutions for your Brokerage Firm</div>
                    </div>
                </div>
                <div className="container  ">
                    <h1 className="texct-center mt4title">White Label Solutions</h1>
                    <h6 className="acard_text text-center">
                        It is quite challenging to start your forex brokerage firm right from the very beginning. There are a lot of things that need to be taken into consideration when you want to set out on your venture in the forex market. You need to set time aside to provide training to personnel, create trading platforms and infrastructure that are transparent, safe and secure. On top of all these things, you need to have the right amount of funds to ensure there are no hiccups along the way.<br /><br />

                        Luckily, Aurum Markets does all the heavy lifting for you, making the process of starting a forex brokerage firm simple and easy. At Aurum Markets, you get White Label Solutions for your firm, provided you have the license to accept, hold, and release the funds of your clients.<br /><br />

                        Aurum Markets gives you the freedom to use our state-of-the-art trading platforms that are completely supported by us. At the same time, you can use the name of your firm or brand while using our White Label Solutions. We keep our technological services up-to-date at all times. Also, we customize our services according to the requirements of your clients. Whether your clients want to trade CFDs or forex, they can use one of the many instruments we possess at unbelievable prices. Contact us today so that you can make your dream come true!<br /><br />
                    </h6>

                </div>
                {/* <div className="bt4_bottom mt-3 ">
                    <div className="container">
                    <h2 className="mt4title_ text-center">Start Trading in 3 Steps</h2>
                        <div className="row py-5">
                            <div className="col-md-6 ">
                            <div className=' title2 text-left'>Contact us for a Quote<br/>
Finalise the Terms<br/>
Start using White Label services</div>
                                <button className="btn download_mmt4 px-3 mt-3">Get Started</button>

                            </div>
                            <div className="col-md-6 ">
                                <img className="mt4_graph" src="/assets/images/white_left.png"></img>
                            </div>
                        </div>
                    </div>
                </div> */}
                <StepsToOpenAccount></StepsToOpenAccount>
            </div>
        );
    }
}

export default WhiteLABEL;
