import React from "react";
import backVideo from '../assets/background-video.mp4';
import { ReactComponent as BtnSvg } from "../components/btn.svg";


const Hero = () => {
  const videoSource = backVideo;

  const scrollToNextPage = (e) => {
    e.preventDefault();
  
    const targetElement = document.querySelector("#next-page");
    const offset = targetElement.offsetTop; // Get the offset of the target element
    const scrollOptions = {
      top: offset,
      behavior: "smooth", // Enable smooth scrolling behavior
    };
  
    // Scroll to the target element with custom scroll speed
    scrollTo(scrollOptions);
  };

  const scrollTo = (scrollOptions) => {
    const start = window.pageYOffset; // Get the current scroll position
    const target = scrollOptions.top;
    const duration = 1000; // Set the duration of the scroll animation (in milliseconds)
    const startTime = "now" in window.performance ? performance.now() : new Date().getTime();
  
    const scroll = () => {
      const currentTime =
        "now" in window.performance ? performance.now() : new Date().getTime();
      const elapsed = currentTime - startTime;
      const easing = easeInOutQuad(elapsed, start, target - start, duration);
  
      window.scrollTo(0, easing);
  
      if (elapsed < duration) {
        requestAnimationFrame(scroll);
      }
    };
  
    scroll();
  };
  
  // Easing function for smooth scroll animation
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };



  return (
    <div className="hero">
      <video autoPlay muted loop className="background-video">
        <source src={videoSource} type="video/mp4" />
      </video>
      <div className="hero-content">
        <h1 className="company-name"><span>Agbusi</span> LOGISTICS GLOBAL</h1>
        <p className="company-details">A Tech-Enabled Truck Logistics and Sales company in Nigeria.</p>
        <button className="call-button hero-call-button">WE ARE HERE FOR YOU, CALL US</button>

        <a href="#next-page" onClick={scrollToNextPage}>
        <div className="arrow-down-animation">
          <span className="arrow"></span>
          <span className="arrow"></span>
          <span className="arrow"></span>
          <span className="arrow"></span>
          <BtnSvg class="svg-icon" style={{width: "60", height: "60"}}/>
        </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
