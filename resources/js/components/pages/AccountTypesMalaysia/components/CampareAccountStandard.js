import React, { Component } from "react";

export default class CampareAccountStandard extends Component {
  render() {
    return (
      <>
        {/* <div className="col-md-4 col-sm-12 px-0">
          <div className="compareAccountCard">
          <div className="compareAccountActions">
              <h4 className="compareAccountInfoTitle ">MICRO</h4>
              <p className="compareAccountPrice">$10/min</p>
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
                BEGINNERS <br />
                <span className="opacityZero">TRADER</span>
              </h4>





              <div className="text-center">
                <button onClick={()=>{ window.open('https://portal.aurummarkets.com/register/','_self')}} className="compareAccountButton">
                  Open Micro Account
                </button>
              </div>
            </div>
            <div className="compareAccountDetail">
            <h4 className="title d-inine "><span className="opacityZero">CURRENCY</span></h4>
            <h2 className="compareAccountNorText mt-3">USD</h2>
              <h4 className="title d-inine "><span className="opacityZero">Spread</span></h4>
              <p className="compareAccountNorText">Spread: From 2.5</p>
              <h4 className="title d-inine "><span className="opacityZero">Commission Markup</span></h4>
              <h2 className="compareAccountNorText"> NIl</h2>
              <h4 className="title d-inine "><span className="opacityZero">Minimum Deposit</span></h4>
              <h2 className="compareAccountNorText"> $10</h2>
              <h4 className="title d-inine "><span className="opacityZero">Leverage</span></h4>
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
             <h2 className="compareAccountNorText"> <i className="fas fa-check text-success"></i></h2>
             <h4 className="title d-inine "><span className="opacityZero">SCALPING</span></h4>
             <h2 className="compareAccountNorText"> <i className="fas fa-check text-success"></i></h2>
             <h4 className="title d-inine "><span className="opacityZero">EXPERT ADVISOR</span></h4>
             <h2 className="compareAccountNorText"> <i className="fas fa-check text-success"></i></h2>
             <h4 className="title d-inine "><span className="opacityZero">EXECUTION TIME</span></h4>
             <h2 className="compareAccountNorText"> Execution in under 0.1 second</h2>
             <h4 className="title d-inine "><span className="opacityZero">MAXIMUM ORDERS</span></h4>
             <h2 className="compareAccountNorText"> Execution in under 0.1 second</h2>


              <button onClick={()=>{ window.open('https://portal.aurummarkets.com/register/','_self')}} className="btnPrimaryPink2 pl-4 pr-4 mt-4 mb-5 mr-0">
                GET STARTED
              </button>
            </div>
          </div>
        </div> */}

        <div className="col-md-6 col-sm-12 px-0">
          <div className="compareAccountCard">
            <div className="compareAccountActions ">
              <h4 className="compareAccountInfoTitle ">Cent Account</h4>
              <p className="compareAccountPrice">$10/min</p>
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
              <h4 className="compareAccountInfoTitle">
                BEGINNER <br />
                TRADER
              </h4>
              {/* <p className="compareAccountTextSm mt-4">For Small Investment</p> */}




              <div className="text-center">
                <button onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }} className="compareAccountButton">
                  Open Cent Account
                </button>
              </div>
            </div>
            <div className="compareAccountDetail">
              <h4 className="title d-inine "><span className="opacityZero">C</span></h4>
              <h2 className="compareAccountNorText mt-3">USD</h2>
              <h4 className="title d-inine "><span className="opacityZero">S</span></h4>
              <p className="compareAccountNorText">Spread: From 2.0</p>
              <h4 className="title d-inine "><span className="opacityZero">S</span></h4>
              <p className="compareAccountNorText">From 20/30/200/180</p>
              <h4 className="title d-inine "><span className="opacityZero">Li</span></h4>
              <p className="compareAccountNorText">1 spread</p>
              <h4 className="title d-inine "><span className="opacityZero">CO </span></h4>
              <h2 className="compareAccountNorText"> NIl</h2>
              <h4 className="title d-inine "><span className="opacityZero">MI</span></h4>
              <h2 className="compareAccountNorText"> $10</h2>
              <h4 className="title d-inine "><span className="opacityZero">LE</span></h4>
              <h2 className="compareAccountNorText"> Fixed 1:1000 for currencies</h2>
              <h4 className="title d-inine "><span className="opacityZero">I</span></h4>
              <h2 className="compareAccountNorText">  Majors, Minors, Spot Metals - 2, Spot Energy - 2, US30, NQ</h2>
              <h4 className="title d-inine "><span className="opacityZero">S</span></h4>
              <h2 className="compareAccountNorText"> <p className="text">Swap Free</p></h2>
              <h4 className="title d-inine "><span className="opacityZero">OV</span></h4>
              <h2 className="compareAccountNorText"> <p className="text">No Commision</p></h2>
              <h4 className="title d-inine "><span className="opacityZero">Mi</span></h4>
              <h2 className="compareAccountNorText"> 0.01</h2>
              <h4 className="title d-inine "> <span className="opacityZero"> MA </span></h4>
              <h2 className="compareAccountNorText"> 50% / 30%</h2>
              <h4 className="title d-inine "><span className="opacityZero">Co</span></h4>
              <h2 className="compareAccountNorText"> 1,000</h2>
              <h4 className="title d-inine "> <span className="opacityZero">O</span></h4>
              <h2 className="compareAccountNorText">  Market Execution</h2>

              <button onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }} className="btnPrimaryPink2 pl-4 pr-4 mt-4 mb-5 mr-0">
                GET STARTED
              </button>
            </div>
          </div>
        </div>

        {/* <div className="col-md-4 col-sm-12 px-0">
          <div className="compareAccountCard">
          <div className="compareAccountActions compareAccountBg1">
              <h4 className="compareAccountInfoTitle ">Micro Account</h4>
              <p className="compareAccountPrice">$10/min</p>
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
                SMART <br />
                TRADER
              </h4>





              <div className="text-center">
                <button onClick={()=>{ window.open('https://portal.aurummarkets.com/register/','_self')}} className="compareAccountButton">
                  Open Micro Account
                </button>
              </div>
            </div>
            <div className="compareAccountDetail">
            <h4 className="title d-inine "><span className="">CURRENCY</span></h4>
            <h2 className="compareAccountNorText mt-3">USD</h2>
              <h4 className="title d-inine "><span className="">SPREAD</span></h4>
              <p className="compareAccountNorText">Spread: From 2.0</p>
              <h4 className="title d-inine "><span className="">Spread (Gold/SP/NQ/DJ)</span></h4>
              <p className="compareAccountNorText">From 20/30/200/180</p>
              <h4 className="title d-inine "><span className="">Limit & Stop Levels</span></h4>
              <p className="compareAccountNorText">1 spread</p>
              <h4 className="title d-inine "><span className="">COMMISION/MARKUP </span></h4>
              <h2 className="compareAccountNorText"> NIl</h2>
              <h4 className="title d-inine "><span className="">MINIMUM DEPOSIT</span></h4>
              <h2 className="compareAccountNorText"> $10</h2>
              <h4 className="title d-inine "><span className="">LEVERAGE</span></h4>
              <h2 className="compareAccountNorText"> Fixed 1:1000 for currencies</h2>
              <h4 className="title d-inine "><span className="">INSTRUMENTS</span></h4>
             <h2 className="compareAccountNorText">  Majors, Minors, Spot Metals - 2, Spot Energy - 2, US30, NQ</h2>
             <h4 className="title d-inine "><span className="">SWAP</span></h4>
             <h2 className="compareAccountNorText"> <p className="text">Swap Free</p></h2>
             <h4 className="title d-inine "><span className="">OVERNIGHT COMMISSIONS</span></h4>
             <h2 className="compareAccountNorText"> <p className="text">No Commision</p></h2>
             <h4 className="title d-inine "><span className="">Minimum Volume in Lots per Trade</span></h4>
             <h2 className="compareAccountNorText"> 0.01</h2>
             <h4 className="title d-inine "> <span className=""> MARGIN CALL/STOP OUT LEVEL </span></h4>
             <h2 className="compareAccountNorText"> 50% / 30%</h2>
             <h4 className="title d-inine "><span className="">Contract Size</span></h4>
             <h2 className="compareAccountNorText"> 10000</h2>
             <h4 className="title d-inine "> <span className="">Order execution</span></h4>
             <h2 className="compareAccountNorText">  Market Execution</h2>


              <button onClick={()=>{ window.open('https://portal.aurummarkets.com/register/','_self')}} className="btnPrimaryPink2 pl-4 pr-4 mt-4 mb-5 ">
                GET STARTED
              </button>
            </div>
          </div>
        </div> */}
        <div className="col-md-6 col-sm-12 px-0">
          <div className="compareAccountCard">
            <div className="compareAccountActions compareAccountBg3">
              <h4 className="compareAccountInfoTitle ">Standard Account</h4>
              <p className="compareAccountPrice">$50/min</p>
              <hr className="compareAccountDivider" />
              <div className="compareAccountActionRow">
                <div onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }} className="compareAccountActionButton border-none">
                  LIVE
                </div>
                <div onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }} className="compareAccountActionButton">Demo</div>
              </div>
            </div>
            <div className="compareAccountInfo compareAccountBg4">
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
                SMART <br />
                TRADER
              </h4>





              <div className="text-center">
                <button onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }} className="compareAccountButton">
                  Open Standerd Account
                </button>
              </div>
            </div>
            <div className="compareAccountDetail">
              <h4 className="title title2 d-inine "><span className="">CURRENCY</span></h4>
              <h2 className="compareAccountNorText mt-3">USD</h2>
              <h4 className="title title2 d-inine "><span className="">SPREAD</span></h4>
              <p className="compareAccountNorText">Spread: From 2.0</p>
              <h4 className="title title2 d-inine "><span className="">Spread (Gold/SP/NQ/DJ)</span></h4>
              <p className="compareAccountNorText">From 20/30/200/180</p>
              <h4 className="title title2 d-inine "><span className="">Limit & Stop Levels</span></h4>
              <p className="compareAccountNorText">1 spread</p>
              <h4 className="title title2 d-inine "><span className="">COMMISION/MARKUP </span></h4>
              <h2 className="compareAccountNorText"> NIl</h2>
              <h4 className="title title2 d-inine "><span className="">MINIMUM DEPOSIT</span></h4>
              <h2 className="compareAccountNorText"> $50</h2>
              <h4 className="title title2 d-inine "><span className="">LEVERAGE</span></h4>
              <h2 className="compareAccountNorText"> Fixed 1:1000 for currencies</h2>
              <h4 className="title title2 d-inine "><span className="">INSTRUMENTS</span></h4>
              <h2 className="compareAccountNorText">  Majors, Minors, Spot Metals - 2, Spot Energy - 2, US30, NQ</h2>
              <h4 className="title title2 d-inine "><span className="">SWAP</span></h4>
              <h2 className="compareAccountNorText"> <p className="text">Swap Free</p></h2>
              <h4 className="title title2 d-inine "><span className="">OVERNIGHT COMMISSIONS</span></h4>
              <h2 className="compareAccountNorText"> <p className="text">No Commision</p></h2>
              <h4 className="title title2 d-inine "><span className="">Minimum Volume in Lots per Trade</span></h4>
              <h2 className="compareAccountNorText"> 0.01</h2>
              <h4 className="title title2 d-inine "> <span className=""> MARGIN CALL/STOP OUT LEVEL </span></h4>
              <h2 className="compareAccountNorText"> 50% / 30%</h2>
              <h4 className="title title2 d-inine "><span className="">Contract Size</span></h4>
              <h2 className="compareAccountNorText"> 100,000</h2>
              <h4 className="title title2 d-inine "> <span className="">Order execution</span></h4>
              <h2 className="compareAccountNorText">  Market Execution</h2>

              <button onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }} className="btnPrimaryPink2 pl-4 pr-4 mt-4 mb-5 mr-0">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
