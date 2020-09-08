import React, { Component } from "react";
import { render } from "react-dom";
import { Stage, Layer, Rect } from "react-konva";
import ProjectImg from "../src/assets/fab-project-img-1.jpg";
// import Konva from 'konva';

class Laser extends Component {
  state = {
    x: 0,
    y: 0,
    color: "#107E7D",
  };

  handleX = (e) => {
    this.setState({
      x: (e.target.value * 96) / 2.149,
    });
  };

  handleY = (e) => {
    this.setState({
      y: (e.target.value * 96) / 2.149,
    });
  };

  handleSubmitting = () => {};

  render() {
    return (
      <div className="container-fluid pt-5">
        <div className="row pt-5">
          <div className="container laser-container">
            <div className="row justify-content-around">
              <div className="col-5">
                <h1 className="metal-laser-cutting text-white pt-2">
                  Metal Laser Cutting
                </h1>
                <p className="metal-laser-cutting-text-box pt-3 text-white p-18px">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie consequat,
                  vel illum dolore eu feu Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh euismod
                  tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                  wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                  consequat. Duis autem vel eum iriure dolor in hendrerit in
                  vulputate velit esse molestie consequat, vel illum dolore eu
                  feu
                </p>
                <h2 className="laser-h2 text-white pt-5">We can laser cut</h2>
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
              <div className="col-5 px-0 laser-bed-col">
                <div className="col-12 pt-5 pb-2">
                  <p className="text-white text-center">
                    Check if your metal sheet fits in our laser bed
                  </p>
                </div>
                <form onSubmit={this.handleSubmitting.bind(this)}>
                  <input
                    type="number"
                    // value={this.state.x}
                    onChange={this.handleX.bind(this)}
                    placeholder="Height"
                    className="w-47 p-2 width-input mr-3"
                    project-input
                  />
                  <input
                    type="number"
                    // value={this.state.y}
                    onChange={this.handleY.bind(this)}
                    placeholder="Width"
                    className="w-47 p-2 width-input ml-3"
                    project-input
                  />
                  {/* <input
										type="submit"
										value={'Send'}
										className="btn btn-primary w-50 p-2 mt-4"
									/> */}
                </form>
                <Stage width={268} height={536} className="laser-bed mt-4 mb-5">
                  <Layer>
                    <Rect
                      x={0}
                      y={0}
                      width={this.state.y}
                      height={this.state.x}
                      fill={this.state.color}
                      shadowBlur={10}
                    ></Rect>
                  </Layer>
                </Stage>
                <div className="col-12">
                  <p className="text-white text-center"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5 mt-5 fab-project-row pb-5">
          <div className="container fab-project-container">
            <div className="row py-5 justify-content-around">
              <div className="col-5">
                <div className="row justify-content-center">
                  <div className="col-12">
                    <h3 className="fab-project-name text-dark text-center">
                      Comptek
                    </h3>
                  </div>
                  <div className="col-11 pt-3">
                    <p className="fab-project-details text-dark">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad Lorem ipsum
                      dolor sit amet, consectetuer adipiscing elit, sed diam
                      nonummy nibh euismod tincidunt ut laoreet dolore magna
                      aliquam erat volutpat. Ut wisi enim adminim veniam, quis
                      nostrud exerci tation ullamcorper suscipit lobortis nisl
                      ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div className="col-12 pt-2 text-center">
                    <img className="p-1" src={ProjectImg} alt="project image" />
                    <img className="p-1" src={ProjectImg} alt="project image" />
                    <img className="p-1" src={ProjectImg} alt="project image" />
                    <img className="p-1" src={ProjectImg} alt="project image" />
                    <img className="p-1" src={ProjectImg} alt="project image" />
                    <img className="p-1" src={ProjectImg} alt="project image" />
                  </div>
                </div>
              </div>
              <div className="col-5 fab-project-pics text-center">
                <div className="row justify-content-end">
                  <div className="col-12">
                    <h3 className="fab-project-pics-h2 text-dark text-center">
                      Photos
                    </h3>
                  </div>
                  <div className="col-12">
                    <img className="p-1" src={ProjectImg} alt="project image" />
                    <img className="p-1" src={ProjectImg} alt="project image" />
                    <img className="p-1" src={ProjectImg} alt="project image" />
                    <img className="p-1" src={ProjectImg} alt="project image" />
                    <img className="p-1" src={ProjectImg} alt="project image" />
                    <img className="p-1" src={ProjectImg} alt="project image" />
                    <img className="p-1" src={ProjectImg} alt="project image" />
                    <img className="p-1" src={ProjectImg} alt="project image" />
                    <img className="p-1" src={ProjectImg} alt="project image" />
                    <img className="p-1" src={ProjectImg} alt="project image" />
                    <img className="p-1" src={ProjectImg} alt="project image" />
                    <img className="p-1" src={ProjectImg} alt="project image" />
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

export default Laser;
