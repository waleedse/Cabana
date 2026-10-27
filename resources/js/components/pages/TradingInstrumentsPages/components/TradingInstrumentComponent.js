import React, { Component } from "react";
import TradingInstrumentLeft from "./TradingInstrumentLeft";
import TradingInstrumentRight from "./TradingInstrumentRight";

export default class TradingInstrumentComponent extends Component {
  render() {
    return (
      <div id="trading_instruments">
        <div className="greyBg">
          <div className="basicRow  text-center">
            <h4 className="aboutDetailTitle">
              Trade with fast execution and
              <br /> tight spreads
            </h4>
            <p className="textFont">
              From currency trading to speculating on the price movements of
              your favourite trading instruments – Aurum Markets has it all.
              Enter the vast, complex and exhilarating world of the financial
              markets with a True ECN broker.
            </p>
          </div>
        </div>

        <TradingInstrumentLeft
          title="Currencies (FX)"
          text="Aurum Markets gives you the keys to access the forex market 24 hours a day, 5 days
            a week, allowing you to trade the most popular major, minor and exotic currency pairs. With
            approximately $5 trillion exchanged every single day, the forex market is the most liquid market in
            the world."
          imgUrl="/assets/images/trading_ins_currency.jpg"
          learnMoreLink="/trading-currencies"
        />
        <TradingInstrumentRight
          title="Precious Metals (Spot)"
          text="Trade price movements of precious metals (gold and silver) as an alternative
investment option. As potential safe haven assets, precious metals are popular amongst traders
during times of uncertainty and volatility in the market."
          imgUrl="/assets/images/Layer-12.png"
          learnMoreLink="/precious-metals"
        />
        <TradingInstrumentLeft
          title="Commodities (Spot)"
          text="Discover trading opportunities in some of the world’s largest oil and natural gas
markets. Diversify your portfolio by making the most of today’s market moves in the world of
commodities."
          imgUrl="/assets/images/Layer-13.png"
          learnMoreLink="/comodoties"
        />
        <TradingInstrumentRight
          title="CFD Indices (Spot)"
          text="Access an industry-leading selection of indices from all over the world. Choose CFD
trading for spot indices with Aurum Markets and enjoy the flexibility of long trading hours to suit
your investment and trading needs."
          imgUrl="/assets/images/Layer-14.png"
          learnMoreLink="/cfd-incdices"
        />
        <div className="mt-5"></div>
      </div>
    );
  }
}
