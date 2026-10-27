import React, { Component } from "react";
import { a } from "react-router-dom";
export default class PAMMsDropDown extends Component {
    render() {
        return (
            <div>
                <div className="headerDropDown">
                    <div
                        className="headerDropDownItemDiv offset-md-3"
                        onClick={this.props.dropDownHandler}
                    >
                        <h5 className="headerDropDownTitle">Copy Trading</h5>
                        <a href="https://social.aurummarkets.com/portal/login">
                            <div className="headerDropDownItem">Copy trading Login</div>
                        </a>
                        <a href="/social-trading">
                            <div className="headerDropDownItem">Copy Trading</div>
                        </a>
                        {/* <a href="/PAMM">
              <div className="headerDropDownItem">PAMM Manager</div>
            </a> */}
                        {/* <a href="/PAMM">
              <div className="headerDropDownItem">Copy Trading</div>
            </a> */}
                    </div>
                    <div
                        className="headerDropDownItemDiv "
                        onClick={this.props.dropDownHandler}
                    >

                        <h5 className="headerDropDownTitle mt-4">PAMM MANAGER</h5>
                        <a href="/PAMM">
                            <div className="headerDropDownItem">PAMM Manager</div>
                        </a>
                        <a href="/strategy-manager" >
                            <div className="headerDropDownItem">PAMM Strategy Manager</div>
                        </a>
                        <a href="/PAMM" className="opacityZero">
                            <div className="headerDropDownItem">PAMM Manager</div>
                        </a>
                    </div>
                    <div className="headerDropDownImgDiv">
                        <img
                            className="headerDropDownImg"
                            src="/assets/images/pammDrop.svg"
                        ></img>
                    </div>
                </div>
            </div>
        );
    }
}
