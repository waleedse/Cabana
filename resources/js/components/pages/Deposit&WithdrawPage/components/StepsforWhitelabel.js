import React, { Component } from 'react';

class StepsToOpenAccount extends Component {
  render() {

    return (
      <div className="container-fluid">
        <div className="row depositCardRow">
          <div className="col-12 text-center">  <div className="depositStepsTitle">Start Trading in 3 Steps</div>
            <div>
              <hr className="depositDivider" />
              <div className="depositeDividerOverlay"></div>
            </div>
          </div>
          <div className="col-lg-1 col-md-6 col-sm-12 mt-5 depositCard"></div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-5 depositCard">
            <div className="outerDiv">
              <div className="centerDiv">  <img className="Img" src="/assets/images/support.png" alt="card"></img></div>
              <h4 className="title">Contact Us</h4>
              <p className="text">Contact us for a Quote</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-5 depositCard">
            <div className="outerDiv">
              <div className="centerDiv">  <img className="Img" src="/assets/images/deposite2.png" alt="card"></img></div>
              <h4 className="title">Terms</h4>
              <p className="text">
                Finalise the Terms
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-5 depositCard">
            <div className="outerDiv">
              <div className="centerDiv">  <img className="Img" src="/assets/images/customer.png" alt="card"></img></div>
              <h4 className="title">Services</h4>
              <p className="text">Start using White Label services
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
            <button onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }} className="depositButton " style={{ padding: "8px 70px" }} >Get Started</button>
          </div>
        </div>
      </div>
    );
  }
}

export default StepsToOpenAccount;
