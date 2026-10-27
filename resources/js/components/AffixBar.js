import React, { Component } from "react";
export default class AffixBar extends Component {
    render() {
        return (
            <div style={{ position: 'fixed', width: '100%', zIndex: '222222' }} className="affixBarBox ">
                <div className="row">
                    <div className="col-md-8 col-sm-12 ">
                        <div className="centerBox margin_left">
                            <div className="d-inline affixTab">
                                <img
                                    className="d-inline affixIcon"
                                    src="/assets/images/emailIcon.png"
                                    alt="emailPng"
                                ></img>
                                <p className="affixBarText d-inline">
                                    Email : support@aurummarkets.com
                                </p>
                            </div>
                            {/* <div className="d-inline affixTab">
                <img
                  className="d-inline affixIcon"
                  src="/assets/images/callIcon.png"
                  alt="emailPng"
                ></img>
                <p className="affixBarText d-inline">
                  Call Us: +44 208 124 4440
                </p>
              </div> */}
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 ">
                        <div className="centerBox">
                            <div className="d-inline affixTab pointer">
                                <img
                                    className="d-inline affixIcon"
                                    src="/assets/images/loginIcon.png"
                                    alt="emailPng"
                                ></img>
                                <p onClick={() => { window.open('https://portal.aurummarkets.com/login/', '_self') }} className="affixBarText_login d-inline">Login</p>
                            </div>
                            <div className="d-inline affixTab pointer">
                                <img
                                    className="d-inline affixIcon"
                                    src="/assets/images/signUpIcon.png"
                                    alt="emailPng"
                                ></img>
                                <p onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }} className="affixBarText_login d-inline">SignUp</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
