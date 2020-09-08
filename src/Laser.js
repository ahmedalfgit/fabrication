import React, { Component } from "react";
import { render } from "react-dom";
import LaserCarousel from "./components/laserCarousel.js";
import ProjectImg from "../src/assets/fab-project-img-1.jpg";
import LaserImg from "../src/assets/laser-img.png";

class Laser extends Component {
  state = {};

  componentDidMount() {
    document.title = "Laser Cutting";
  }

  render() {
    return (
      <div className="container-fluid bg-white">
        <div className="row pt-5">
          <div className="laser-container container">
            <div className="row">
              <div className="col-md-6 col-sm-12 py-5 laser-col">
                <div className="row justify-content-center">
                  <div className="col-md-9 col-sm-12">
                    <h1 className="metal-laser-cutting text-white pt-2">
                      Metal Laser Cutting
                    </h1>
                    <p className="metal-laser-cutting-text-box pt-3 text-white p-16px">
                      We use a fiber laser machine with a 4000 watt capacity,
                      that cuts any shape you can draw with a tolerance of
                      +/-.03”. With the CNC controller it can cut up to three
                      times faster than a traditional laser. The laser coverage
                      area is 60” x 144”, with varying cut thicknesses from 26GA
                      (.018”) through ½”. The materials that it can cut are mild
                      steel, stainless, aluminum. Our engineering group uses
                      specialized nesting software to minimize material waste.
                    </p>
                    <ul className="list text-white laser-ul pt-5">
                      <span className="laser-benefits">
                        Features and Benefits
                      </span>
                      <li className="item laser-benefit-item">
                        Our 4000 Watt Cincinnati CL-940 Fiber Laser has the
                        capability to quickly and accurately cut up to a 6’ x
                        12’ sheet of material
                      </li>
                      <li className="item laser-benefit-item">
                        Materials include up to a ½” thick mild steel, stainless
                        steel , or aluminum
                      </li>
                      <li className="item laser-benefit-item">
                        With the accuracy, the Fiber Laser requires minimal
                        setup allowing us to turn napkin sketches into precision
                        parts in a matter of minutes.
                      </li>
                      <li className="item laser-benefit-item">
                        Cincinnati’s Nesting Software allows us to utilize the
                        most out of each sheet of material and aids in speedy
                        CNC programming of the laser.
                      </li>
                    </ul>
                    <h2 className="laser-h2 text-white pt-5 w-50">
                      We can laser cut
                    </h2>
                    <ul className="list laser-ul list-unstyled text-white">
                      <li className="item laser-item pt-2 letter-space-2px">
                        Mild Steel
                      </li>
                      <li className="item laser-item pt-2 letter-space-2px">
                        Stainless Steel
                      </li>
                      <li className="item laser-item pt-2 letter-space-2px">
                        Aluminum
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-sm-12">
                <div className="row justify-content-start">
                  <div className="col-12 px-0">
                    <img
                      src={LaserImg}
                      alt="laser image"
                      className="laser-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5 mt-5 fab-project-row pb-5">
          <div className="container fab-project-container">
            <div className="row py-5 justify-content-around">
              <div className="col-12 slider-col">
                <LaserCarousel />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Laser;
