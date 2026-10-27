import React, { Component } from "react";

export default class MissionCard extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row basicRow mb-5">
          <div className="col-12 text-center">
            <h4 className="aboutDetailTitle">Our Mission</h4>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
            <div className="missionCard">
              <div className="missionCircle">
                <img
                  src="/assets/images/Admiration.png"
                  alt="image of mission sec"
                  className="missionImg"
                ></img>
              </div>
              <h5 className="missionTitle mt-2"> Admiration</h5>
              <p className="missionText">
                We admire the hard work our employees put in to ensure our
                clients have a hassle-free and amazing experience. Our employees
                go the extra mile so that our clients have a smile at the end of
                the day. We always respect and appreciate our employees for
                everything they have done for us. We ensure the working
                environment of our employees is motivational so that they give
                only their 100% every day.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
            <div className="missionCard">
              <div className="missionCircle">
                <img
                  src="/assets/images/Dedication.png"
                  alt="image of mission sec"
                  className="missionImg"
                ></img>
              </div>
              <h5 className="missionTitle mt-2"> Dedication</h5>
              <p className="missionText">
                Whether it is our clients, partners or affiliates, we will
                always remain dedicated to them. Their ambitions and
                requirements drive us to give it everything we got so that they
                can achieve their dreams.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
            <div className="missionCard">
              <div className="missionCircle">
                <img
                  src="/assets/images/Mindful.png"
                  alt="image of mission sec"
                  className="missionImg"
                ></img>
              </div>
              <h5 className="missionTitle mt-2"> Mindful</h5>
              <p className="missionText">
                We are thankful to the community for giving us everything we
                have. By giving back to the community, we hope to make the world
                a much better place.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
            <div className="missionCard">
              <div className="missionCircle">
                <img
                  src="/assets/images/Respect.png"
                  alt="image of mission sec"
                  className="missionImg"
                ></img>
              </div>
              <h5 className="missionTitle mt-2"> Respect</h5>
              <p className="missionText">
                At Aurum Markets, we have utmost respect for our clients, our
                work, our community and ourselves. Aurum Markets is creative,
                modern, progressive, and trustworthy.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
