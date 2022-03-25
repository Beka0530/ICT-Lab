import React from "react";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import "./projects.css";
import vak from '../images/web-3.jpg';
import fsa from '../images/fsa.jpg';
import mobile from '../images/mobile.png';
import webTablet from '../images/tablet.jpg';
import moreTablet from '../images/more-tablet.png';

const Projects = () => {
  return (
    <div className="project" id="projects">
      <div className="container">
        <h1 className="title-project">Наши проекты</h1>
        <Carousel autoplay className="carousel-all">
          <div>
            <img className="vak" src={vak} />
            <h3 className="carousel">Vak.kg</h3>
          </div>
          <div>
            <img className="fsa" src={fsa} />
            <h3 className="carousel">Fsa.kg</h3>
          </div>
          <div>
            <img src={mobile} className="mobile" />
            <h3 className="carousel">Mobile application</h3>
          </div>
          <div>
            <img src={webTablet} className="web" />
            <h3 className="carousel">Web application</h3>
          </div>
          <div>
            <img src={moreTablet} className="tablet" />
            <h3 className="carousel">Пространство-ТЕЗИС</h3>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
