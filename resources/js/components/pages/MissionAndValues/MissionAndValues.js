import React, { Component } from "react";
import HeroSection from "../AboutUsPage/components/HeroSection";
import HowItWorks from "../LandingPage/components/HowItWorks";
import TradingComponent from "../LandingPage/components/TradingComponent";
import GetStartedSec from "../TermsAndConditionPage/components/GetStartedSec";

import "./components/MissionAndValues.css";
import MissionCard from "./components/MissionCard";
export default class MissionAndValues extends Component {
  render() {
    return (
      <div>
        <HeroSection
          title="Aurum markets "
          title2="MISSION AND VALUES"
        ></HeroSection>
        <MissionCard />
        <TradingComponent />
        <HowItWorks title="Start Trading in 4 Steps" />
        <GetStartedSec />
      </div>
    );
  }
}
