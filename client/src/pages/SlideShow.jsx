import React, { useState, useEffect } from "react";
import Slide1 from "../slides/Slide1";
import Slide2 from "../slides/Slide2";
import Slide3 from "../slides/Slide3";
import Slide4 from "../slides/Slide4";
import Slide5 from "../slides/Slide5";
import Slide6 from "../slides/Slide6";
import Slide7 from "../slides/Slide7";
import Slide8 from "../slides/Slide8";
import Slide9 from "../slides/Slide9";
import Slide10 from "../slides/Slide10";
import Slide11 from "../slides/Slide11";
import Slide12 from "../slides/Slide12";
import Slide13 from "../slides/Slide13";
import Slide14 from "../slides/Slide14";
import Slide15 from "../slides/Slide15";
import Slide16 from "../slides/Slide16";
import Slide17 from "../slides/Slide17";
import backgroundvideo from "../assets/vid/0205.mp4"
const components = [
  <Slide1 />,
  <Slide2 />,
  <Slide3 />,
  <Slide4 />,
  <Slide5 />,
  <Slide6 />,
  <Slide7 />,
  <Slide8 />,
  <Slide9 />,
  <Slide10 />,
  <Slide11 />,
  <Slide12 />,
  <Slide13 />,
  <Slide14></Slide14>,
  <Slide15></Slide15>,
  <Slide16></Slide16>,
  <Slide17></Slide17>
];

const SlideShow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');  // Manage fade class state
  const [isFading, setIsFading] = useState(false);  // Track if the fade-out effect is active

  const changeSlide = () => {
    if (!isFading) {
      setIsFading(true);
      setFadeClass('fade-out');

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);

        setTimeout(() => {
          setFadeClass('fade-in-visible');
          setIsFading(false);
        }, 200);
      }, 400);
    }
  };

  useEffect(() => {
    const handleSpacebarPress = (event) => {
      if (event.code === "Space") {
        changeSlide();
      }
    };

    // Add event listener for spacebar
    window.addEventListener("keydown", handleSpacebarPress);

    // Add event listener for click
    const handleClick = () => {
      changeSlide();
    };
    window.addEventListener("click", handleClick);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener("keydown", handleSpacebarPress);
      window.removeEventListener("click", handleClick);
    };
  }, [isFading]); // Track fading state to prevent conflicting transitions

  return (
    <div className="slide-show-container">
      {/* Background video */}
      <video autoPlay loop muted className="background-video">
        <source src={backgroundvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div>
      {/* Slide content */}
      <div className="wrapper">
        <div className="show">
          <div className={`fade-in-container ${fadeClass}`}>
            {components[currentIndex]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
