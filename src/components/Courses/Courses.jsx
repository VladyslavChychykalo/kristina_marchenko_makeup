import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Media from "react-media";
import { link, coursesWrapper, coursesBackground } from "./Courses.module.css";
import LoaderForComponents from "../LoaderForComponents/LoaderForComponents";
import { Link } from "react-router-dom";
import image1 from "../../assets/images/courses/makeupPhoto1.JPG";
import image2 from "../../assets/images/courses/makeupPhoto2.JPG";
import image3 from "../../assets/images/courses/makeupPhoto3.JPG";
import image4 from "../../assets/images/courses/makeupPhoto4.JPG";
import image5 from "../../assets/images/courses/makeupPhoto5.JPG";
import image6 from "../../assets/images/courses/makeupPhoto6.JPG";

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
    title: 'Курс по прическам "HAIR PRO"',
    to: "/education/hairstyle_course",
    linkTitle: "Все о курсе",
    image: image5,
  },
];

class Courses extends Component {
  state = {
    imageIsReady: false,
  };

  componentDidMount() {
    const img1 = new Image();
    const img2 = new Image();
    const img3 = new Image();
    const img4 = new Image();
    const img5 = new Image();
    const img6 = new Image();

    img1.src = image1;
    img2.src = image2;
    img3.src = image3;
    img4.src = image4;
    img5.src = image5;
    img6.src = image6;

    img1.onload = () => {
      this.setState({ imageIsReady: true });
    };

    img2.onload = () => {
      this.setState({ imageIsReady: true });
    };

    img3.onload = () => {
      this.setState({ imageIsReady: true });
    };

    img4.onload = () => {
      this.setState({ imageIsReady: true });
    };

    img5.onload = () => {
      this.setState({ imageIsReady: true });
    };

    img6.onload = () => {
      this.setState({ imageIsReady: true });
    };
  }

  render() {
    const { imageIsReady } = this.state;

    if (!imageIsReady) {
      return <LoaderForComponents />;
    }

    return (
      <div>
        <Helmet>
          <title>Курсы</title>
          <link
            rel="canonical"
            href="http://www.makeupschoolmarchenko.com.ua/#/courses"
          />
          <meta name="description" content="Выберите подходящий курсы" />
        </Helmet>

        <div className={coursesBackground}></div>
        <ul className={coursesWrapper}>
          <Media queries={{ small: { minWidth: 1199 } }}>
            {(matches) =>
              matches.small && (
                <li>
                  <img loading="lazy" src={image6} alt="" />
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
              )
            }
          </Media>
          {courses.map((el) => (
            <li key={el.id}>
              <img loading="lazy" src={el.image} alt="courses_image" />
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
      </div>
    );
  }
}

export default Courses;
