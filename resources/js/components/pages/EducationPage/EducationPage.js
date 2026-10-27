import React, { Component } from "react";
import TradingComponent from "../LandingPage/components/TradingComponent";
import {
  eduBegginerData,
  eduIntermediateData,
} from "./components/educationData";
import HeroSec3 from "./components/HeroSec3";

import StepsToOpenAccount from "../Deposit&WithdrawPage/components/StepsToOpenAccount";
export default class EducationPage extends Component {
  render() {
    return (
      <div>
        <HeroSec3
          title="EDUCATION"
          text="Learn about Forex Markets with Aurum Markets"
          bg="education.jpg"
        />
        <div className="greyBg">
          <div className="container-fluid">
            <div className="row basicRow">
              <div className="col-12">
                <h4 className="aboutDetailTitle text-center mb-4">
                  Forex Trading For Beginners
                </h4>
              </div>
              {eduBegginerData.map((item) => {
                return (
                  <div className="col-md-4 col-sm-12 mb-3">
                    <div
                      className="termsCardBox "
                      style={{ padding: "30px", height: "150px" }}
                    >
                      <div className="termsCardTitle">{item.title}</div>
                      <p className="termsCardText">{item.des}</p>
                    </div>
                  </div>
                );
              })}
              <div className="col-12">
                <h4 className="aboutDetailTitle text-center mb-4 mt-2">
                  Forex Trading For Intermediate
                </h4>
              </div>
              {eduIntermediateData.map((item) => {
                return (
                  <div className="col-md-4 col-sm-12 mb-3">
                    <div
                      className="termsCardBox "
                      style={{ padding: "30px", height: "150px" }}
                    >
                      <div className="termsCardTitle">{item.title}</div>
                      <p className="termsCardText">{item.des}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <StepsToOpenAccount></StepsToOpenAccount>
        {/* <TradingComponent /> */}
        {/* <HowItWorks title="Start Tradind in 4 Steps" /> */}
      </div>
    );
  }
}
