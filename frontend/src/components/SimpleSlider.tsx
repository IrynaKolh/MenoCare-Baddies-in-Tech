/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Slider from "react-slick";
import women from "../assets/3women.png";
import "./Slider.css";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#AB1661",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#AB1661",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

const SimpleSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings}>
      <div className="slide">
        <h3 className="title">Educate yourself!</h3>
        <p>
          Feeling a little lost and unsure during this time? We have expert
          curated articles, guides and courses
        </p>
        <img src={women} alt="" />
      </div>
      <div className="slide">
        <h3 className="title">Track your symptoms, triggers and lifestyle. </h3>
        <p>
          We provide cutting-edge symptom tracking, visualizing trends, and
          generating personalized health reports.
        </p>
        <img src={women} alt="" />
      </div>
      <div className="slide">
        <h3 className="title">Get support from community and your partner</h3>
        <p>
          Feeling isolated? Access our 24/7 chat assistant, join a supportive
          community, engage in events/workshops, and benefit from partner
          outreach.
        </p>
        <img src={women} alt="" />
      </div>
      <div className="slide">
        <h3 className="title">Find effective solutions</h3>
        <img src={women} alt="" />
      </div>
      <div className="slide">
        <h3 className="title">Security and Privacy</h3>
        <p>
          Your data is safe with Menocare! We prioritize privacy with 2-factor
          verification and encryption, ensuring your sensitive information is
          secure
        </p>
        <img src={women} alt="" />
      </div>
    </Slider>
  );
};

export default SimpleSlider;
