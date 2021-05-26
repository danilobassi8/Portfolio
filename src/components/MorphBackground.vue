<template class="">
   <div>
      <svg class="svg" viewBox="0 0 1918 1080" preserveAspectRatio="none">
         <path id="jajas" class="svgmorph" ref="svgmorph" fill="#24252a" d="M-1 19.5909V0H1920V7V19.5909H1355H574.449H-1Z"></path>
      </svg>
   </div>
</template>

<script>
import anime from "animejs";
import { mapState } from "vuex";

export default {
   data: () => ({
      defaultMorphOptions: { duration: 2000, loop: false, direction: "alternate", easing: "easeOutElastic(1, .6)", delay: -1000 },
   }),
   mounted() {
      const initialValue = { value: "M-1 19.5909V0H1920V7V19.5909H1355H574.449H-1Z" };
      const initialTransformation = [{ value: "M-61 113V0H1943V587.768V1081C1907.5 1081 1514 1107.27 1085 587.768C826.914 275.238 628 113 223 113H-61Z" }];
      this.morphBackground(initialValue, initialTransformation);
   },

   computed: {
      ...mapState({ MorphBackgroundTo: "MorphBackgroundTo" }),
   },
   watch: {
      MorphBackgroundTo(newValue) {
         let fromValue = { value: this.$refs.svgmorph.getAttribute("d").toString() };

         let toValue = newValue;
         this.morphBackground(fromValue, toValue);
      },
   },
   methods: {
      morphBackground(from, to, options = this.defaultMorphOptions) {
         const arrayOfTransformations = [from, ...to];
         anime({
            targets: this.$refs.svgmorph,
            d: arrayOfTransformations,

            ...options,
         });
      },
   },
};
</script>
<style scoped>
.svg {
   width: 100%;
}
.svgmorph {
   pointer-events: none;
}
</style>
