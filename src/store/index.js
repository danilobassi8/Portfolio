import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const MORPH_HASH = {
   home: [{ value: "M-61 113V0H1943V587.768V1081C1907.5 1081 1514 1107.27 1085 587.768C826.914 275.238 628 113 223 113H-61Z" }],
   about: [{ value: "M-108 341.75V0H2060V579.424V684C1524.68 408.299 1513.45 791.579 1151.41 559.409C794.909 330.797 670.64 670.49 278.646 670.49C251.373 670.49 -108 624.957 -108 341.75Z" }],
   experience: [{ value: "M-108 341.75V0H2008.5V94.5V316.5C1922 566.5 1530 1094.5 1102 1094.5C678.498 1094.5 23.5001 1283.5 -254 1008C-273.355 988.784 -108 624.957 -108 341.75Z" }],
   idk: [{ value: "M-108 341.75V0H2008.5V94.5V1094.5C1922 1344.5 1530 1094.5 1102 1094.5C678.497 1094.5 23.4999 1283.5 -254 1008C-273.355 988.784 -108 624.957 -108 341.75Z" }],
   default: [{ value: "M-1 19.5909V0H1920V7V19.5909H1355H574.449H-1Z" }],
};

export default new Vuex.Store({
   state: {
      navIndexSelected: "home",
      lastDirection: "up",
      MorphBackgroundTo: MORPH_HASH["default"],
   },
   mutations: {
      changeNavigation(state, { destination, direction }) {
         state.navIndexSelected = destination;
         state.lastDirection = direction;

         // For selecting the next morph

         state.MorphBackgroundTo = MORPH_HASH[destination] || MORPH_HASH["default"];
      },
   },
   actions: {},
   modules: {},
});
