<template>
    <div>
        <Nav></Nav>

        <full-page ref="fullpage" :options="fullpageOptions" id="fullpage">
            <div class="section">First section ...</div>
            <div class="section">Second section ...</div>
            <div class="section">Second section ...</div>
            <div class="section">Second section ...</div>
        </full-page>
    </div>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
    components: {
        Nav,
    },
    data: () => ({
        fullpageOptions: {
            licenseKey: "YOUR_KEY_HEERE",
            menu: '#menu',
            navigation: true,
            anchors: ["page1", "page2", "page3", "page4"],
            sectionsColor: ["#41b883", "#ff5f45", "#0798ec", "#41b883"],
        },
    }),
};
</script>

<style lang="scss" scoped>
</style>