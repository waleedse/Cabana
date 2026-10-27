import React, { Component } from "react";
import TradingComponent from "./TradingComponent";

export default class TradingPlatforms extends Component {
  render() {
    return (
      <div>
        <div>
          <TradingComponent />
          <div className="tradingBg2">
            <div className="container-fluid">
              <div className="row  eduVideoRow">
                <div className="  col-md-6 col-sm-12">
                  <img
                    src="/assets/images/educationalvideos.jpg"
                    alt="eduImage"
                    className="eduVideoImage"
                  ></img>
                </div>
                <div className="col-md-6 col-sm-12">
                  <h2 className="titleFont pt-4">EDUCATIONAL VIDEOS</h2>
                  <p className="textFont mt-2 text-justify" style={{ fontSize: '14px' }}>
                    Forex trading for beginners can be especially tough. Therefore, we are providing a set of our educational videos to learn Forex Trading visually & comprehensively. The videos provide a full set of tutorials to understand all ins and outs of currency trading; for all levels from beginners to advance. Learn about key Forex, trading and technical analysis concepts with our short and easy-to-understand educational videos
                  </p>
                  <button onClick={() => { window.open('/education', '_self') }} className="btnPrimaryPink2">LEARN MORE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="patnershipBg">
          <div className="container-fluid ">
            <div className="row patnershipRow">
              <div className="col-md-6 col-sm-12 ">
                <div className="patnershipCol">
                  <h2 style={{ fontSize: '26px' }} className="patnershipTitle">
                    Aurum Markets PARTNERSHIP PROGRAMS
                  </h2>
                  <p className="patnershipText">
                    Benefit from forex market potentials and our unique
                    Patnership Programs.
                    <br />
                    Enjoy high commision and continuous support to grow your
                    business<br />

                  </p>
                  <p className="patnershipText">

                    Expand your revenue and business with our progressive commission structure <br />by introducing your clients to us.
                    Providing excellent opportunities to earn high <br /> partnership rewards with initial minor investment.  <br /><br />
                    Get complete forex trading solutions for your brokerage firm.<br />
                  </p>
                  <div className="row patnershipPointRow">
                    <div className="">
                      <a href="/introducing-broker">
                        <button className="btn btn-outline-secondary mt-2"> INTRODUCING BROKER</button>
                      </a>
                    </div>
                    <div className="">

                      <a href="/affiliate-program"><button className="btn btn-outline-secondary mt-2"> AFFILIATE PROGRAMS</button> </a>

                    </div>
                    <br className="display_mob" />
                    <br />
                    <div className=" mob_margin">

                      {/* <a href="/white-label">
                        <button className="btn btn-outline-secondary mt-2"> WHITE LABEL</button>
                        </a> */}

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <img
                  className="patnerShipImage"
                  src="/assets/images/patnershipimage.jpg"
                  alt="imagePatner"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
