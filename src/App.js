import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import bgImg from "../src/assets/background-image.jpg"
import Homeheading from "./components/Homeheading";
import Banner from "./components/Banner";
import CustomInput from "./components/CustomInput";
import BoxGrid from "./components/BoxGrid";
import TechContainer from "./components/TechContainer";
import ValueBox from "./components/ValueBox";
import Corporate from "./components/Corporate";
import Footer from "./components/Footer";
import PopContact from "./components/PopContact";
import ButtonModal from "./components/ButtonModal";

function App() {
  const services = "Freight over land using trucks of all sizes where possible keeping transit time and costs at their lowest. Monitoring the movement all over the route and tracking from source to delivery point";

  const customHeading = (
    <div className="jewivz mb-5">
      What We <span>Do</span>
    </div>
  );

  const wedo = (
    <div className="jewivz mb-5" style={{marginTop: '3rem', marginBottom: '40px'}}>
      Why Choose <span>Us</span>
      <h1 className="wedo" style={{fontSize: "1.5rem"}}>We stand on our words</h1>
    </div>
  );








  return (
    <>
      <div style={{padding: "0.1PX", overflow: "hidden"}}>
      <Navbar />
      <Hero />
      <Homeheading header={customHeading}/>
      <Banner banner="ROAD TRANSPORTATION / HAULAGE"/>
      <Service details={services} image={<img src={bgImg} alt="Service img" />} flexDirection />
      <Banner banner="TRUCK SALES"/>
      <Service details={services} image={<img src={bgImg} alt="Service img" />} />
      <Banner banner="CUSTOM CLEARANCE" />
      <Service details={services} image={<img src={bgImg} alt="Service img" />} flexDirection/>
      <Homeheading header={<CustomInput />} />
      <Homeheading header={wedo}/>
      <BoxGrid />
      <TechContainer/>
      <ValueBox />
      <Corporate />
      <PopContact modal={<ButtonModal />} />
      <Footer />
      </div>
    </>
  );
}

export default App;
