import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// Vuesax
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";
Vue.use(Vuesax, {});

// Fullpage
import VueFullPage from "vue-fullpage.js";
Vue.use(VueFullPage);

// Anime.js
import VueAnime from "vue-animejs";
Vue.use(VueAnime);

// Global css
import "./assets/css/main.scss";

Vue.config.productionTip = false;
new Vue({
   router,
   store,
   render: (h) => h(App),
}).$mount("#app");
