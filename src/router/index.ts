import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "../components/Login.vue";
import Profile from "../components/Profile.vue";
import CreateAuth from "../components/CreateAuth.vue";
import VerifyAuth from "../components/VerifyAuth.vue";
import ChangePassword from "../components/ChangePassword.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/createauth",
    name: "CreateAuth",
    component: CreateAuth,
  },
  {
    path: "/verifyauth",
    name: "VerifyAuth",
    component: VerifyAuth,
  },
  {
    path: "/changepassword",
    name: "ChangePassword",
    component: ChangePassword,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
