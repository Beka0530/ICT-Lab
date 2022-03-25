import React from "react";
import Header from "../header";
import MainPage from "../main-page";
import AboutUs from '../about-us';
import Projects from '../our-projects';
import OurServices from '../our-services';
import Contacts from '../contacts';
import Footer from '../footer';
import "./app.css";

const App = () => {
  return (
    <>
      <Header />
        <MainPage />
        <AboutUs />
        <Projects />
        <OurServices />
        <Contacts />
        <Footer />
    </>
  );
};

export default App;
