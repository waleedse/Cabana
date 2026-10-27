import React, { Component } from "react";
import accounts from "./accountTypesData.json";
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
    accounts.data.map((data, index) => {
      if (data?.country.find((country) => country == this.props.country)) {
        filteredAccounts.push(data)
      }
    })

    if (filteredAccounts.length == 0) {
      accounts.data.map((data, index) => {
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
