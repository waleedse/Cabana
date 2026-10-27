import Axios from 'axios';
import React, { Component } from 'react';
import HeroSection from '../AboutUsPage/components/HeroSection';

class TraidingMemory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                equity: 0,
                managerCapital: 0,
                historyPerformances: {
                    "0": 0,
                    "1": 460.3904079999993,
                    "7": 978.0491729999994,
                    "30": 11796.990015,
                    "90": 11796.990015,
                    "180": 11796.990015,
                    "365": 11697.535015
                },
                riskData: {
                    "days": "364",
                    "profit": "5969.26",
                    "loss": "5115.64",
                    "count": "25",
                    "profitCount": "14",
                    "lossCount": "11",
                    "slCount": "6",
                    "avgProfit": "426.375714",
                    "avgLoss": "-465.058182",
                    "profitFactor": 1.166864752015388,
                    "sl": 0.24,
                    "slPercent": 24,
                    "payoff": 34.14480000000003,
                    "profitTrades": 0.56,
                    "profitTradesPercent": 56,
                    "lossTrades": 0.44,
                    "lossTradesPercent": 44,
                    "profitablePeriodsCount": "5",
                    "lossPeriodsCount": "4"
                },
            }
        };
    }

    componentDidMount() {
        Axios.post('/api/get_pamm_account_detail/' + this.props.match.params.id).then(res => {
            console.log(res);
            this.setState({
                data: res.data
            })
        })
    }
    render() {
        return (
            <div>
                <HeroSection title="TRADING MANAGER DETAILS" />
                <div className="container mt-5 mb-5">
                    <div className="card stats_card p-4">
                        <div className="row ">
                            <img className="person_img" src="/assets/images/person.png" />
                            <h4 className="nickname">{this.state.data.nickname}</h4>
                            <div className="row ml-auto mr-auto">
                                <div className="text-center">
                                    <h4 className="stats_pamm">{this.state.data.performance}</h4>
                                    <p className="stats_label">Performance</p>
                                </div>
                                <div className="text-center stats_left_border">
                                    <h4 className="stats_pamm">{this.state.data.daysOpened}</h4>
                                    <p className="stats_label">Days Open</p>
                                </div>
                                <div className="text-center stats_left_border">
                                    <h4 className="stats_pamm">{this.state.data.numberOfInvestors}</h4>
                                    <p className="stats_label">Followers</p>
                                </div>
                                <div className="text-center stats_left_border">
                                    <h4 className="stats_pamm">{this.state.data.equity.toFixed(2)}</h4>
                                    <p className="stats_label">Equity</p>
                                </div>
                            </div>
                            <div className="text-center px-2 mt-2 ">
                                {/* <td><button onClick={()=>{window.open('/trading-memory/'+data.id,'_self')}} className="btn depositeOutlineButton ">Invest </button></td> */}
                                <button onClick={() => { window.open('https://portal.aurummarkets.com/login/', '_self') }} className="depositButton rounded" style={{ padding: "8px 60px", fontSize: '24px' }} >Invest</button>

                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-5 mt-2">
                            <div className="card p-2 stats_card">
                                <h2>Return %</h2>
                                <table className="table table-hover ">
                                    <tbody>
                                        <tr className="stats_table_tr"><td >Today</td><td className="stats_figure"  >{this.state.data.historyPerformances[0].toFixed(2)}</td></tr>
                                        <tr className="stats_table_tr"><td >Yesterday</td><td className="stats_figure"  >{this.state.data.historyPerformances[1].toFixed(2)}</td></tr>
                                        <tr className="stats_table_tr"><td >Last Week	</td><td className="stats_figure"  >{this.state.data.historyPerformances[7].toFixed(2)}</td></tr>
                                        <tr className="stats_table_tr"><td >Last Months	</td><td className="stats_figure"  >{this.state.data.historyPerformances[30].toFixed(2)}</td></tr>
                                        <tr className="stats_table_tr"><td >Last 3 Months	</td><td className="stats_figure"  >{this.state.data.historyPerformances[90].toFixed(2)}</td></tr>
                                        <tr className="stats_table_tr"><td >Last 6 Months	</td><td className="stats_figure"  >{this.state.data.historyPerformances[180].toFixed(2)}</td></tr>
                                        <tr className="stats_table_tr"><td >Last Year		</td><td className="stats_figure"  >{this.state.data.historyPerformances[365].toFixed(2)}</td></tr>

                                    </tbody>
                                </table>
                            </div>
                            <div className="card p-2 stats_card  " style={{ marginTop: '35px' }}>
                                <h2>Settings</h2>
                                <table className="table table-hover ">
                                    <tbody>
                                        <tr className="stats_table_tr"><td >Leverage</td><td className="stats_figure"  >1:500</td></tr>
                                        <tr className="stats_table_tr"><td >Swap Free	</td><td className="stats_figure"  >Yes</td></tr>
                                        <tr className="stats_table_tr"><td >Minimum Deposit		</td><td className="stats_figure"  >$100</td></tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-md-7 mt-2">

                            <div className="card p-2 stats_card">
                                <h2>Statistics</h2>
                                <table className="table table-hover ">
                                    <tbody>
                                        <tr className="stats_table_tr"><td >Number Of Investors	</td><td className=" stats_figure "  >{this.state.data.numberOfInvestors}</td></tr>
                                        <tr className="stats_table_tr"><td >Manager's Capital	</td><td className="stats_figure"  >+{this.state.data.managerCapital.toFixed(2)}</td></tr>
                                        <tr className="stats_table_tr"><td >Length Of Trading History	</td><td className="stats_figure"  >+{this.state.data.riskData.days}</td></tr>
                                        <tr className="stats_table_tr"><td >Profitability</td><td className="stats_figure"  >+{this.state.data.riskData.profitCount}</td></tr>
                                        <tr className="stats_table_tr"><td >Profit Factor	</td><td className="stats_figure"  >+{this.state.data.riskData.profitFactor.toFixed(2)}</td></tr>
                                        <tr className="stats_table_tr"><td >% Deals With SL	</td><td className="stats_figure"  >+{parseFloat(this.state.data.riskData.loss).toFixed(2)}</td></tr>
                                        <tr className="stats_table_tr"><td >SL count	</td><td className="stats_figure"  >{parseFloat(this.state.data.riskData.slCount).toFixed(2)}</td></tr>
                                        <tr className="stats_table_tr"><td >Expected Payoff	</td><td className="stats_figure"  >+{this.state.data.riskData.payoff.toFixed(2)}</td></tr>
                                        <tr className="stats_table_tr"><td >Profit Trades (% Of Total)	</td><td className="stats_figure"  >+{this.state.data.riskData.profitTrades.toFixed(2)}</td></tr>
                                        <tr className="stats_table_tr"><td >Loss Trades Trades (% Of Total)	</td><td className="stats_figure"  >+{this.state.data.riskData.lossTrades.toFixed(2)}</td></tr>
                                        <tr className="stats_table_tr"><td >Average Profit Trade	</td><td className="stats_figure"  >+{parseFloat(this.state.data.riskData.avgProfit).toFixed(2)}</td></tr>
                                        <tr className="stats_table_tr"><td >Average Loss Trade	</td><td className="stats_figure text-danger"  >{parseFloat(this.state.data.riskData.avgLoss).toFixed(2)}</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="text-center px-2 mt-5 ">
                        <div className="row ml-auto mr-auto">
                            <h1 className="col-md-4"></h1>
                            <button onClick={() => { window.open('/pamm', '_self') }} className="btn depositeOutlineButton ml-2  mt-2" style={{ padding: "8px 60px", fontSize: '24px' }}>Back To Ranking </button>
                            <button onClick={() => { window.open('https://portal.aurummarkets.com/login/', '_self') }} className="depositButton ml-2 mt-2 rounded" style={{ padding: "8px 60px", fontSize: '24px' }} >Invest</button>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default TraidingMemory;
