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
            <vs-navbar-item
                :active="actualIndex == 'home'"
                target="_self"
                href="#home"
            >
                Home
            </vs-navbar-item>
            <vs-navbar-item
                :active="actualIndex == 'about'"
                target="_self"
                href="#about"
            >
                About Me
            </vs-navbar-item>
            <vs-navbar-item
                :active="actualIndex == 'experience'"
                target="_self"
                href="#experience"
            >
                Experience
            </vs-navbar-item>
            <vs-navbar-item
                :active="actualIndex == 'idk'"
                target="_self"
                href="#idk"
            >
                idk
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

                <vs-button flat> Contact Me! </vs-button>
            </template>
        </vs-navbar>
    </div>
</template>



  <script>
import { mapState } from "vuex";
export default {
    data: () => ({
        lenguage: false,
        active: false,
    }),
    methods: {
        toggleLanguage() {},
        
    },

    computed: {
        ...mapState({
            actualIndex: "navIndexSelected",
        }),

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