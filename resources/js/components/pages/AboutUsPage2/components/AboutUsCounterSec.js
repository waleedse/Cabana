import React, { Component } from 'react';

class AboutUsCounterSec extends Component {
    render() {
        return (
            <div>
                <hr className="aboutUsDivider" />
                <div className="container-fluid">
                    <div className="row counterSec">
                        <div className="col-md-6 col-sm-12">
                            <h4 className="title mb-4">Your Benefits With Aurum Markets</h4>
                            <p className="text">Aurum Markets has something for every kind of market. Regardless of whether you are a retail or institutional client, we have just the right trading solutions for all your needs.<br /><br />

                                Choose from a wide range of markets to trade using our impressive trading tools and instruments. We offer a huge number of currency pairs, spot metals and indices, CFDs, among many others.<br /><br />

                                Aurum Markets has the perfect account for every kind of trader. Our trading platforms are based on the latest technology to ensure reliability and security. We try our best to ensure they run smoothly on any device. <br /><br />

                                To help you play an active part in your trading process, we provide quality and comprehensive education on the trading industry. You are sure to benefit greatly from this program.</p>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="centerDiv">
                                <h1 className="bigTitle">79</h1>
                                <h5 className="boldText">countries covered</h5>
                                <h1 className="bigTitle">150k+</h1>
                                <h5 className="boldText">trading accounts opened</h5></div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <hr className="aboutUsDivider" />
            </div>
        );
    }
}

export default AboutUsCounterSec;
