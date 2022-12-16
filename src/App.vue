<template>
  <div>
    <Header />
    <Main />
    <FooterComp />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "./components/header/Header.vue";
import Main from "./components/main/Main.vue";
import FooterComp from "./components/footer/FooterComp.vue";

export default Vue.extend({
  name: "App",
  components: { Header, Main, FooterComp },
});
</script>
