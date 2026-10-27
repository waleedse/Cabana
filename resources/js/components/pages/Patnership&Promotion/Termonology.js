import React, { Component } from 'react';

class Termonology extends Component {
    render() {
        return (
            <div>
                <div className="ter_bg">
                    <div>
                        <div className='title_' ><span className='titleLg'>Aurum Markets<br />

                        </span><br /></div>
                        <div className=' title2'>Investment Terminology</div>
                        <div className=' title2'>Definitions</div>
                    </div>
                </div>
                <div className="conatiner">
                    <h1 className="title_ text-center py-4" style={{ color: '#5b0156' }} >
                        Aurum Markets Investment Terminalogy</h1>
                </div>
                <div className="bt4S_bottom">
                    <div className="container">
                        <div className="sec4 mt-5">
                            <h1 className="title_ text-center" style={{ color: '#5b0156' }}> <span style={{ fontSize: '22px' }}>
                                Copy Type - Autoscale Equity</span></h1>
                            <h6 className="acard_text text-center ">
                                Copy proportionally to Equities of the Provider’s and the Subscriber’s accounts.
                            </h6>
                        </div>

                        <div className="sec4 mt-5">
                            <h1 className="title_ text-center" style={{ color: '#5b0156' }}> <span style={{ fontSize: '22px' }}>
                                HEDGE</span></h1>
                            <h6 className="acard_text text-center ">
                                A forex hedge is a transaction implemented to protect an existing or anticipated position from an unwanted move in exchange rates.
                                Forex hedges are used by a broad range of market participants, including investors, traders and businesses.
                                By using a forex hedge properly, an individual who is long a foreign currency pair or expecting to be in the future via a transaction can be
                                protected from downside risk. Alternatively,
                                a trader or investor who is short a foreign currency pair can protect against upside risk using a forex hedge.
                            </h6>
                        </div>
                        <div className="sec4 mt-5">
                            <h1 className="title_ text-center" style={{ color: '#5b0156' }}> <span style={{ fontSize: '22px' }}>
                                LEVERAGE</span></h1>
                            <h6 className="acard_text text-center ">
                                Leverage is a virtual credit provided by the broker to a client. Leverage affects your margin requirements,
                                i.e. the higher the ratio is, the lower required margin will be, i.e. with leverage 1:500 your initial margin will be
                                500 times less than the contract size. For example, the current EUR/USD bid is 1.13501 and you would like to open 0.5 lots Sell order. If your leverage is 1:500 the margin required for such order can be calculated like this: 50 5b0156 EUR
                                (contract size) * 1.13501 (current Bid)/500(your leverage)= 113.50 USD. With 1:200 leverage, the required margin is 283.75 USD.
                            </h6>
                        </div>
                        <div className="sec4 mt-5">
                            <h1 className="title_ text-center" style={{ color: '#5b0156' }}> <span style={{ fontSize: '22px' }}>
                                Max Loss</span></h1>
                            <h6 className="acard_text text-center ">
                                This value is entered in the Subscriber’s account currency. This is a maximum total loss on the Subscription (closed trades PnLs only are considered). When it’s reached, the Subscription will be closed automatically.

                            </h6>
                        </div>
                        <div className="sec4 mt-5">
                            <h1 className="title_ text-center" style={{ color: '#5b0156' }}> <span style={{ fontSize: '22px' }}>
                                Minimum Join Balance</span></h1>
                            <h6 className="acard_text text-center ">
                                Minimum balance to start copying (optional).
                            </h6>
                        </div>
                        <div className="sec4 mt-5">
                            <h1 className="title_ text-center" style={{ color: '#5b0156' }}> <span style={{ fontSize: '22px' }}>
                                Min/Max lot</span></h1>
                            <h6 className="acard_text text-center ">
                                Source trade volume limits for copying trades.

                            </h6>
                        </div>
                        <div className="sec4 mt-5">
                            <h1 className="title_ text-center" style={{ color: '#5b0156' }}> <span style={{ fontSize: '22px' }}>
                                Multiplicator</span></h1>
                            <h6 className="acard_text text-center ">
                                The copied trade will be multiplied by this number. The Multiplicator shall be any positive number (not equal to 0) multiplied by the volume of the Provider’s trade. If the Multiplicator field is left empty, it will mean “equal to 1”.


                            </h6>
                        </div>

                        <div className="sec4 mt-5">
                            <h1 className="title_ text-center" style={{ color: '#5b0156' }}> <span style={{ fontSize: '22px' }}>
                                Nickname</span></h1>
                            <h6 className="acard_text text-center ">
                                A nickname for the Provider’s account (optional). If set, the Subscribers will see it as the account name in the Subscriber’s web-cabinet and the Statistics.

                            </h6>
                        </div>
                        <div className="sec4 mt-5">
                            <h1 className="title_ text-center" style={{ color: '#5b0156' }}> <span style={{ fontSize: '22px' }}>
                                Performance Fee</span></h1>
                            <h6 className="acard_text text-center ">
                                A part of profit gained by the Provider for profitable trades after they are closed.

                            </h6>
                        </div>
                        <div className="sec4 mt-5">
                            <h1 className="title_ text-center" style={{ color: '#5b0156' }}> <span style={{ fontSize: '22px' }}>
                                PIPS</span></h1>
                            <h6 className="acard_text text-center ">
                                Is a standardized unit of change in the price of a trading instrument.
                                Initially, when only 4-digit pricing was available,
                                it was the smallest unit of price change. With the introduction of more accurate 5-digit pricing,
                                1 pip is still calculated by the 4th digit (0.5b01561). The smallest unit is now referred as to point (0.5b015601).
                                In 5-digit pricing 1 pip is equal to 10 points. Example: When the price for EUR/USD currency pair
                                changes from 1.11634 to 1.11645, it means the price has changed in 1.1 pips or 11 points. For USD/JPY currency pair,
                                which has 3-digit pricing, a change from 123.857 to 123.864 means that the price has grown in 0.7 pips or 7 points.


                            </h6>
                        </div>
                        <div className="sec4 mt-2">
                            <h1 className="title_ text-center" style={{ color: '#5b0156' }}> <span style={{ fontSize: '22px' }}>
                                Provider</span></h1>
                            <h6 className="acard_text text-center ">
                                The owner of a Strategy Account. A trader willing to share his/her strategy with other Investors for a percentage Profit Share of the profits.
                            </h6>
                        </div>
                        <div className="sec4 mt-5">
                            <h1 className="title_ text-center" style={{ color: '#5b0156' }}> <span style={{ fontSize: '22px' }}>
                                Public</span></h1>
                            <h6 className="acard_text text-center ">
                                If account is checked “public”, anyone will be able to subscribe to it.

                            </h6>
                        </div>
                        <div className="sec4 mt-5">
                            <h1 className="title_ text-center" style={{ color: '#5b0156' }}> <span style={{ fontSize: '22px' }}>
                                Subscribe</span></h1>
                            <h6 className="acard_text text-center ">
                                Click “Subscribe” to create a new Subscription.
                            </h6>
                        </div>
                        <div className="sec4 mt-5">
                            <h1 className="title_ text-center" style={{ color: '#5b0156' }}> <span style={{ fontSize: '22px' }}>
                                Subscriber</span></h1>
                            <h6 className="acard_text text-center ">
                                An investor who wants to follow trades of other strategy managers or successful traders.

                            </h6>
                        </div>

                        <div className="sec4 mt-5">
                            <h1 className="title_ text-center" style={{ color: '#5b0156' }}> <span style={{ fontSize: '22px' }}>
                                SWAP Charges</span></h1>
                            <h6 className="acard_text text-center ">
                                The swap charges in forex or rollover interest rates is the net interest return that a trader accumulates on
                                a currency position held overnight. This fee is charged when the trader borrows one currency to buy another,
                                as part of forex trading.
                                For instance, if you are buying EUR/USD, you might borrow in US Dollars and buy Euros with the amount.
                                In doing so, you will need to pay interest on the borrowed US Dollars and earn interest on the Euros you bought.
                                The net interest fee is calculated based on the difference in interest rates of the two traded currencies
                            </h6>
                        </div>

                        <div className="sec4 mt-5">
                            <h1 className="title_ text-center" style={{ color: '#5b0156' }}> <span style={{ fontSize: '22px' }}>
                                TRADING MARGIN</span></h1>
                            <h6 className="acard_text text-center ">
                                Margin trading in the forex market is the process of making a good faith deposit with a broker in order to open and maintain
                                positions in one or more currencies. Margin is not a cost or a fee, but it is a portion of the customer's account balance that is
                                set aside in order trade.
                                The amount of margin required can vary depending on the brokerage firm and there are a number of consequences associated with the practice.
                            </h6>
                        </div>


                    </div>
                </div>
            </div>
        );
    }
}

export default Termonology;
