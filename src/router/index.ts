import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "../views/Login.vue";
import Profile from "../views/Profile.vue";
import ResetPassword from "../views/ResetPassword.vue";
import CreateAuth from "../views/CreateAuth.vue";
import VerifyAuth from "../views/VerifyAuth.vue";
import ChangePassword from "../views/ChangePassword.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/resetpassword",
    name: "ResetPassword",
    component: ResetPassword,
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
