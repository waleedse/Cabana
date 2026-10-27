import React, { Component } from 'react';
class Faq extends Component {
    constructor(props) {
        super(props);
        this.state = {
            faqs: [
                {
                    question: 'How do I Sign Up?',
                    answer: `Click the Sign Up button and fill up the Registration Form to open your first account. Fill in all the required information and click "Open account", or simply sign up with your Google account.
                    Check your email for a message titled "Confirm your email address" and click the button "Confirm email" and you will be redirected to our site.
                    Fill in all the required information and click "Continue", then select the trading platform: MT4 & MT5. .`,
                    state: false,
                },
                {
                    question: '	What types of accounts do you offer?',
                    answer: `Aurum Markets offers a wide range of trading accounts suitable for any trading strategy and
                    any level of your trading experience. Both real and demo accounts are available on two trading platforms –
                    MetaTrader 4 and MetaTrader 5. You can compare accounts and chose the one fitting your individual requirements `,
                    state: false,
                },
                ,
                {
                    question: '	Do you offer demo accounts?',
                    answer: `Aurum Markets offer four type of demo accounts which are mirror to live accounts of Standard, Premium, Elite and Raw ECN. You can choose to start with any of the demo accounts to develop your trading skills.`,
                    state: false,
                },
                ,
                {
                    question: '	Can I run several accounts simultaneously?',
                    answer: `Yes, you can. You can log into to several MT4/MT5 accounts simultaneously if you install several instances of MT4/MT5`,
                    state: false,
                },
                ,
                {
                    question: '	Is my personal information safe with you? How do you protect my personal information?',
                    answer: `We use highly secure technology to protect your personal data and financial transactions. Your Personal Area is SSL-secured and protected with 128-bit encryption to make your browsing safe and your data inaccessible to any third parties. You can read more about data protection in our Privacy Policy.`,
                    state: false,
                },
                ,
                {
                    question: 'What type of account should I choose?',
                    answer: `It depends on the preferred trading platform and the trading instruments you'd like to trade. You can compare account types here. If you need to, you can open a new account later.`,
                    state: false,
                },
                {
                    question: '	Can I trade Commodities at Aurum Markets?',
                    answer: `Yes, enjoy the benefits of trading gold, silver, crude oil and other commodities with Aurum Markets`,
                    state: false,
                },
                {
                    question: '	Can I open a Swap-Free Account?',
                    answer: `Yes, our Swap Free Account feature is available for all clients globally. Please note that swap-free accounts do not offer any benefits over regular accounts. There is a fixed fee for using swap-free accounts. Commission = pip price * swap value of the currency pair.
                    The fee does not count as interest and depends on the direction of the position (i.e. buy or sell).
                    `,
                    state: false,
                },
                {
                    question: 'What are commodities?',
                    answer: `Commodities are tradeable physical assets such as metals including gold, silver, platinum and copper, as well as crude oil, natural gas and other resources.`,
                    state: false,
                },
                {
                    question: 'Is it possible to lose more than I deposited? What if my accounts balance becomes negative?',
                    answer: `Aurum Markets ensure secure trading by offeringthe benefits of negative balance protection to all its clients. With negative balance protection enabled, your trading account will never turn negative. Even if the traders face a bad loss, Aurum Markets will ultimately pay for the maximum deposited amount.`,
                    state: false,
                },
                {
                    question: '	What is Negative balance protection?',
                    answer: `Negative balance protection represents a situation where no client is responsible for paying back a negative balance even under highly volatile conditions. The traders cannot lose more money than the trading funds they have in their accounts.Aurum Markets ensure secure trading by offering the benefits of negative balance protection to all its clients: Our risk management system ensures that the client cannot lose more than he initially invested.`,
                    state: false,
                },
                {
                    question: 'What are the advantages of trading with Aurum Markets?',
                    answer: `Aurum Markets has something for every kind of market. Regardless of whether you are a retail or institutional client, we have just the right trading solutions for all your needs.Choose from a wide range of markets to trade using our impressive trading tools and instruments. We offer a huge number of currency pairs, spot metals and indices, CFDs, among many others.Aurum Markets has the perfect account for every kind of trader. Our trading platforms are based on the latest technology to ensure reliability and security. We try our best to ensure they run smoothly on any device.`,
                    state: false,
                },
                // {
                //     question:'Do you have a web-based platform?',
                //     answer:`Yes, you can log into MT4 or MT5 on our dedicated page. This allows you to trade from any browser on any operating system using the well-known interface of the desktop Metatrader 4 and MT5 platform. All major tools are available including one-click trading and chart trading. `,
                //     state:false,
                // }
                // ,
                {
                    question: 'Can I trade with my Android/iOS device?',
                    answer: `Yes, you can install MetaTrader 4 andMetaTrader 5 on your device. Visit our platforms page to find detailed instructions on how you can download MT4 and MT5 to your iOS/Android device`,
                    state: false,
                },
                {
                    question: 'Can I use my account on another platform?',
                    answer: `You cannot login to an account designed for one plarform on another platform. For example, you cannot login to MT5 with an MT4 account and vice versa.`,
                    state: false,
                },
                {
                    question: 'Where can I find your Customer Agreement?',
                    answer: `You can find it here. Please make sure you’ve read and agreed with our Customer Agreement before you start trading.`,
                    state: false,
                },

            ]
        }
    }
    change_faq_state(ind) {
        let temp_arr = this.state.faqs;
        temp_arr.map((data, index) => {
            if (index == ind) {
                data.state = !data.state;
            }
        })

        this.setState({
            faqs: temp_arr
        })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="atitle text-center" style={{ paddingTop: '120px' }}>FAQ's</h1>
                    {
                        this.state.faqs.map((data, index) => {
                            return (
                                <div className="card mt-2">
                                    <h4 onClick={this.change_faq_state.bind(this, index)} className="  card-title card_title_bg">{data.question}
                                        <span style={{ float: 'right' }}>  <i className={data.state ? "fas fa-chevron-up" : "fas fa-chevron-down"} ></i></span></h4>
                                    {
                                        data.state ?
                                            <div className="card-body">
                                                <h6 className="card-body-text">
                                                    {data.answer}
                                                </h6>
                                            </div> : null
                                    }
                                </div>
                            )
                        })
                    }

                </div>
                <div className="mt-5">
                </div>
            </div>

        );
    }
}

export default Faq;
