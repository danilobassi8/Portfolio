<template>
    <div class="home-full-page">
        <full-page ref="fullpage" :options="fullpageOptions">
            <div class="section s1">
                <div class="bg-1"></div>
                <div class="section-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae earum amet iusto ipsum dolorum. Veritatis, sit nam!
                    Amet ipsa a, ut minima veniam ipsam sapiente deleniti
                    tempore ratione aspernatur ducimus?
                </div>
            </div>
            <div class="section s2">
                <div class="section-content">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nobis totam exercitationem voluptas, laborum, assumenda rem
                    facilis consequatur, at quam consectetur quod facere ex
                    corporis soluta! At dolor ipsa tenetur officia?
                </div>
            </div>
            <div class="section s3">
                <div class="section-content">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facere, tempore consectetur quam numquam tenetur unde sed ab
                    deleniti praesentium inventore possimus modi ducimus quis
                    enim consequuntur quos, hic laboriosam. Fuga.
                </div>
            </div>
            <div class="section s4">
                <div class="section-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolores adipisci nostrum ad deserunt ipsum magni rerum nam
                    debitis quod ducimus possimus, quos a repellendus, saepe
                    recusandae amet assumenda eius? Quos!
                </div>
            </div>
        </full-page>
    </div>
</template>

<script>
export default {
    name: "Home",
    components: {},
    data: function () {
        return {
            fullpageOptions: {
                licenseKey: "YOUR_KEY_HEERE",
                paddingTop: "90px",
                menu: "menu",
                navigation: true,
                anchors: ["home", "about", "experience", "contact"],

                onLeave: this.onLeave,

                // sectionsColor: ["#41b883", "#ff5f45", "#0798ec", "#41b883"],
            },
        };
    },
    methods: {
        onLeave(origin, destination, direction) {
            this.$store.commit("changeNavigation", {
                destination: destination.anchor,
                direction,
            });
            return true;
        },
    },
};
</script>
<style scoped>
.text {
    color: rgb(0, 255, 0);
}
</style>
