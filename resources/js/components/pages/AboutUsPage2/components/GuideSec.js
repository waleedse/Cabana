import React, { Component } from 'react';

class GuideSec extends Component {
    render() {
        return (
            <div className="guideBg">
                <div className="guideTitle2">Educating and Empowering Forex Traders


                </div>
                <div className="guideTitle">

                    We’re investing in the Forex trader
                </div>
                <div className='guideText'>Are you looking for a forex broker who is reliable and trustworthy? If yes, then Aurum Markets is for your because we believe in transparency, simplicity, and clarity. Unlike other forex brokers, we educate our clients so that they can make the best possible choice at all times. We prioritize our work according to your requirements. We will always be available to assist you, regardless of the complexity of help required.
                </div>
                <button onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }} className="guideLunchBtn">REGISTER NOW</button>
            </div>

        );
    }
}

export default GuideSec;
