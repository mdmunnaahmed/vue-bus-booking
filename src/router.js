import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutPage.vue";
import NotFound from "./pages/NotFound.vue";
import BlogPage from "./pages/BlogPage.vue";
import BlogDetails from "./pages/BlogDetails.vue";
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
