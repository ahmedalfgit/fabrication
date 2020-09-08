import React, { Component } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Laser1 from "../assets/laser1.jpg";
import Laser2 from "../assets/laser2.jpg";
import Laser3 from "../assets/laser3.jpg";
import Laser4 from "../assets/laser4.jpg";
import Laser5 from "../assets/laser5.jpg";
import Laser6 from "../assets/laser6.jpg";
import Laser7 from "../assets/laser7.jpg";
import Laser8 from "../assets/laser8.jpg";

class laserCarousel extends Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={8}
        touchEnabled={true}
      >
        <Slider className="carousel-height">
          <Slide index={0}>
            <img src={Laser8}></img>
          </Slide>
          <Slide index={1}>
            <img src={Laser5}></img>
          </Slide>
          <Slide index={2}>
            <img src={Laser3}></img>
          </Slide>
          <Slide index={3}>
            <img src={Laser2}></img>
          </Slide>
          <Slide index={4}>
            <img src={Laser6}></img>
          </Slide>
          <Slide index={5}>
            <img src={Laser1}></img>
          </Slide>
          <Slide index={6}>
            <img src={Laser7}></img>
          </Slide>
          <Slide index={7}>
            <img src={Laser4}></img>
          </Slide>
        </Slider>
        <ButtonBack className="sliderBtn buttonBack">Back</ButtonBack>
        <ButtonNext className="sliderBtn buttonNext">Next</ButtonNext>
      </CarouselProvider>
    );
  }
}

export default laserCarousel;
