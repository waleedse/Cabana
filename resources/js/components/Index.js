import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FrontIndex from './App';
import AdminLogin from './Admin/Auth/Login';
import AdminPanel from './Admin/Index';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './Redux/Reducer';

const store = createStore(reducer);

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paths: [
                "/about-us", "/trading-terms", "/account-type",
                "/affiliate-program", "/mission-and-values", "/education/meta-trader-4",
                "/trading-instruments", "/trading-currencies", "/introducing-broker",
                "/negative-balance-protection", "/refer-friend", "/trading-memory/:id",
                "/white-label", "/social-trading", "/islamic-trading", "/trading-termonology",
                "/precious-metals", "/cfd-incdices", "/comodoties", "/faqs", "/protection-funds",
                "/mt4-platform", "/mt5-platform", "/promotion", "/newPromotion", "/platform/mt5",
                "/PAMM", "/our-location", "/cookie-policy", "/regulatory-compliance", "/privacy-policy",
                "/risk-disclouser", "/instruction-security", "/terms-and-condition", "/deposite-withdraw", "/education", '/analytics', '/strategy-manager',
                "/bonus-terms", '/refer-terms', '/crypto-currencies', '/loss-refund-promotion', '/trade-to-win',
                '/account-type-malaysia', '/merdeka-bonus', '/no-deposit-bonus', '/welcome-bonus-malaysia', '/no-deposit-bonus-indonesia',
                '/lucky-draw-promotion', '/account-type-pakistan', '/account-type-indonesia', '/hundred-percent-bonus', '/fifty-percent-bonus', '/booster-bonus',
                '/loot-bonus', '/ultimate-bonus', '/booster-bonus-malaysia', '/booster-bonus-india', '/cashback-bonus', '/booster-bonus-thirtyfive-percent',
                '/thirtyfive-percent-bonus', '/dubai-luxury-promotion-india', '/thailand-welcome-bonus-promotion',
                '/additional-usdt-deposit-promotion', '/umrah-package-promotion', '/dubai-luxury-promotion', '/autochartist',
                '/financial-fitness', '/twenty-five-thousand-bonus-promotion', '/signup-bonus-promotion',
                '/prize-lot-promotion', '/ib-reward-promotion', '/unlimited-cashback-promotion', '/forty-percent-bonus',
                '/cents-account-promotion', '/cashback-reward-promotion', '/aurum-ib-reward-promotion', '/global-ib-promotion-2025', '/crypto-deposit-bonus-2025'
            ]
        }
    }

    render() {
        return (
            <BrowserRouter>
                <Route exact path="/" component={FrontIndex} ></Route>
                {
                    this.state.paths.map((data, index) => {
                        return (
                            <Route key={index} path={data} component={FrontIndex} ></Route>

                        )
                    })
                }
                <Route path="/adminpanel" component={AdminPanel} ></Route>
                <Route path="/admin-login" component={AdminLogin} ></Route>
            </BrowserRouter>
        );
    }

}

export default Index;

if (document.getElementById('root')) {
    ReactDOM.render(<Provider store={store}> <Index /> </Provider>, document.getElementById('root'));
}
