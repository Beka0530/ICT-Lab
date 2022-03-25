import "./ourServices.css";
import web from "../images/web-develop.svg";
import photoShop from "../images/photo.webp";
import project from "../images/project.avif";

const OurServices = () => {
  return (
    <div className="container" id="services">
      <div className="services">
        <div className="title-services">
          <h1>Наши услуги</h1>
        </div>
        <div className="blocks">
          <div className="first-block">
            <div className="block-info">
              <div className="block-title">
                <div className="block-text">
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
                  <h4>Разработка сайтов</h4>
                  <p className="pshka">
                    Разработка программного обеспечения для информационных и
                    вычислительных систем
                  </p>
                </div>
                <img src={web} className="dev" />
              </div>
            </div>
          </div>
          <div className="second-block">
            <div className="block-info-two">
              <div className="block-title">
                <div className="block-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    fill="currentColor"
                    class="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fill-rule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                    />
                  </svg>
                  <i class="bi bi-pencil-square"></i>
                  <h4>Дизайн</h4>
                  <p className="pshka">
                    Дизайн: веб-сайты, печатные рекламы, логотипы, визитки,
                    макеты, шаблоны отчетов и др.
                  </p>
                </div>
                <img src={photoShop} className="photo" />
              </div>
            </div>
          </div>
          <div className="third-block">
            <div className="block-info-three">
              <div className="block-title">
                <div className="block-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    fill="currentColor"
                    class="bi bi-card-checklist"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                    <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
                  </svg>
                  <i class="bi bi-card-checklist"></i>
                  <h4>Управление проектами</h4>
                  <p className="pshka">
                    Установка и настройка автоматизированных систем(Офисные
                    приложения и другие лицензионные программы)
                  </p>
                </div>
                <img src={project} className="project" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
