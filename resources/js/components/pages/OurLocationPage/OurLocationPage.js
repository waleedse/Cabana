import { faEnvelope, faMapMarkerAlt, faPhone, fawhatsapp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect } from 'react-redux';
import HeroSection from '../AboutUsPage/components/HeroSection';
import "./components/ourLocation.css"
import ContactForm from './contactForm';
const OurLocationPage = (props) => {
    return (
        <div className="ourLocation">
            <HeroSection title="OUR LOCATION"
                bg="contactus.jpg"
            />

            <div style={{ position: "relative" }}>
                <div className='d-none d-md-inline'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d387.52828144024085!2d-60.95584915969501!3d14.070841901692043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sThe%20Sotheby%20Building%20saint%20lucia!5e0!3m2!1sen!2s!4v1760034562589!5m2!1sen!2s" width="100%" height="500" frameBorder="0" style={{ border: '0' }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe></div>


                <div className="mapCard">
                    <div className="title">Head Office</div>
                    <div className="text">
                        {/* Suit 305, Griffith Corporate Centre<br/>
            Beachmont, P.O.Box 1510, Kingstown St.<br/>
            Vincent and the Grenadines */}

                        Ground Floor, The Sotheby Building,<br />
                        Rodney Village, Rodney Bay,<br />
                        Gros-Islet, Saint Lucia<br />
                        <br />


                        Office no. 212, Ground floor ,Block A,
                        <br />The junction Business Hub, <br />
                        Calebasses Branch Rd, Calebasses, Mauritius

                    </div>

                    <div className="title">Customer Support</div>
                    <div className="text">For any enquiries email us on:</div>
                    <div className="text mb-1"><FontAwesomeIcon icon={faPhone} color="#fff" /> 230 245 8606</div>
                    <div className="text"><FontAwesomeIcon icon={faEnvelope} color="#fff" /> support@aurummarkets.com</div>
                </div>
            </div>

            {
                props.country == 'Nigeria' ?

                    <div className='basicRow'>
                        <div className="cardFlex">
                            <div className="locationCard">
                                <div className='title'>Head Office</div>


                                <div className="text"><FontAwesomeIcon icon={faMapMarkerAlt} color="#ee3f97" /> <span>Suit 305, Griffith Corporate Centre<br />
                                    Beachmont, P.O.Box 1510, Kingstown St.<br />
                                    Vincent and the Grenadines
                                </span></div>
                                {/* <div className="text mb-1"><FontAwesomeIcon icon={faPhone} color="#ee3f97"  /> +44 208 124 4440</div> */}
                                <div className="text"><FontAwesomeIcon icon={faEnvelope} color="#ee3f97" />  support@aurummarkets.com</div>
                            </div>
                            {/* <div className="locationCard">
                   <div className='title'>Dubai</div>
                   <div className="text"><FontAwesomeIcon icon={faMapMarkerAlt} color="#ee3f97"  /> <span>Office No. 2306, Prism tower, Business Bay, <br/> Dubai, UAE


                </span></div>
                <div className="text mb-1"><FontAwesomeIcon icon={faPhone} color="#ee3f97"  />  +971 (4) 564 5891</div>
                <div className="text mb-1"><i class="fab fa-whatsapp" style={{color:'#ee3f97'}}></i>   +971 5474 68487</div>

                <div className="text"><FontAwesomeIcon icon={faEnvelope} color="#ee3f97"  /> support@cabanacapitals.com</div>
               </div> */}
                            <div className="locationCard">
                                <div className='title'>Nigeria</div>
                                <div className="text"><FontAwesomeIcon icon={faMapMarkerAlt} color="#ee3f97" /> <span>4th floor Mosesola House, 103 Allen Avenue,<br /> Ikeja Lagos.

                                </span></div>
                                <div className="text mb-1"><FontAwesomeIcon icon={faPhone} color="#ee3f97" /> +234 805 653 1053.</div>
                                <div className="text"><FontAwesomeIcon icon={faEnvelope} color="#ee3f97" /> hu@aurummarkets.com</div>
                            </div>
                        </div>
                    </div>
                    :
                    null
            }

            <ContactForm></ContactForm>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        promotions: state.promotion,
        country: state.country
    }
}

export default connect(mapStateToProps)(OurLocationPage);
