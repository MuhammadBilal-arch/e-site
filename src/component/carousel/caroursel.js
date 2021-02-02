import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./images/offer1.png";
import img2 from "./images/offer2.png";
import img3 from "./images/offer3.png";

export const Carousel = () => {
  const images = [
    {
      src: img1,
    },
    {
      src: img2,
    },
    {
      src: img3,
    },
    {
      src: img1,
    },
    {
      src: img2,
    },
    {
      src: img3,
    },
  ];

  var settings = {
    dots: false,
    // arrow: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const divStyle = {
    margin: "50px 50px",
    height: "100%",
    padding: "0px",
    cursor: "pointer",
    outline: "none",
    postion: "absolute",
    top: "740px",
  };
  return (
    <Slider {...settings} style={divStyle}>
      {images.map((item, index) => (
        <div key={index}>
          <img
            width="100%"
            height="100%"
            src={item.src}
            alt={index}
            style={{ padding: "0 10px", borderRadius: "2%" }}
          />
        </div>
      ))}
    </Slider>
  );
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "50px",
        height: "50px",
        backgroundColor: "black",
        borderRadius: "100%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "50px",
        height: "50px",
        backgroundColor: "black",
        borderRadius: "100%",
        zIndex: "10",
      }}
      onClick={onClick}
    />
  );
}
