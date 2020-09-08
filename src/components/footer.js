import React, { Component } from "react";
import AWS from "../assets/AWS.png";
import COMade from "../assets/CO-made.png";
import Laser from "../Laser";
import Press from "../Press";
import Flex from "../Flex";
import Weld from "../Welding";

const FooterBar = () => {
  return (
    <footer className="footer pt-md-5 pt-5">
      <div className="container p-4">
        <div className="row justify-content-around">
          <div className="col-md-2">
            <h6 className="footer-title text-capitalize">services</h6>
            <ul className="list pt-2 px-0 list-unstyled">
              <li className="item footer-item">
                <a href="/Laser" className="footer-item-link">
                  Laser
                </a>
              </li>
              <li className="item footer-item pt-2">
                <a href="/Press" className="footer-item-link">
                  Metal Forming
                </a>
              </li>
              <li className="item footer-item pt-2">
                <a href="/Flex" className="footer-item-link">
                  Machining
                </a>
              </li>
              <li className="item footer-item pt-2">
                <a href="/Weld" className="footer-item-link">
                  Welding
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6 className="footer-title text-capitalize">certifications</h6>
            <ul className="list pt-2 px-0 list-unstyled certification-list">
              <li className="item footer-item">
                <a
                  href="https://www.aws.org/certification"
                  className="footer-item-link text-capitalize"
                  target="_blank"
                >
                  <img src={AWS} alt="AWS certification" />
                </a>
              </li>
              <li className="item footer-item pl-2">
                <a href="COMade" className="footer-item-link text-capitalize">
                  <img src={COMade} alt="AWS certification" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6 className="footer-title text-capitalize">our sites</h6>
            <ul className="list pt-2 px-0 list-unstyled">
              <li className="item footer-item">
                <a href="https://serpentix.com" className="footer-item-link">
                  Serpentix
                </a>
              </li>
              <li className="item footer-item pt-2">
                <a href="site-map" className="footer-item-link">
                  Site Map
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="footer-title text-capitalize">Contact</h6>
            <ul className="list px-0 list-unstyled">
              <li className="item footer-item">
                <a
                  href="https://www.google.com/maps/place/Serpentix+Conveyor+Corporation/@39.9118853,-104.9998603,17z/data=!3m1!4b1!4m5!3m4!1s0x876b89a53d019829:0x2c2373e598bd592c!8m2!3d39.9118853!4d-104.9976716"
                  className="footer-item-link"
                  target="_blank"
                >
                  11821 Huron St <br />
                  Westminster, CO 80234
                </a>
              </li>
              <li className="item footer-item pt-2">
                <a
                  href="mailto:sales@serpentix.com"
                  className="footer-item-link"
                >
                  Email: sales@serpentix.com
                </a>
              </li>
              <li className="item footer-item pt-2">
                <a href="tel:3034308427" className="footer-item-link">
                  Phone: 303-430-8427
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row justify-content-center socail-media">
          <div className="col-md-7 text-center pt-3">
            <ul className="list d-inline-flex list-unstyled pt-md font-size-15px">
              Socail Media
              <li className="item px-3 ml-md-4">
                <a
                  href="https://www.facebook.com/serpentixcorp/"
                  className="socail-media-icon"
                >
                  Facebook
                </a>
              </li>
              <li className="item px-3">
                <a
                  href="https://www.youtube.com/channel/UCUll0gP9oHrR9ZEPIYwkwAw"
                  className="socail-media-icon"
                >
                  Youtube
                </a>
              </li>
              <li className="item px-3">
                <a
                  href="https://www.instagram.com/serpentixcorporation/"
                  className="socail-media-icon"
                >
                  Instagram
                </a>
              </li>
              <li className="item px-3">
                <a
                  href="https://www.linkedin.com/company/serpentix-corporation/"
                  className="socail-media-icon"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
