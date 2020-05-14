import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

const Wrapper = styled.div`
  width: 100%;
`;

const Page = styled.div`
  width: 100%;
`;

export default class SliderView extends React.Component {
  render() {
    return (
      <Wrapper>
        <Slider
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          infinite={false}
          dots={true}
        >
          <Page>
            <img
              className="img-fluid"
              src="../../images/slide1.png"
              alt="bath"
            />
          </Page>
          <Page>Page two</Page>
          <Page>Page three</Page>
        </Slider>
      </Wrapper>
    );
  }
}
