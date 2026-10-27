import React, { Component } from "react";
import { a } from "react-router-dom";
export default class AboutUsDropDown extends Component {
  render() {
    return (
      <div>
        <div className="headerDropDown">
          <div
            className="headerDropDownItemDiv offset-md-2"
            onClick={this.props.dropDownHandler}
          >
            {/* <h5 className="headerDropDownTitle">ABOUT US</h5> */}
            {/* <a href="/about-us">
              <div className="headerDropDownItem">News and Events</div>
            </a> */}
            <a href="/about-us">
              <div className="headerDropDownItem">Why Aurum Markets</div>
            </a>
            <a href="/our-location">
              <div className="headerDropDownItem">Contact Us</div>
            </a>
            <a href="/faqs">
              <div className="headerDropDownItem">FAQ's</div>
            </a>
          </div>
          <div
            className="headerDropDownItemDiv opacityZero"
            onClick={this.props.dropDownHandler}
          >
            <h5 className="headerDropDownTitle">ACCOUNTS</h5>
            <a href="">
              <div className="headerDropDownItem">Account Type</div>
            </a>
            <a href="">
              <div className="headerDropDownItem">Trading Instruments</div>
            </a>
            <a href="">
              <div className="headerDropDownItem">Currencies (FX)</div>
            </a>
          </div>
          <div className="headerDropDownImgDiv">
            <img
              className="headerDropDownImg"
              src="/assets/images/aboutUsDrop.svg"
              alt="about US"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}
