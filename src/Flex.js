import React, { Component } from "react";
import { render } from "react-dom";
import FlexImg from "../src/assets/flex-drill.png";
import SawPic from "../src/assets/saw.png";
import RollerPic from "../src/assets/roller.png";
import ShearPic from "../src/assets/Shear.png";
import MetalFinishPic from "../src/assets/apex.png";

class Drill extends Component {
  state = {};

  componentDidMount() {
    document.title = "Machining";
  }

  render() {
    return (
      <div className="container-fluid bg-white">
        <div className="row pt-5">
          <div className="container flex-container">
            <div className="row">
              <div className="col-md-7 flex-col py-5">
                <div className="row justify-content-center">
                  <div className="col-md-9">
                    <h1 className="text-white pt-2">Machining</h1>
                    <h5 className=" text-white">
                      Our manufacturing floor has the capability to:
                    </h5>
                    <p className="text-white p-16px ">
                      Drill, tap, thread, saw, grind, shear, roll, mill and
                      surface graining / deburring.
                    </p>
                    <p className="flex-text-box pt-3 text-white p-16px">
                      Our flex vertical machine center has a 2’-0” x 25’-0” bed
                      with an eight-tool turret with a maximum spindle speed of
                      3800 rpm. It’s capable of drilling, milling and tapping
                      accurately over the 25’-0”. The 4-axis design allows the
                      CNC controller to rotate the part, for offset processes.
                    </p>
                    <h2 className="laser-h2 text-white pt-5 w-50">
                      Type of machining
                    </h2>
                    <ul className="list laser-ul list-unstyled text-white">
                      <li className="item laser-item pt-2 letter-space-2px">
                        Drilling
                      </li>
                      <li className="item laser-item pt-2 letter-space-2px">
                        Milling
                      </li>
                      <li className="item laser-item pt-2 letter-space-2px">
                        Tapping
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="row justify-content-start">
                  <div className="col-12 px-0">
                    <img
                      src={FlexImg}
                      alt="Flex Drill image"
                      className="flex-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5 mt-5 fab-project-row pb-5">
          <div className="container fab-project-container">
            <div className="row py-5 justify-content-around border-bottom">
              <div className="col-md-5 col-sm-12 pt-md-5 mt-md-5">
                <div className="row justify-content-center">
                  <div className="col-12">
                    <h3 className="fab-project-name text-dark text-left">
                      Saw
                    </h3>
                  </div>
                  <div className="col-12 pt-2">
                    <p className="fab-project-details text-dark w-80">
                      The workhorse of the numerous saws in the facility is the
                      Marvel 2150A CNC control band saw. It has the maximum
                      profile capacity to cut 20”x 25” rectangles or 20” rounds
                      and mitering range of 60 degrees, with an 18’-0” feed
                      table. It has a shuttle travel speed of 60 fpm with a
                      positioning index of +/-.005”.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-sm-12 fab-project-pics text-center">
                <div className="row justify-content-end">
                  <div className="col-12">
                    <img className="w-100" src={SawPic} alt="project image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row py-5 justify-content-between border-bottom parent">
              <div className="col-md-5 col-sm-12 fab-project-pics text-center second-child">
                <div className="row justify-content-end">
                  <div className="col-12">
                    <img
                      className="pt-md-5 mt-md-5 w-100"
                      src={RollerPic}
                      alt="project image"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-sm-12 pt-4 mt-md-5 first-child">
                <div className="row justify-content-center">
                  <div className="col-12">
                    <h3 className="fab-project-name text-dark text-left">
                      Plate Roll
                    </h3>
                  </div>
                  <div className="col-12 pt-2">
                    <p className="fab-project-details text-dark w-80">
                      The four-roll plate roll has a 4’-0” width work area with
                      a maximum material thickness of 10ga (.135”).
                      Hydraulically operated with a drop-end for quick removal
                      of rolled parts. 4.72” diameter rolls have a digital
                      controller that reads out both bending rolls.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row py-5 mt-md-5 justify-content-around border-bottom">
              <div className="col-md-5 col-sm-12 pt-md-5 mt-md-5">
                <div className="row justify-content-center">
                  <div className="col-12">
                    <h3 className="fab-project-name text-dark text-left">
                      Shear
                    </h3>
                  </div>
                  <div className="col-12 pt-2">
                    <p className="fab-project-details text-dark w-80">
                      Our shear has the capability of a 10’-0” cut on 3/16”
                      thick materials. It has a simple digital control for back-
                      gauge, stroke length.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-sm-12 fab-project-pics text-center">
                <div className="row justify-content-end">
                  <div className="col-12">
                    <img className="w-100" src={ShearPic} alt="project image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row py-4 justify-content-between parent">
              <div className="col-md-5 col-sm-12 fab-project-pics text-center second-child">
                <div className="row justify-content-end">
                  <div className="col-12">
                    <img
                      className="pt-md-5 mt-md-5 w-75"
                      src={MetalFinishPic}
                      alt="project image"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-sm-12 pt-5 mt-md-5 first-child">
                <div className="row justify-content-center">
                  <div className="col-12 mt-md-5 pt-md-4">
                    <h3 className="fab-project-name text-dark text-left">
                      Metal Finishing
                    </h3>
                  </div>
                  <div className="col-12 pt-2">
                    <p className="fab-project-details text-dark w-80">
                      The single head metal finishing machine has 3’-0” wide
                      feed surface. It quickly grinds plasma slag or laser dross
                      and mill scale removal in a single pass. In addition, it
                      does grain finishing.
                    </p>
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
