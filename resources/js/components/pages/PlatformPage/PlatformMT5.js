import React, { Component } from "react";
import HeroSection from "../AboutUsPage/components/HeroSection";
import HowItWorks from "../LandingPage/components/HowItWorks";
import TradingComponent from "../LandingPage/components/TradingComponent";

export default class PlatformMT5 extends Component {
  render() {
    return (
      <div>
        <HeroSection
          title="MT5 CLIENT PLATFORM"
          text="A powerful platform for Forex and Exchange markets"
        />
        <div className="greyBg basicRow text-center">
          <h4 className="aboutDetailTitle">
            Elevate Your Trading With <br />
            Aurum Markets MT5
          </h4>
          <p className="textFont mt-2">
            Successful trading on financial markets begins with a comfortable
            and multi-functional trading platform. MetaTrader 5 is the best
            choice for the modern trader!
          </p>
          <p className="textFont">
            MetaTrader 5 is an institutional multi-asset platform offering
            outstanding trading possibilities and technical analysis tools, as
            well as enabling the use of automated trading systems (trading
            robots) and copy trading. MetaTrader 5 is an all-in-one platform for
            trading Forex and Futures.
          </p>
          <p className="textFont">
            MetaTrader 5 allows you to enjoy the freedom of movement to the full
            extent — you can stay active while trading from smartphones and
            tablets. The Web Platform provides even more possibilities and
            allows you to work from any device. By choosing the most convenient
            way from a variety of options, you can trade 24 hours a day!
          </p>
          <p className="textFont">
            Additional services expand the functionality of the platform making
            its capabilities almost limitless. MetaTrader 5 offers the built-in
            Market of trading robots, Copy Trading and the Virtual Hosting
            service (Forex VPS). Use all these services from one place, and
            access new trading opportunities!
          </p>
          <h4 className="aboutDetailTitle mt-5">
            Download MetaTrader 5 and experince the best of trading!
          </h4>
          <button className="btnPrimaryPink mt-4">DOWNLOAD</button>
        </div>
        <TradingComponent />
        <HowItWorks title="Start Trading in 4 Steps" />
      </div>
    );
  }
}
