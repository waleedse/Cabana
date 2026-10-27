import React from 'react';
import "./components/newPromoPage.css"
const WelcomeBonus = () => {
  return (
    <div>
      <div className="newPromoBg" style={{ backgroundImage: "url('/assets/images/welcome_bonus.jpg')", height: '500px' }}>
        <div>
          <div className='title'><span className='titleLg'>Welcome Bonus  </span></div>
          <div className='title title2'>Promotion</div>

          {/* <a href="/bonus-terms"> <div className='text'>*Terms and conditions apply</div></a> */}
        </div>
      </div>
      {/* <div>
                <img src='/assets/images/merdekabonus.jpg' className='img_default ' style={{marginTop:'80px'}}></img>
           </div> */}
      <div className='container'>

        <div className='row mt-5 mb-5'>
          <div className='col-md-8'>
            <h1 style={{ fontSize: '24px' }} className="text-left mt4title p-0">Aurum Markets introduce exclusive Welcome Bonus promotional offer for its clients in Malaysia.
              Sign up with Aurum Markets and get $50 Welcome Bonus as credit for one month. </h1>
            <h4 className='text-bold title_loss2'>
              Welcome Bonus is available eligible clients of Aurum Markets. Clients meet the criteria set forth
              herein, are able to receive a trading bonus equal to $50 USD of Welcome Bonus.</h4>
            <h1 style={{ fontSize: '24px' }} className="text-left mt4title p-0">Eligibility Criteria</h1>
            <div className='ml-3'>
              <h4 className='text-bold title_loss2'>
                <strong>1.</strong>	The “Welcome Bonus Promotion” applies only to clients who open & fund their trading
                account at Aurum Markets with at least $50 or above in accordance with the rules set
                herein	</h4>
              <h4 className='text-bold title_loss2'>
                <strong>2.</strong>	“Welcome Bonus Promotion” applies only to all clients who have not participated in No
                Deposit Bonus Promotion. If any client already participated in No Deposit Bonus Promotion
                he/she will not be eligible for “Welcome Bonus Promotion”.	</h4>
              <h4 className='text-bold title_loss2'>
                <strong>3.</strong>		“Welcome Bonus Promotion” is valid only for clients in Malaysia</h4>

            </div>
            <h1 style={{ fontSize: '24px' }} className="text-left mt4title p-0">Procedure</h1>
            <div className='ml-3'>
              <h4 className='text-bold title_loss2'>
                <strong>1.</strong>	Open a Live Trading Account (Cent, Standard, Premium only).	</h4>
              <h4 className='text-bold title_loss2'>
                <strong>2.</strong>	Make a deposit not less than $50 in Live Trading Account (Cent, Standard, Premium only).	</h4>
              <h4 className='text-bold title_loss2'>
                <strong>3.</strong>	After the deposit send your Live Trading Account Number to
                promotions@cabanacapitals.com with subject “Request for Welcome Bonus”.	</h4>
              <h4 className='text-bold title_loss2'>
                <strong>4.</strong>	Your Welcome Bonus Account will be created and credited with bonus amount within 24
                working hours after the request received. 	</h4>
            </div>


            <h1 style={{ fontSize: '24px' }} className="text-left mt4title p-0">Withdrawal Terms</h1>
            <div className='ml-3'>
              <h4 className='text-bold title_loss2'>
                <strong>1.</strong>		 Profit up to $50 from the qualified trades will be available for withdrawal after completing 1
                qualified lot in “Welcome Bonus Account”.
              </h4>
              <h4 className='text-bold title_loss2'>
                <strong>2.</strong>	In addition to Point number 1 above, profit withdrawal from Welcome Bonus Account also
                requires trading activity of at least 10 qualified transactions in clients funded account, In
                case of no or less trading activity in the funded account, profit withdrawal from Welcome
                Bonus Account will be rejected and will be considered misuse/manipulation of “Welcome
                Bonus Promotion”.	</h4>
              <h4 className='text-bold title_loss2'>
                <strong>3.</strong>		Misuse/Manipulation can result in disqualification of Welcome Bonus Promotion based on
                company decision.</h4>
              <h4 className='text-bold title_loss2'>
                <strong>4.</strong>	Clients cannot request withdrawal from “Welcome Bonus Account” unless they trade 1
                qualified lot in Welcome Bonus Account as well as 10 qualified transactions in the Live
                trading Account. Any withdrawal request made before completing this term will result in
                disqualification from “Welcome Bonus Promotion”.
              </h4>
              <h4 className='text-bold title_loss2'>
                <strong>5.</strong>	Qualified lot includes only those trades which have a difference of 2 minute between
                opening and closing time.	</h4>
            </div>
            <h1 style={{ fontSize: '24px' }} className="text-left mt4title p-0">Other Terms & Conditions
            </h1>
            <div className='ml-3'>
              <h4 className='text-bold title_loss2'>
                <strong>1.</strong>	Welcome Bonus Promotion cannot be accompanied with any other bonus promotion.
              </h4>
              <h4 className='text-bold title_loss2'>
                <strong>2.</strong>	The Welcome Bonus credited to Eligible Clients in accordance with the rules herein cannot
                be transferred between trading accounts with in Aurum Markets.	</h4>
              <h4 className='text-bold title_loss2'>
                <strong>3.</strong>	Credited trading bonus for “Welcome Bonus Promotion” can be used for trading purposes
                only and cannot be withdrawn.
              </h4>
              <h4 className='text-bold title_loss2'>
                <strong>4.</strong>	All Eligible Clients are permitted to hold only one (1) Welcome Bonus Account per one (1)
                unique IP address. Multiple registrations from the same IP are not permitted nor multiple
                Welcome Bonus Accounts register with same personal details.	</h4>
              <h4 className='text-bold title_loss2'>
                <strong>5.</strong>		Welcome Bonus Credit will be available for trading for one month starting from date of
                credit. After one month credit will be removed from Welcome Bonus Account.</h4>
              <h4 className='text-bold title_loss2'>
                <strong>6.</strong>		Scalping is not allowed in Welcome Bonus Trading Account.</h4>
              <h4 className='text-bold title_loss2'>
                <strong>7.</strong>		Expert Advisors (EA’s) are not allowed on “Welcome Bonus Accounts”</h4>
              <h4 className='text-bold title_loss2'>
                <strong>8.</strong>		. Hedging trading positions internally (using other trading accounts held with Aurum Markets)
                or externally (using other trading accounts held with other brokers) to avoid market risk is
                not allowed</h4>
              <h4 className='text-bold title_loss2'>
                <strong>9.</strong>		Any indication or suspicion, in the Company’s reasonable discretion, of any form of arbitrage
                (including but not limited to risk free profiting), abuse (including but not limited to
                participant's trading activity patterns that indicate that the participant solely aims to benefit
                financially from the Welcome Bonus without being genuinely interested in trading in the
                markets and/or taking market risk), Hedging, scalping, fraud, manipulation, cash-back
                arbitrage or any other forms of deceitful or fraudulent activity, will nullify previously
                credited Welcome Bonus of the Eligible Client’s Welcome Bonus Trading Account with
                Aurum Markets and/or any and all transactions carried and/or profits garnered therein.</h4>
              <h4 className='text-bold title_loss2'>
                <strong>10.</strong>	. Aurum Markets may reject Client Welcome Bonus Promotion application(s) at any time
                without prior notification or reasons for such decision.	</h4>
              <h4 className='text-bold title_loss2'>
                <strong>11.</strong>	. Clients agree that information provided during the registration process may be used by the
                Company both within the context of the Welcome Bonus Account Campaign and for any
                other marketing purposes.
              </h4>
              <h4 className='text-bold title_loss2'>
                <strong>12.</strong>		Aurum Markets reserves the right to disqualify any user, if there is a suspicion of misuse or
                abuse of fair rules</h4>
              <h4 className='text-bold title_loss2'>
                <strong>13.</strong>		Aurum Markets may cancel a client's bonus at any time without prior notification.</h4>
              <h4 className='text-bold title_loss2'>
                <strong>14.</strong>		Any situation not described in these rules shall be subject to the Company's decision.</h4>
              <h4 className='text-bold title_loss2'>
                <strong>15.</strong>	Aurum Markets reserves the right to change, update or cancel this promotion without any
                prior notification.	</h4>
              <h4 className='text-bold title_loss2'>
                <strong>16.</strong>		Aurum Markets reserves the right to alter, amend or terminate the “Welcome Bonus
                Promotion” or any aspect of it at any time. Prior notice of such changes will not be given to
                clients and Aurum Markets will not post any such changes on its website. Please note that
                taking part in the “Welcome Bonus Promotion” constitutes acceptance and agreement to
                abide by any such alterations, amendments and/or changes.</h4>
              <h4 className='text-bold title_loss2'>
                <strong>17.</strong>		This promotion will run from 1st of September 2022 until further notice.</h4>

            </div>

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

            <img className='img_default' src='/assets/images/8.png'></img>



          </div>
        </div>



      </div>
    </div>
  );
};

export default WelcomeBonus;
