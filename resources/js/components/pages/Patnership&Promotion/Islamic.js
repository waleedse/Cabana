import React, { Component } from 'react';
import StepsToOpenAccount from '../Deposit&WithdrawPage/components/StepsToOpenAccount';

class Islamic extends Component {
    render() {
        return (
            <div>
                <div className="islamic_bg">
                    <div>
                        <div className='title_'><span className='titleLg'>Globally Reliable  </span><br /></div>
                        <div className=' title2'>Authentic Islamic Accounts</div>
                    </div>
                </div>
                <div className="container">
                    <div className="card_light mt-3">
                        <h1 className="atitle text-left">Education Programs for Beginners</h1>
                        <h6 className="acrd_text px-4">
                            Learn about the basics of forex trading in light of Islamic trading practices via our webinar sessions,<br />
                            tutorials & seminars.
                        </h6>
                        <div className="text-right px-3">
                            <img className="acard_img" src="/assets/images/is_icon_1.png"></img>
                        </div>
                    </div>
                    <div className="card_dark mt-3">
                        <h1 className="atitle text-left text-light">SWAP Free Accounts</h1>
                        <h6 className="acrd_text px-4 text-light">
                            The best swap free broker in the industry that allows you to trade with no interest charges. <br />
                            This feature is available for all Aurum Markets clients globally.
                        </h6>
                        <div className="text-right px-3">
                            <img className="acard_img" src="/assets/images/is_icon_2.png"></img>
                        </div>
                    </div>
                    <div className="card_light mt-3">
                        <h1 className="atitle text-left">Negative Balance Protection</h1>
                        <h6 className="acrd_text px-4">
                            Aurum Markets offer secure trading with negative balance protection. <br /> Traders cannot lose more than deposited.
                        </h6>
                        <div className="text-right px-3">
                            <img className="acard_img" src="/assets/images/is_icon_3.png"></img>
                        </div>
                    </div>

                </div>
                <StepsToOpenAccount></StepsToOpenAccount>
            </div>
        );
    }
}

export default Islamic;
