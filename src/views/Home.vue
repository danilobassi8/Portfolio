<template>
    <div class="home-full-page">
        <full-page ref="fullpage" :options="fullpageOptions" id="fullpage">
            <div class="section">
                <div class="text">
                    First section hoal soy un texto re largo quiero ver cuando
                    se pase al frente este div
                </div>
            </div>
            <div class="section">Second section ...</div>
            <div class="section">Second section ...</div>
            <div class="section">Second section ...</div>
        </full-page>
    </div>
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
<style scoped>
.text {
    z-index: 600;
    color: rgb(221, 44, 44);
}
</style>
