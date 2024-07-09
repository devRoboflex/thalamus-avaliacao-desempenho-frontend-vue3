<template>
  <aside>
    <div class="titulo margem efeito">
      <div class="m-icone">
        <a
          href="#"
          class="icone-menu"
          title="Menu"
          onclick="document.getElementById('main').classList.toggle('esconde');return false"
        ></a>
      </div>
    </div>

    <nav class="nav-maior separador">
      <router-link to="/pagina" active-class="ativo">Página</router-link>
    </nav>
  </aside>
</template>

<script>
import { api } from "roboflex-thalamus-request-handler";
//import { sso } from "roboflex-thalamus-sso-lib";

export default {
  name: "menuLateralComponent",

  data() {
    return {
      devURL: api.defaults.devURL,
    };
  },

  created() {
    //const usuarioLogado = sso.getUsuarioLogado();
  },

  methods: {},

  mounted() {},
};
</script>
