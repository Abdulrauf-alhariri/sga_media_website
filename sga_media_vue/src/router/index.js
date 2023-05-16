import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Blogs from "../views/Blogs.vue";
import Blog from "../views/Blog.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs,
    props: true,
  },
  {
    path: "/blogs/blog",
    name: "Blog",
    component: Blog,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
