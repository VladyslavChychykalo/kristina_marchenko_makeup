import React, { Component } from "react";
import { link, coursesWrapper } from "./Courses.module.css";
import { Link } from "react-router-dom";
import image1 from "../../assets/images/courses/makeupPhoto1.JPG";
import image2 from "../../assets/images/courses/makeupPhoto2.JPG";
import image3 from "../../assets/images/courses/makeupPhoto3.JPG";
import image4 from "../../assets/images/courses/makeupPhoto4.JPG";
import image5 from "../../assets/images/courses/makeupPhoto5.JPG";
import image6 from "../../assets/images/courses/makeupPhoto6.JPG";

class Courses extends Component {
  mobileServices = () => {
    const windowWidth = document.documentElement.clientWidth;

    if (windowWidth >= 1200) {
      return (
        <li>
          <img src={image6} alt="" />
          <div>
            <section>
              <h4>Услуги</h4>
              <button>
                <Link className={link} to="/services">
                  Все об услугах
                </Link>
              </button>
            </section>
          </div>
        </li>
      );
    }
  };

  render() {
    return (
      <ul className={coursesWrapper}>
        {this.mobileServices()}
        <li>
          <img src={image1} alt="" />
          <div>
            <section>
              <h4>Базовый курс "Визажист"</h4>
              {/* <p>
            Полное погружение в профессию визажиста. Подходит всем, кто мечтает
            научиться делать не просто красивые, а качественные макияжи,
            подходящие любому типу внешности, со знанием анатомии и пониманием
            логики цветов.
          </p> */}
              <button>
                <Link className={link} to="/education/basic_course">
                  Все о курсе
                </Link>
              </button>
            </section>
          </div>
        </li>
        <li>
          <img src={image2} alt="" />
          <div>
            <section>
              <h4>Курс "Экспресс-визажист"</h4>
              {/* <p>
            Самый удобный курс для тех, кто хочет освоить новую профессию, но не
            имеет достаточно свободного времени, чтобы пройти полый базовый
            курс. В сжатые сроки вы получаете основную необходимую информацию
            для работы визажистом.
          </p> */}
              <button>
                <Link className={link} to="/education/express_makeup_course">
                  Все о курсе
                </Link>
              </button>
            </section>
          </div>
        </li>
        <li>
          <img src={image3} alt="" />
          <div>
            <section>
              <h4>Курс повышения квалификации</h4>
              {/* <p>
            Курс для визажистов, которые проходили базу давно и хотят обновить
            знания; тех, кто чувствует недостаток информации и навыков после
            пройденной ранее базы; а также желающих научиться создавать
            креативные образы.
          </p> */}
              <button>
                <Link className={link} to="/education/refresher_course">
                  Все о курсе
                </Link>
              </button>
            </section>
          </div>
        </li>
        <li>
          <img src={image4} alt="" />
          <div>
            <section>
              <h4>Курс "Макияж для себя"</h4>
              {/* <p>
            На этом курсе вы гарантированно научитесь не просто делать себе
            макияж, а грамотно скрывать недостатки и подчеркивать достоинства
            своего лица, правильно подбирать и использовать подходящую именно
            Вам косметику.
          </p> */}
              <button>
                <Link
                  className={link}
                  to="/education/makeup_for_yourself_course"
                >
                  Все о курсе
                </Link>
              </button>
            </section>
          </div>
        </li>
        <li>
          <img src={image5} alt="" />
          <div>
            <section>
              <h4>Курс по прическам "Актуальные тренды"</h4>
              {/* <p>
            Курс для тех, кто хочет быть мастером-универсалом и освоить самые
            коммерческие укладки и причёски, чтобы создавать полный образ для
            клиента. А также для работающих мастеров, которые хотят расширить
            базу знаний и прокачать навыки.
          </p> */}
              <button>
                <Link className={link} to="/education/hairstyle_course">
                  Все о курсе
                </Link>
              </button>
            </section>
          </div>
        </li>
      </ul>
    );
  }
}

export default Courses;
