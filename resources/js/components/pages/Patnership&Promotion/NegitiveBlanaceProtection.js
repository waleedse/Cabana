import React, { Component } from "react";
import HeroSection from "../AboutUsPage/components/HeroSection";
import TradingComponent from "../LandingPage/components/TradingComponent";
import BenfitsComponent from "../AboutUsPage/components/AboutUsBenifits";
import HowItWork from "../LandingPage/components/HowItWorks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import StartTradingSteps from "../Deposit&WithdrawPage/components/StepsToOpenAccount";
export default class PatnershipPage extends Component {
  render() {
    return (
      <div>
        <HeroSection
          title="NEGATIVE BALANCE PROTECTION"
          text="Never Lose more than your investment"
          bg="negativebalance.jpg"
        />
        <div className=" greyBg basicRow text-center">
          {/* <h4 className="aboutDetailTitle">What is an Introducing Broker?</h4> */}
          <p className="textFont">
            Negative balance protection represents a situation where no client is responsible for paying back a negative balance even under highly volatile conditions. The traders cannot lose more money than the trading funds they have in their accounts.
          </p>
          {/* <h4 className="aboutDetailTitle mt-4">
            How to become Aurum Markets IB?
          </h4>
          <p className="textFont">
            You need to introduce minimum of three clients* to be eligible for
            Aurum Markets (IB) program.
          </p> */}
        </div>
        <div className="container-fluid">
          <div className="row aboutDetailRow">
            <div className="col-md-6 col-sm-12">
              <img
                src="/assets/images/negativepng.png"
                className=" aboutBenifitImg"
                alt="benifit Image"
              ></img>
            </div>
            <div className="col-md-6 col-sm-12">
              <h4 className="aboutDetailTitle mt-5">
                Your Benefits With Negative Balance Protection
              </h4>
              <p className="aboutDetailText">
                <FontAwesomeIcon
                  icon={faCheckDouble}
                  size="sm"
                  color="#eb1597"
                  className="mr-1"
                />
                Aurum Markets ensure secure trading by offering the benefits of negative balance protection to all its clients: Our risk management system ensures that the client cannot lose more than he initially invested. If the balance becomes negative due to Stop Out, significant economic events, when sudden market movements drastically affect the value of assets, or due to high volatility and price gaps, a customer can lose his/her equity. Aurum Markets will compensate the extra amount and adjust the account balance to zero.

              </p>
              <p className="aboutDetailText">
                <FontAwesomeIcon
                  icon={faCheckDouble}
                  size="sm"
                  color="#eb1597"
                  className="mr-1"
                />
                With negative balance protection enabled, your trading account will never turn negative. Even if the traders face a bad loss, they will ultimately pay for the maximum deposited amount. There will not be a negative balance loss, and it will save you from debt.
              </p>
              <p className="aboutDetailText">
                <FontAwesomeIcon
                  icon={faCheckDouble}
                  size="sm"
                  color="#eb1597"
                  className="mr-1"
                />
                By setting your Stop Loss, planning trading volumes and strategically using leverage will prevent your account from meeting negative balance.Aurum Markets assures that your risk is limited only to the funds you have deposited into your account. Our clients are protected from losses beyond their initial deposit.
              </p>

            </div>
          </div>
        </div>
        {/* <TradingComponent /> */}
        {/* <HowItWork title="Start Trading in 4 Steps" /> */}
        <StartTradingSteps></StartTradingSteps>
      </div>
    );
  }
}
