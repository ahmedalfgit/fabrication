import React, { Component } from "react";

import fusionDesign from "../src/assets/fusion-design.jpg";
import autoCadDesign from "../src/assets/autocad-design.jpg";
import solidWorksDesign from "../src/assets/solidWorks-design.jpg";

class design extends Component {
  state = {};

  componentDidMount() {
    document.title = "Design";
  }

  render() {
    return (
      <div className="container-fluid pt-5 design-container pb-5">
        <div className="row design-row mt-md-5">
          <div className="container design-container">
            <div className="row justify-content-between">
              <div className="col-md-5 mt-md-4 pt-md-3">
                <div className="row">
                  <div className="col-10">
                    <h1 className="text-white">Design</h1>
                  </div>
                  <div className="col-md-12">
                    <div className="design-box">
                      <p className="design-box text-white p-18px">
                        Whether it’s an idea in your head or a pencil sketch to
                        a 3d drawing, we want to assist in bringing it to
                        fruition. Our engineering team uses design for
                        manufacturing and assembly techniques to minimize
                        product costs $. <br /> We have a multitude of tools
                        that will address your needs in the areas of cutting
                        shapes to bending and welding. No matter what the size
                        of the project we would be happy to assist.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12 pt-5">
                    <h2 className="design-software-h2 text-white ">
                      Design software
                    </h2>
                    <ul className="list softwareList list-unstyled text-white">
                      <li className="item software-item pt-2 letter-space-2px">
                        SolidWorks
                      </li>
                      <li className="item software-item pt-2 letter-space-2px">
                        AutoCAD
                      </li>
                      <li className="item software-item pt-2 letter-space-2px">
                        Illustrator
                      </li>
                      <li className="item software-item pt-2 letter-space-2px">
                        Fusion 360
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-right">
                <div className="row justify-content-end">
                  <div className="col-md-9">
                    <img
                      className="first-row-imgs w-100"
                      src={fusionDesign}
                      alt="napkin sketch"
                    ></img>
                  </div>
                </div>
                <div className="row justify-content-center pt-5">
                  <div className="col-md-9">
                    <img
                      className="first-row-imgs w-100"
                      src={autoCadDesign}
                      alt="napkin sketch"
                    ></img>
                  </div>
                </div>
                <div className="row justify-content-start pt-5">
                  <div className="col-md-9">
                    <img
                      className="first-row-imgs w-100"
                      src={solidWorksDesign}
                      alt="napkin sketch"
                    ></img>
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

export default design;
