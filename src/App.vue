<template>
    <div>
        <Nav></Nav>
        <Home></Home>
    </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Home from "./views/Home.vue"

export default {
    name: 'App',
    components: {
        Nav,
        Home,
    },
};
</script>

<style lang="scss" scoped>
</style>