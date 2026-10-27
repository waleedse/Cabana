import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Axios from "axios";
import { img_baseurl } from "../../../Configs/BaseUrls";

export default class LandingSliderSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderImages: [
        { image: 'landingBg1.png' },
        { image: 'referafriend.jpg' }
      ],
      sliders: [
        {
          image: 'landingBg10.png',
          content: '<div class="container"><div class="row trueRow"><div class="col-12 pt-5 "><h1 class="trueTitle">TRUE ECN <br /> FOREX BROKER</h1><p class="trueDescription">True ECN Spreads From 0.0 Pips</p><div class="trueButtonBox"><a href="https://secure.cabanacapitals.com/login"><button class="btnLogin">LOG IN</button> </a> <a href="https://secure.cabanacapitals.com/login"><button  class="btnSignUp">SIGN UP</button> </a></div></div></div></div>',
        }
      ],
      payloadResponse: true
    }
  }

  componentDidMount() {

    Axios.post('/api/get_home_sliders').then(res => {
      console.log(res);
      if (res.status == 200) {
        this.setState({
          sliders: [],
          sliders: res.data.sliders,
          payloadResponse: false
        })
      }
    })
  }
  render() {
    return (
      <div className="">
        <div className="">
          <div style={{ paddingTop: '85px' }}>
            {
              this.state.payloadResponse ?
                <div style={{ height: '450px', background: '#19141A' }}>

                </div>
                :
                <Carousel
                  autoPlay={true}
                  showArrows={true}
                  infiniteLoop={true}
                  interval={3000}
                  // stopOnHover={true}
                  // showThumbs={true}
                  // showStatus={true}
                  showIndicators={false}

                >


                  {
                    this.state.sliders.map((data, index) => {
                      return (
                        <div key={index} className="landingSliderBg" style={{ backgroundImage: `url(${img_baseurl + data.image})` }}>
                          <div dangerouslySetInnerHTML={{ __html: data.content }}>

                          </div>
                        </div>
                      )
                    })





                  }

                </Carousel>
            }


          </div>

          <div className="landingSliderBg2">
            <div className="container-fluid">
              <div className="row tradeWithRow">
                <div className="col-12">
                  <h3 className="tradeWithTitle">WHY TRADE WITH Aurum Markets</h3>
                  <p className="tradeWithText">
                    Trade multiple financial products which includes Forex, Commodities, Indices, and Metals
                  </p>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row tradeWithFRow">
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="tradeFeatureBox">
                    <div className="featureImageCircle">
                      <img
                        className="featureImage"
                        alt="featureImage"
                        src="/assets/images/fKey.png"
                      ></img>
                    </div>
                    <h2 className="featureTitle">Swap Free <br />Account</h2>
                    <p className="featureText">
                      Seamless interest-free trading.
                      *Swap Free Accounts are available to all our clients

                    </p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="tradeFeatureBox">
                    <div className="featureImageCircle">
                      <img
                        className="featureImage"
                        alt="featureImage"
                        src="/assets/images/fCharges.png"
                      ></img>
                    </div>
                    <h2 className="featureTitle">
                      No Deposit/Withdrawal Charges
                    </h2>
                    <p className="featureText">
                      ZERO deposit & withdrawal charges to earn
                      maximum profits at minimum trading cost

                    </p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="tradeFeatureBox">
                    <div className="featureImageCircle">
                      <img
                        className="featureImage"
                        alt="featureImage"
                        src="/assets/images/fFixed.png"
                      ></img>
                    </div>
                    <h2 className="featureTitle">Lowest &  <br /> VARIABLE SPREADS</h2>
                    <p className="featureText">
                      Offers lowest trading cost in the market (0.0 Pips)
                      to earn highest profits possible

                    </p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="tradeFeatureBox">
                    <div className="featureImageCircle">
                      <img
                        className="featureImage"
                        alt="featureImage"
                        src="/assets/images/fLeverage.png"
                      ></img>
                    </div>
                    <h2 className="featureTitle">LEVERAGE UPTO  <br /> 1:500</h2>
                    <p className="featureText">
                      Access to a larger portion of financial market
                      & increase potential profits

                    </p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="tradeFeatureBox">
                    <div className="featureImageCircle">
                      <img
                        className="featureImage"
                        alt="featureImage"
                        src="/assets/images/fBalance.png"
                      ></img>
                    </div>
                    <h2 className="featureTitle">
                      NEGATIVE BALANCE PROTECTION
                    </h2>
                    <p className="featureText">
                      Secure trading with NBP allows you to
                      not lose more than deposited

                    </p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="tradeFeatureBox">
                    <div className="featureImageCircle">
                      <img
                        className="featureImage"
                        alt="featureImage"
                        src="/assets/images/fService.png"
                      ></img>
                    </div>
                    <h2 className="featureTitle">
                      24/5 MULTILINGUAL <br /> SERVICE
                    </h2>
                    <p className="featureText">
                      Dedicated customer support team available
                      to assist you via various contact channels

                    </p>
                  </div>
                </div>
              </div>

              <div className="row demoAccountRow">
                <div className="col-md-6 col-sm-12">
                  <div className="demoAccountBox mr-0">
                    <div className="demoAccountTitleBox">
                      <h2
                        className="demoAccountTitle"
                        style={{ color: "orange" }}
                      >
                        NEW TO TRADING?
                      </h2>
                    </div>

                    <div className="demoAccountInfoBox ">
                      <div className="demoTextFlex mt-2">
                        <h4 className="demoAccountText ">FREE Demo Account</h4>
                        <div className="demoIcon">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            size="sm"
                            color="#F1A101"
                          />
                        </div>
                      </div>
                      <div className="demoTextFlex mt-2">
                        <h4 className="demoAccountText ">
                          Step-by step tutorials & articles
                        </h4>
                        <div className="demoIcon ">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            size="sm"
                            color="#F1A101"
                          />
                        </div>
                      </div>
                      <div className="demoTextFlex mt-2">
                        <h4 className="demoAccountText ">
                          Online webinars & local seminars
                        </h4>
                        <div className="demoIcon ">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            size="sm"
                            color="#F1A101"
                          />
                        </div>
                      </div>
                      <div className="demoTextFlex mt-2">
                        <h4 className="demoAccountText ">
                          Your own Account Manager
                        </h4>
                        <div className="">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            size="sm"
                            color="#F1A101"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <button onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }} className="btnDemoAccount">
                        Open Demo Account
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="demoAccountBox ml-0">
                    <div className="demoAccountTitleBox">
                      <h2 className="demoAccountTitle">GO LIVE</h2>

                    </div>

                    <div className="demoAccountInfoBox">
                      <div className="demoTextFlex mt-2">
                        <h4 className="demoAccountText ">Tight Spreads</h4>
                        <div className="demoIcon">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            size="sm"
                            color="#6ddf65"
                          />
                        </div>
                      </div>
                      <div className="demoTextFlex mt-2">
                        <h4 className="demoAccountText ">
                          Superfast trade execution
                        </h4>
                        <div className="demoIcon ">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            size="sm"
                            color="#6ddf65"
                          />
                        </div>
                      </div>
                      <div className="demoTextFlex mt-2">
                        <h4 className="demoAccountText ">
                          Hi-tech forex trading tools
                        </h4>
                        <div className="demoIcon ">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            size="sm"
                            color="#6ddf65"
                          />
                        </div>
                      </div>
                      <div className="demoTextFlex mt-2">
                        <h4 className="demoAccountText ">
                          Ultimate risk protection & security
                        </h4>
                        <div className="">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            size="sm"
                            color="#6ddf65"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <button onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }} className="btnDemoAccount_live">
                        OPEN LIVE ACCOUNT
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
