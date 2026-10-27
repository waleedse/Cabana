import React from 'react';
import "./components/newPromoPage.css"
const lossRefundPromotion = () => {
    return (
        <div>
            <div className="newPromoBg" style={{ backgroundImage: "url('/assets/images/promobanner.jpg')", height: '500px' }}>
                <div>
                    <div className='title'><span className='titleLg'>Loss Refund</span></div>
                    <div className='title title2'>Promotion</div>

                    {/* <a href="/bonus-terms"> <div className='text'>*Terms and conditions apply</div></a> */}
                </div>
            </div>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-md-8'>
                        <h4 className='text-bold title_loss'>
                            1.	Aurum Markets introduce ‘Loss Refund Promotion” for all its clients </h4>

                        <div className='ml-3'>
                            <h6 className='loss_desc'>
                                <strong>a.</strong>	To activate “Loss Refund Promotion” Clients need to use USDT deposit method.
                                <br /> <strong>b.</strong>	“Loss Refund Promotion” allow clients to get a reversal of any one trade closed in negative.
                                <br /> <strong>c.</strong>	To activate “Loss Refund Promotion”, the clients have to deposit through USDT and send an email to support@cabanacapitals.com to enroll for this offer.
                                <br /> <strong>d.</strong>	Loss refund is based on the minimum first deposit amount and number of qualified lots traded in the week when client want to redeem his loss refund.
                                <br /> <strong>e.</strong>	Qualified trades for Loss Refund Promotion will only be considered which are open for at least 2 minutes.
                                <br /> <strong>f.</strong>	Details of minimum eligible first deposit, its relevant loss refund amount and required Number of Qualified lots are listed in the following table:
                            </h6>
                            <table className='table table-danger table-striped text-center table-sm'>
                                <thead>
                                    <tr>
                                        <th>Elligible First Deposit</th>
                                        <th>Refund</th>
                                        <th>Lots (standard)*</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="table-danger"><td>$1-$49</td><td>$5</td><td>0.5</td></tr>
                                    <tr><td>$50-$99</td><td>$10</td><td>1</td></tr>
                                    <tr class="table-danger"><td>$100-$999</td><td>$25</td><td>3</td></tr>
                                    <tr><td>$1,000-$2,999</td><td>$50</td><td>5</td></tr>
                                    <tr class="table-danger"><td>$3,000-$9,999</td><td>$100</td><td>10</td></tr>
                                    <tr><td>$10,000 or above</td><td>$200</td><td>20</td></tr>

                                </tbody>
                            </table>
                            <h6 className='loss_desc'>
                                <strong>g.</strong>	Eligible clients can redeem the given offer anytime in the week once they have fulfilled the requirement of qualified lots.
                                <br /> <strong>h.</strong>	This Promotion is applicable on all type of accounts on MT4 or MT5 platforms.
                                <br /> <strong>i.</strong>	This Promotion is not valid for the trades open before any major economic data/news or open/closed after any major economic data/news. (One hour before & one hour after).
                                <br /> <strong>j.</strong>	Loss refund can only be redeemed for the trades open and closed in the same day.
                                <br /> <strong>k.</strong>	Loss Refund can only be redeemed on trades open and closed between 6 AM to 3 PM. (GMT Time)
                                <br /> <strong>l.</strong>	If equity (Not balance) falls below the eligible first deposit qualification level, the loss refund cannot be redeemed.
                                <br /> <strong>m.</strong>	Only one loss refund can be redeemed in one week,if client has closed more than one trade in negative, they can only redeem the loss refund on one trade only.
                                <br /> <strong>n.</strong>	The balance of loss refund cannot be carried forward or backward. e.g. if the client had a $100 loss refund based on their eligible first deposit qualification level and they only redeemed $50, the balance cannot be carried forward or carried backwards.
                                <br /> <strong>o.</strong>	If an automatic stop out is triggered on any of the trades, these trades will not qualify for this promotion.
                                <br /> <strong>p.</strong>	To redeem the loss refund, the equity (not balance) needs to be always over and above the minimum eligible first deposit qualification level required.
                                <br /> <strong>q.</strong> 	Subsequent deposits do not qualify towards the minimum eligible first deposit qualification level required and will neither be considered towards retaining a higher loss refund.
                                <br /> <strong>r.</strong>	Expert Advisors (EA’s) are not allowed on this Promotion.
                                <br /> <strong>s.</strong>	Prohibited trading including but not limited to Hedging, Arbitrage or any other prohibited trading strategy is not allowed under this offer or any other offer given by Aurum Markets.

                            </h6>
                        </div>

                    </div>
                    <div className='col-md-4 hide_on_mob'>
                        <img className='img_default' src='/assets/images/9.png'></img>
                        <img className='img_default' src='/assets/images/9.png'></img>
                        <img className='img_default' src='/assets/images/9.png'></img>
                        <img className='img_default' src='/assets/images/9.png'></img>
                        <img className='img_default' src='/assets/images/9.png'></img>
                        <img className='img_default' src='/assets/images/9.png'></img>

                    </div>
                </div>
                <div className='row mt-5 mb-5'>
                    <div className='col-md-8'>
                        <h4 className='text-bold title_loss2'>
                            <strong>2.</strong>	Subject to, and without prejudice to, all other Business Terms and Policies, the offer is available to
                            specific clients only who have satisfied the Eligibility Criteria for the offer (“Eligible Clients”) as set
                            out in the sections following hereinafter.</h4>
                        <h4 className='text-bold title_loss2'>
                            <strong>3.</strong>	Only persons who can form legally binding contracts under the laws applicable in their country of residence may participate in the “Loss Refund Promotion”. Without limiting the foregoing, participation in the “Loss Refund Promotion” is not allowed for persons under the age of 18 or otherwise under legal age in their country of residence ("minors"). If you are a minor, you may not participate in the “Loss Refund Promotion”.</h4>
                        <h4 className='text-bold title_loss2'>
                            <strong>4.</strong>	Aurum Markets reserves the right to disqualify any user, if there is a suspicion of misuse or abuse of fair rules.</h4>
                        <h4 className='text-bold title_loss2'>
                            <strong>5.</strong>	Under no circumstances shall Aurum Markets be liable for any consequences of promotion cancelation or decline, including, but not limited to, order(s) closure by Stop Out.

                        </h4>
                        <h4 className='text-bold title_loss2'>
                            <strong>6.</strong>	Aurum Markets reserves the right to alter, amend or terminate the “Promotion Scheme” or any aspect of it at any time. Prior notice of such changes will not be given to clients and Aurum Markets will not post any such changes on its website. Please note that taking part in the “Promotion Scheme” constitutes acceptance and agreement to abide by any such alterations, amendments and/or changes</h4>
                        <h4 className='text-bold title_loss2'>
                            <strong>7.</strong>	Any indication or suspicion, in the Company’s reasonable discretion, of any form of arbitrage (including but not limited to risk free profiting), abuse (including but not limited to participant's trading activity patterns that indicate that the participant solely aims to benefit financially from the Loss Refund Promotion scheme without being genuinely interested in trading in the markets and/or taking market risk), Bonus Hedging, fraud, manipulation, cash-back arbitrage connected to a Loss Refund Promotion or any other forms of deceitful or fraudulent activity, will nullify all previously credited Loss Refund of the Eligible Client’s real trading Accounts with Aurum Markets and/or any and all transactions carried and/or profits or losses garnered therein. Hedging trading positions internally (using other trading accounts held with Aurum Markets) or externally (using other trading accounts held with other brokers) to avoid market risk is not allowed. In these circumstances, Aurum Markets reserves the right, at its reasonable discretion, to close/suspend (either temporarily or permanently) all such Eligible Client’s real trading Account(s) with Aurum Markets, cancel all orders and annul all profits of such participants. In these circumstances, Aurum Markets shall not be liable for any consequences of the trading bonus cancelation, including, but not limited to, order(s) closure by Stop Out.</h4>
                        <h4 className='text-bold title_loss2'>
                            <strong>8.</strong>	In the event that Account becomes dormant all previously awarded Promotions will be immediately withdrawn from the respective Eligible Clients real Account with Aurum Markets.

                        </h4>
                        <h4 className='text-bold title_loss2'>
                            <strong>9.</strong>	Clients agree that information provided during the registration process may be used by the Company both within the context of the Promotion Campaign and for any other marketing purposes.</h4>
                        <h4 className='text-bold title_loss2'>
                            <strong>10.</strong>	Aurum Markets, at its reasonable discretion, offers the “Promotion Scheme” to any Client(s) and/or any countries / regions as it deems appropriate and for as long as Aurum Markets.</h4>
                        <h4 className='text-bold title_loss2'>
                            <strong>11.</strong>	This offer is valid for new and existing clients.</h4>
                        <h4 className='text-bold title_loss2'>
                            <strong>12.</strong> 	This promotion will run from 1st of July 2022 until further notice.</h4>
                        <h4 className='text-bold title_loss2'>
                            <strong>13.</strong>This promotion cannot be obtained in conjunction with any other promotion.</h4>
                    </div>
                    <div className='col-md-4 hide_on_mob'>
                        <img className='img_default' src='/assets/images/9.png'></img>
                        <img className='img_default' src='/assets/images/9.png'></img>
                        <img className='img_default' src='/assets/images/9.png'></img>
                        <img className='img_default' src='/assets/images/9.png'></img>
                        <img className='img_default' src='/assets/images/9.png'></img>
                        <img className='img_default' src='/assets/images/8.png'></img>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default lossRefundPromotion;
