<template>
    <full-page ref="fullpage" :options="fullpageOptions" id="fullpage">
        <div class="section">First section ...</div>
        <div class="section">Second section ...</div>
        <div class="section">Second section ...</div>
        <div class="section">Second section ...</div>
    </full-page>
</template>

<script>
// @ is an alias to /src

export default {
    name: "Home",
    components: {},
    data: () => ({
        fullpageOptions: {
            licenseKey: "YOUR_KEY_HEERE",
            menu: "menu",
            navigation: true,
            anchors: ["home", "about", "experience", "idk"],
            sectionsColor: ["#41b883", "#ff5f45", "#0798ec", "#41b883"],
        },
    }),
};
</script>
