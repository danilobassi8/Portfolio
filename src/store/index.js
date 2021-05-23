import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      navIndexSelected: "home",
   },
   mutations: {
      changeNavigation(state, { destination, direction }) {
         state.navIndexSelected = destination;
         console.log(direction);
      },
   },
   actions: {},
   modules: {},
});
