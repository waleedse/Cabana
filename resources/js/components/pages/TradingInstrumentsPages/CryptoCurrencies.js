import React, { Component } from "react";
import StepsToOpenAccount from "../Deposit&WithdrawPage/components/StepsToOpenAccount";
import HeroSec2 from "./components/HeroSec2";
import TradingCurrenciesDataTable from "./components/TradingCurrenciesDataTable";
import TradingCurrenciesDetail from "./components/TradingCurrenciesDetail";
import TradingCurrenciesPairs from "./components/TradingCurrenciesPairs";
import TraidingCurrenciesTable from "./TraidingCurrenciesTable";

export default class CryptoCurrencies extends Component {
  render() {
    return (
      <div>
        <HeroSec2
          title="Crypto Currencies"
          title2=""
          text=""
          bg="cc.jpeg"
        />
        <div className="greyBg">
          <div className="basicRow text-center">
            <p className="textFont">
              Cryptocurrencies are traded worldwide over the decentralized platform. Cryptocurrency Market has gained the popularity in last 5 year thanks to Bitcoin success which motivated others coin to get popular in the financial market.
            </p>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row basicRow">
            <div className="col-md-6 col-sm-12">
              <h4 className="aboutDetailTitle">Trading precious metals</h4>
              <p className="aboutDetailText">
                Start your Cryptocurrency portfolio with Aurum Markets to experience the unexplored world of Cryptocurrencies. Aurum Markets has introduced 15 coins to trade at its Platform.
              </p>
              {/* <ul className="pl-3">
              <li className="aboutDetailText">UK Brent oil (spot)</li>
              <li className="aboutDetailText">
              US crude oil (spot)
              </li>
              <li className="aboutDetailText">US natural gas (spot)</li>
            </ul>

            <p className="aboutDetailText">
            The prices of oil and other energy products fluctuate according to a huge number of factors, including demand, supply and general confidence in the global economy.

            </p> */}
            </div>
            <div className="col-md-6 col-sm-12">
              <h4 className="aboutDetailTitle">Key benefits</h4>
              <ul className="pl-3">
                <li className="aboutDetailText">Traded Worldwide</li>
                <li className="aboutDetailText">
                  The market is open 24/7 – trade any time that suits you

                </li>
                <li className="aboutDetailText">5:1 Leverage
                </li>
                <li className="aboutDetailText">Expert Advisors Allowed
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="greyBg">
        <div className="container-fluid">
          <div className="row basicRow">

            <div className="col-md-6 col-sm-12">
              <h4 className="aboutDetailTitle">How does Commodity CFD trading work?</h4>
              <p className="aboutDetailText">
              A Contract for Difference (CFD) is an agreement between the buyer and the seller. It means that the seller will pay
              the buyer the difference between the commodity’s current price and its price at the point the contract specifies.
               By trading CFDs on commodities, investors are speculating whether the value of the instrument will rise or fall.
              </p>
              <p className="aboutDetailText">
              One of the main benefits of CFD trading is that you’re trading on the expectation of a price movement,
              so you don’t have to actually buy (or take delivery of) the underlying asset. Because you can take a
              short position (expecting the price to decrease) as well as a long one (expecting the price to increase),
              you can still make a profit when the commodity falls in value — not just when it rises. This gives commodity
               CFD traders greater flexibility and more opportunities to earn from market movements.
              By the same token, you should be aware of the potential for losses when going long or short on a commodity’s price.
              </p>


            </div>
            <div className="col-md-6 col-sm-12">
              <img
                src="/assets/images/oilandgasside.jpg"
                alt="of currencies"
                className="fitImage verticallyCeneter mb-2"
              ></img>
            </div>
          </div>
        </div>
      </div> */}
        {/* <div className="container-fluid">
          <div className="row basicRow">
            <div className="col-12 text-center">
              <h4 className="aboutDetailTitle">CFD Commodities Pairs
</h4>
              <p className="aboutDetailText">
              Get superior service and instant order execution on 3 CFD Commodities Pairs from Aurum Markets.
              Take control of your forex investments and enjoy the best risk-reward opportunities of the financial
              markets with an award winning forex brokerage firm. Reap the benefits of superior professional services
              and instant order execution on 3 popular CFD
              Commodities pairs backed by some of the best liquidity providers in a modern, safe, technology driven trading environment.
              </p>
            </div>
          </div>
        </div> */}
        <TraidingCurrenciesTable />
        <StepsToOpenAccount></StepsToOpenAccount>
        {/* <TradingCurrenciesDataTable /> */}
      </div>
    );
  }
}
