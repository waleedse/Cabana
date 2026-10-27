import React, { Component } from 'react';

class TradeWithCabana extends Component {

    componentDidMount() {


        window.addEventListener("scroll", (event) => {
            let screen = window.screen.width;
            let scroll = window.scrollY;
            if (screen > 768) {
                if (screen > 768) {
                    if (scroll < 1940) {
                        if (this.state.fixDiv) this.handleFixDiv()
                    }
                    if (scroll > 1940) {
                        if (!this.state.fixDiv) this.handleFixDiv()
                    }
                    if (scroll > 2040) this.handleActive("swap")
                    if (scroll > 2140) this.handleActive("deposit")
                    if (scroll > 2240) this.handleActive("spread")
                    if (scroll > 2340) this.handleActive("lang")
                    if (scroll > 2440) {
                        this.handleActive("leverage")
                        if (scroll > 2640) {
                            if (this.state.fixDiv)

                                this.handleFixDiv()
                        }

                    }
                }
            }

            console.log(scroll, this.state.fixDiv, screen)
        });
    }

    constructor() {
        super()
        this.state = { active: "swap", fixDiv: false }

        this.handleActive = this.handleActive.bind(this)
        this.handleFixDiv = this.handleFixDiv.bind(this)
    }
    handleActive(value) {
        this.setState({
            active: value
        })
    }
    // handle change in fixDiv
    handleFixDiv() {
        this.setState({
            fixDiv: !this.state.fixDiv
        })
    }
    renderComponent() {

        const { active } = this.state
        switch (active) {
            case "swap":

                return <SwapAccount />
            case "lang":

                return <MultiLang />
            case "deposit":

                return <FastDeposite />
            case "leverage":

                return <FixedLeaverage />
            case "spread":

                return <LowSpread />

            default:
                break;
        }
    }
    render() {
        const { active, fixDiv } = this.state
        return (
            <div className={fixDiv ? "growthHeight  " : ""}>
                <div className={fixDiv ? "tradeWithCabana tradecabanabg fixDiv2 mt-4" : "tradeWithCabana  tradecabanabg fixDiv3"}>
                    <div className="title mb-0 mb-md-5">WHY TRADE WITH Aurum Markets</div>
                    <div className="mainFlex">
                        <div className="sec-1 ml-auto mr-auto" >
                            <div onClick={() => this.handleActive("leverage")} className={active === "leverage" ? "item itemRight itemActive  mt-1 mt-md-5" : "item itemRight     mt-1 mt-md-5"}>

                                <img className="why_cab_icon1" src="/assets/images/leverge.png"></img>
                                <div className="text">Fixed Leverage</div>
                            </div>
                            <div onClick={() => this.handleActive("lang")} className={active === "lang" ? "item itemRight margin40 itemActive mt-4 mt-md-2 " : "item margin40 itemRight  "}>

                                <img className="why_cab_icon1" src="/assets/images/service.png"></img>
                                <div className="text">24/5 Multilingual<br />
                                    customer Service</div>
                            </div>
                        </div>
                        <div className="sec-2 mt-0 mt-md-4">
                            <div onClick={() => this.handleActive("swap")} className={active === "swap" ? "item  itemActive " : "item "}>

                                <img className="why_cab_icon" src="/assets/images/swapfree.png"></img>
                                <div className="text">	Swap Free Account <br /></div>
                            </div>

                            <div className="centerDiv mt-5 d-none d-md-inline"><div className="shapeTradeBg">
                                {this.renderComponent()}
                            </div></div>
                        </div>
                        <div className="sec-3">
                            <div onClick={() => this.handleActive("deposit")} className={active === "deposit" ? "item itemLeft itemActive  mt-md-5 pt-0 pt-md-4" : "item itemLeft mt-1 mt-md-5 pt-0 pt-md-4"}>

                                <img className="why_cab_icon2" src="/assets/images/fastDeposit_.png"></img>
                                <div className="text">Fast Deposit <br />
                                    Withdrawal</div>
                            </div>
                            <div onClick={() => this.handleActive("spread")} className={active === "spread" ? "item itemLeft itemActive mt-4 " : "item itemLeft"}>

                                <img className="why_cab_icon2" src="/assets/images/lowestspread.png"></img>
                                <div className="text">	Lowest Spread</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default TradeWithCabana;

const SwapAccount = () => {
    return <>  <div className="text px-4">Swap Free Accounts are available to all our clients</div>

        <button onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }} className="createBtn mt-2" >Register</button>  </>
}
const LowSpread = () => {
    return <>  <div className="text px-4">Our Spreads are lowest in the market</div>

        <button onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }} onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }} className="createBtn mt-2" >Register</button>  </>
}
const FastDeposite = () => {
    return <>  <div className="text px-4">Fast Deposit & Withdrawal Service</div>

        <button onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }} className="createBtn mt-2" >Register</button>  </>
}
const MultiLang = () => {
    return <>  <div className="text px-4">We offer personlised customer service round the clock</div>

        <button onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }} className="createBtn mt-2" >Register</button>  </>
}
const FixedLeaverage = () => {
    return <>  <div className="text px-4">We offer fixed Leverage to all our clients</div>

        <button onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }} className="createBtn mt-2" >Register</button>  </>
}
