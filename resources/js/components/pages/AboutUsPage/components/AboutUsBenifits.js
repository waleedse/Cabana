import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
export default class AboutUsBenifits extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row aboutDetailRow">
          <div className="col-md-6 col-sm-12">
            <img
              src="/assets/images/aboutUs1.png"
              className="fitImage aboutBenifitImg"
              alt="benifit Image"
            ></img>
          </div>

          <div className="col-md-6 col-sm-12">
            <br /><br />
            <h4 className="aboutDetailTitle mt-5">
              Your Benefits With Aurum Markets
            </h4>
            <br />
            <p className="aboutDetailText">
              <FontAwesomeIcon
                icon={faCheckDouble}
                size="sm"
                color="#eb1597"
                className="mr-1"
              />
              Unique Link to get your client registered.
            </p>
            <p className="aboutDetailText">
              <FontAwesomeIcon
                icon={faCheckDouble}
                size="sm"
                color="#eb1597"
                className="mr-1"
              />
              Multi-Tier Commission Program.
            </p>
            <p className="aboutDetailText">
              <FontAwesomeIcon
                icon={faCheckDouble}
                size="sm"
                color="#eb1597"
                className="mr-1"
              />
              Progressive Commission Structure.
            </p>
            <p className="aboutDetailText">
              <FontAwesomeIcon
                icon={faCheckDouble}
                size="sm"
                color="#eb1597"
                className="mr-1"
              />
              Daily Commission Settlement.
            </p>
            <p className="aboutDetailText">
              <FontAwesomeIcon
                icon={faCheckDouble}
                size="sm"
                color="#eb1597"
                className="mr-1"
              />
              Get more clients with help of our expert Sales Team
            </p>
            <p className="aboutDetailText">
              <FontAwesomeIcon
                icon={faCheckDouble}
                size="sm"
                color="#eb1597"
                className="mr-1"
              />
              Be a part of the highest revenue share programs in the market
            </p>
          </div>
        </div>
      </div>
    );
  }
}
