import React, { Component } from "react";
// import HeroSection from "../AboutUsPage/components/HeroSection";

import StartTradingSteps from "../Deposit&WithdrawPage/components/StepsForReffer";
import HeroSec2 from "../TradingInstrumentsPages/components/HeroSec2";
export default class PatnershipPage extends Component {
  render() {
    return (
      <div>
        {/* <HeroSec2
          title="REFER A FRIEND PROGRAM"
          text=""
          bg="referafriendbanner.jpg"
        /> */}
        <div className="refferBg">
          <div className="container">
            <div className='title_ text-center'><span className='titleLg text-center'>REFER A FRIEND PROGRAM</span><br /></div>
            {/* <div className=' title2'>Best IB & Affiliate Program by Aurum Markets</div> */}
          </div>
        </div>
        <div className=" greyBg basicRow text-center">
          {/* <h4 className="aboutDetailTitle">What is an Introducing Broker?</h4> */}
          <p className="textFont">
            Sharing is caring! Invest, share and enjoy $50 with your friends. Invite your friends and family members to join one of the world’s leading forex brokerage firm and earn huge rewards.          </p>
          <h4 className="aboutDetailTitle mt-4">
            Share more, Earn more!
          </h4>
          <p className="textFont">
            Earning $50 has never been this easy! Share your referral link with your online and offline friends and family members and enjoy the rewards of up to $10,000.
          </p>
        </div>

        {/* <TradingComponent /> */}
        {/* <HowItWork title="Start Trading in 4 Steps" /> */}
        <StartTradingSteps></StartTradingSteps>
        <div className=" greyBg basicRow text-center py-5">

          <h4 className="aboutDetailTitle mt-4">
            FRIENDS ARE FOR SHARING
          </h4>
          <p className="textFont">
            You share, we care! Invite your friends to become a part of world’s leading brokerage firm and start earning huge instant rewards!          </p>

          <h4 className="aboutDetailTitle mt-4">
            Interested to share rewards with your friend now?
          </h4>
          <button className="depositButton " style={{ padding: "8px 70px" }}>
            START SHARING </button>
        </div>
      </div>
    );
  }
}
