import React from "react";
import "./header.css";
import logo from "../images/041_network_devices_mobile-512.png";

const Header = () => {
  document.addEventListener("scroll", function (e) {
    if (window.pageYOffset > 200) {
      document.documentElement.style.setProperty("--opacity", 1);
    } else {
      document.documentElement.style.setProperty("--opacity", 0.3);
    }
  });
  return (
    <div className="header">
      <div className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="currentColor"
          class="bi bi-laptop"
          viewBox="0 0 16 16"
        >
          <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
        </svg>
        <i class="bi bi-laptop"></i>
        <h2>ICT Lab</h2>
      </div>
      <div className="links">
        <ul>
          <li>
            <a href="#main">Главная</a>
          </li>
          <li>
            <a href="#about">О нас</a>
          </li>
          <li>
            <a href="#projects">Проекты</a>
          </li>
          <li>
            <a href="#services">Наши услуги</a>
          </li>
          <li>
            <a href="#contacts">Контакты</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
