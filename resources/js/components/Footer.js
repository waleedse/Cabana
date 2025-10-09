import React, { Component } from "react";
import { connect } from "react-redux";
import { a } from "react-router-dom";

class Footer extends Component {
    constructor(props) {
        super(props);
        console.log('props', this.props)
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row footerRow">
                    <div className="col-md-4 col-sm-12 ">
                        <div className="footerCol">
                            <img
                                className="footerLogo"
                                src="/assets/images/logotrans.png"
                                alt="image"
                            ></img>
                            <h3 className="footerTitle">Registered Office</h3>
                            <p className="footerText">
                                Aurum Markets Limited<br />
                                Ground Floor, The Sotheby Building,<br />
                                Rodney Village, Rodney Bay,<br />
                                Gros-Islet, Saint Lucia<br />



                                {/*<br /><br />Aurum Markets Markets Limited<br />
                                Office no. 212, Ground floor ,Block A,
                                <br />The junction Business Hub, <br />
        Calebasses Branch Rd, Calebasses, Mauritius */}
                            </p>
                            <div className="footerSocialBox">
                                <div className="footerSocialCircle">
                                    <a href="https://www.facebook.com/AurumMarketsGlobal/">
                                        <img
                                            src="/assets/images/socialIcon1.png"
                                            alt="social"
                                            className="footerSocialImage"
                                        ></img> </a>
                                </div>
                                <div className="footerSocialCircle">
                                    <a href="https://x.com/AurumMarkets">
                                        <img
                                            src="/assets/images/socialIcon2.png"
                                            alt="social"
                                            className="footerSocialImage"
                                        ></img> </a>
                                </div>
                                <div className="footerSocialCircle">
                                    <a href="https://www.youtube.com/@AurumMarkets">
                                        <img
                                            src="/assets/images/socialIcon3.png"
                                            alt="social"
                                            className="footerSocialImage"
                                        ></img></a>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* {"\u00BB"} */}
                    <div className="col-md-4 col-sm-12 footerCol">
                        <h3 className=" footeraTitle">QUICK Links</h3>
                        <a href="/cookie-policy">
                            <p className="footerLinkText"> Cookie Policy</p>

                        </a>
                        <a href="/regulatory-compliance">
                            <p className="footerLinkText"> Regulatory/compliance</p>

                        </a>

                        <a href="/files/AM_Privacy_Policy.pdf">
                            <p className="footerLinkText"> Privacy Policy</p>

                        </a>
                        <a href="/risk-disclouser">
                            <p className="footerLinkText"> Risk Disclosure</p>
                        </a>
                        <a href="/instruction-security">
                            <p className="footerLinkText"> Safety Of Fund</p>
                        </a>




                        <a href="/terms-and-condition">
                            <p className="footerLinkText"> Terms and Conditions</p>
                        </a>
                        <a href="/files/AM_Client_Agreement.pdf" target="_blank"  >
                            <p className="footerLinkText"> Client Agreement</p>
                        </a>
                        <a href="/files/AM_IB_Agreement.pdf" target="_blank"  >
                            <p className="footerLinkText"> IB Agreement</p>
                        </a>
                    </div>

                    <div className="col-md-4 col-sm-12 footerCol">
                        <h3 className=" footeraTitle">CONTACT</h3>
                        <a href="/our-location" >

                            <p className="footerLinkText"> Our Location</p>

                        </a>
                        {/* <div className="trustpilot-widget" data-locale="en-US" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="67b7c875c713494839509c3f" data-style-height="52px" data-style-width="100%">
                            <a href="https://www.trustpilot.com/review/aurummarkets.com" target="_blank" rel="noopener">Trustpilot</a>
                        </div> */}
                        {/* <p className="footerLinkText"> Contact Us</p> */}
                    </div>

                </div>
                <div className="row footerSecondRow">

                    <p className="footerText footerText_justify">
                        <span className="textBold">Legal: </span>
                        Aurum Markets Limited is incorporated in Saint Lucia as an International Broker Company with the registration number 2024-00298 having its Registered Address as Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia. The objects of the Company are all commercial, financial, lending, borrowing, trading, service activities and the participation in other enterprises as well as href provide brokerage, training and managed account services in currencies, commodities, indexes, CFD's and leveraged financial instruments.
                    </p>


                    <p className="footerText footerText_justify ">
                        <span className="textBold"> Risk Warning:
                        </span>
                        Trading Forex and CFDs involves a high level of risk and may result in the loss of all your invested capital. You should not invest more than you can afford to lose and should ensure that you fully understand the risks involved. Leveraged products may not be suitable for all investors. Before trading, please carefully consider your experience level, investment objectives, and seek independent financial advice if necessary. It is the responsibility of the Client to ascertain whether they are permitted to use the services of Aurum Markets based on the legal requirements in their country of residence. Please read Aurum Markets™️ full Risk Disclosure for more information.

                    </p>

                    <p className="footerText footerText_justify">
                        <span className="textBold">Regional Restrictions:  </span>
                        Aurum Markets does not provide services to residents of the EU Region, USA, Canada, Belgium, India, Russia, and FATF Blacklisted Countries. Find out more in the Account Opening section of our FAQs.                    </p>


                    {this.props.country === 'South Africa' && (
                        <p className="footerText footerText_justify">
                            Aurum Markets Ltd is incorporated in the Republic of Mauritius with company registration number 195270 GBC. The company is licensed and regulated by the Financial Services Commission (FSC) of Mauritius to offer financial services.

                            Aurum Global Markets (PTY) Ltd is authorized by the Financial Sector Conduct Authority (FSCA) in South Africa as a Financial Service Provider (FSP number 44692). Aurum Global Markets (PTY) Ltd operates under www.aurummarkets.com.

                            Aurum Markets does not provide services to the  residents of the EU Region, USA, Canada, Belgium,Russia, India and FATF Black Listed Countries. Find out more in the Account Opening section of our FAQs.
                        </p>
                    )}

                </div>
                <div className="row footerRightsRow">
                    <h5 className="footerRightsText">
                        Copyright {(new Date().getFullYear())} {"\u00A9"} Aurum Markets All Right Reserved
                    </h5>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        country: state.country,
        continent: state.continent
    }
}

export default connect(mapStateToProps)(Footer);
