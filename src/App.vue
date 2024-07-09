<template>
  <headerComponent v-if="!$route.meta.hideMenu"></headerComponent>
  <main id="main">
    <menuLateralComponent v-if="!$route.meta.hideMenu"></menuLateralComponent>
    <section>
      <router-view />
    </section>
  </main>
  <br />
</template>

<script>
import headerComponent from "./components/headerComponent.vue";
import menuLateralComponent from "./components/menu/menuLateralComponent.vue";

export default {
  components: {
    headerComponent: headerComponent,
    menuLateralComponent: menuLateralComponent,
  },
};
</script>
