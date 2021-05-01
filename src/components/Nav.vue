  <template>
    <div class="center examplex">
        <vs-navbar
            class="my-nav"
            color="#24252a"
            text-white
            square
            center-collapsed
            v-model="active"
        >
            <template #left> logo </template>
            <vs-navbar-item :active="active == 'guide'" id="guide">
                Guide
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'docs'" id="docs">
                Documents
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'components'" id="components">
                Components
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'license'" id="license">
                license
            </vs-navbar-item>
            <template #right>
                <vs-switch v-model="lenguage" @click="toggleLanguage">
                    <template #off>
                        <i class="bx bxs-volume-mute"></i>
                        ENG
                    </template>
                    <template #on>
                        <i class="bx bxs-volume-full"></i>
                        ESP
                    </template>
                </vs-switch>

                 <vs-button flat >
                Contact Me!
            </vs-button>
            </template>

           
        </vs-navbar>
    </div>
</template>



  <script>
export default {
    data: () => ({
        active: "guide",
        lenguage: false,
    }),
    methods: {
        toggleLanguage() {
            console.log(this.lenguage);
        },
    },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:500");
* {
    font-family: "Montserrat", sans-serif;
}

.my-nav {
    min-height: 90px;
    line-height: 90px;

    .active {
        color: #0099ff;
    }
}
</style>