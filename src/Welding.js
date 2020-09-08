import React, { Component } from "react";
import { render } from "react-dom";
import WelderImg from "../src/assets/robotic-welder.png";
import ProjectImg from "../src/assets/fab-project-img-1.jpg";
import TIG1 from "../src/assets/TIG1.jpg";
import TIG2 from "../src/assets/TIG2.jpg";
import TIG3 from "../src/assets/TIG3.jpg";
import TIG4 from "../src/assets/TIG4.jpg";
import MIG1 from "../src/assets/MIG1.jpg";
import MIG2 from "../src/assets/MIG2.jpg";
import MIG3 from "../src/assets/MIG3.jpg";
import MIG4 from "../src/assets/MIG4.jpg";
import Robotic1 from "../src/assets/Robotic1.jpg";
import Robotic2 from "../src/assets/Robotic2.jpg";
import Robotic3 from "../src/assets/Robotic3.jpg";
import Robotic4 from "../src/assets/Robotic4.jpg";

class Drill extends Component {
  state = {};

  componentDidMount() {
    document.title = "Welding";
  }

  render() {
    return (
      <div className="container-fluid bg-white">
        <div className="row pt-5">
          <div className="container weld-container">
            <div className="row">
              <div className="col-md-7 weld-col py-5">
                <div className="row justify-content-center">
                  <div className="col-md-9">
                    <h1 className="text-white pt-2">Welding</h1>
                    <p className="weld-text-box text-white p-16px">
                      If you have a welding project that is highly repetitious,
                      our robotic welding cell is your answer. A 4’-0” x 14’-0”
                      clamp table that pivots 360 degrees and is connected
                      directly into the CNC controls of the MIG welder robotic
                      arm providing maximum potential. All the variables that
                      make up a weld can be done on the part and saved or they
                      can be applied in a 3D model software and transferred CNC
                      controller.
                    </p>
                    <p className="weld-text-box text-white p-16px pt-md-4">
                      Our team of welders are certified AWS D1.1 in metal
                      fabrication. Whether it’s in-house or mobile we can
                      perform TIG, MIG or STICK welding to meet your goals.
                      Welding stainless steel, aluminum and mild steel has been
                      a main stay for over two decades. The prep work required
                      to perform a project brings out the creativeness of our
                      welders to make the most cost-effective parts.
                    </p>
                    <h2 className="laser-h2 text-white pt-5 w-50">
                      Type of welding
                    </h2>
                    <ul className="list laser-ul list-unstyled text-white">
                      <li className="item laser-item pt-2 letter-space-2px">
                        Robotic
                      </li>
                      <li className="item laser-item pt-2 letter-space-2px">
                        TIG
                      </li>
                      <li className="item laser-item pt-2 letter-space-2px">
                        MIG
                      </li>
                      <li className="item laser-item pt-2 letter-space-2px">
                        Stick
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="row justify-content-start">
                  <div className="col-12 px-0">
                    <img
                      src={WelderImg}
                      alt="welder image"
                      className="welder-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5 mt-5 fab-project-row pb-5">
          <div className="container fab-project-container">
            <div className="row py-5 justify-content-between">
              <div className="col-md-3 col-sm-12">
                <div className="row justify-content-center mt-5 pt-5">
                  <div className="col-12 pt-5">
                    <h3 className="fab-project-name text-dark text-left">
                      We specialize in:
                    </h3>
                  </div>
                  <div className="col-12 pt-3">
                    <ul className="list ml-0 pl-2">
                      <li className="item pt-1 p-18px">Plate welding</li>
                      <li className="item pt-3 p-18px">Rolling</li>
                      <li className="item pt-3 p-18px">Pipe cuting</li>
                      <li className="item pt-3 p-18px">
                        Stainless steel welding
                      </li>
                      <li className="item pt-3 p-18px">On-site welding</li>
                      <li className="item pt-3 p-18px">
                        Heavy industrial welding
                      </li>
                      <li className="item pt-3 p-18px">Aluminum welding</li>
                      <li className="item pt-3 p-18px">Tube welding</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="row justify-content-center">
                  <div className="col-12 text-center">
                    <h4 className="weld-title text-center">Robotic</h4>
                    <img className="p-1" src={Robotic1} alt="project image" />
                    <img className="p-1" src={Robotic2} alt="project image" />
                    <img className="p-1" src={Robotic3} alt="project image" />
                    <img className="p-1" src={Robotic4} alt="project image" />
                  </div>
                  <div className="col-12 text-center pt-5">
                    <h4 className="weld-title text-center">TIG</h4>
                    <img className="p-1" src={TIG1} alt="project image" />
                    <img className="p-1" src={TIG2} alt="project image" />
                    <img className="p-1" src={TIG4} alt="project image" />
                    <img className="p-1" src={TIG3} alt="project image" />
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="row justify-content-center">
                  <div className="col-12 text-center">
                    <h4 className="weld-title text-center">MIG</h4>
                    <img className="p-1" src={MIG1} alt="project image" />
                    <img className="p-1" src={MIG2} alt="project image" />
                    <img className="p-1" src={MIG3} alt="project image" />
                    <img className="p-1" src={MIG4} alt="project image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Drill;
