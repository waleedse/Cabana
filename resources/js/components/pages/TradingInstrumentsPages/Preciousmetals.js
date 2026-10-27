import React, { Component } from "react";
import StepsToOpenAccount from "../Deposit&WithdrawPage/components/StepsToOpenAccount";
import HeroSec2 from "./components/HeroSec2";
import TradingCurrenciesDataTable from "./components/TradingCurrenciesDataTable";


export default class TradingCurrencisePage extends Component {
  render() {
    return (
      <div>
        <HeroSec2
          title="TRADE GOLD"
          title2="WITH Aurum markets"
          text="Discover potential profit opportunities in the precious metals market"
          bg="preciousmetal.jpg"
        />
        <div className="greyBg">
          <div className="basicRow text-center">
            <p className="textFont">
              Trading precious metals is one of the most popular ways of diversifying your portfolio. Trade spot gold and spot silver
              prices against the US Dollar and other major currencies with a True ECN Broker today, and reap the potential benefits.
            </p>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row basicRow">
            <div className="col-md-6 col-sm-12">
              <h4 className="aboutDetailTitle">Trading precious metals</h4>
              <p className="aboutDetailText">
                Gold and silver have been exchanged for goods and currencies throughout time —and these
                precious metals continue to be a popular choice among traders today.


              </p>
            </div>
            <div className="col-md-6 col-sm-12">
              <h4 className="aboutDetailTitle">Key benefits of trading precious metals</h4>
              <ul className="pl-3">
                <li className="aboutDetailText">Widely regarded as potential safe havens</li>
                <li className="aboutDetailText">
                  Good for diversifying your investment portfolio
                </li>
                <li className="aboutDetailText">Popular trading choices during times of volatility</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="greyBg">
          <div className="container-fluid">
            <div className="row basicRow">

              <div className="col-md-6 col-sm-12">
                <h4 className="aboutDetailTitle">What is spot metal trading?</h4>
                <p className="aboutDetailText">
                  The spot price, as opposed to a futures contract, of a precious metal like Gold (XAU) or Silver (XAG) is the cash
                  price of that metal in the market at the current point in time. With Aurum Markets, precious metal trading is the act
                  of exchanging Gold or Silver spot prices for a major currency.
                  An example of this is the pair XAGEUR (trades Silver against the Euro), or XAUGBP (Gold against the British Pound).
                </p>
                <p className="aboutDetailText">
                  Spot metal traders use both long- and short-term price charts to monitor Gold or Silver’s price movements,
                  and then place a trade depending on which direction they believe the price may go next. Depending on the market’s current state of volatility,
                  investors might choose to hold either a long- or short-term position according to their trading strategy.
                </p>
                <p className="aboutDetailText">
                  One of the most appealing aspects of trading precious metals’ spot prices is that gold and silver— unlike currencies — are very
                  rarely affected by political and economic events. These assets are typically seen as a hedge against inflation,
                  meaning that regardless of the current state of the financial market, the opportunities to trade metals are potentially plentiful.
                </p>

              </div>
              <div className="col-md-6 col-sm-12">
                <img
                  src="/assets/images/precious_metals.jpg"
                  alt="of currencies"
                  className="fitImage verticallyCeneter mb-2"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row basicRow">
            <div className="col-12 text-center">
              <h4 className="aboutDetailTitle">Spot Metal Pairs</h4>
              <p className="aboutDetailText">
                Get superior service and instant order execution on 3 Spot Metal pairs from Aurum Markets.
                Take control of your forex investments and enjoy the best risk-reward opportunities of the financial
                markets with an award winning forex brokerage firm. Reap the benefits of superior professional services and instant order execution on 3
                Spot Metal pairs backed by some of the best liquidity providers in a modern, safe, technology driven trading environment.
              </p>
            </div>
          </div>
        </div>
        <StepsToOpenAccount></StepsToOpenAccount>
        {/* <TradingCurrenciesDataTable /> */}
      </div>
    );
  }
}
