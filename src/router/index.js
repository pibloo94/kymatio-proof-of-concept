import Vue from "vue";
import VueRouter from "vue-router";
import LogInView from "@/views/login/LogInView";
import DashboardView from "@/views/dashboard/DashboardView";

Vue.use(VueRouter);

export const LOGIN = "/login";
export const DAHSBOARD = "/dashboard";

const routes = [
  {
    path: "/",
    redirect: LOGIN,
  },
  {
    path: LOGIN,
    name: "logIn",
    component: LogInView,
  },
  {
    path: DAHSBOARD,
    name: "dashboard",
    component: DashboardView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
