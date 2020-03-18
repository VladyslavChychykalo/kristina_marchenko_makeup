import Loadable from "react-loadable";
import Loader from "../components/Loader/Loader";

// import HomePage from "../pages/HomePage/HomePage";
// import PortfolioPage from "../pages/PortfolioPage/PortfolioPage";
// import ServicesPage from "../pages/ServicesPage/ServicesPage";
// import CoursesPage from "../pages/CoursesPage/CoursesPage";
// import ContactsPage from "../pages/ContactsPage/ContactPage";
// import BasicCoursePage from "../pages/CoursesPage/BasicCoursePage/BasicCoursePage";
// import ExpressMakeUpPage from "../pages/CoursesPage/ExpressMakeUpPage/ExpressMakeUpPage";
// import HairstyleCoursePage from "../pages/CoursesPage/HairstyleCoursePage/HairstyleCoursePage";
// import MakeUpForYourSelfPage from "../pages/CoursesPage/MakeUpForYourSelfPage/MakeUpForYourSelfPage";
// import RefresherCoursePage from "../pages/CoursesPage/RefresherCoursePage/RefresherCoursePage";

const AsyncHomePage = Loadable({
  loader: () => import("../pages/HomePage/HomePage"),
  loading: Loader
});

const AsyncPortfolioPage = Loadable({
  loader: () => import("../pages/PortfolioPage/PortfolioPage"),
  loading: Loader
});

const AsyncServicesPage = Loadable({
  loader: () => import("../pages/ServicesPage/ServicesPage"),
  loading: Loader
});

const AsyncCoursesPage = Loadable({
  loader: () => import("../pages/CoursesPage/CoursesPage"),
  loading: Loader
});

const AsyncContactsPage = Loadable({
  loader: () => import("../pages/ContactsPage/ContactPage"),
  loading: Loader
});

const AsyncBasicCoursePage = Loadable({
  loader: () => import("../pages/CoursesPage/BasicCoursePage/BasicCoursePage"),
  loading: Loader
});

const AsyncExpressMakeUpPage = Loadable({
  loader: () =>
    import("../pages/CoursesPage/ExpressMakeUpPage/ExpressMakeUpPage"),
  loading: Loader
});

const AsyncHairstyleCoursePage = Loadable({
  loader: () =>
    import("../pages/CoursesPage/HairstyleCoursePage/HairstyleCoursePage"),
  loading: Loader
});

const AsyncMakeUpForYourSelfPage = Loadable({
  loader: () =>
    import("../pages/CoursesPage/MakeUpForYourSelfPage/MakeUpForYourSelfPage"),
  loading: Loader
});

const AsyncRefresherCoursePage = Loadable({
  loader: () =>
    import("../pages/CoursesPage/RefresherCoursePage/RefresherCoursePage"),
  loading: Loader
});

export default {
  HOME_PAGE: {
    path: "/home",
    component: AsyncHomePage
  },
  PORTFOLIO_PAGE: {
    path: "/portfolio",
    component: AsyncPortfolioPage
  },
  SERVICES_PAGE: {
    path: "/services",
    component: AsyncServicesPage
  },
  COURSES_PAGE: {
    path: "/education",
    component: AsyncCoursesPage
  },
  BASIC_COURSE_PAGE: {
    path: "/education/basic_course",
    component: AsyncBasicCoursePage
  },
  EXPRESS_MAKEUP_PAGE: {
    path: "/education/express_makeup_course",
    component: AsyncExpressMakeUpPage
  },
  HAIRSTYLE_COURSE_PAGE: {
    path: "/education/hairstyle_course",
    component: AsyncHairstyleCoursePage
  },
  MAKEUP_FOR_YOUSELF_PAGE: {
    path: "/education/makeup_for_yourself_course",
    component: AsyncMakeUpForYourSelfPage
  },
  REFRESHER_COURSE_PAGE: {
    path: "/education/refresher_course",
    component: AsyncRefresherCoursePage
  },
  CONTACTS_PAGE: {
    path: "/contacts",
    component: AsyncContactsPage
  }
};
