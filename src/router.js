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
      path: "/contact",
      component: ContactPage,
    },
    {
      path: "/user-dashboard",
      component: UserDashboard,
    },
    {
      path: "/blog/:id",
      component: BlogDetails,
      props: true,
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});

export default router;
