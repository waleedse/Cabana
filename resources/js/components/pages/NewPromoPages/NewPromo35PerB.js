import React from 'react';
import "./components/newPromoPage.css"
const NewPromo35PerB = () => {
    return (
        <div>
            <div className="newPromoBg">
                <div>
                    <div className='title'><span className='titleLg'>GET</span><br />
                        <span className="perText"> 35%</span> <br /> OF BONUS AS</div>
                    <div className='title title2'>TRADING ACCOUNT DEPOSIT</div>
                    <button onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }} type="button" className='btnRegister'>REGISTER NOW</button>
                    <a href="/bonus-terms"> <div className='text'>*Terms and conditions apply</div></a></div>
            </div>


            <div className='basicRow promoUpto'>

                <div className='mainFlex'> <div className="contentSec">
                    <div className='title'>Aurum Markets brings a whopping 35% trading bonus (up to $1,000) to your trading account deposit</div>
                    <div className='point'><img src="/assets/images/promoDone.png" className="pointDone" ></img> <span className='text'>Get up to $1,000 in Trading Bonus from Aurum Markets </span></div>
                    <div className='point'><img src="/assets/images/promoDone.png" className="pointDone"></img> <span className='text'>Capitals to achieve your Financial goals
                    </span></div>
                    <div className='point'><img src="/assets/images/promoDone.png" className="pointDone"></img> <span className='text'>Trade with high margin level
                    </span></div>
                    <div className='point'><img src="/assets/images/promoDone.png" className="pointDone"></img> <span className='text'>Non withdraw-able Trading Bonus
                    </span></div>
                    <div className='point ml-4'>
                        <a href="/bonus-terms" style={{ fontSize: '14px' }} className="col-offset-2 " > *Terms and conditions apply</a>
                    </div>

                </div>
                    <div className="imgSec">

                        <img src="/assets/images/promoUpto.png" alt="promoUpto" className='img'></img>
                    </div></div>
            </div>


            <div className='basicRow promoOpenAcc'>

                <div className="mainFlex">

                    <div className="contentSec">
                        <div className="textFlex"><span className="number">1</span>
                            <div className="innerTextFlex"><div className="title">OPEN AN ACCOUNT</div>
                                <div className="text">Open your live trading account  <br />
                                    via Aurum Markets</div></div></div>
                        <img src="/assets/images/promoNewacc.png" alt="promoNewacc" className='img d-block d-md-none'></img>

                        <div className='btnFlex'><button onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }} className='btnAcc liveAccBtn'>OPEN LIVE ACCOUNT</button> <button onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }} className='btnAcc demoAccBtn ml-0 ml-md-4'>OPEN DEMO ACCOUNT</button></div>
                    </div>

                    <div className="imgSec d-none d-md-block">

                        <img src="/assets/images/promoNewacc.png" alt="promoNewacc" className='img'></img>
                    </div>
                </div>
            </div>

            <div className="basicRow promoDeposit">
                <div className='mainFlex'>
                    <div className='contentSec'>
                        <div className="textDiv"><div className="number">2</div><div className="title">MAKE A DEPOSIT IN <br />
                            YOUR ACCOUNT</div></div>
                        <img src="/assets/images/promoDeposit.png" alt="promoNewacc" className='img d-block d-md-none'></img>
                        <div className="text">Add fund to your trading account using<br />
                            any payment option you like.</div>
                    </div>


                    <div className="imgSec d-none d-md-block">

                        <img src="/assets/images/promoDeposit.png" alt="promoNewacc" className='img'></img>
                    </div>
                </div>
            </div>

            <div className="basicRow promoBonus">
                <div className='mainFlex'>
                    <div> <div className="title">INCREASE  YOUR<br />
                        DEPOSIT WITH OUR <br />
                        BONUS</div>
                        <div className="text">Get <span className='colorPromo'> 35% </span >of <span className='colorPromo'>bonus</span></div></div>

                    <div className="imgSec ">

                        <img src="/assets/images/promo3.png" alt="promoNewacc" className='img'></img>
                    </div>
                </div>



            </div>


            <div className="basicRow promoTrade">
                <div className='mainFlex'>
                    <div className='contentSec'>
                        <div className="textDiv"><div className="number">4</div><div className="title">Trade</div></div>
                        <img src="/assets/images/promoTrade.png" alt="promoNewacc" className='img d-block d-md-none'></img>
                        <div className="text">Start trading on more<br />
                            than 80 instruments</div>
                        <button onClick={() => { window.open('https://portal.aurummarkets.com/register/', '_self') }} className="getStarted">GET STARTED</button>
                    </div>


                    <div className="imgSec d-none d-md-block">

                        <img src="/assets/images/promoTrade.png" alt="promoNewacc" className='img'></img>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NewPromo35PerB;
