<template>
   <div class="main-app">
      <Nav> </Nav>
      <MorphBackground class="svg-morph-background" />
      <Home />
   </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import MorphBackground from "./components/MorphBackground";
import Home from "./views/Home.vue";

export default {
   name: "App",
   components: {
      Nav,
      MorphBackground,
      Home,
   },
};
</script>

<style lang="scss" scoped></style>
