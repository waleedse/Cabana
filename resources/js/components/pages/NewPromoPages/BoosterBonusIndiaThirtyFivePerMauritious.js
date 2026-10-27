import React from "react";
import "./components/newPromoPage.css";
const BoosterBonusIndia = () => {
    return (
        <div>
            <div
                className="newPromoBg"
                style={{
                    backgroundImage: "url('/assets/images/booster-bonus.png')",
                    height: "700px"
                }}
            >
                <div>
                    <div className="title">
                        <span className="titleLg"> 35%   Bonus</span>
                    </div>
                    <div style={{ fontSize: "22px" }} className="title title2">
                        Switch to Aurum Markets and get benefit of  35%
                        Bonus.
                        <br /> Deposit now and get  35%  booster on your deposits
                        (Up to $10000)
                        <br /> in Aurum Markets as credit.
                    </div>
                    <button
                        className="btn  btn-danger btn-lg rounded mt-3"
                        style={{ backgroundColor: "#A2237E" }}
                        onClick={() => {
                            window.open(
                                "https://portal.aurummarkets.com/register/",
                                "_self"
                            );
                        }}
                    >
                        Get Started
                    </button>
                    {/* <a href="/bonus-terms"> <div className='text'>*Terms and conditions apply</div></a> */}
                </div>
            </div>
            <div className="container fifty_per_page">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h4 className="text-bold title title2 text-center text-dark">
                            CLAIM YOUR BONUS EASY STEPS
                        </h4>
                        <div className="row mt-5">
                            <div className="col-md-3 text-center">
                                <img
                                    style={{ width: "40%" }}
                                    src="/assets/images/verified-account.png"
                                ></img>
                                <h4
                                    className="text mt-2"
                                    style={{ fontSize: "18px" }}
                                >
                                    Sign up with Aurum Markets
                                </h4>
                            </div>
                            <div className="col-md-3 text-center">
                                <img
                                    style={{ width: "40%" }}
                                    src="/assets/images/deposit.png"
                                ></img>
                                <h4
                                    className="text mt-2"
                                    style={{ fontSize: "18px" }}
                                >
                                    Complete the profile verification process by
                                    uploading the verification documents and a
                                    live selfie.
                                </h4>
                            </div>
                            <div className="col-md-3 text-center">
                                <img
                                    style={{ width: "40%" }}
                                    src="/assets/images/save-money.png"
                                ></img>
                                <h4
                                    className="text mt-2"
                                    style={{ fontSize: "18px" }}
                                >
                                    Opena Standard Bonus- 35%  or Micro Bonus- 35%
                                    Account
                                </h4>
                            </div>
                            <div className="col-md-3 text-center">
                                <img
                                    style={{ width: "40%" }}
                                    src="/assets/images/money.png"
                                ></img>
                                <h4
                                    className="text mt-2"
                                    style={{ fontSize: "18px" }}
                                >
                                    Deposit minimum of $100 in the 35% Bonus
                                    Account.
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="mt-5 ">
                <img
                    src="/assets/images/dollar-bonus.png"
                    style={{ width: "100%" }}
                ></img>
            </div> */}

            <h4
                className="text  text-center text-dark mt-5 px-3"
                style={{ fontSize: "24px", fontWeight: 700 }}
            >
                {" "}
                IT'S TIME TO ENJOY YOUR REWARDS WITH OUR  35%  BONUS OFFER{" "}
            </h4>
            <div className="text-center mt-3">
                <button
                    className="btn  btn-dark rounded"
                    onClick={() => {
                        window.open(
                            "https://portal.aurummarkets.com/register/",
                            "_self"
                        );
                    }}
                >
                    Get Started
                </button>
            </div>

            {/* <div className="newPromoBg px-0 mt-4" style={{ backgroundImage: "url('/assets/images/crystals.png')", height: '450px', backgroundPosition: 'inherit' }}>
                <div className='container  mb-5'>
                    <div className='text-light text-center'>
                        <h1 className='title titlelg text-bold '>
                            100% Booster Bonus

                        </h1>
                        <br></br>
                        <h4>
                            Double your trading game with a minimum deposit of  $100 only
                        </h4> <br></br>
                        <h4>
                            DOUBLE TRading power with 100% Booster Bonus
                        </h4> <br></br>
                        <h4>
                            TRADE FOR AS LOW AS $100
                        </h4> <br></br>
                        <div className='text-center mt-3'>
                            <button className='btn  btn-danger btn-lg rounded mt-3' style={{ backgroundColor: '#A2237E' }} onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }}>Get Started</button>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className=" mt-5">
                <div className="container">
                    <h4 className="text-bold title title2 text-center pt-4 text-dark">
                        Promotion Rules
                    </h4>
                    <div className="">
                        <ul>
                            <li>
                                35%  Bonus is available on every deposits (maximum
                                accumulated bonus up to $10000) and can only be
                                claimed by verified Malaysian, Brunei, Vietnam,
                                Sri Lanka, and Philippine clients of Aurum Markets
                                Capitals.
                            </li>
                            <li>
                                {" "}
                                For verification, clients have to upload their
                                verification documents along with a live selfie.
                            </li>
                            <li>
                                {" "}
                                35%  Bonus is  only available on deposits in
                                Client’s Standard Bonus-35%  or Micro Bonus-35%
                                Account.
                            </li>
                            <li>
                                {" "}
                                The client must deposit a minimum amount of $100
                                to claim this  35%  Bonus. In case the deposit is
                                less than $100, the Bonus request will be
                                rejected.
                            </li>
                            <li>
                                {" "}
                                The 35%  Bonus promotion is available on
                                bothMt4/MT5 Trading platforms.
                            </li>
                            <li>
                                {" "}
                                Tradable bonus account comes with swap charge.
                            </li>
                            <li>
                                {" "}
                                All Eligible Clients are permitted to hold only
                                one (1)  35%  Bonus Account. Multiple
                                registrations from the same IP or same person
                                claiming this Booster Bonus from Multiple IP’s
                                are not permitted.
                            </li>
                            <li>
                                {" "}
                                Any such request to create  35%  Bonus Account
                                means that Client has already read and accepted
                                these terms and conditions.
                            </li>
                            <li>
                                {" "}
                                The Bonus Amount cannot be added to internal
                                transfer, IB transfers and deposits from other
                                promotions and contests.
                            </li>
                            <li>
                                {" "}
                                Internal Transfers or External Transfers of
                                Equity/Funds/Balance are not allowed from  35%
                                Bonus Account.
                            </li>
                            <li>
                                {" "}
                                Bonus amount will be credited to your  35%  Bonus
                                Account right after you make deposit in to your
                                35%  Bonus Account.
                            </li>
                            <li> This Bonus Amount is not withdrawable.</li>
                            <li>
                                {" "}
                                Scalping is not allowed on  35%
                                BonusPromotion.Any trade which does not have a
                                gap of 2 minutes between open and close time
                                will be considered as scalping and will be
                                removed from trading along with their profit.
                            </li>
                            <li>
                                {" "}
                                The Trading Bonus will be available to your
                                account till the balance is positive, however,
                                if the balance becomes negative you will have 48
                                hours for depossit to continue with bonus, else
                                it will credit out without prior information or
                                notice. Example: Client A deposits $1,000 and
                                receives a bonus of $350, if the balance goes
                                into (Minus) -$1 or less, the client will have
                                48 hours for deposit to continue with bonus. If
                                the trader’s own funds withdrawn after bonus has
                                been received, the bonus will be cancelled.
                                Example: If you deposit $1,000 to your account,
                                bonus will be $350, your equity becomes $1,350.
                                You will need to maintain that equity upon
                                withdrawal or transfer. In case it goes below
                                $1,350 then bonus would be cancelled. However,
                                if you make profit, you can withdraw it anytime
                                and it will not affect your bonus.
                            </li>
                            <li>
                                {" "}
                                For profit withdrawal your withdrawable balance
                                should always be more than your deposited
                                balance amount. Balance± Floating-Margin
                                Required = Withdrawable Balance
                            </li>
                            <li>
                                {" "}
                                In case of cancelation or removal of Bonus, Bonus
                                cannot be reinstated.
                            </li>
                            <li>
                                {" "}
                                Expert Advisors (EA’s) are not allowed on
                                accounts active for 35%  Bonus promotion.
                            </li>
                            <li>
                                {" "}
                                Hedging trading positions internally (using
                                other trading accounts held with Aurum Markets
                                Capitals) or externally (using other trading
                                accounts held with other brokers) to avoid
                                market risk is strictly prohibited.
                            </li>
                            <li>
                                {" "}
                                Any indication or suspicion, in the Company’s
                                reasonable discretion, of any form of arbitrage
                                (including but not limited to risk free
                                profiting), abuse (including but not limited to
                                participant's trading activity patterns that
                                indicate that the participant solely aims to
                                benefit financially from the Customer Bonus
                                without being genuinely interested in trading in
                                the markets and/or taking market risk), Hedging,
                                fraud, manipulation, cash-back arbitrage or any
                                other forms of deceitful or fraudulent activity,
                                will nullify previously credited Customer Bonus
                                of the Eligible Client’s real trading Accounts
                                with Aurum Markets and/or any and all
                                transactions carried and/or profits garnered
                                therein.
                            </li>
                            <li>
                                {" "}
                                The Client is not allowed to enter into any form
                                of prohibited trading i.e. certain trading
                                techniques commonly known as "arbitrage
                                trading", "picking/ sniping" or the use of
                                certain automated trading systems or “Expert
                                Advisors”; and/or follow an abusive trading
                                strategy i.e. any trading activity which is
                                aiming towards potential riskless profit by
                                opening opposite orders, during periods of
                                volatile market conditions, during news
                                announcements, on opening gaps (trading sessions
                                starts), or on possible gaps where the
                                underlying instrument has been suspended or
                                restricted on a particular market, between same
                                or different trading accounts. The Client agrees
                                and acknowledges that if the Company considers
                                that the Client has been acting in any of the
                                manners described above; the Company may at its
                                sole discretion and without prior notice to the
                                Client, take one or more, or any portion of, the
                                following actions:
                                <ul>

                                    <li> <strong>(a)</strong> close the Client's
                                        account; </li>
                                    <li> <strong>(b)</strong> suspend the Client's account for
                                        an indefinite period of time;
                                        <li> <strong>(c)</strong> carry out an</li>
                                        investigation on the Client's account for an
                                        indefinite period of time; </li>
                                    <li> <strong>(d)</strong> charge a
                                        penalty fee to the Client in the same or greater
                                        amount of money that resulted from the Client
                                        using such techniques; or </li>
                                    <li> <strong>(e)</strong>close the
                                        account, confiscate any profits that arose from
                                        prohibited trading techniques and return the
                                        original deposit(s) to the account holder. If
                                        profits arising out of Prohibited Trading were
                                        already withdrawn, profits can be confiscated
                                        from the Client’s related accounts in order to
                                        make up for the difference. </li>
                                </ul>
                            </li>
                            <li>
                                {" "}
                                Aurum Markets may reject 35%  Bonus
                                application(s) at any time without prior
                                notification or reasons for such decision.
                            </li>
                            <li>
                                {" "}
                                Clients agree that information provided during
                                the registration process may be used by the
                                Company both within the context of the  35%  Bonus
                                Account Campaign and for any other marketing
                                purposes.
                            </li>
                            <li>
                                {" "}
                                Aurum Markets reserves the right to disqualify
                                any user, if there is a suspicion of misuse or
                                abuse of fair rules.
                            </li>
                            <li>
                                {" "}
                                Aurum Markets may cancel a client's bonus at
                                any time without prior notification.
                            </li>
                            <li>
                                {" "}
                                Any situation not described in these rules shall
                                be subject to the Company's decision.
                            </li>
                            <li>
                                {" "}
                                Aurum Markets reserves the right to change,
                                update or cancel this promotion without any
                                prior notification.
                            </li>
                            <li>
                                {" "}
                                This Bonus promotion is only for clients
                                fromMalaysia, Brunei, Vietnam, Sri Lanka, and
                                Philippine.
                            </li>
                            <li>
                                {" "}
                                This promotion will run from 25th October 2023
                                until further notice.
                            </li>
                            <li>
                                {" "}
                                This offer is valid for all clients new as well as for existing clients.
                            </li>
                            <li>
                                {" "}
                                Note: This offer cannot be clubbed with any
                                other offer, bonus promotions.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoosterBonusIndia;
