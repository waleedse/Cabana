import React, { Component } from "react";
import HeroSection from "../AboutUsPage/components/HeroSection";
import StepsToOpenAccount from "../Deposit&WithdrawPage/components/StepsToOpenAccount";
import TradingComponent from "../LandingPage/components/TradingComponent";
import GetStartedSec from "./components/GetStartedSec";
import "./components/termsAndCondition.css";
import TermsCard from "./components/TermsCard";

export default class TermsAndCondition extends Component {
    render() {
        return (
            <div>
                <HeroSection
                    title="TERMS AND CONDITIONS"
                    text=""
                ></HeroSection>
                <div className=' footerLinkPage'>
                    <div className="basicRow">
                        <div className='qTitle text-center mt-0 pt-0'>Company</div>
                        <div className="basicText">
                            Aurum Markets Limited is incorporated in Mauritius as an International Broker Company with the registration number 195270 GBC having its registered office at Office 212, Block A, The Junction Business Hub, Calebasses Branch Road, Calebasses, 20201, Mauritius
                            <br /><br />
                            PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY.
                            <br /><br />
                            BY ACCESSING THIS WEBSITE YOU AGREE TO BE BOUND BY THE TERMS AND CONDITIONS BELOW PERTAINING TO BOTH THIS SITE AND ANY MATERIAL ON IT. Aurum markets RESERVES THE RIGHT TO CHANGE THESE TERMS AND CONDITIONS AT ANY TIME WITHOUT NOTICE TO YOU. YOU ARE THEREFORE RESPONSIBLE FOR REGULARLY REVIEWING THESE TERMS AND CONDITIONS. CONTINUED USE OF THIS SITE FOLLOWING ANY SUCH CHANGES SHALL CONSTITUTE YOUR ACCEPTANCE OF SUCH CHANGES. IF YOU DO NOT AGREE WITH THESE TERMS AND CONDITIONS, PLEASE DO NOT ACCESS THIS WEBSITE.

                        </div>
                        <div className='qTitle text-center'>OWNERSHIP OF SITE</div>
                        <div className="basicText">Aurum Markets owns and maintains this site. No act of downloading or otherwise copying from this site will transfer title to any software or material from this site to you. Anything that you transmit to this site becomes the property of Aurum Markets, may be used by Aurum Markets for any lawful purpose, and is further subject to disclosure as deemed appropriate by Aurum Markets, including to any legal or regulatory authority to which Aurum Markets is subject. Aurum Markets reserves all rights with respect to copyright and trademark ownership of all material at this site, and will enforce such rights to the full extent of the law.</div>
                        <div className='qTitle text-center'>COPYRIGHT</div>
                        <div className="basicText">The material contained in the website, including but not limited to all design, text, videos, sound recordings, and images, are owned, except as otherwise expressly stated, by Aurum Markets. Except as otherwise expressly stated herein, they may not be copied, transmitted, displayed, performed, distributed (for compensation or otherwise), licensed, altered, framed, stored for subsequent use, or otherwise used in whole or in part in any manner without Aurum Markets's prior written consent.

                        </div>
                        <div className='qTitle text-center'>ACCESS OF SITE</div>
                        <div className="basicText">This site and the information, tools and material contained in it are not directed to, or intended for distribution to or use by, any person or entity who is a citizen or resident of or located in any jurisdiction where such distribution, publication, availability or use would be contrary to law or regulation or which would subject Aurum Markets or its affiliates to any registration or licensing requirement within such jurisdiction.</div>
                        <div className='qTitle text-center'>DISCLAIMER OF WARRANTY AND LIMITATION OF LIABILITY</div>
                        <div className="basicText">The information on this site is provided "As it is". Aurum Markets does not warrant the accuracy of the materials provided herein, either expressly or impliedly, for any particular purpose and expressly disclaims any warranties of merchantability or fitness for a particular purpose. Aurum Markets will not be responsible for any loss or damage that could result from interception by third parties of any information made available to you via this site. Although the information provided to you on this site is obtained or compiled from sources we believe to be reliable, Aurum Markets cannot and does not guarantee the accuracy, validity, timeliness or completeness of any information or data made available to you for any particular purpose. Neither Aurum Markets, nor any of its affiliates, directors, officers or employees, nor any third party vendor will be liable or have any responsibility of any kind for any loss or damage that you incur in the event of any failure or interruption of this site, or resulting from the act or omission of any other party involved in making this site or the data contained therein available to you, or from any other cause relating to your access to, inability to access, or use of the site or these materials, whether or not the circumstances giving rise to such cause may have been within the control of Aurum Markets or of any vendor providing software or services support.
                            <br /><br />
                            Under no circumstances will Aurum Markets be liable for any consequential, incidental, special, punitive or exemplary damages arising out of any use of or inability to use this site or any portion thereof, regardless of whether Aurum Markets has been apprised of the likelihood of such damages occurring and regardless of the form of action, whether in Contract, Tort (including negligence), Strict Liability, or otherwise.
                            <br /><br />
                            The information contained in this site is intended for information purposes only. Therefore it should not be regarded as an offer or solicitation to any person in any jurisdiction in which such an offer or solicitation is not authorised or to any person to whom it would be unlawful to make such an offer or solicitation, nor regarded as recommendation to buy, sell or otherwise deal with any particular investment. You are strongly advised to obtain independent investment, financial, legal and tax advice before proceeding with any investment. Nothing in this site should be read or construed as constituting investment advice on the part of Aurum Markets, or any of its affiliates, directors, officers or employees.
                            <br /><br />
                            The nature of investment in Financial Instruments is such that not all Financial instruments are suitable for everyone unless they:
                            <br /><br />
                            A. Are knowledgeable in investment matters,<br />
                            B. Are able to bear the economic risk of the investment,<br />
                            C. Understand the risk involved; and<br />
                            D. Believe that the investment is suitable for their particular investment objective and financial needs.<br />
                            Should any non-professional investor invests in Financial Instruments, it is advisable that only a part of the sums that the investor intents to invest for long-term should be so invested.
                            <br /><br />
                            It is also advisable that all investors should seek advice from a professional investment advisor before making any investment in Financial Instruments.</div>
                        <div className='qTitle text-center'>LINKS TO OTHER SITES</div>
                        <div className="basicText">Links to non- Aurum Markets Websites are provided solely as pointers to information on topics that may be useful to users of the Aurum Markets Websites, and Aurum Markets has no control over the content on such non- Aurum Markets Websites. If you choose to link to a Website not controlled by Aurum Markets, Aurum Markets makes no warranties, either express or implied, concerning the content of such site, including the accuracy, completeness, reliability, or suitability thereof for any particular purpose, nor does Aurum Markets warrant that such site or content is free from any claims of copyright, trademark, or other infringement of the rights of third parties or that such site or content is devoid of viruses or other contamination. Aurum Markets does not guarantee the authenticity of documents on the Internet. Links to non- Aurum Markets sites do not imply any endorsement of or responsibility for the opinions, ideas, products, information, or services offered at such sites, or any representation regarding the content at such sites.</div>
                        <div className='qTitle text-center'>SECURITY</div>
                        <div className="basicText">If you communicate with Aurum Markets by e-mail, you should note that the security of Internet e-mail is uncertain. By sending sensitive or confidential e-mail messages which are not encrypted you accept the risks of such uncertainty and possible lack of confidentiality over the Internet. The Internet is not 100% safe and someone may be able to intercept and read your details.</div>
                        <div className='qTitle text-center'>PRIVACY</div>
                        <div className="basicText">Any personal information you provide us will be treated as confidential and shared only within the Company, its affiliates and its business partners and will not be disclosed to any third party except under any regulatory or legal proceedings. Web site tracking systems may also collect data detailing the pages you have accessed, how you discovered this site, the frequency of visits and so on. The information we obtain is used to improve the content of our web site and may be used by us to contact you, by any appropriate means, and to provide you with any information we believe may be useful to you.</div>
                    </div>
                </div>
                {/* <TradingComponent /> */}
                {/* <StepsToOpenAccount /> */}
            </div>
        );
    }
}
