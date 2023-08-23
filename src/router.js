import { createRouter, createWebHistory } from "vue-router";
import NotFound from "./pages/NotFound.vue";
import HomePage from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutPage.vue";
import BlogPage from "./pages/BlogPage.vue";
import BlogDetails from "./pages/BlogDetails.vue";
import TheSuggestions from "./pages/TheSuggestions.vue";
import FaqPage from "@/pages/FaqPage.vue";
import ContactPage from "@/pages/ContactPage.vue";
import TicketPage from "@/pages/TicketPage";
import TicketConfirm from "@/pages/TicketConfirm";
import PackagePage from "@/pages/PackagePage";
import TermsConditions from "@/pages/TermsConditions";
import ReservePage from "@/pages/ReservePage";
import CancelTicket from "@/pages/CancelTicket";
import LogIn from "@/pages/LogIn";
import SignUp from "@/pages/SignUp";
import UserDashboard from "@/pages/UserDashboard";
import ContactRequests from "@/components/ContactRequests";
import updateProfile from "@/components/updateProfile";
import MyReservations from '@/pages/MyReservations'

import store from "./store/index.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/about",
      component: AboutPage,
    },
    {
      path: "/blog",
      component: BlogPage,
    },
    {
      path: "/suggestions",
      component: TheSuggestions,
    },
    {
      path: "/bus-ticket",
      component: TicketPage,
    },
    {
      path: "/bus-ticket/:data",
      component: TicketPage,
      props: true,
    },
    {
      path: "/ticket-details/:data",
      component: TicketConfirm,
      props: true,
    },
    {
      path: "/faq",
      component: FaqPage,
    },
    {
      path: "/reserve-bus",
      component: ReservePage,
    },
    {
      path: "/packages",
      component: PackagePage,
    },
    {
      path: "/terms-conditions",
      component: TermsConditions,
    },
    {
      path: "/contact",
      component: ContactPage,
    },
    {
      path: "/cancel-ticket",
      component: CancelTicket,
    },
    {
      name: "userDashboard",
      path: "/user-dashboard",
      component: UserDashboard,
      children: [
        {
          path: "contact-requests",
          component: ContactRequests,
        },
        { path: "update-profile", component: updateProfile },
        { path: "my-reservations", component: MyReservations },
      ],
      meta: {
        requiredAuth: true,
      },
    },
    {
      path: "/blog/:id",
      component: BlogDetails,
      props: true,
    },
    {
      path: "/login",
      component: LogIn,
      meta: {
        requiredUnAuth: true,
      },
    },
    {
      path: "/register",
      component: SignUp,
      meta: {
        requiredUnAuth: true,
      },
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});

router.beforeEach(function (to, _, next) {
  if (to.meta.requiredAuth && !store.getters.isAuth) {
    next("/login");
  } else if (to.meta.requiredUnAuth && store.getters.isAuth) {
    next("/bus-ticket");
  } else {
    next();
  }
});

export default router;
