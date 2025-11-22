import React, { Component } from 'react';
import StrategyManage from "./pages/PAMM/StrategyManage";
import Bonus_335per_tc from "./pages/FooterLinkPages/bonus_335per_tc";
import Terms_Refer from "./pages/FooterLinkPages/Terms_Refer";
import CryptoCurrencies from "./pages/TradingInstrumentsPages/CryptoCurrencies";
import lossRefundPromotion from "./pages/NewPromoPages/lossRefundPromotion";
import TadeToWin from "./pages/NewPromoPages/TadeToWin";
import MerdekaBonus from "./pages/NewPromoPages/MerdekaBonus";
import NoDeposit30 from "./pages/NewPromoPages/NoDeposit30";
import WelcomeBonus from "./pages/NewPromoPages/WelcomeBonus";
import NoDeposit30Indonesia from "./pages/NewPromoPages/NoDeposit30Indonesia";
import AboutUsPage2 from "./pages/AboutUsPage2/AboutUsPage2";
import OurLocationPage from "./pages/OurLocationPage/OurLocationPage";
import CookiePolicy from "./pages/FooterLinkPages/CookiePolicy";
import CompliancePage from "./pages/OurLocationPage/CompliancePage";
import PrivacyPolicy from "./pages/FooterLinkPages/PrivacyPolicy";
import RiskPage from "./pages/FooterLinkPages/RiskPage";
import NewPromo35PerB from "./pages/NewPromoPages/NewPromo35PerB";
import SafetyOfFunds from "./pages/FooterLinkPages/SafetyOfFunds";
import Affiliyate from "./pages/Patnership&Promotion/Affiliyate";
import Mt4 from './pages/PlatformPage/Mt4';
import Mt5 from './pages/PlatformPage/Mt5';
import WhiteLABEL from "./pages/Patnership&Promotion/WhiteLabbel";
import SocialTrading from "./pages/Patnership&Promotion/SocialTrading";
import Islamic from "./pages/Patnership&Promotion/Islamic";
import Termonology from "./pages/Patnership&Promotion/Termonology";
import Faq from "./pages/Faqs/Faqs";
import ProtectionofFunds from "./pages/TradingInstrumentsPages/ProtectionofFunds";
import TraidingMemory from "./pages/PAMM/TraidingMemory";

import TermsAndCondition from "./pages/TermsAndConditionPage/TermsAndCondition";
import AccountTypes from "./pages/AccountTypes/CompareAccountPage";
import AccountTypesMalaysia from "./pages/AccountTypesMalaysia/CompareAccountPage";
import AccountTypesPakistan from "./pages/AccountTypesPakistan/CompareAccountPage";
import AccountTypesIndonesia from "./pages/AccountTypesIndonesia/CompareAccountPage";

import MissionAndValues from "./pages/MissionAndValues/MissionAndValues";
import EducationPage from "./pages/EducationPage/EducationPage";
import TradingInstrumentPage from "./pages/TradingInstrumentsPages/TradingInstrumentPage";
import TradingCurrencisePage from "./pages/TradingInstrumentsPages/TradingCurrencisePage";
import PreciousMetals from "./pages/TradingInstrumentsPages/Preciousmetals";
import CFDincidies from "./pages/TradingInstrumentsPages/Cfdincidies";

import Commodities from "./pages/TradingInstrumentsPages/Comodities";


import EducationsMetaTrader4 from "./pages/EducationPage/EducationsMetaTrader4";
import PatnershipPage from "./pages/Patnership&Promotion/PatnershipPage";
import NegativeBalanceProtection from "./pages/Patnership&Promotion/NegitiveBlanaceProtection";


import PromotionPage from "./pages/Patnership&Promotion/PromotionPage";
import Refferafriend from "./pages/Patnership&Promotion/RefferaFriend";


import PlatformMT5 from "./pages/PlatformPage/PlatformMT5";
import PAMMpage from "./pages/PAMM/PAMMpage";
import DepositWithdrawPage from "./pages/Deposit&WithdrawPage/DepositWithdrawPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import luckydrawpromotion from './pages/NewPromoPages/luckydrawpromotion';
import HundredPerBonus from './pages/NewPromoPages/HundredPerBonus';
import FiftypercentBonus from './pages/NewPromoPages/FiftypercentBonus';
import BoosterBonus from './pages/NewPromoPages/BoosterBonus';
import LoootBonus from './pages/NewPromoPages/LoootBonus';
import UltimateBonus from './pages/NewPromoPages/UltimateBonus';
import BoosterBonusMalaysia from './pages/NewPromoPages/BoosterBonusMalaysia';
import BoosterBonusIndia from './pages/NewPromoPages/BoosterBonusIndia';
import EidBonus from './pages/NewPromoPages/EidBonus';
import BoosterBonusIndiaThirtyFivePer from './pages/NewPromoPages/BoosterBonusIndiaThirtyFivePer';
import BoosterBonusIndiaThirtyFivePerMauritious from './pages/NewPromoPages/BoosterBonusIndiaThirtyFivePerMauritious';
import DubaiLuxuryPromotion from './pages/NewPromoPages/DubaiLuxuryPromotion';
import ThailandPromotion from './pages/NewPromoPages/ThailandPromotion';
import AdditionalUSDTPromotion from './pages/NewPromoPages/AdditionalUSDTPromotion';
import DubaiLuxuryPromotionIndia from './pages/NewPromoPages/DubaiLuxuryPromotionIndia';
import UmrahpackagePromotion from './pages/NewPromoPages/UmrahpackagePromotion';
import Autochartist from './pages/NewPromoPages/Autochatist';
import SeminarFinantialFitness from './pages/NewPromoPages/seminar';
import TwentyFiveThousandBonusPromotion from './pages/NewPromoPages/TwentyFiveThousandBonusPromotion';
import SignUpBonusPromotion from './pages/NewPromoPages/SignUpBonusPromotion';
import PrizeLotPromotion from './pages/NewPromoPages/prizeLotPromotion';
import IbRewardPromotion from './pages/NewPromoPages/ibRewards';
import UnlimitedCashbackPromotion from './pages/NewPromoPages/unlimitedCashbackPromotion';
import FortyPercentBonus from './pages/NewPromoPages/FortyPercentBonus';
import CentsAccountPromotion from './pages/NewPromoPages/CentsAccountPromotion';
import CashBackReward from './pages/NewPromoPages/CashBackReward';
import IBRewardPromotion from './pages/NewPromoPages/IBRewardPromotion';
import GlobalIBPromotion2025 from './pages/NewPromoPages/GlobalIBPromotion2025';
import CryptoDepositBonus2025 from './pages/NewPromoPages/CryptoDepositBonus2025';

class Routes extends Component {

    render() {
        const accountType = this.props.country == 'Malaysia' ? AccountTypesMalaysia : this.props.country == 'Pakistan' ? AccountTypesPakistan :
            AccountTypes
        return (
            <div>
                <Route path="/about-us" component={AboutUsPage2}></Route>
                <Route path="/trading-terms" component={TermsAndCondition}></Route>
                <Route path="/account-type" component={
                    AccountTypes
                }></Route>
                <Route path="/account-type-malaysia" component={AccountTypesMalaysia}></Route>
                <Route path="/account-type-pakistan" component={AccountTypesPakistan}></Route>
                <Route path="/account-type-indonesia" component={AccountTypesIndonesia}></Route>
                <Route path="/forty-percent-bonus" component={FortyPercentBonus}></Route>

                <Route path="/affiliate-program" component={Affiliyate}></Route>
                <Route
                    path="/mission-and-values"
                    component={MissionAndValues}
                ></Route>
                <Route path="/education" exact component={EducationPage}></Route>
                <Route
                    path="/analytics"
                    component={EducationsMetaTrader4}
                ></Route>
                <Route
                    path="/trading-instruments"
                    component={TradingInstrumentPage}
                ></Route>
                <Route
                    path="/trading-currencies"
                    component={TradingCurrencisePage}
                ></Route>
                <Route path="/introducing-broker" component={PatnershipPage}></Route>
                <Route path="/negative-balance-protection" component={NegativeBalanceProtection}></Route>
                <Route path="/refer-friend" component={Refferafriend}></Route>
                <Route path="/trading-memory/:id" component={TraidingMemory}></Route>
                <Route path="/autochartist" component={Autochartist}></Route>
                <Route path="/financial-fitness" component={SeminarFinantialFitness}></Route>

                <Route path="/white-label" component={WhiteLABEL}></Route>
                <Route path="/social-trading" component={SocialTrading}></Route>
                <Route path="/islamic-trading" component={Islamic}></Route>
                <Route path="/trading-termonology" component={Termonology}></Route>
                <Route path="/precious-metals" component={PreciousMetals}></Route>
                <Route path="/cfd-incdices" component={CFDincidies}></Route>
                <Route path="/comodoties" component={Commodities}></Route>
                <Route path="/faqs" component={Faq}></Route>
                <Route path="/protection-funds" component={ProtectionofFunds}></Route>
                <Route path="/loss-refund-promotion" component={lossRefundPromotion}></Route>
                <Route path="/merdeka-bonus" component={MerdekaBonus}></Route>
                <Route path="/booster-bonus-india" component={BoosterBonusIndia}></Route>
                <Route path="/hundred-percent-bonus" component={HundredPerBonus}></Route>

                <Route path="/no-deposit-bonus" component={NoDeposit30}></Route>
                <Route path="/lucky-draw-promotion" component={luckydrawpromotion}></Route>
                <Route path="/twenty-five-thousand-bonus-promotion" component={TwentyFiveThousandBonusPromotion}></Route>
                <Route path="/signup-bonus-promotion" component={SignUpBonusPromotion}></Route>
                <Route path="/cents-account-promotion" component={CentsAccountPromotion}></Route>
                <Route path="/mt4-platform" component={Mt4}></Route>
                <Route path="/mt5-platform" component={Mt5}></Route>
                <Route path="/promotion" component={PromotionPage}></Route>
                <Route path="/newPromotion" component={NewPromo35PerB}></Route>
                <Route path="/platform/mt5" component={PlatformMT5}></Route>
                <Route path="/PAMM" component={PAMMpage}></Route>
                <Route path="/our-location" component={OurLocationPage}></Route>
                <Route path="/cookie-policy" component={CookiePolicy}></Route>
                <Route path="/regulatory-compliance" component={CompliancePage}></Route>
                <Route path="/privacy-policy" component={PrivacyPolicy}></Route>
                <Route path="/risk-disclouser" component={RiskPage}></Route>
                <Route path="/instruction-security" component={SafetyOfFunds}></Route>
                <Route path="/terms-and-condition" component={TermsAndCondition}></Route>
                <Route path="/trade-to-win" component={TadeToWin}></Route>
                <Route path="/welcome-bonus-malaysia" component={WelcomeBonus} />
                <Route path="/no-deposit-bonus-indonesia" component={NoDeposit30Indonesia} />
                <Route path="/fifty-percent-bonus" component={FiftypercentBonus} />
                <Route path="/booster-bonus" component={BoosterBonus} />
                <Route path="/loot-bonus" component={LoootBonus} />
                <Route path="/ultimate-bonus" component={UltimateBonus} />
                <Route path="/booster-bonus-malaysia" component={BoosterBonusMalaysia} />
                <Route path="/cashback-bonus" component={EidBonus} />
                <Route path="/booster-bonus-thirtyfive-percent" component={BoosterBonusIndiaThirtyFivePer} />
                <Route path="/thirtyfive-percent-bonus" component={BoosterBonusIndiaThirtyFivePerMauritious} />
                <Route path="/dubai-luxury-promotion" component={DubaiLuxuryPromotion} />
                <Route path="/umrah-package-promotion" component={UmrahpackagePromotion} />
                <Route path="/dubai-luxury-promotion-india" component={DubaiLuxuryPromotionIndia} />
                <Route path="/thailand-welcome-bonus-promotion" component={ThailandPromotion} />
                <Route path="/additional-usdt-deposit-promotion" component={AdditionalUSDTPromotion} />
                <Route path="/prize-lot-promotion" component={PrizeLotPromotion} />
                <Route path="/ib-reward-promotion" component={IbRewardPromotion} />
                <Route path="/unlimited-cashback-promotion" component={UnlimitedCashbackPromotion} />
                <Route path="/cashback-reward-promotion" component={CashBackReward} />
                <Route path="/aurum-ib-reward-promotion" component={IBRewardPromotion} />
                <Route path="/global-ib-promotion-2025" component={GlobalIBPromotion2025} />
                <Route path="/crypto-deposit-bonus-2025" component={CryptoDepositBonus2025} />


                <Route
                    path="/deposite-withdraw"
                    component={DepositWithdrawPage}
                ></Route>

                <Route path="/strategy-manager" component={StrategyManage} />
                <Route path="/bonus-terms" component={Bonus_335per_tc} />
                <Route path="/refer-terms" component={Terms_Refer} />
                <Route path="/crypto-currencies" component={CryptoCurrencies} />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        country: state.country
    }
}
export default connect(mapStateToProps)(Routes);
