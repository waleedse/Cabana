import React, { Component } from 'react';

class StepsToOpenAccount extends Component {
  render() {

    return (
      <div className="container-fluid">
        <div className="row depositCardRow">
          <div className="col-12 text-center">  <div className="depositStepsTitle">How It Works</div>
            <p>The more friends you share with; the more chance you get to earn huge rewards. </p>
            <div>
              <hr className="depositDivider" />
              <div className="depositeDividerOverlay"></div>
            </div>
          </div>
          <div className="col-lg-1 col-md-6 col-sm-12 mt-5 ml-4 depositCard"></div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-5 depositCard">
            <div className="outerDiv">
              <div className="centerDiv">  <img className="Img" src="/assets/images/support.png" alt="card"></img></div>
              <h4 className="title">REGISTER</h4>
              <p className="text">Register to Aurum Markets IB Program & get your referral link</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-5 depositCard">
            <div className="outerDiv">
              <div className="centerDiv">  <img className="Img" src="/assets/images/deposite2.png" alt="card"></img></div>
              <h4 className="title">SHARE                                                                         </h4>
              <p className="text">
                Invite and share your referral link with your friends and family</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-5 depositCard">
            <div className="outerDiv">
              <div className="centerDiv">  <img className="Img" src="/assets/images/customer.png" alt="card"></img></div>
              <h4 className="title">EARN</h4>
              <p className="text">Earn $50 for yourself and your friend with small initial investment*
              </p>
            </div>
          </div>
          <div className="col-lg-1 col-md-6 col-sm-12 mt-5 depositCard">
            {/* <div className="outerDiv">
            <div className="centerDiv">  <img className="Img" src="/assets/images/deposite4.png" alt="card"></img></div>
              <h4 className="title">Earn</h4>
              <p className="text">Use Your IB link to register clients and earn IB commissions</p>
            </div> */}
          </div>

          <div className="col-12 text-center mt-5 mb-5">
            <a href="/refer-terms">
              <p>*Terms And Conditions Apply</p> </a>
            <button onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }} className="depositButton " style={{ padding: "8px 70px" }} >Get Started</button>
          </div>
        </div>
      </div>
    );
  }
}

export default StepsToOpenAccount;
