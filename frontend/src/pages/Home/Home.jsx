import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import ServiceIcons from "../../components/ServiceIcons/ServiceIcons";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SmartCityDimensions from "../../components/SmartCityDimensions/SmartCityDimensions";
import SmartGovernance from "../../components/SmartGovernance/SmartGovernance";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <div className="home-content">
        <ServiceIcons />
        <SectionTitle title="Layanan Yang Banyak Diakses" />
        <SmartCityDimensions />
        <SmartGovernance />
      </div>
    </div>
  );
};

export default Home;
