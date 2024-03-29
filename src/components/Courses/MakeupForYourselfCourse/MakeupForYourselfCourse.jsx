import React from "react";
import {
  makeupForYourselfCourseWrapper,
  signUpLink,
} from "./MakeupForYourselfCourse.module.css";
import { coursesBackground } from "../Courses.module.css";
import { Link } from "react-router-dom";

const MakeupForYourselfCourse = () => (
  <>
    <div className={coursesBackground}></div>
    <div className={makeupForYourselfCourseWrapper}>
      <img src="" alt="" />
      <h3>Курс "макияж для себя"</h3>
      <p>1 индивидуальный урок (2-3 часа) - 2000грн.</p>
      <p>Курс из 5 индивидуальных занятий - 5000грн.</p>
      <p>
        Благодаря огромному опыту общения с клиентами преподавателя, на этом
        курсе вы гарантированно научитесь не просто делать себе макияж, а
        грамотно скрывать недостатки и подчеркивать достоинства своего лица, не
        только пользоваться совершенно любой косметикой, но и начнёте покупать
        самостоятельно именно подходящую вам.
      </p>
      <p>
        Также регулировать насыщенность макияжа, узнаете все секреты стойкости
        его. Варианты макияжа для изучения выбираете именно те, что интересны
        вам и уже на уроке их разбираете с преподавателем и учитесь подстраивать
        под себя.
      </p>
      <p>
        В студии собрана огромная коллекция не только профессиональной, но и
        люксовой косметики (Clarins, YSL, Dior, Bobbi Brown, Hourglass, MAC,
        Chanel, Nars, Shiseido, Tom Ford и т.д), для того, что бы удовлетворить
        пожелания даже самого изысканного клиента или дать возможность
        познакомиться с большим количеством брендов.
      </p>
      <p>Косметика, кисти, расходники предоставляются.</p>

      <Link className={signUpLink} to="/contacts">
        <button>Записаться на курс</button>
      </Link>
    </div>
  </>
);

export default MakeupForYourselfCourse;
