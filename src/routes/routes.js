import { lazy } from "react";

import HomePage from "../pages/HomePage/HomePage";
import PortfolioPage from "../pages/PortfolioPage/PortfolioPage";
import ServicesPage from "../pages/ServicesPage/ServicesPage";
import CoursesPage from "../pages/CoursesPage/CoursesPage";
import ContactsPage from "../pages/ContactsPage/ContactPage";
import BasicCoursePage from "../pages/CoursesPage/BasicCoursePage/BasicCoursePage";
import ExpressMakeUpPage from "../pages/CoursesPage/ExpressMakeUpPage/ExpressMakeUpPage";
import HairstyleCoursePage from "../pages/CoursesPage/HairstyleCoursePage/HairstyleCoursePage";
import MakeUpForYourSelfPage from "../pages/CoursesPage/MakeUpForYourSelfPage/MakeUpForYourSelfPage";
import RefresherCoursePage from "../pages/CoursesPage/RefresherCoursePage/RefresherCoursePage";

const AsyncHomePage = lazy(() => import("../pages/HomePage/HomePage"));

const AsyncCoursesPage = lazy(() =>
  import(
    "../pages/CoursesPage/CoursesPage" /* webpackChunkName: "courses-page" */
  )
);

const AsyncContactPage = lazy(() =>
  import("../pages/ContactsPage/ContactPage")
);

export default {
  HOME_PAGE: {
    path: "/home",
    component: AsyncHomePage
  },
  PORTFOLIO_PAGE: {
    path: "/portfolio",
    component: PortfolioPage
  },
  SERVICES_PAGE: {
    path: "/services",
    component: ServicesPage
  },
  COURSES_PAGE: {
    path: "/education",
    component: AsyncCoursesPage
  },
  BASIC_COURSE_PAGE: {
    path: "/education/basic_course",
    component: BasicCoursePage
  },
  EXPRESS_MAKEUP_PAGE: {
    path: "/education/express_makeup_course",
    component: ExpressMakeUpPage
  },
  HAIRSTYLE_COURSE_PAGE: {
    path: "/education/hairstyle_course",
    component: HairstyleCoursePage
  },
  MAKEUP_FOR_YOUSELF_PAGE: {
    path: "/education/makeup_for_yourself_course",
    component: MakeUpForYourSelfPage
  },
  REFRESHER_COURSE_PAGE: {
    path: "/education/refresher_course",
    component: RefresherCoursePage
  },
  CONTACTS_PAGE: {
    path: "/contacts",
    component: AsyncContactPage
  }
};
