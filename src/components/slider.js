import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Arrow(props) {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  className += " arrow";
  const char = props.type === "next" ? "👉" : "👈";
  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );
}

function customPaging(i) {
  return <span>{i + 1}</span>;
}

function appendDots(dots) {
  return (
    <div style={{ backgroundColor: "#eee" }}>
      <ul style={{ margin: "3px" }}> {dots} </ul>
    </div>
  );
}

export default function App() {
  const images = [
    <img className="img-fluid" src="../../images/slide1.png" alt="bath" />,
    <img className="img-fluid" src="../../images/slide1.png" alt="bath" />,
    <img className="img-fluid" src="../../images/slide1.png" alt="bath" />,
    <img className="img-fluid" src="../../images/slide1.png" alt="bath" />,
  ];

  const renderSlides = () =>
    images.map((num) => (
      <div>
        <h3>Slide {num}</h3>
      </div>
    ));

  return (
    <div className="App">
      <Slider
        nextArrow={<Arrow type="next" />}
        prevArrow={<Arrow type="prev" />}
        dots={true}
        customPaging={customPaging}
        appendDots={appendDots}
      >
        {renderSlides()}
      </Slider>
    </div>
  );
}
