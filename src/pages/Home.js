import React from "react";
import { ADIMG } from "../assets";
import ImageComponent from "../components/ImageComponent";
import "../styles.css";
import AnounceComponent from "./HomeComponents/AnounceComponent";
import BlogComponent from "./HomeComponents/BlogComponent";
import FooterComponet from "./HomeComponents/FooterComponet";
import JobComponent from "./HomeComponents/JobComponent";
import NavBar from "./HomeComponents/NavBar";
import RefComponent from "./HomeComponents/RefComponent";
import ResumeComponent from "./HomeComponents/ResumeComponent";
import TechSecetion from "./HomeComponents/TechSecetion";
import TopBar from "./HomeComponents/TopBar";
import TrainingComponent from "./HomeComponents/TrainingComponent";

function Home() {
  console.log(window);
  return (
    <div className="home-main ">
      <TopBar />
      <NavBar />
      <TechSecetion />
      <JobComponent />
      <AnounceComponent />
      <TrainingComponent />
      <ResumeComponent />
      <BlogComponent />
      <div className="mar-img">
        <ImageComponent src={ADIMG} />
      </div>
      <RefComponent />
      <FooterComponet />
    </div>
  );
}

export default Home;
