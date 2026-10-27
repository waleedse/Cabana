import React, { Component } from "react";
import HeroSec3 from "./components/HeroSec3";
import { eduQuestionData1, eduQuestionData2 } from "./components/educationData";
import TradingComponent from "../LandingPage/components/TradingComponent";
import HowItWorks from "../LandingPage/components/HowItWorks";

export default class EducationsMetaTrader4 extends Component {
  render() {
    return (
      <div>
        <HeroSec3
          title="How to Use MT4"
          text="Learn about Forex Markets with Aurum Markets"
          bg="metatrader.jpg"
        />


        <div className="greyBg">
          <div className="container">
            <div className="row basicRow">
              <div className="col-12 text-center mb-3 mt-3">
                <h4 className="aboutDetailTitle">Setting Up MetaTrader 4</h4>
              </div>
              <div className="col-12">
                <div className="educationQuestionBox">
                  {eduQuestionData1.map((item) => {
                    return (
                      <div className="mb-2">
                        <p className="educationQuestionTitle mb-2">
                          {item.qes}
                        </p>
                        <p className="aboutDetailText">{item.ans}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-12 text-center mb-3 mt-5">
                <h4 className="aboutDetailTitle ">Trading With MetaTrader 4</h4>
              </div>
              <div className="col-12">
                <div className="educationQuestionBox">
                  {eduQuestionData2.map((item) => {
                    return (
                      <div className="mb-4">
                        <p className="educationQuestionTitle mb-2">
                          {item.qes}
                        </p>
                        <p className="aboutDetailText">{item.ans}</p>
                        <p className="aboutDetailText">{item.ans2}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <TradingComponent />
        {/* <HowItWorks title="Start Trading in 4 Steps" /> */}
      </div>
    );
  }
}
