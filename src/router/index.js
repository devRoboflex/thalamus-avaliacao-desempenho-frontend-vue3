import { createRouter, createWebHistory } from "vue-router";
import { sso } from "roboflex-thalamus-sso-lib";

import PaginaView from "@/view/paginaView.vue";
import HomeView from "@/view/HomeView.vue";

function guardMyroute(to, from, next) {
  if (sso.validarSessao()) {
    next();
  } else {
    document.location = process.env.VUE_APP_ROOT_SSO_LOGIN;
  }
}

const routes = [
  {
    path: "/login",
    redirect: "http://portal.thalamus.com.br/#/login",
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
    beforeEnter: guardMyroute,
  },

  {
    path: "/pagina",
    name: "pagina",
    component: PaginaView,
    beforeEnter: guardMyroute,
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(),
  routes,
});

export default router;
