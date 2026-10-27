import React, { Component } from "react";
import HeroSection from "./components/HeroSection";
import "./components/aboutUs.css";
import AboutUsDetails from "./components/AboutUsDetails";
import TradingComponent from "../LandingPage/components/TradingComponent";
import AboutUsBenifits from "./components/AboutUsBenifits";
import AboutUsClient from "./components/AboutUsClient";
export default class AboutUsPage extends Component {
  render() {
    return (
      <div>
        <HeroSection
          title="ABOUT US"
          text="Aurum Markets -True ECN Forex Broker"
        />
        <AboutUsDetails />
        <TradingComponent />
        <AboutUsBenifits />
        <AboutUsClient />
      </div>
    );
  }
}
