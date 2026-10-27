import React, { Component } from "react";
import HeroSection from "../AboutUsPage/components/HeroSection";
import "./components/depositeWithdraw.css";
import DepositeTable from "./components/DepositeTable";

import StepsToOpenAccount from "./components/StepsToOpenAccount";
import WithdrawalTable from "./components/Withdrawaltable";
export default class DepositWithdrawPage extends Component {

  constructor() {
    super()
    this.state = { active: true }
  }

  // handle change
  handleChangeFun() {
    this.setState({
      active: !this.state.active
    })
  }
  render() {
    const { active } = this.state
    return (
      <div>
        <HeroSection
          title="DEPOSIT & WITHDRAWAL"
          text="List of Deposit and Withdrawal Method by Aurum Markets"
          bg="depositandwithdrwal.jpg"
        />
        <div className="pt-4 depositToggle">

          <div className="outerDiv" onClick={this.handleChangeFun.bind(this)}>
            <div className={active === true ? "innerDivActive borderRight" : "innerDivActive innerDiv"}>Deposit</div>
            <div className={active === false ? "innerDivActive borderLeft" : " innerDivActive innerDiv"}>Withdrawal</div>
          </div>
        </div>
        {

          active === true ?
            <DepositeTable />
            :
            <WithdrawalTable></WithdrawalTable>
        }


        <div
          className="depositTrading">
          <div className="basicRow text-center w-100">

            <div className="title">Trade With Aurum Markets</div>
            <div>
              <hr className="depositDivider" />
              <div className="depositeDividerOverlay"></div>
            </div>
            <img src="/assets/images/tradingPlatform2.png" alt="deposit trading" className="Img mt-5" ></img>
            <p className="text">Trade Currencies, Gold, Crude Oil, and more using MetaTrader4, the worlds most reliable Trading Platform<br />
              Trade the markets from Any Desktop, Android and IOS. Carry</p>
            <div className="">
              <button onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }} className="depositButton mr-0 mr-md-5 mb-3 mb-md-0">Open Live Account</button>
              <button onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }} className="depositButton">Open Demo Account</button>
            </div>
          </div>

        </div >

        <StepsToOpenAccount />

      </div>
    );
  }
}
