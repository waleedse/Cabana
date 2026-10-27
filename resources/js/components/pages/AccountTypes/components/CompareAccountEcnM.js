import React, { Component } from 'react';
import { connect } from 'react-redux';
import accounts from "./accountTypesData.json";
import accountsThailand from "./accountTypesThailand.json";
class CompareAccountEcnM extends Component {

  constructor(props) {
    super(props);
    this.state = {
      accountsState: []
    }
  }

  componentDidMount() {
    let filteredAccounts = [];
    accounts.ecnAccounts.map((data, index) => {
      if (data?.country.find((country) => country == this.props.country)) {
        filteredAccounts.push(data)
      }
    })

    if (filteredAccounts.length == 0) {
      accounts.ecnAccounts.map((data, index) => {
        if (data?.country.find((country) => country == 'restOffWorld')) {
          filteredAccounts.push(data)
        }
      })
    }

    this.setState({
      accountsState: filteredAccounts
    })
  }
  render() {
    return (
      <>

        {
          this.state.accountsState.map((account, index) => {

            return (
              <div className="col-4 px-0 standardM compareAccountDetail">
                <div className="compareAccountBgM borderRightBlack">
                  <h4 className="compareAccountInfoTitle text-black ">{account.accountTitle}</h4>
                  <p className="compareAccountPrice text-black">{account.minimumDeposit}/min</p>


                </div>
                <h4 className="platformText pt-0 mb-0">MetaTrader 5</h4>
                <h4 className="platformText mb-3">MetaTrader 4</h4>

                <p className="compareAccountText text-black mt-4">RECOMMENDED FOR:</p>
                <h4 className="compareAccountInfoTitle text-black" dangerouslySetInnerHTML={{ __html: account.recommendedFor }}>

                </h4>



                <h4 className="title d-inine "><span className={account.headingClass}>CURRENCY*</span></h4>
                <h2 className={`${account.valueTagMobClass} mt-3`}>{account.currency}</h2>
                <h4 className="title d-inine "><span className={account.headingClass}>SPREAD</span></h4>
                <p className={account.valueTagMobClass}>{account.spread}</p>
                <h4 className="title d-inine "><span className={account.headingClass}>COMMISION/MARKUP </span></h4>
                <h2 className={account.valueTagMobClass}> {account.commissionMarkup}</h2>
                <h4 className="title d-inine "><span className={account.headingClass}>MINIMUM DEPOSIT</span></h4>
                <h2 className={account.valueTagMobClass}> {account.minimumDeposit}</h2>
                <h4 className="title d-inine "><span className={account.headingClass}>LEVERAGE*</span></h4>
                <h2 className={account.valueTagMobClass}> {account.leverage}</h2>
                <h4 className="title d-inine "><span className={account.headingClass}>INSTRUMENTS</span></h4>
                <h2 className={account.valueTagMobClass}>  {account.instruments}</h2>
                <h4 className="title d-inine "><span className={account.headingClass}>SWAP</span></h4>
                <h2 className={account.valueTagMobClass}> <p className="text">{account.swap}</p></h2>
                <h4 className="title d-inine "><span className={account.headingClass}>Min/Max Volume</span></h4>
                <h2 className={account.valueTagMobClass}> <p className="text">{account.minmaxVolume}</p></h2>
                <h4 className="title d-inine "><span className={account.headingClass}>Order Execution</span></h4>
                <h2 className={account.valueTagMobClass}>{account.orderExecution} </h2>
                <h4 className="title d-inine "> <span className={account.headingClass}> MARGIN CALL/STOP OUT LEVEL </span></h4>
                <h2 className={account.valueTagMobClass}>{account.marginCall}</h2>
                <h4 className="title d-inine "><span className={account.headingClass}>Contract Size</span></h4>
                <h2 className={account.valueTagMobClass}> {account.contractSize}</h2>
                <h4 className="title d-inine "><span className={account.headingClass}>SCALPING</span></h4>
                <h2 className={account.valueTagMobClass}> {account.scalping}</h2>
                <h4 className="title d-inine "><span className={account.headingClass}>EXPERT ADVISOR</span></h4>
                <h2 className={account.valueTagMobClass}> {account.ea}</h2>
                <h4 className="title d-inine "><span className={account.headingClass}> Maximum trades</span> </h4>
                <h2 className={account.valueTagMobClass}> {account.maxTrades}</h2>

                <button onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }} className="btnPrimaryPink2 pl-4 pr-4 mt-4 mb-5 mr-0">
                  GET STARTED
                </button>


              </div>
            )
          })
        }

        {/* <div className="col-4 px-0 standardM compareAccountDetail">
               <div className="compareAccountBgM borderRightBlack">
               <h4 className="compareAccountInfoTitle text-black ">Trader</h4>
               <p className="compareAccountPrice text-black">$250/min</p>
              </div>
              <h4 className="platformText pt-0 mb-0">MetaTrader 5</h4>
               <h4 className="platformText mb-3">MetaTrader 4</h4>

               <p className="compareAccountText text-black mt-4">RECOMMENDED FOR:</p>
              <h4 style={{fontSize:'16px'}} className="compareAccountInfoTitle text-black">
              EXPERT <br />
                TRADER
              </h4>


              <h4 className="title d-inine "><span className="opacityZero">CURRENCY*</span></h4>
            <h2 className="compareAccountNorMobText mt-3">USD</h2>
              <h4 className="title d-inine "><span className="opacityZero">Spread</span></h4>
              <p className="compareAccountNorMobText">From 0.6</p>
              <h4 className="title d-inine "><span className="opacityZero">Commission Markup</span></h4>
              <h2 className="compareAccountNorMobText"> Nil</h2>
              <h4 className="title d-inine "><span className="opacityZero">Minimum Deposit</span></h4>
              <h2 className="compareAccountNorMobText"> $250</h2>
              <h4 className="title d-inine "><span className="opacityZero">LEVERAGE*</span></h4>
              <h2 className="compareAccountNorMobText"> Up to 1:500 for currencies</h2>
              <h4 className="title d-inine "><span className="opacityZero">Instruments</span></h4>
             <h2 className="compareAccountNorMobText">  Majors, Minors, Spot Metals - 2, Spot Energy - 2, US30, GER30</h2>
             <h4 className="title d-inine "><span className="opacityZero">SWAP</span></h4>
             <h2 className="compareAccountNorMobText"> <p className="text">Swap Free</p></h2>
             <h4 className="title d-inine "><span className="opacityZero">OVERNIGHT COMMISSIONS</span></h4>
             <h2 className="compareAccountNorMobText"> <p className="text">No Commision</p></h2>
             <h4 className="title d-inine "><span className="opacityZero">PRECISION</span></h4>
             <h2 className="compareAccountNorMobText"> 5 decimals for FX (3
                on JPY pairs), <br/> Spot Metals: 2 decimals for XAUUSD and 3 decimals
                for XAGUSD</h2>
             <h4 className="title d-inine "><span className="opacityZero">MARGIN CALL/STOP OUT LEVEL</span></h4>
             <h2 className="compareAccountNorMobText"> 80% / 50%</h2>
             <h4 className="title d-inine "><span className="opacityZero">HeDGING</span></h4>
             <h2 className="compareAccountNorMobText"> ✔</h2>
             <h4 className="title d-inine "><span className="opacityZero">SCALPING</span></h4>
             <h2 className="compareAccountNorMobText"> ✔</h2>
             <h4 className="title d-inine "><span className="opacityZero">EXPERT ADVISOR</span></h4>
             <h2 className="compareAccountNorMobText"> ✔</h2>
             <h4 className="title d-inine "><span className="opacityZero">EXECUTION TIME</span></h4>
             <h2 className="compareAccountNorMobText"> Execution in under 0.1 second</h2>
             <h4 className="title d-inine "><span className="opacityZero">MAXIMUM ORDERS</span></h4>
             <h2 className="compareAccountNorMobText"> 500</h2>

              <button onClick={()=>{ window.open('https://portal.aurummarkets.com/register/','_self')}} className="btnPrimaryPink2 pl-2 pr-2 mr-0 mt-4 mb-5">
                GET STARTED
              </button>


              </div>
           <div className="col-4 px-0 standardM compareAccountDetail">
               <div className="compareAccountBgM borderRightBlack">
               <h4 className="compareAccountInfoTitle text-black ">ELITE</h4>
               <p className="compareAccountPrice text-black">$500/min</p>


              </div>
              <h4 className="platformText pt-0 mb-0">MetaTrader 5</h4>
               <h4 className="platformText mb-3">MetaTrader 4</h4>

               <p className="compareAccountText text-black mt-4">RECOMMENDED FOR:</p>
              <h4 style={{fontSize:'16px'}} className="compareAccountInfoTitle text-black">
              PROFFESSIONAL <br />
                TRADER
              </h4>

              <h4 className="title d-inine "><span className="">CURRENCY*</span></h4>
            <h2 className="compareAccountNorMobText mt-3">USD</h2>
              <h4 className="title d-inine "><span className="">Spread</span></h4>
              <p className="compareAccountNorMobText">From 0.0</p>
              <h4 className="title d-inine "><span className="">Commission Markup</span></h4>
              <h2 className="compareAccountNorMobText"> $7</h2>
              <h4 className="title d-inine "><span className="">Minimum Deposit</span></h4>
              <h2 className="compareAccountNorMobText"> $500</h2>
              <h4 className="title d-inine "><span className="">LEVERAGE*</span></h4>
              <h2 className="compareAccountNorMobText"> Up to 1:500 for currencies</h2>
              <h4 className="title d-inine "><span className="">Instruments</span></h4>
             <h2 className="compareAccountNorMobText">  Majors, Minors, Spot Metals - 2, Spot Energy - 2, US30, GER30</h2>
             <h4 className="title d-inine "><span className="">SWAP</span></h4>
             <h2 className="compareAccountNorMobText"> <p className="text">Swap Free</p></h2>
             <h4 className="title d-inine "><span className="">OVERNIGHT COMMISSIONS</span></h4>
             <h2 className="compareAccountNorMobText"> <p className="text">No Commision</p></h2>
             <h4 className="title d-inine "><span className="">PRECISION</span></h4>
             <h2 className="compareAccountNorMobText"> 5 decimals for FX (3
                on JPY pairs), <br/> Spot Metals: 2 decimals for XAUUSD and 3 decimals
                for XAGUSD</h2>
             <h4 className="title d-inine "><span className="">MARGIN CALL/STOP OUT LEVEL</span></h4>
             <h2 className="compareAccountNorMobText"> 80% / 50%</h2>
             <h4 className="title d-inine "><span className="">HeDGING</span></h4>
             <h2 className="compareAccountNorMobText"> ✔</h2>
             <h4 className="title d-inine "><span className="">SCALPING</span></h4>
             <h2 className="compareAccountNorMobText"> ✔</h2>
             <h4 className="title d-inine "><span className="">EXPERT ADVISOR</span></h4>
             <h2 className="compareAccountNorMobText"> ✔</h2>
             <h4 className="title d-inine "><span className="">EXECUTION TIME</span></h4>
             <h2 className="compareAccountNorMobText"> Execution in under 0.1 second</h2>
             <h4 className="title d-inine "><span className="">MAXIMUM ORDERS</span></h4>
             <h2 className="compareAccountNorMobText"> 500</h2>
              <button onClick={()=>{ window.open('https://portal.aurummarkets.com/register/','_self')}} className="btnPrimaryPink2 pl-2 pr-2 mt-4 mb-5 mr-0">
                GET STARTED
              </button>


              </div>
           <div className="col-4 px-0 standardM compareAccountDetail">
               <div className="compareAccountBgM borderRightBlack border-none">
               <h4 className="compareAccountInfoTitle text-black  ">RAW ECN</h4>
               <p className="compareAccountPrice text-black">$1000/min</p>


              </div>
              <h4 className="platformText pt-0 mb-0">MetaTrader 5</h4>
               <h4 className="platformText mb-3">MetaTrader 4</h4>

               <p className="compareAccountText text-black mt-4">RECOMMENDED FOR:</p>
              <h4 style={{fontSize:'16px'}} className="compareAccountInfoTitle text-black">
              EXECUTIVE <br />
                TRADER
              </h4>

              <h4 className="title d-inine "><span className="opacityZero">CURRENCY*</span></h4>
            <h2 className="compareAccountNorMobText mt-3">USD</h2>
              <h4 className="title d-inine "><span className="opacityZero">Spread</span></h4>
              <p className="compareAccountNorMobText">From 0.0</p>
              <h4 className="title d-inine "><span className="opacityZero">Commission Markup</span></h4>
              <h2 className="compareAccountNorMobText"> $5</h2>
              <h4 className="title d-inine "><span className="opacityZero">Minimum Deposit</span></h4>
              <h2 className="compareAccountNorMobText"> $1,000</h2>
              <h4 className="title d-inine "><span className="opacityZero">LEVERAGE*</span></h4>
              <h2 className="compareAccountNorMobText"> Up to 1:200 for currencies</h2>
              <h4 className="title d-inine "><span className="opacityZero">Instruments</span></h4>
             <h2 className="compareAccountNorMobText">  Majors, Minors, Spot Metals - 2, Spot Energy - 2, US30, GER30</h2>
             <h4 className="title d-inine "><span className="opacityZero">SWAP</span></h4>
             <h2 className="compareAccountNorMobText"> <p className="text">Swap Free</p></h2>
             <h4 className="title d-inine "><span className="opacityZero">OVERNIGHT COMMISSIONS</span></h4>
             <h2 className="compareAccountNorMobText"> <p className="text">No Commision</p></h2>
             <h4 className="title d-inine "><span className="opacityZero">PRECISION</span></h4>
             <h2 className="compareAccountNorMobText"> 5 decimals for FX (3
                on JPY pairs), <br/> Spot Metals: 2 decimals for XAUUSD and 3 decimals
                for XAGUSD</h2>
             <h4 className="title d-inine "><span className="opacityZero">MARGIN CALL/STOP OUT LEVEL</span></h4>
             <h2 className="compareAccountNorMobText"> 80% / 50%</h2>
             <h4 className="title d-inine "><span className="opacityZero">HeDGING</span></h4>
             <h2 className="compareAccountNorMobText"> ✔</h2>
             <h4 className="title d-inine "><span className="opacityZero">SCALPING</span></h4>
             <h2 className="compareAccountNorMobText"> ✔</h2>
             <h4 className="title d-inine "><span className="opacityZero">EXPERT ADVISOR</span></h4>
             <h2 className="compareAccountNorMobText"> ✔</h2>
             <h4 className="title d-inine "><span className="opacityZero">EXECUTION TIME</span></h4>
             <h2 className="compareAccountNorMobText"> Execution in under 0.1 second</h2>
             <h4 className="title d-inine "><span className="opacityZero">MAXIMUM ORDERS</span></h4>
             <h2 className="compareAccountNorMobText"> 500</h2>
              <button onClick={()=>{ window.open('https://portal.aurummarkets.com/register/','_self')}} className="btnPrimaryPink2 pl-2 pr-2 mr-0 mt-4 mb-5">
                GET STARTED
              </button>


              </div> */}

      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    country: state.country
  }
}
export default connect(mapStateToProps)(CompareAccountEcnM);
