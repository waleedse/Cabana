import React, { Component } from "react";
import StepsToOpenAccount from "../Deposit&WithdrawPage/components/StepsToOpenAccount";
import HeroSec2 from "./components/HeroSec2";
import TradingCurrenciesDataTable from "./components/TradingCurrenciesDataTable";
import TradingCurrenciesDetail from "./components/TradingCurrenciesDetail";
import TradingCurrenciesPairs from "./components/TradingCurrenciesPairs";

export default class TradingCurrencisePage extends Component {
  render() {
    return (
      <div>
        <HeroSec2
          title="Trade global market indices"
          title2="WITH Aurum markets"
          text="Discover your trading opportunity with popular stock portfolios"
          bg="cfdbanner.jpg"
        />
        <div className="greyBg">
          <div className="basicRow text-center">
            <p className="textFont">
              When you trade indices with an industry-leading broker, you can expect to choose from an industry-leading selection of indices. Aurum Markets offer CFD trading for spot indices on some of the world’s most active securities,
              meaning that you can choose to buy and sell indices at their spot price to suit you and your trading strategy.
            </p>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row basicRow">
            <div className="col-md-6 col-sm-12">
              <h4 className="aboutDetailTitle">CFD trading on spot indices</h4>
              <p className="aboutDetailText">
                CFD trading on spot indices is a convenient and flexible way for investors to diversify their portfolios — and
                these assets continue to be a popular choice among traders today.
                Choose from an eclectic range of spot indices and access the international markets, including
              </p>
              <ul className="pl-3">
                <li className="aboutDetailText">Massive market liquidity</li>
                <li className="aboutDetailText">
                  The market is open 24/5 – trade any time that suits you.
                </li>
                <li className="aboutDetailText">Low minimum deposits</li>
              </ul>

              <p className="aboutDetailText">
                Aurum Markets’s superior online trading conditions ensure that you can trade indices with leverage to
                suit your trading style and investment goals.
                This can strengthen your positions and potentially maximise profits –
                although you should remember that leverage can also amplify your losses.
              </p>
            </div>
            <div className="col-md-6 col-sm-12">
              <h4 className="aboutDetailTitle">Key benefits of trading CFDs on indices
              </h4>
              <ul className="pl-3">
                <li className="aboutDetailText">Can be traded long or short to suit your trading strategy
                </li>
                <li className="aboutDetailText">
                  Enjoy the flexibility of long trading hours
                </li>
                <li className="aboutDetailText">Great for portfolio diversification</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="greyBg">
          <div className="container-fluid">
            <div className="row basicRow">

              <div className="col-md-6 col-sm-12">
                <h4 className="aboutDetailTitle">What are indices?</h4>
                <p className="aboutDetailText">
                  Indices, or indexes, are portfolios of stocks. These stocks are grouped together in accordance with a particular sector or a particular market: the GERM30 (or GER 30), for example, consists of 30 major German companies trading on the Frankfurt Stock Exchange. The ND100m includes stocks from the top technology companies in the US.
                </p>

                <h4 className="aboutDetailTitle">How does CFD trading on spot indices work?
                </h4>
                <p className="aboutDetailText">
                  A Contract for Difference (CFD) is a contract made between a buyer and a seller for a specified product. The seller agrees to pay the buyer the price difference between the current price and the price at the end of the contract. This means that when you trade CFDs on indices, you are aiming to profit from the movement of an index - instead of investing in the index itself. Investors trade CFDs on spot indices on online trading platforms, using stock trading accounts


                </p>

              </div>
              <div className="col-md-6 col-sm-12">
                <img
                  src="/assets/images/cfdside.jpg"
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
              <h4 className="aboutDetailTitle">CFD Indices Pairs

              </h4>
              <p className="aboutDetailText">
                Get superior service and instant order execution on 13 CFD
                Indices pairs from Aurum Markets. Take control of your forex
                investments and enjoy the best risk-reward opportunities of the financial markets
                with an award winning forex brokerage firm. Reap the benefits of superior professional
                services and instant order execution on 13 popular CFD Indices pairs backed by some of the best
                liquidity providers in a modern, safe, technology driven trading environment.


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
