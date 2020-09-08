import React, { Component } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Press1 from "../assets/press1.jpg";
import Press2 from "../assets/press2.jpg";
import Press3 from "../assets/press3.jpg";
import Press4 from "../assets/press4.jpg";
import Press5 from "../assets/press5.jpg";
import Press6 from "../assets/press6.jpg";
import Press7 from "../assets/press7.jpg";
import Press8 from "../assets/press8.jpg";

class pressCarousel extends Component {
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
            <img src={Press8}></img>
          </Slide>
          <Slide index={1}>
            <img src={Press2}></img>
          </Slide>
          <Slide index={2}>
            <img src={Press3}></img>
          </Slide>
          <Slide index={3}>
            <img src={Press4}></img>
          </Slide>
          <Slide index={4}>
            <img src={Press6}></img>
          </Slide>
          <Slide index={5}>
            <img src={Press1}></img>
          </Slide>
          <Slide index={6}>
            <img src={Press7}></img>
          </Slide>
          <Slide index={7}>
            <img src={Press5}></img>
          </Slide>
        </Slider>
        <ButtonBack className="sliderBtn buttonBack">Back</ButtonBack>
        <ButtonNext className="sliderBtn buttonNext">Next</ButtonNext>
      </CarouselProvider>
    );
  }
}

export default pressCarousel;
