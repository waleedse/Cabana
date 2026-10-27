import React, { Component } from "react";
import accounts from "./accountTypesData.json";
import accountsThailand from "./accountTypesThailand.json";
import { connect } from "react-redux";

class CampareAccountStandard extends Component {


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
              <div className="col-md-4 col-sm-12 px-0">
                <div className="compareAccountCard">
                  <div className="compareAccountActions ">
                    <h4 className="compareAccountInfoTitle ">{account.accountTitle}</h4>
                    <p className="compareAccountPrice">{account.minimumDeposit}/min</p>
                    <hr className="compareAccountDivider" />
                    <div className="compareAccountActionRow">
                      <div onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }} className="compareAccountActionButton border-none">
                        LIVE
                      </div>
                      <div onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }} className="compareAccountActionButton">Demo</div>
                    </div>
                  </div>
                  <div className="compareAccountInfo ">
                    <div className="centerDiv mt-3 ">
                      <img
                        src="/assets/images/accountsMt5.png"
                        alt="compare account"
                        className="compareAccountImg "
                      ></img>
                    </div>
                    <div className="centerDiv mt-4">
                      <img
                        src="/assets/images/accountsMt4.png"
                        alt="compare account"
                        className="compareAccountImg "
                      ></img>
                    </div>
                    <p className="compareAccountText mt-4">RECOMMENDED FOR:</p>
                    <h4 className="compareAccountInfoTitle" dangerouslySetInnerHTML={{ __html: account.recommendedFor }}>

                    </h4>
                    {/* <p className="compareAccountTextSm mt-4">For Small Investment</p> */}




                    <div className="text-center">
                      <button onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }} className="compareAccountButton">
                        Open {account.accountTitle}
                      </button>
                    </div>
                  </div>
                  <div className="compareAccountDetail">
                    <h4 className="title d-inine "><span className={account.headingClass}>CURRENCY*</span></h4>
                    <h2 className={`${account.valueTagClass} mt-3`}>{account.currency}</h2>
                    <h4 className="title d-inine "><span className={account.headingClass}>SPREAD</span></h4>
                    <p className={account.valueTagClass}>{account.spread}</p>
                    <h4 className="title d-inine "><span className={account.headingClass}>COMMISION/MARKUP </span></h4>
                    <h2 className={account.valueTagClass}> {account.commissionMarkup}</h2>
                    <h4 className="title d-inine "><span className={account.headingClass}>MINIMUM DEPOSIT</span></h4>
                    <h2 className={account.valueTagClass}> {account.minimumDeposit}</h2>
                    <h4 className="title d-inine "><span className={account.headingClass}>LEVERAGE*</span></h4>
                    <h2 className={account.valueTagClass}> {account.leverage}</h2>
                    <h4 className="title d-inine "><span className={account.headingClass}>INSTRUMENTS</span></h4>
                    <h2 className={account.valueTagClass}>  {account.instruments}</h2>
                    <h4 className="title d-inine "><span className={account.headingClass}>SWAP</span></h4>
                    <h2 className={account.valueTagClass}> <p className="text">{account.swap}</p></h2>
                    <h4 className="title d-inine "><span className={account.headingClass}>Min/Max Volume</span></h4>
                    <h2 className={account.valueTagClass}> <p className="text">{account.minmaxVolume}</p></h2>
                    <h4 className="title d-inine "><span className={account.headingClass}>Order Execution</span></h4>
                    <h2 className={account.valueTagClass}>{account.orderExecution} </h2>
                    <h4 className="title d-inine "> <span className={account.headingClass}> MARGIN CALL/STOP OUT LEVEL </span></h4>
                    <h2 className={account.valueTagClass}>{account.marginCall}</h2>
                    <h4 className="title d-inine "><span className={account.headingClass}>Contract Size</span></h4>
                    <h2 className={account.valueTagClass}> {account.contractSize}</h2>
                    <h4 className="title d-inine "><span className={account.headingClass}>SCALPING</span></h4>
                    <h2 className={account.valueTagClass}> {account.scalping}</h2>
                    <h4 className="title d-inine "><span className={account.headingClass}>EXPERT ADVISOR</span></h4>
                    <h2 className={account.valueTagClass}> {account.ea}</h2>
                    <h4 className="title d-inine "><span className={account.headingClass}> Maximum trades</span> </h4>
                    <h2 className={account.valueTagClass}> {account.maxTrades}</h2>


                    <button onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }} className="btnPrimaryPink2 pl-4 pr-4 mt-4 mb-5 mr-0">
                      GET STARTED
                    </button>
                  </div>
                </div>
              </div>
            )
          })
        }
        {/* <div className="col-md-4 col-sm-12 px-0">
          <div className="compareAccountCard">
          <div className="compareAccountActions">
              <h4 className="compareAccountInfoTitle ">Trader</h4>
              <p className="compareAccountPrice">$250/min</p>
              <hr className="compareAccountDivider" />
              <div className="compareAccountActionRow">
                <div onClick={()=>{ window.open('https://portal.aurummarkets.com/register/','_self')}} className="compareAccountActionButton border-none">
                  LIVE
                </div>
                <div onClick={()=>{ window.open('https://portal.aurummarkets.com/register/','_self')}} className="compareAccountActionButton">Demo</div>
              </div>
            </div>
            <div className="compareAccountInfo">
            <div className="centerDiv mt-3 ">
                <img
                  src="/assets/images/accountsMt5.png"
                  alt="compare account"
                  className="compareAccountImg "
                ></img>
              </div>
              <div className="centerDiv mt-4">
                <img
                  src="/assets/images/accountsMt4.png"
                  alt="compare account"
                  className="compareAccountImg "
                ></img>
              </div>
            <p className="compareAccountText mt-4">RECOMMENDED FOR:</p>
              <h4 className="compareAccountInfoTitle">
                EXPERT <br />
                TRADER
              </h4>





              <div className="text-center">
                <button onClick={()=>{ window.open('https://portal.aurummarkets.com/register/','_self')}} className="compareAccountButton">
                  Open PREMIUM Account
                </button>
              </div>
            </div>
            <div className="compareAccountDetail">
            <h4 className="title d-inine "><span className="opacityZero">CURRENCY*</span></h4>
            <h2 className="compareAccountNorText mt-3">USD</h2>
              <h4 className="title d-inine "><span className="opacityZero">Spread</span></h4>
              <p className="compareAccountNorText">From 0.6</p>
              <h4 className="title d-inine "><span className="opacityZero">Commission Markup</span></h4>
              <h2 className="compareAccountNorText"> Nil</h2>
              <h4 className="title d-inine "><span className="opacityZero">Minimum Deposit</span></h4>
              <h2 className="compareAccountNorText"> $250</h2>
              <h4 className="title d-inine "><span className="opacityZero">LEVERAGE*</span></h4>
              <h2 className="compareAccountNorText"> Up to 1:500 for currencies</h2>
              <h4 className="title d-inine "><span className="opacityZero">Instruments</span></h4>
             <h2 className="compareAccountNorText">  Majors, Minors, Spot Metals - 2, Spot Energy - 2, US30, GER30</h2>
             <h4 className="title d-inine "><span className="opacityZero">SWAP</span></h4>
             <h2 className="compareAccountNorText"> <p className="text">Swap Free</p></h2>
             <h4 className="title d-inine "><span className="opacityZero">OVERNIGHT COMMISSIONS</span></h4>
             <h2 className="compareAccountNorText"> <p className="text">No Commision</p></h2>
             <h4 className="title d-inine "><span className="opacityZero">PRECISION</span></h4>
             <h2 className="compareAccountNorText"> 5 decimals for FX (3
                on JPY pairs), <br/> Spot Metals: 2 decimals for XAUUSD and 3 decimals
                for XAGUSD</h2>
             <h4 className="title d-inine "><span className="opacityZero">MARGIN CALL/STOP OUT LEVEL</span></h4>
             <h2 className="compareAccountNorText"> 80% / 50%</h2>
             <h4 className="title d-inine "><span className="opacityZero">HeDGING</span></h4>
             <h2 className="compareAccountNorText"> ✔</h2>
             <h4 className="title d-inine "><span className="opacityZero">SCALPING</span></h4>
             <h2 className="compareAccountNorText"> ✔</h2>
             <h4 className="title d-inine "><span className="opacityZero">EXPERT ADVISOR</span></h4>
             <h2 className="compareAccountNorText"> ✔</h2>
             <h4 className="title d-inine "><span className="opacityZero">EXECUTION TIME</span></h4>
             <h2 className="compareAccountNorText"> Execution in under 0.1 second</h2>
             <h4 className="title d-inine "><span className="opacityZero">MAXIMUM ORDERS</span></h4>
             <h2 className="compareAccountNorText"> 500</h2>

              <button onClick={()=>{ window.open('https://portal.aurummarkets.com/register/','_self')}} className="btnPrimaryPink2 pl-4 pr-4 mt-4 mb-5 mr-0">
                GET STARTED
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-12 px-0">
          <div className="compareAccountCard">
          <div className="compareAccountActions compareAccountBg1">
              <h4 className="compareAccountInfoTitle ">ELITE</h4>
              <p className="compareAccountPrice">$500/min</p>
              <hr className="compareAccountDivider" />
              <div className="compareAccountActionRow">
                <div onClick={()=>{ window.open('https://portal.aurummarkets.com/register/','_self')}} className="compareAccountActionButton border-none">
                  LIVE
                </div>
                <div onClick={()=>{ window.open('https://portal.aurummarkets.com/register/','_self')}} className="compareAccountActionButton">Demo</div>
              </div>
            </div>
            <div className="compareAccountInfo compareAccountBg2 ">
            <div className="centerDiv mt-3">
                <img
                  src="/assets/images/accountsMt5.png"
                  alt="compare account"
                  className="compareAccountImg "
                ></img>
              </div>
              <div className="centerDiv mt-4">
                <img
                  src="/assets/images/accountsMt4.png"
                  alt="compare account"
                  className="compareAccountImg "
                ></img>
              </div>
            <p className="compareAccountText mt-4">RECOMMENDED FOR:</p>
              <h4 className="compareAccountInfoTitle">
              PROFFESSIONAL <br />
                TRADER
              </h4>



                <div className="text-center">
                <button     onClick={()=>{ window.open('https://portal.aurummarkets.com/register/','_self')}} className="compareAccountButton">
                  Open ELITE Account
                </button>
              </div>
            </div>
            <div className="compareAccountDetail">
            <h4 className="title d-inine "><span className="">CURRENCY*</span></h4>
            <h2 className="compareAccountNorText mt-3">USD</h2>
              <h4 className="title d-inine "><span className="">Spread</span></h4>
              <p className="compareAccountNorText">From 0.0</p>
              <h4 className="title d-inine "><span className="">Commission Markup</span></h4>
              <h2 className="compareAccountNorText"> $7</h2>
              <h4 className="title d-inine "><span className="">Minimum Deposit</span></h4>
              <h2 className="compareAccountNorText"> $500</h2>
              <h4 className="title d-inine "><span className="">LEVERAGE*</span></h4>
              <h2 className="compareAccountNorText"> Up to 1:500 for currencies</h2>
              <h4 className="title d-inine "><span className="">Instruments</span></h4>
             <h2 className="compareAccountNorText">  Majors, Minors, Spot Metals - 2, Spot Energy - 2, US30, GER30</h2>
             <h4 className="title d-inine "><span className="">SWAP</span></h4>
             <h2 className="compareAccountNorText"> <p className="text">Swap Free</p></h2>
             <h4 className="title d-inine "><span className="">OVERNIGHT COMMISSIONS</span></h4>
             <h2 className="compareAccountNorText"> <p className="text">No Commision</p></h2>
             <h4 className="title d-inine "><span className="">PRECISION</span></h4>
             <h2 className="compareAccountNorText"> 5 decimals for FX (3
                on JPY pairs), <br/> Spot Metals: 2 decimals for XAUUSD and 3 decimals
                for XAGUSD</h2>
             <h4 className="title d-inine "><span className="">MARGIN CALL/STOP OUT LEVEL</span></h4>
             <h2 className="compareAccountNorText"> 80% / 50%</h2>
             <h4 className="title d-inine "><span className="">HeDGING</span></h4>
             <h2 className="compareAccountNorText"> ✔</h2>
             <h4 className="title d-inine "><span className="">SCALPING</span></h4>
             <h2 className="compareAccountNorText"> ✔</h2>
             <h4 className="title d-inine "><span className="">EXPERT ADVISOR</span></h4>
             <h2 className="compareAccountNorText"> ✔</h2>
             <h4 className="title d-inine "><span className="">EXECUTION TIME</span></h4>
             <h2 className="compareAccountNorText"> Execution in under 0.1 second</h2>
             <h4 className="title d-inine "><span className="">MAXIMUM ORDERS</span></h4>
             <h2 className="compareAccountNorText"> 500</h2>

              <button onClick={()=>{ window.open('https://portal.aurummarkets.com/register/','_self')}} className="btnPrimaryPink2 pl-4 pr-4 mt-4 mb-5 mr-0">
                GET STARTED
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-12 px-0">
          <div className="compareAccountCard">
          <div className="compareAccountActions compareAccountBg3">
              <h4 className="compareAccountInfoTitle ">RAW ECN</h4>
              <p className="compareAccountPrice">$1,000/min</p>
              <hr className="compareAccountDivider" />
              <div className="compareAccountActionRow">
                <div onClick={()=>{ window.open('https://portal.aurummarkets.com/register/','_self')}} className="compareAccountActionButton border-none">
                  LIVE
                </div>
                <div onClick={()=>{ window.open('https://portal.aurummarkets.com/register/','_self')}} className="compareAccountActionButton">Demo</div>
              </div>
            </div>
            <div className="compareAccountInfo compareAccountBg4 ">
            <div className="centerDiv mt-3">
                <img
                  src="/assets/images/accountsMt5.png"
                  alt="compare account"
                  className="compareAccountImg "
                ></img>
              </div>
              <div className="centerDiv mt-4">
                <img
                  src="/assets/images/accountsMt4.png"
                  alt="compare account"
                  className="compareAccountImg "
                ></img>
              </div>
            <p className="compareAccountText mt-4">RECOMMENDED FOR:</p>
              <h4 className="compareAccountInfoTitle">
                EXECUTIVE <br />
                TRADER
              </h4>




              <div className="text-center">
                <button onClick={()=>{ window.open('https://portal.aurummarkets.com/register/','_self')}} className="compareAccountButton">
                  Open RAW Account
                </button>
              </div>
            </div>
            <div className="compareAccountDetail">
            <h4 className="title d-inine "><span className="opacityZero">CURRENCY*</span></h4>
            <h2 className="compareAccountNorText mt-3">USD</h2>
              <h4 className="title d-inine "><span className="opacityZero">Spread</span></h4>
              <p className="compareAccountNorText">From 0.0</p>
              <h4 className="title d-inine "><span className="opacityZero">Commission Markup</span></h4>
              <h2 className="compareAccountNorText"> $5</h2>
              <h4 className="title d-inine "><span className="opacityZero">Minimum Deposit</span></h4>
              <h2 className="compareAccountNorText"> $1,000</h2>
              <h4 className="title d-inine "><span className="opacityZero">LEVERAGE*</span></h4>
              <h2 className="compareAccountNorText"> Up to 1:200 for currencies</h2>
              <h4 className="title d-inine "><span className="opacityZero">Instruments</span></h4>
             <h2 className="compareAccountNorText">  Majors, Minors, Spot Metals - 2, Spot Energy - 2, US30, GER30</h2>
             <h4 className="title d-inine "><span className="opacityZero">SWAP</span></h4>
             <h2 className="compareAccountNorText"> <p className="text">Swap Free</p></h2>
             <h4 className="title d-inine "><span className="opacityZero">OVERNIGHT COMMISSIONS</span></h4>
             <h2 className="compareAccountNorText"> <p className="text">No Commision</p></h2>
             <h4 className="title d-inine "><span className="opacityZero">PRECISION</span></h4>
             <h2 className="compareAccountNorText"> 5 decimals for FX (3
                on JPY pairs), <br/> Spot Metals: 2 decimals for XAUUSD and 3 decimals
                for XAGUSD</h2>
             <h4 className="title d-inine "><span className="opacityZero">MARGIN CALL/STOP OUT LEVEL</span></h4>
             <h2 className="compareAccountNorText"> 80% / 50%</h2>
             <h4 className="title d-inine "><span className="opacityZero">HeDGING</span></h4>
             <h2 className="compareAccountNorText"> ✔</h2>
             <h4 className="title d-inine "><span className="opacityZero">SCALPING</span></h4>
             <h2 className="compareAccountNorText"> ✔</h2>
             <h4 className="title d-inine "><span className="opacityZero">EXPERT ADVISOR</span></h4>
             <h2 className="compareAccountNorText"> ✔</h2>
             <h4 className="title d-inine "><span className="opacityZero">EXECUTION TIME</span></h4>
             <h2 className="compareAccountNorText"> Execution in under 0.1 second</h2>
             <h4 className="title d-inine "><span className="opacityZero">MAXIMUM ORDERS</span></h4>
             <h2 className="compareAccountNorText"> 500</h2>

              <button onClick={()=>{ window.open('https://portal.aurummarkets.com/register/','_self')}} className="btnPrimaryPink2 pl-4 pr-4 mt-4 mb-5 ">
                GET STARTED
              </button>
            </div>
          </div>
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
export default connect(mapStateToProps)(CampareAccountStandard);
