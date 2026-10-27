import React, { Component } from "react";
import HeroSection from "../AboutUsPage/components/HeroSection";
import TradingComponent from "../LandingPage/components/TradingComponent";
import BenfitsComponent from "../AboutUsPage/components/AboutUsBenifits";
import HowItWork from "../LandingPage/components/HowItWorks";
import StartTradingSteps from "../Deposit&WithdrawPage/components/StartTraingingSteps";
export default class PatnershipPage extends Component {
  render() {
    return (
      <div>
        <HeroSection
          title="INTRODUCING BROKERS"
          text="Best Commission Plan for IB"
          bg="introducingbroker.jpg"
        />
        <div className=" greyBg basicRow text-center">
          <h4 className="aboutDetailTitle">What is an Introducing Broker?</h4>
          <p className="textFont">
            Expand your revenue and business by introducing your clients to us.
            Our unique Introducing Brokers (IB) program is suitable for
            Individuals, Corporates, Money Managers, and Webmasters. our IB
            programe allows organizations and individuals around the world to
            receive an attractive commission for referring clients, and more the
            client trades, the more IB's are rewarded.
          </p>
          <h4 className="aboutDetailTitle mt-4">
            How to become Aurum Markets IB?
          </h4>
          <p className="textFont">
            You need to introduce minimum of three clients* to be eligible for
            Aurum Markets (IB) program.
          </p>
        </div>
        <BenfitsComponent />
        {/* <TradingComponent /> */}
        {/* <HowItWork title="Start Trading in 4 Steps" /> */}
        <StartTradingSteps></StartTradingSteps>
      </div>
    );
  }
}
