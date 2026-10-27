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
          title="EXPLORE CURRENCY TRADING"
          title2="WITH Aurum markets"
          text="Trade major,minor and exotic currency pairs with True ECN FX broker."
          bg="cruncciesbanner.jpg"
        />
        <TradingCurrenciesDetail />
        <TradingCurrenciesPairs />
        <StepsToOpenAccount></StepsToOpenAccount>
        {/* <TradingCurrenciesDataTable /> */}
      </div>
    );
  }
}
