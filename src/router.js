import { createRouter, createWebHistory } from "vue-router";
import NotFound from "./pages/NotFound.vue";
import HomePage from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutPage.vue";
import BlogPage from "./pages/BlogPage.vue";
import BlogDetails from "./pages/BlogDetails.vue";
import TheSuggestions from "./pages/TheSuggestions.vue";
import FaqPage from '@/pages/FaqPage.vue'
import ContactPage from '@/pages/ContactPage.vue'
import TicketPage from '@/pages/TicketPage'
import TicketConfirm from '@/pages/TicketConfirm'
import UserDashboard from '@/pages/UserDashboard'
import PackagePage from '@/pages/PackagePage'
import TermsConditions from '@/pages/TermsConditions'
import ReservePage from '@/pages/ReservePage'
import CancelTicket from '@/pages/CancelTicket'
import LogIn from '@/pages/LogIn'
import SignUp from '@/pages/SignUp'

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
      name: 'userDashboard',
      path: "/user-dashboard",
      component: UserDashboard,
    },
    {
      path: "/blog/:id",
      component: BlogDetails,
      props: true,
    },
    {
      path: "/login",
      component: LogIn,
    },
    {
      path: "/register",
      component: SignUp,
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});

export default router;
