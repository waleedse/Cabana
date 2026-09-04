import React, { Component } from "react";
import Analytics from "./components/Analytics";
import HowItWorks from "./components/HowItWorks";
import LandingSliderSection from "./components/LandingSliderSection";
import PaymentOptions from "./components/PaymentOptions";
import TradingPlatforms from "./components/TradingPlatforms";

import "./components/landingPage.css";
import AlertModal from "./components/AlertModal";
import { connect } from "react-redux";

class LandingPage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                <LandingSliderSection />
                <HowItWorks title="HOW IT WORKS" />
                <TradingPlatforms />
                {/* <Analytics /> */}
                <PaymentOptions />
                {
                    this.props.country == 'Pakistan' && <AlertModal></AlertModal>
                }

            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        country: state.country,
        continent: state.continent
    }
}

export default connect(mapStateToProps)(LandingPage);
