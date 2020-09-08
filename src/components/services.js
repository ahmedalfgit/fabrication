import React, { Component } from "react";
import weldingIcon from "../assets/welding-icon.png";
import laser from "../assets/laser.jpg";
import press from "../assets/press-brake.jpg";
import felx from "../assets/flex.jpg";
import welder from "../assets/welder.jpg";

class Services extends Component {
  state = {
    showBox: false,
  };

  handleShowBox = () => this.setState({ showBox: !this.state.showBox });
  handleHideBox = () => this.setState({ showBox: !this.state.showBox });

  render() {
    return (
      <div className="container pt-5 w-1396 pb-5">
        <div className="row pt-5 justify-content-between">
          <div className="laserBox row p-0 m-0">
            <div className="col-md-6 p-0 m-0 w-648">
              <div className="laserBox row p-0 m-0">
                <div className={`col-md-6 p-0 halfImg text-right`}>
                  <img src={laser} alt="Laser image" />
                </div>
                <div className={`col-md-6 contentBox text-center p-0 m-0`}>
                  <div className="box">
                    <h3 className={`text-white font-weight-bolder boxH1`}>
                      Laser Cutting
                    </h3>
                    <p className={`text-left text-white boxText`}>
                      <ul className="list">
                        <li className="item">
                          Capability to quickly and accurately cut up to a 6’ x
                          12’ sheet of material
                        </li>
                        <li className="item pt-3">
                          Materials include up to a ½” thick mild steel,
                          stainless steel , or aluminum
                        </li>
                        <li className="item pt-3">
                          Ability to turn napkin sketches into precision parts
                          in a matter of minutes
                        </li>
                      </ul>
                    </p>
                    <button
                      type="button"
                      className={`btn btn-md mt-3 btn-orange btn-block w-75`}
                    >
                      <a href="/Laser" className="text-white a-link">
                        More
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-0 m-0 w-648">
            <div className="laserBox row p-0 m-0">
              <div className={`col-md-6 p-0 halfImg text-right`}>
                <img src={press} alt="Laser image" />
              </div>
              <div className={`col-md-6 contentBox text-center p-0 m-0`}>
                <div className="box">
                  <h3 className={`text-white font-weight-bolder boxH1`}>
                    Metal Forming
                  </h3>
                  <p className={`text-left text-white boxText`}>
                    <ul className="list">
                      <li className="item">
                        Ability to form sheet metal parts up to ½” thick and up
                        to 14 feet long
                      </li>
                      <li className="item pt-3">
                        The capacity of this press brake combined with the
                        expertise of our engineering team enable us to bend
                        large parts or parts with unusual geometry
                      </li>
                      <li className="item pt-3">
                        Well-suited for prototyping and experimental bending
                      </li>
                    </ul>
                  </p>
                  <button
                    type="button"
                    className={`btn btn-md mt-3 btn-orange btn-block w-75`}
                  >
                    <a href="/Press" className="text-white a-link">
                      More
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-0 m-0 w-648 mt-5">
            <div className="laserBox row p-0 m-0">
              <div className={`col-md-6 p-0 halfImg text-right`}>
                <img src={felx} alt="Laserimage" />
              </div>
              <div className={`col-md-6 contentBox text-center p-0 m-0`}>
                <div className="box">
                  <h3 className={`text-white font-weight-bolder boxH1`}>
                    Machining
                  </h3>
                  <p className={`text-left text-white boxText`}>
                    <ul className="list">
                      <li className="item">
                        Our FlexDrill CNC operators highlight our company's
                        ability to machine by drilling, milling, and tapping.
                      </li>
                      <li className="item pt-3">
                        2' x 25' workable area and gantry style 6000 rpm
                      </li>
                      <li className="item pt-3">
                        The headstock on the end of the machine adds another
                        360° axis that allows the operator to machine on
                        different surfaces of the stock material
                      </li>
                    </ul>
                  </p>
                  <button
                    type="button"
                    className={`btn btn-md mt-3 btn-orange btn-block w-75`}
                  >
                    <a href="/Flex" className="text-white a-link">
                      More
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-0 m-0 w-648 mt-5">
            <div className="laserBox row p-0 m-0">
              <div className={`col-md-6 p-0 halfImg text-right`}>
                <img src={welder} alt="Laser image" />
              </div>
              <div className={`col-md-6 contentBox text-center p-0 m-0`}>
                <div className="box">
                  <h3 className={`text-white font-weight-bolder boxH1`}>
                    Welding
                  </h3>
                  <p className={`text-left text-white boxText`}>
                    <ul className="list">
                      <li className="item">
                        Robotic, stick, MIG, and TIG welding
                      </li>
                      <li className="item pt-3">
                        Fast, consistent, and high quality weld
                      </li>
                      <li className="item pt-3">
                        4' x 14' bed & 6 axes makes long part welding easy
                      </li>
                    </ul>
                  </p>
                  <button
                    type="button"
                    className={`btn btn-md mt-3 btn-orange btn-block w-75`}
                  >
                    <a href="/Weld" className="text-white a-link">
                      More
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
