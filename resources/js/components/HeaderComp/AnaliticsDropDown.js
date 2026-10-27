import React, { Component } from "react";
import { a } from "react-router-dom";
export default class AnalyticsDropDown extends Component {
    render() {
        return (
            <div>
                <div className="headerDropDown">
                    <div
                        className="headerDropDownItemDiv offset-md-3"
                        onClick={this.props.dropDownHandler}
                    >
                        <h5 className="headerDropDownTitle ">EDUCATION</h5>
                        <a href="/education">
                            <div className="headerDropDownItem">Education</div>
                        </a>
                        <a href="/analytics">
                            <div className="headerDropDownItem">How To Use MT4</div>
                        </a>
                    </div>
                    <div
                        className="headerDropDownItemDiv "
                        onClick={this.props.dropDownHandler}
                    >
                        <h5 className="headerDropDownTitle">ANALYTICS</h5>
                        <a href="https://blog.aurummarkets.com/">
                            <div className="headerDropDownItem">Analytics</div>
                        </a>
                        <a href="/autochartist">
                            <div className="headerDropDownItem">Autochartist</div>
                        </a>
                        <a href="/mt5-platform" className="opacityZero">
                            <div className="headerDropDownItem">MetaTrader 5</div>
                        </a>
                    </div>

                    <div className="headerDropDownImgDiv">
                        <img
                            className="headerDropDownImg"
                            src="/assets/images/analyticsDrop.svg"
                        ></img>
                    </div>
                </div>
            </div>
        );
    }
}
