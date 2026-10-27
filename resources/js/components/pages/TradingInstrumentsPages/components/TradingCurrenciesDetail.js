import React from "react";

export default function TradingCurrenciesDetail() {
  return (
    <div>
      <div className="greyBg">
        <div className="basicRow text-center">
          <p className="textFont">
            Currency trading, also known as FX or forex (foreign exchange)
            trading, enables traders to take advantage of increases and
            decreases in a currency’s value. The foreign exchange market is the
            most liquid in the world, with a daily trading volume of over $5
            trillion. Discover the potential benefits of online forex trading
            with a global award-winning broker.
          </p>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row basicRow">
          <div className="col-md-6 col-sm-12">
            <h4 className="aboutDetailTitle">Trading Currencies</h4>
            <p className="aboutDetailText">
              Currency traders, or FX traders, buy and sell currency pairs using
              a forex broker as the intermediary that facilitates the
              transaction between the buyer and the seller.
            </p>
          </div>
          <div className="col-md-6 col-sm-12">
            <h4 className="aboutDetailTitle">Key benifits of trading forex</h4>
            <ul className="pl-3">
              <li className="aboutDetailText">Massive market liquidity</li>
              <li className="aboutDetailText">
                The market is open 24/5 – trade any time that suits you.
              </li>
              <li className="aboutDetailText">Low minimum deposits</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="greyBg">
        <div className="container-fluid">
          <div className="row basicRow">
            <div className="col-md-6 col-sm-12">
              <img
                src="/assets/images/currencyside.jpg"
                alt="of currencies"
                className="fitImage verticallyCeneter mb-2"
              ></img>
            </div>
            <div className="col-md-6 col-sm-12">
              <h4 className="aboutDetailTitle">What is Currency Trading?</h4>
              <p className="aboutDetailText">
                Currencies are always traded in pairs, with the first currency
                in the pair called the base currency and the second called the
                quote currency. Forex traders simultaneously buy one currency in
                the pair and sell the other, depending on how they think the
                currencies’ values will change in relation to each other.
              </p>
              <p className="aboutDetailText">
                Currency values can be affected by a vast number of fundamental
                factors that impact the health of a nation’s economy, including
                inflation, interest rates, government debt levels and political
                stability. Typically, forex investors find the greatest
                volatility before and after key economic or political
                announcements as traders speculate on their potential impact.
              </p>
              <p className="aboutDetailText">
                Currency pairs are split into three categories. Major currency
                pairs are the most traded pairs in the forex industry and
                therefore enjoy the most liquidity. They usually include the US
                dollar as one half of the pair, like the EUR/USD and the
                USD/JPY. Other commonly traded major pairs include EUR/JPY and
                the EUR/GBP.
              </p>
              <p className="aboutDetailText">
                The minor currency pairs are the less popular combinations that
                still contain major currencies. They are also sometimes called
                'Crosses'. Examples include the EUR/NZD and the AUD/CHF.
              </p>
              <p className="aboutDetailText">
                Exotic currency pairs are not as widely traded as the majors or
                the minors. They are composed of a major currency pair coupled with
                the currency of a developing economy. Some examples that Aurum Markets
                Capitals offers include the USD/TRY and the EUR/PLN
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
