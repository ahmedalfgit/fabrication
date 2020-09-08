import React, { Component } from "react";
import { render } from "react-dom";
import PressImg from "../src/assets/press-design.png";
import GoformPic from "../src/assets/Goform.png";
import PressCarousel from "./components/pressCarousel.js";

class Press extends Component {
  state = {};

  componentDidMount() {
    document.title = "Metal Forming";
  }

  render() {
    return (
      <div className="container-fluid bg-white">
        <div className="row pt-5">
          <div className="container press-container">
            <div className="row">
              <div className="col-md-7 col-sm-12 press-col py-5">
                <div className="row justify-content-center">
                  <div className="col-md-9">
                    <h1 className="text-white pt-2">Metal Forming</h1>
                    <p className="press-text-box pt-3 text-white p-16px">
                      Our large Press Brake incorporates CNC controls on a
                      14’-0” bed with a 230-ton forming capacity up to a ½”thick
                      material. The ram repeatability is +/-0.0002” with 3 axis
                      back gages and precision ground tooling for air bending,
                      creates precise bends. For additional accuracy a dynamic
                      thickness compensation control updates the force, strain
                      and geometry to the part that in turn accelerates
                      production. The accompanying bend simulation software
                      gives a visual 3D display of the part and all variables to
                      the bend process. It will check for tool and machine
                      interferences.
                    </p>
                    <h2 className="laser-h2 text-white pt-5 w-50">
                      We can bend
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
                      src={PressImg}
                      alt="Press brake image"
                      className="press-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5 mt-5 fab-project-row pb-5">
          <div className="container">
            <div className="row py-5 justify-content-between">
              <div className="col-md-6 col-sm-12">
                <div className="row justify-content-center pt-md-5">
                  <div className="col-12 pt-md-5 pl-md-0 mt-md-4">
                    <h3 className="fab-project-name text-dark text-left">
                      40-Ton Press Brake
                    </h3>
                  </div>
                  <div className="col-md-12 pl-md-0">
                    <p className="fab-project-details text-dark">
                      This small Press Brake incorporates CNC controls on a
                      3’-4” bed with a 40-ton forming capacity up to a ¼” thick
                      material. The ram repeatability is +/-0.0002” with 3 axis
                      back gages and precision ground tooling for air bending,
                      creates precise bends. High resolution incremental
                      encoders assure exceptional ram repeatability for accurate
                      forming of repetitive small parts. The accompanying bend
                      simulation software gives a visual 3D display of the part
                      and all variables to the bend process. It will check for
                      tool and machine interferences.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-5 fab-project-pics text-center">
                <div className="row justify-content-end">
                  <div className="col-12">
                    <img
                      className="p-1 Goform-img"
                      src={GoformPic}
                      alt="project image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5 mt-5 fab-project-row bg-white pb-5">
          <div className="container fab-project-container">
            <div className="row py-5 justify-content-around">
              <div className="col-12 slider-col">
                <PressCarousel />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Press;
