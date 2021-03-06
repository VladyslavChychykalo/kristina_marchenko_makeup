import React from "react";
import {
  hairstyleCourseWrapper,
  signUpLink,
} from "./HairstyleCourse.module.css";
import { coursesBackground } from "../Courses.module.css";
import { Link } from "react-router-dom";

const HairstyleCourse = () => (
  <>
    <div className={coursesBackground}></div>
    <div className={hairstyleCourseWrapper}>
      <img src="" alt="" />
      <h3>Курс "hair pro"</h3>
      <p>4 занятий, индивидуально - 6000грн.</p>
      <p>6 занятий, индивидуально - 8000 грн.</p>
      <p>
        Это курс для тех, кто хочет быть мастером-универсалом и освоить самые
        коммерческие укладки, причёски, чтоб уметь создать полный образ для
        клиента. Или уже работающим мастерам, которые хотят расширить базу своих
        знаний, попробовать новое и прокачать свои навыки.
      </p>
      <p>
        В курс включены только актуальные и востребованные укладки: все виды и
        способы накруток, голливудская волна, калифорнийская, локоны с выкладкой
        и смешанная накрутка, небрежные укладки. Также современные виды
        причёсок: высокий и низкий пучок, высокий хвост, греческая коса.
      </p>
      <p>Программа курса включает:</p>
      <ul>
        <li>
          <span role="img" aria-label="mark">
            ✔️
          </span>
          Все про современные инструменты и средства для стайлинга;
        </li>
        <li>
          <span role="img" aria-label="mark">
            ✔️
          </span>
          Виды волос и специфику работу с ними;
        </li>
        <li>
          <span role="img" aria-label="mark">
            ✔️
          </span>
          Как зависит форма прически от формы лица/черепа и какие прически
          подходят тем или другим клиентам;
        </li>
        <li>
          <span role="img" aria-label="mark">
            ✔️
          </span>
          Все про создание стойких объёмов и легкоразбираемых начесов;
        </li>
        <li>
          <span role="img" aria-label="mark">
            ✔️
          </span>
          Способы трансформации укладки в причёску;
        </li>
        <li>
          <span role="img" aria-label="mark">
            ✔️
          </span>
          Создание суперстойких, но при этом воздушных укладок ( без заливания
          лаком).
        </li>
      </ul>
      <p>
        Программа индивидуального курса оговаривается и ее возможно подстроить
        именно под ваши пожелания.
      </p>

      <Link className={signUpLink} to="/contacts">
        <button>Записаться на курс</button>
      </Link>
    </div>
  </>
);

export default HairstyleCourse;
