import React, { Component } from "react";

export default class HowItWorks extends Component {
  render() {
    return (
      <div className="container-fluid howitworkmain">
        <div className="row howItTitleBox">
          <div className="col-12 mt-3">
            <h2 className="howItTitle">HOW IT WORKS</h2>
            <p className="howItText">
              Step-by step guide on how to Create Account and start working with
              Aurum Markets
            </p>
          </div>
        </div>
        <div className="row howItFeatureRow">
          <div className="col-md-5 col-sm-12">
            <div className="row howPointsRow">
              <div className="col-4 text-center">
                <img
                  className="howPointImage"
                  src="/assets/images/user.png"
                  alt="howPointsImage"
                ></img>
              </div>
              <div className="col-8">
                <h2 className="howPointTitle">CREATE ACCOUNT</h2>
                <p className="howItText">
                  Sign up and open your live trading account with Aurum Markets
                </p>
              </div>
            </div>
            <div className="row howPointsRow">
              <div className="col-4 text-center">
                <img
                  className="howPointImage"
                  src="/assets/images/verified.png"
                  alt="howPointsImage"
                ></img>
              </div>
              <div className="col-8">
                <h2 className="howPointTitle">VERIFY</h2>
                <p className="howItText">
                  Upload your documents to verify your account with Aurum Markets
                </p>
              </div>
            </div>
            <div className="row howPointsRow">
              <div className="col-4 text-center">
                <img
                  className="howPointImage"
                  src="/assets/images/cash.png"
                  alt="howPointsImage"
                ></img>
              </div>
              <div className="col-8">
                <h2 className="howPointTitle">FUND</h2>
                <p className="howItText">
                  Login to Aurum Markets &fund your account
                </p>
              </div>
            </div>
            <div className="row howPointsRow">
              <div className="col-4 text-center">
                <img
                  className="howPointImage"
                  src="/assets/images/stock.png"
                  alt="howPointsImage"
                ></img>
              </div>
              <div className="col-8">
                <h2 className="howPointTitle">TRADE</h2>
                <p className="howItText">
                  Enjoy hassle free trading on multiple financial products
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-sm-12">
            <img
              className="howItFeatureImage"
              alt="image"
              src="/assets/images/howitswork.jpg"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}
