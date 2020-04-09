import React, { Component } from "react";
import { link, coursesWrapper, coursesBackground } from "./Courses.module.css";
import { Link } from "react-router-dom";
import image1 from "../../assets/images/courses/makeupPhoto1.jpg";
import image2 from "../../assets/images/courses/makeupPhoto2.jpg";
import image3 from "../../assets/images/courses/makeupPhoto3.jpg";
import image4 from "../../assets/images/courses/makeupPhoto4.jpg";
import image5 from "../../assets/images/courses/makeupPhoto5.jpg";
import image6 from "../../assets/images/courses/makeupPhoto6.jpg";

const courses = [
  {
    id: 1,
    title: 'Базовый курс "Визажист"',
    to: "/education/basic_course",
    linkTitle: "Все о курсе",
    image: image1,
  },
  {
    id: 2,
    title: 'Курс "Экспресс-визажист"',
    to: "/education/express_makeup_course",
    linkTitle: "Все о курсе",
    image: image2,
  },
  {
    id: 3,
    title: "Курс повышения квалификации",
    to: "/education/refresher_course",
    linkTitle: "Все о курсе",
    image: image3,
  },
  {
    id: 4,
    title: 'Курс "Макияж для себя"',
    to: "/education/makeup_for_yourself_course",
    linkTitle: "Все о курсе",
    image: image4,
  },
  {
    id: 5,
    title: 'Курс по прическам "Актуальные тренды"',
    to: "/education/hairstyle_course",
    linkTitle: "Все о курсе",
    image: image5,
  },
];

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
      <>
        <div className={coursesBackground}></div>
        <ul className={coursesWrapper}>
          {this.mobileServices()}
          {courses.map((el) => (
            <li key={el.id}>
              <img src={el.image} alt="courses_image" />
              <div>
                <section>
                  <h4>{el.title}</h4>
                  <button>
                    <Link className={link} to={el.to}>
                      {el.linkTitle}
                    </Link>
                  </button>
                </section>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Courses;
