import React from "react";
import {
  expressCourseWrapper,
  signUpLink,
} from "./ExpressMakeUpCourse.module.css";
import { coursesBackground } from "../Courses.module.css";
import { Link } from "react-router-dom";

const ExpressMakeUpCourse = () => (
  <>
    <div className={coursesBackground}></div>
    <div className={expressCourseWrapper}>
      <img src="" alt="" />
      <h3>Курс "Экспресс-Визажист"</h3>
      <p>13 занятий</p>
      <p>Стоимость обучение в группе - 10000 грн</p>
      <p>Индивитуально - 13000грн</p>
      <p>
        В индивидуальном обучении есть возможность составить программу под ваши
        пожелания и подстроить график занятий так, чтоб было удобно именно вам.
      </p>
      <p>
        Один из самых удобных курсов для всех, кто хочет освоить новую
        профессию, но не имеет достаточно свободного времени чтоб пройти полный
        базовый курс.
      </p>
      <p>В чем особенность и главная "фишка"?</p>
      <p>
        В сжатые сроки вы получаете основную и необходимую для качественной
        работы визажистом информацию. Эффективность обучения и количество важной
        информации гарантированы.
      </p>
      <p>
        На этом курсе даются те же знания и навыки, как на базовом курсе, только
        по самым востребованным и необходимым для коммерческих работ темам.
      </p>
      <p>
        Курс состоит из 13 занятий (2 теоретических урока и 11 практических) и
        подойдёт вам, если:
      </p>
      <ul>
        <li>
          <span role="img" aria-label="mark">
            ✔️
          </span>
          Вы хотите освоить востребованные среди частных клиентов или салонные
          варианты макияжей;
        </li>
        <li>
          <span role="img" aria-label="mark">
            ✔️
          </span>
          Вам необходимо получить качественное образование менее, чем за 1
          месяц;
        </li>
        <li>
          <span role="img" aria-label="mark">
            ✔️
          </span>
          Уже работали или работаете визажистом, но необходимо обновить знания
          или подтянуть навыки в новых техниках;
        </li>
        <li>
          <span role="img" aria-label="mark">
            ✔️
          </span>
          Хотите попробовать профессию, но не уверены, что она вам подойдёт
          (кстати, в этом случае полученные знания вам пригодятся даже для
          улучшения качества личных макияжей, а так же после курса будете легко
          разбираться в актуальных видах макияжа, современной косметике и
          сможете краситься самостоятельно как профи).
        </li>
      </ul>

      <Link className={signUpLink} to="/contacts">
        <button>Записаться на курс</button>
      </Link>
    </div>
  </>
);

export default ExpressMakeUpCourse;