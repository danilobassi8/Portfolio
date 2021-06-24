  <template>
    <div class="center examplex">
        <vs-navbar
            class="my-nav"
            color="#24252a"
            text-white
            square
            right-collapsed
           
            v-model="active"
        >
            <template #left> <div class="logo">Logo</div> </template>
            <vs-navbar-item
                :active="actualIndex == 'home'"
                target="_self"
                href="#home"
            >
                 <span class="nav-link">Home </span>
            </vs-navbar-item>
            <vs-navbar-item
                :active="actualIndex == 'about'"
                target="_self"
                href="#about"
            >
                <span class="nav-link">About Me</span> 
            </vs-navbar-item>
            <vs-navbar-item
                :active="actualIndex == 'experience'"
                target="_self"
                href="#experience"
            >
                 <span class="nav-link">Experience </span>
            </vs-navbar-item>
            <vs-navbar-item
                :active="actualIndex == 'contact'"
                target="_self"
                href="#contact"
            >
                <span class="nav-link">Contact </span>
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
@media (max-width: 400px) {
	.logo{
        display: none;
        background-color: red !important;
    }
    .nav-link{
        font-size: 11px;
    }
    .my-nav {
    min-height: 40px;
    line-height: 40px;
    }
}

</style>