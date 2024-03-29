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

           <div style={{position:"relative"}}>
          <div className='d-none d-md-inline'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.0887680131495!2d-61.223383684837515!3d13.15680049073459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c475150d7889919%3A0xec14007759a547d6!2sGriffith%20Corporate%20Centre!5e0!3m2!1sen!2suk!4v1664476483245!5m2!1sen!2suk" width="100%" height="450" frameBorder="0" style={{border:'0'}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe></div>


           <div className="mapCard">
            <div className="title">Head Office</div>
            <div className="text">
                {/* Suit 305, Griffith Corporate Centre<br/>
            Beachmont, P.O.Box 1510, Kingstown St.<br/>
            Vincent and the Grenadines */}

            Office no. 212, Ground floor ,block A,
                                <br/>The junction Business Hub, <br/>
                                Calebasses Branch Rd, Calebasses
                                <br/>

            </div>

            <div className="title">Customer Support</div>
            <div className="text">For any enquiries email us on:</div>
            <div className="text mb-1"><FontAwesomeIcon icon={faPhone} color="#fff"  /> 230 245 8606</div>
            <div className="text"><FontAwesomeIcon icon={faEnvelope} color="#fff"  /> support@cabanacapitals.com</div>
           </div>
           </div>

        {
            props.country == 'Nigeria' ?

          <div className='basicRow'>
          <div className="cardFlex">
               <div className="locationCard">
                   <div className='title'>Head Office</div>


                   <div className="text"><FontAwesomeIcon icon={faMapMarkerAlt} color="#ee3f97"  /> <span>Suit 305, Griffith Corporate Centre<br/>
                    Beachmont, P.O.Box 1510, Kingstown St.<br/>
                    Vincent and the Grenadines
                </span></div>
                {/* <div className="text mb-1"><FontAwesomeIcon icon={faPhone} color="#ee3f97"  /> +44 208 124 4440</div> */}
                <div className="text"><FontAwesomeIcon icon={faEnvelope} color="#ee3f97"  /> support@cabanacapitals.com</div>
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
                   <div className="text"><FontAwesomeIcon icon={faMapMarkerAlt} color="#ee3f97"  /> <span>4th floor Mosesola House, 103 Allen Avenue,<br/> Ikeja Lagos.

                </span></div>
                <div className="text mb-1"><FontAwesomeIcon icon={faPhone} color="#ee3f97"  /> +234 805 653 1053.</div>
                <div className="text"><FontAwesomeIcon icon={faEnvelope} color="#ee3f97"  /> hu@cabanacapitals.com</div>
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

const mapStateToProps = (state) =>{
    return{
        promotions:state.promotion,
        country:state.country
    }
}

export default connect(mapStateToProps)(OurLocationPage);
