import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Arrow(props) {
  const next = <img src="../../images/arrow_active.png" alt="next" />;
  const prev = <img src="../../images/arrow_active2.png" alt="previous" />;

  let scroll = props.type === "next" ? "nextArrow" : "prevArrow";
  scroll += " arrow";
  const char = props.type === "next" ? next : prev;
  return (
    <span className={scroll} onClick={props.onClick}>
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

export default function renderSliders() {
  const images = [
    <img className="img-fluid" src="../../images/slide1.png" alt="bath" />,
    <img className="img-fluid" src="../../images/slide1.png" alt="bath" />,
    <img className="img-fluid" src="../../images/slide1.png" alt="bath" />,
    <img className="img-fluid" src="../../images/slide1.png" alt="bath" />,
  ];

  const renderSlides = () =>
    images.map((num) => (
      <div>
        <h3>{num}</h3>
      </div>
    ));

  return (
    <div className="renderSliders">
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
