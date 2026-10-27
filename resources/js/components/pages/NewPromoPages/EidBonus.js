import React from 'react';
import "./components/newPromoPage.css"
const EidBonus = () => {
    return (
        <div>
            <div className="newPromoBg" style={{ backgroundImage: "url('/assets/images/eidbonusbanner.jpg')", height: '500px' }}>
                <div>
                    <div className='title'><span className='titleLg'>Cash Back <br /> Promotion
                    </span></div>
                    <button onClick={() => { window.open('https://portal.aurummarkets.com/login/', '_self') }} className="btn download_mmt4">GET STARTED</button>

                    {/* <a href="/bonus-terms"> <div className='text'>*Terms and conditions apply</div></a> */}
                </div>
            </div>
            <div className='container'>

                <div className='row '>

                    <div className='row mt-2 mb-5'>

                        <div className='col-md-8 px-4'>
                            <h3 className='text-bold mt-4 mb-2'>Terms and Conditions</h3>
                            <h4 className='title_loss2'>
                                <strong>1.</strong>	Subject to, and without prejudice to, all other Business Terms and Policies, the offer is available to
                                Aurum Markets Clients who have satisfied the Eligibility Criteria for the offer (“Eligible Clients”) as
                                set out in the sections following hereinafter.</h4>
                            <h4 className='title_loss2'>
                                <strong>2.</strong>Only persons who can form legally binding contracts under the laws applicable in their country of
                                residence may participate in the “Cash Back Promotion”. Without limiting the foregoing,
                                participation in the “Cash Back Promotion” is not allowed for persons under the age of 18 or
                                otherwise under legal age in their country of residence ("minors"). If you are a minor, you may not
                                participate in the “Cash Back Promotion”.

                            </h4>
                            <h4 className='title_loss2'>
                                <strong>3.</strong>	“ The Aurum Markets “Cash Back promotion” Terms & Conditions are applicable to all Clients of
                                Aurum Markets who are approved, are eligible to trade and who make a new deposit during the
                                Promotion period:</h4>
                            <div className='ml-3'>
                                <h6 className='loss_desc'>
                                    <strong>a.</strong>		Run a live trading account with Aurum markets as per the applicable Minimum Account
                                    Activation Deposit and/or other requirements of Aurum Markets, and subject to the present
                                    Cash Back T&Cs;


                                    <br /> <strong>b.</strong>Read and Accept the Cash Back T&Cs
                                    <br /> <strong>c.</strong>Make a new deposit(s) following the above

                                </h6>
                            </div>
                            <h4 className='title_loss2'>
                                <strong>4.</strong>The Cash Back promotion is applicable to the following accounts only: Premium Accounts.

                            </h4>
                            <h4 className='title_loss2'>
                                <strong>5.</strong>	This Cash Back promotion is applicable to all CFDs, Forex, and precious metals only.
                            </h4>
                            <h4 className='title_loss2'>
                                <strong>6.</strong>	Cash Back promotion is active on both MT4 & MT5 Trading Platforms.</h4>
                            <h4 className='title_loss2'>
                                <strong>7.</strong>	 Cash Back shall be calculated according to cash back levels given in the table below at the
                                promotion end according to the client’s deposit in combination with the volume traded by the
                                client in his trading account during the promotion period.

                            </h4>
                            <table className='table table-danger table-striped text-center table-sm'>
                                <thead>
                                    <tr>
                                        <th>Conditions</th>
                                        <th>Level 1</th>
                                        <th>Level 2</th>
                                        <th>Level 3</th>
                                        <th>Level 4</th>
                                        <th>Level 5</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Deposit</td>
                                        <td>$100-$299</td>
                                        <td>$300-$499</td>
                                        <td>$500-$999</td>
                                        <td>$1,000-$2,999</td>
                                        <td>$3,000 or above</td>
                                    </tr>
                                    <tr>
                                        <td># of Qualified Lots</td>
                                        <td>3</td>
                                        <td>10</td>
                                        <td>15</td>
                                        <td>20</td>
                                        <td>30</td>
                                    </tr>
                                    <tr>
                                        <td>Cash Back per Lot</td>
                                        <td>$2</td>
                                        <td>$3</td>
                                        <td>$4</td>
                                        <td>$5</td>
                                        <td>$6</td>
                                    </tr>
                                    <tr>
                                        <td>Max Cash Back</td>
                                        <td>$500</td>
                                        <td>$800</td>
                                        <td>$1,000</td>
                                        <td>$1,500</td>
                                        <td>$2,000</td>
                                    </tr>
                                    <tr>
                                        <td>Payout Date</td>
                                        <td>15th of July</td>
                                        <td>15th of July</td>
                                        <td>15th of July</td>
                                        <td>15th of July</td>
                                        <td>15th of July</td>
                                    </tr>
                                </tbody>
                            </table>
                            <ul>
                                Example:
                                <li> If during the promotion period client’s net deposit is as per level 1 of the table above
                                    ($100 to $299), he must complete 3 standard lot in promotion period to be eligible for
                                    Level 1 Cash Back. In case if client fails to complete the required number of lots, he/she
                                    will not be eligible for cash back promotion.</li>
                                <li>  If in a calendar month client’s net deposit is as per level 2 of the table above ($300 to
                                    $499), he must complete 10 standard lot in promotion period to be eligible for Level 2
                                    Cash Back for promotion period. In case if the client fails to complete the required
                                    number of lots, he/she will not be eligible for level 2 cash back promotion but will be
                                    eligible for Level 1 Cash Back.</li>
                                <li>  If during promotion period client’s net deposit is as per level 5 of the table above
                                    ($3,000 or above), he/she must complete 30 standard lots during the promotion
                                    period to be eligible for Level 5 Cash Back.</li>
                                <li>  In case where clients’ deposit matches a higher level but volume number of lots)
                                    matches a lower level, the client will be eligible for cash back as per his level
                                    of volume (number of lots).</li>
                                <li>  In case where clients’ deposit matches a lower level but volume (number of lots)
                                    matches a higher level, the client will be eligible for cash back as per his/her
                                    deposit level. </li>
                            </ul>
                            <h4 className='title_loss2'>
                                <strong>8.</strong>	 Transfers of funds between accounts are not considered as deposits for the promotion</h4>
                            <h4 className='title_loss2'>
                                <strong>9.</strong>	For existing clients, Aurum Markets shall take into consideration the Deposit and Volume
                                generated during the promotion period only after acceptance of terms & conditions.
                            </h4>
                            <h4 className='title_loss2'>
                                <strong>10.</strong> New deposit for existing clients means that it’s a fresh deposit and that the funds they were
                                holding in their trading account previously has not been withdrawn 24 hours before the
                                promotion start date and then redeposited.</h4>
                            <h4 className='title_loss2'>
                                <strong>11</strong> 	New Clients with deposits and volume generated without acceptance of Cash Back T&Cs shall
                                not be taken into consideration </h4>
                            <h4 className='title_loss2'>
                                <strong>12.</strong> The maximum cash back of any level shall be as mentioned in maximum cash back column (for
                                that particular level) in the table above. </h4>
                            <h4 className='title_loss2'>
                                <strong>13. </strong> Maximum cash back and/or total entitlement under the current cash back terms &
                                conditions cannot exceed from the amount mentioned in the level table above.
                            </h4>
                            <h4 className='title_loss2'>
                                <strong>14.</strong> The cash back calculated as per eligibility level for the calendar month shall be credited to the
                                clients account by 15th of July</h4>
                            <h4 className='title_loss2'>
                                <strong>15. </strong>Only positions that were opened and closed during the calendar month, provided that they
                                were open for more than 2 minutes, will be eligible in accordance with the current cash back
                                terms & conditions.</h4>
                            <h4 className='title_loss2'>
                                <strong>16. </strong>Any indication or suspicion, in the Company’s reasonable discretion, of any form of arbitrage
                                (including but not limited to risk free profiting, latency arbitrage, triangular arbitrage), abuse
                                (including but not limited to participant’s trading activity patterns that indicate that the participant
                                solely aims to benefit financially from this offer without being genuinely interested in trading in the
                                markets and/or taking market risk), Hedging including but not limited to Bonus Hedging, scalping,
                                fraud, market manipulation strategies, cash-back arbitrage or any other forms of deceitful or
                                fraudulent activity, will nullify previously credited Cash back of the Eligible Client’s Trading Accounts
                                with Aurum Markets and/or any and all transactions carried and/or profits garnered therein.
                            </h4>
                            <h4 className='title_loss2'>
                                <strong>17. </strong>Hedging trading positions internally (using other trading accounts held with Aurum Markets) or
                                externally (using other trading accounts held with other brokers) to avoid market risk is not allowed.
                            </h4>
                            <h4 className='title_loss2'>
                                <strong>18.</strong> Scalping is not allowed on accounts active for Cashback Promotion.
                            </h4>
                            <h4 className='title_loss2'>
                                <strong>19.</strong> Expert Advisors (EA’s) are not allowed on accounts active for Cashback Promotion</h4>
                            <h4 className='title_loss2'>
                                <strong>20.</strong> In the event of any dispute or misinterpretation of the above applicable cash back terms &
                                conditions, such dispute or misinterpretation shall be resolved by Aurum Markets, acting in good
                                faith and as it shall, in its sole and absolute discretion, deem fit and proper. Aurum Markets’s
                                decision shall be final and binding</h4>
                            <h4 className='title_loss2'>
                                <strong>21.</strong> Aurum Markets has the right to disqualify any client who has accepted the current cash back
                                terms & conditions if:
                            </h4>
                            <ul>
                                <li> A breach of these cash back terms & conditions and/or of any term of the
                                    Operative Agreements occurs</li>
                                <li>  The Client has more than one entry in the current cash back terms & conditions</li>
                                <li>  Aurum Markets has reasonable grounds to believe a misuse of the current cash back
                                    terms & conditions;</li>
                                <li>  The Client acts in bad faith and/or abusively and/or fraudulently and/or in a manner that is
                                    not in the spirit of the current cash back terms & conditions.</li>
                            </ul>
                            <h4 className='title_loss2'>
                                <strong>22.</strong> Aurum Markets has the right to change or update the cash back terms & conditions or cancel this
                                promotion at its discretion without any prior notification. Aurum Markets may suspend or terminate
                                the current cash back terms & conditions if a situation arises where the conditions are unfair for
                                more participants. Aurum Markets has the right to suspend or terminate the current cash back
                                terms & conditions if its continuation is rendered impossible due to extraordinary circumstances
                                beyond the control of Aurum Markets (natural disasters, political conflicts etc.)</h4>
                            <h4 className='title_loss2'>
                                <strong>23.</strong> By accepting the current Cash Back terms & conditions, the client acknowledges that he has
                                read and agreed to be bound by these back terms & conditions together with the operative
                                agreements as well as to all other business terms and conditions as these may be applicable and/or
                                amended from time to time</h4>
                            <h4 className='title_loss2'>
                                <strong>24.</strong> Any situation not described in these rules shall be subject to the Company's decision.</h4>
                            <h4 className='title_loss2'>
                                <strong>25. </strong> Notwithstanding the translated language of this document, the English wording shall be the binding
                                version in the event of any discrepancy between the two languages.
                            </h4>
                            <h4 className='title_loss2'>
                                <strong>26.  </strong>This Bonus promotion is for Pakistan, Bangladesh, GCC Countries, Nigeria, Malaysia and Indonesia.
                            </h4>
                            <h4 className='title_loss2'>
                                <strong>27. </strong>This promotion cannot be obtained in conjunction with any other promotion. </h4>
                            <h4 className='title_loss2'>
                                <strong>28.</strong> This promotion cannot be obtained in conjunction with any other promotion. </h4>

                        </div>
                        <div className='col-md-4 hide_on_mob'>
                            <img className='img_default' src='/assets/images/9.png'></img>
                            <img className='img_default' src='/assets/images/9.png'></img>
                            <img className='img_default' src='/assets/images/9.png'></img>
                            <img className='img_default' src='/assets/images/9.png'></img>
                            <img className='img_default' src='/assets/images/9.png'></img>
                            <img className='img_default' src='/assets/images/9.png'></img>
                            <img className='img_default' src='/assets/images/9.png'></img>
                            <img className='img_default' src='/assets/images/9.png'></img>
                            <img className='img_default' src='/assets/images/9.png'></img>
                            <img className='img_default' src='/assets/images/9.png'></img>
                            <img className='img_default' src='/assets/images/9.png'></img>
                            <img className='img_default' src='/assets/images/9.png'></img>
                            <img className='img_default' src='/assets/images/9.png'></img>
                            <img className='img_default' src='/assets/images/9.png'></img>
                            <img className='img_default' src='/assets/images/9.png'></img>
                            <img className='img_default' src='/assets/images/9.png'></img>
                            <img className='img_default' src='/assets/images/9.png'></img>

                            <img className='img_default' src='/assets/images/8.png'></img>


                        </div>
                    </div>
                </div>
            </div> </div>
    );
};

export default EidBonus;
