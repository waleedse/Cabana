import {
    faAngleRight,
    faArrowLeft,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import HeaderMobileLastDropDown from "./HeaderComp/HeaderMobileLastDropDown";

class HeaderMobile extends Component {
    // state
    constructor(props) {
        super(props);
        this.state = { activeDropDown: null };

    }


    // handleChange drop down fun
    handleChangeDropDown(value) {
        console.log(value);
        this.setState({
            activeDropDown: value,
        });
    };
    render() {
        return (
            <>
                <div
                    className={
                        this.props.active
                            ? "headerMobile headerMobileActive"
                            : "headerMobile"
                    }
                >
                    <div className="sideBarHead">
                        <h2 className="text-light ">Menu</h2>
                        <span>
                            {this.state.activeDropDown && (
                                <div onClick={() => this.handleChangeDropDown(null)}>
                                    <FontAwesomeIcon
                                        className="pointer"
                                        icon={faArrowLeft}
                                        color="#fff"
                                        size="lg"
                                    />
                                </div>
                            )}
                        </span>
                        <FontAwesomeIcon
                            onClick={this.props.closeHeader}
                            className="pointer"
                            icon={faTimes}
                            color="#fff"
                            size="lg"
                        ></FontAwesomeIcon>
                    </div>
                    <div
                        className={
                            this.state.activeDropDown
                                ? "sideBarBody activeDropDown"
                                : "sideBarBody"
                        }
                    >
                        <div
                            className="sideBarItem"
                            onClick={() => this.handleChangeDropDown("aboutUs")}
                        >
                            <span>About Us</span>
                            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                        </div>
                        <div
                            className="sideBarItem"
                            onClick={() => {
                                console.log("click")
                                this.handleChangeDropDown("accounts")
                            }}
                        >
                            <span> FX Trading</span>
                            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                        </div>
                        <div
                            className="sideBarItem"
                            onClick={() => this.handleChangeDropDown("trading")}
                        >
                            <span> Partnership Program</span>
                            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                        </div>
                        <div
                            className="sideBarItem"
                            onClick={() => this.handleChangeDropDown("payment")}
                        >
                            <span> Promotions and Contests</span>
                            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                        </div>

                        <div
                            className="sideBarItem"
                            onClick={() => this.handleChangeDropDown("platform")}
                        >
                            <span>Market Research & Education</span>
                            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                        </div>

                        <div
                            className="sideBarItem"
                            onClick={() => this.handleChangeDropDown("analytic")}
                        >
                            <span> Copy Trading  </span>
                            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                        </div>
                        {/* <div
              className="sideBarItem"
              onClick={() => this.handleChangeDropDown("pamm")}
            >
              <span> ANALYSIS & EDUCATION</span>
              <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
            </div> */}

                    </div>

                    {this.state.activeDropDown && (
                        <div
                            className="sideBarItem sideBarItemNew"
                            onClick={() => {
                                // this.handleChangeDropDown(null);
                                // this.props.closeHeader();
                                // return;
                            }}
                        >
                            {this.state.activeDropDown === "aboutUs" && (
                                <>
                                    <HeaderMobileLastDropDown activeDropDown={true} title="About Us">
                                        <div
                                            onClick={() => {
                                                this.handleChangeDropDown(null);
                                                this.props.closeHeader();
                                                return;
                                            }}
                                        >
                                            {/* <a href="/about-us">
                        <div className="sideBarItem">
                          <span> News and Events</span>
                        </div>
                      </a> */}
                                            <a href="/about-us">
                                                <div className="sideBarItem">
                                                    <span> Why Aurum Markets</span>
                                                </div>
                                            </a>
                                            <a href="/our-location">
                                                <div className="sideBarItem">
                                                    <span> Contact Us</span>
                                                </div>
                                            </a>
                                            <a href="/faqs">
                                                <div className="sideBarItem">
                                                    <span> FAQ's</span>
                                                </div>
                                            </a>
                                        </div>
                                    </HeaderMobileLastDropDown>
                                </>
                            )}
                            {this.state.activeDropDown === "accounts" && (
                                <>
                                    <HeaderMobileLastDropDown activeDropDown={false} className="sideBarItemNew" title="TRADING ACCOUNT">
                                        <div
                                            className="sideBarItemNew"
                                            onClick={() => {
                                                this.handleChangeDropDown(false);
                                                this.props.closeHeader();
                                                return;
                                            }}
                                        >
                                            <a href="/account-type">
                                                <div className="sideBarItemNew">
                                                    <span> Account Type</span>
                                                </div>
                                            </a>
                                            <a href="/islamic-trading">
                                                <div className="sideBarItemNew">Islamic Account</div>
                                            </a>
                                            <a href="/trading-termonology">
                                                <div className="sideBarItemNew">Trading Termonology</div>
                                            </a>


                                        </div>
                                    </HeaderMobileLastDropDown><br></br>
                                    <HeaderMobileLastDropDown activeDropDown={false} title="TRADING PLATFORMS">
                                        <div
                                            className="sideBarItemNew"
                                            onClick={() => {
                                                this.handleChangeDropDown(null);
                                                this.props.closeHeader();
                                                return;
                                            }}
                                        >
                                            <a href="/mt4-platform">

                                                <div className="sideBarItem">MetaTrader 4</div>
                                            </a>
                                            <a href="/mt5-platform">
                                                <div className="sideBarItem">MetaTrader 5</div>
                                            </a>
                                        </div>
                                    </HeaderMobileLastDropDown><br></br>
                                    <HeaderMobileLastDropDown activeDropDown={false} title="TRADING INSTRUMENTS">
                                        <div
                                            className="sideBarItemNew"
                                            onClick={() => {
                                                this.handleChangeDropDown(null);
                                                this.props.closeHeader();
                                                return;
                                            }}
                                        >
                                            <>
                                                <a href="/trading-instruments">
                                                    <div className="sideBarItem">Trading Instruments</div>
                                                </a>
                                                <a href="/trading-currencies">
                                                    <div className="sideBarItem">Currencies (FX)</div>
                                                </a>
                                                <a href="/precious-metals" >
                                                    <div className="sideBarItem">Precious Metals</div>
                                                </a>
                                                <a href="/comodoties" >
                                                    <div className="sideBarItem">Commodities</div>
                                                </a>
                                                <a href="/cfd-incdices" >
                                                    <div className="sideBarItem">CFD Indices Pairs</div>
                                                </a>
                                            </>
                                        </div>
                                    </HeaderMobileLastDropDown>
                                    <HeaderMobileLastDropDown activeDropDown={false} title="FUNDS">
                                        <div
                                            className="sideBarItemNew"
                                            onClick={() => {
                                                this.handleChangeDropDown(null);
                                                this.props.closeHeader();
                                                return;
                                            }}
                                        >
                                            <a href="/deposite-withdraw">
                                                <div className="sideBarItem">Deposit & Withdrawal</div>
                                            </a>
                                            <a href="/protection-funds">
                                                <div className="sideBarItem">Protection of funds</div>
                                            </a>
                                            <a href="/negative-balance-protection">
                                                <div className="sideBarItem">Negative Balance Protection</div>
                                            </a>
                                        </div>
                                    </HeaderMobileLastDropDown>
                                </>
                            )}
                            {this.state.activeDropDown === "trading" && (
                                <>
                                    <HeaderMobileLastDropDown activeDropDown={true} title="PARTNERSHIP PROGRAM">
                                        <div
                                            onClick={() => {
                                                this.handleChangeDropDown(true);
                                                this.props.closeHeader();
                                                return;
                                            }}
                                        >
                                            <a href="/introducing-broker" className="headerLink">
                                                <div className="sideBarItem">Inroducing Broker </div>
                                            </a>
                                            <a href="/affiliate-program" className="headerLink">
                                                <div className="sideBarItem">Affiliate Program</div>
                                            </a>
                                            {/* <a href="/white-label" className="headerLink">
                            <div className="sideBarItem">White Label</div>
                            </a> */}
                                        </div>
                                    </HeaderMobileLastDropDown>
                                </>
                            )}
                            {this.state.activeDropDown === "payment" && (
                                <>
                                    <HeaderMobileLastDropDown activeDropDown={true} title="Promotions and Contests">
                                        <div
                                            onClick={() => {
                                                this.handleChangeDropDown(null);
                                                this.props.closeHeader();
                                                return;
                                            }}
                                        >
                                            {
                                                this.props.promotions.map((data, index) => {
                                                    return (
                                                        <a href={data.link} className="headerLink">
                                                            <div className="sideBarItem">{data.title}</div>
                                                        </a>
                                                    )
                                                })
                                            }

                                            {
                                                this.props.promotions.length == 0 ?
                                                    <div className="headerDropDownItem">Promotions not available</div>
                                                    : null
                                            }

                                        </div>
                                    </HeaderMobileLastDropDown>
                                    {
                                        this.props.country != 'Pakistan' ?
                                            <HeaderMobileLastDropDown activeDropDown={true} title="Refer">
                                                <div
                                                    onClick={() => {
                                                        this.handleChangeDropDown(null);
                                                        this.props.closeHeader();
                                                        return;
                                                    }}
                                                >
                                                    <a href='/refer-friend' className="headerLink">
                                                        <div className="sideBarItem">Refer a Friend</div>
                                                    </a>

                                                </div>
                                            </HeaderMobileLastDropDown>
                                            :
                                            null
                                    }
                                </>
                            )}
                            {this.state.activeDropDown === "platform" && (
                                <>
                                    <HeaderMobileLastDropDown activeDropDown={true} title="Market Research & Education">
                                        <div
                                            onClick={() => {
                                                this.handleChangeDropDown(null);
                                                this.props.closeHeader();
                                                return;
                                            }}
                                        >
                                            <a href="/education">
                                                <div className="headerDropDownItem">Education</div>
                                            </a>
                                            <a href="/analytics">
                                                <div className="headerDropDownItem">How to use Mt4</div>
                                            </a>
                                            <a href="https://blog.aurummarkets.com/">
                                                <div className="headerDropDownItem">Analytics</div>
                                            </a>
                                            <a href="/autochartist">
                                                <div className="headerDropDownItem">Autochartist</div>
                                            </a>

                                        </div>
                                    </HeaderMobileLastDropDown>
                                </>
                            )}
                            {this.state.activeDropDown === "promotion" && (
                                <>
                                    <HeaderMobileLastDropDown activeDropDown={true} title="Aurum Markets Invest">
                                        <div
                                            onClick={() => {
                                                this.handleChangeDropDown(null);
                                                this.props.closeHeader();
                                                return;
                                            }}
                                        >
                                            <a href="https://social.aurummarkets.com/portal/login">
                                                <div className="sideBarItem">Social Trading</div>
                                            </a>
                                            {/* <a href="/PAMM">
                        <div className="sideBarItem">PAMM Manager</div>
                        </a> */}
                                            {/* <a href="/PAMM">
                        <div className="sideBarItem">Copy Trading</div>
                        </a> */}
                                        </div>
                                    </HeaderMobileLastDropDown>

                                </>
                            )}
                            {this.state.activeDropDown === "analytic" && (
                                <>
                                    <HeaderMobileLastDropDown activeDropDown={true} title="Aurum Markets Invest">
                                        <div
                                            onClick={() => {
                                                this.handleChangeDropDown(null);
                                                this.props.closeHeader();
                                                return;
                                            }}
                                        >
                                            <a href="https://social.aurummarkets.com/portal/login">
                                                <div className="sideBarItem">Social Login</div>
                                            </a>
                                            <a href="/social-trading">
                                                <div className="sideBarItem">Copy Trading</div>
                                            </a>
                                            <a href="/PAMM">
                                                <div className="sideBarItem">PAMM Manager</div>
                                            </a>
                                            <a href="/strategy-manager">
                                                <div className="sideBarItem">PAMM Strategy Manager</div>
                                            </a>
                                        </div>
                                    </HeaderMobileLastDropDown>
                                </>
                            )}


                        </div>
                    )}
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        promotions: state.promotion
    }
}

export default connect(mapStateToProps)(HeaderMobile);
