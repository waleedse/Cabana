import React, { Component } from 'react';
import Growth2017 from './components/Growth2017';
import $ from "jquery"
class AboutUsGrowthSec extends Component {

    componentDidMount() {


        window.addEventListener("scroll", (event) => {
            let scroll = window.scrollY;
            if (scroll < 1325) {
                if (this.state.fixDiv) this.handleFixDiv()
            }
            if (scroll > 1325) {
                if (!this.state.fixDiv) this.handleFixDiv()
            }
            if (scroll > 1425) this.handleActiveYear("17")
            if (scroll > 1525) this.handleActiveYear("18")
            if (scroll > 1625) this.handleActiveYear("19")
            if (scroll > 1725) this.handleActiveYear("20")
            if (scroll > 1825) {
                this.handleActiveYear("21")
                if (scroll > 1925) if (this.state.fixDiv) this.handleFixDiv()
            }

            console.log(scroll, this.state.fixDiv)
        });
    }


    constructor() {
        super()
        this.state = { activeYear: "17", fixDiv: false }
        this.handleActiveYear = this.handleActiveYear.bind(this)
        this.handleFixDiv = this.handleFixDiv.bind(this)
    }

    // handle change in activeYear
    handleActiveYear(year) {
        this.setState({
            activeYear: year,
        })
    }
    // handle change in fixDiv
    handleFixDiv() {
        this.setState({
            fixDiv: !this.state.fixDiv
        })
    }

    renderYearPage() {
        const { activeYear } = this.state


        switch (activeYear) {
            case "17":

                return <Growth2017 year={activeYear}
                    content="Aurum Markets started it's successful journey in 2017 and within first 6 months more than 10,000 clients registered and became a part of Aurum Markets ever growing family.<br/><br/>"
                    img="world.png"
                />
            case "18":

                return <Growth2017 year={activeYear}
                    content="Due to an overwhelming positive response during it's foundation year, Aurum Markets expanded its operations and went global in 2018, entering multiple regions including Asia, South East Asia, East Asia  and Africa."
                    img="18.png"
                />
            case "19":

                return <Growth2017 year={activeYear}
                    content="Aurum Markets had another feather in their caps in 2019 by being
               a proud sponsor of a successful event, Dubai Forex Expo.
                It enjoyed a spectacular growth of expanding business further in more than 30 countries."
                    img="19.png"
                />
            case "20":

                return <Growth2017 year={activeYear}
                    content="Despite the unprecedented times in 2020, Aurum Markets reached a milestone and remarkable business growth with a global reach of over 79 countries  and over 150,000 trading accounts worldwide."
                    img="20.png"
                />
            case "21":

                return <Growth2017 year={activeYear}
                    content="The year 2021 has proven to be a complete success for Aurum Markets so far. It made a spectacular start to the year by bagging the Consumer Choice for Best Oil & Gold Broker in the forex market. It also participated in Dubai Forex Expo & opened its regional offices in Far East Asia and Africa."
                    img="21.png"
                />

            default:
                break;
        }
    }
    render() {
        const { activeYear, fixDiv } = this.state
        return (
            <div className={fixDiv === true ? "growthHeight " : ""}>
                <div id="trigger1" className={fixDiv === true ? "growthRow aboutUs2Bg fixDiv" : "growthRow aboutUs2Bg "}>
                    <div className="growthTitle">Exponential Growth over The Years</div>
                    <div id="pin1" className="growthflex">
                        <div className="growthYearBar">
                            <div onClick={() => this.handleActiveYear("17")} className={activeYear === "17" ? "growthYearItem growthYearItemActive" : "growthYearItem"}>2017</div>
                            <div onClick={() => this.handleActiveYear("18")} className={activeYear === "18" ? "growthYearItem growthYearItemActive" : "growthYearItem"}>2018</div>
                            <div onClick={() => this.handleActiveYear("19")} className={activeYear === "19" ? "growthYearItem growthYearItemActive" : "growthYearItem"}>2019</div>
                            <div onClick={() => this.handleActiveYear("20")} className={activeYear === "20" ? "growthYearItem growthYearItemActive" : "growthYearItem"}>2020</div>
                            <div onClick={() => this.handleActiveYear("21")} className={activeYear === "21" ? "growthYearItem growthYearItemActive" : "growthYearItem"}>2021</div>

                        </div>
                        <div className='growthYearContent'>{this.renderYearPage()}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUsGrowthSec;
