<template class="">
   <div>
      <svg class="svg" viewBox="0 0 1915 1080" preserveAspectRatio="none">
         <path class="svgmorph" ref="svgmorph" fill="#24252a" d="M-1 19.5909V0H1920V7V19.5909H1355H574.449H-1Z"></path>

         <!--
         <polygon id="#polygon" ref="svgmorph" stroke="none" fill="#24252a" points="0 0 , 800 0 , 800 250 , 800 600 , 0 600 , 0 250 , 0 150 0 0"></polygon>
         -->
         <slot></slot>
      </svg>
   </div>
</template>

<script>
import anime from "animejs";

export default {
   mounted() {
      anime({
         targets: this.$refs.svgmorph,
         d: [
            { value: "M-1 19.5909V0H1920V7V19.5909H1355H574.449H-1Z" },
            { value: "M-61 113V0H1943V587.768V1081C1907.5 1081 1514 1107.27 1085 587.768C826.914 275.238 628 113 223 113H-61Z" },
         ],
         easing: 'spring(1, 80, 10, 0)',
         
         duration: 2000,
         loop: false,
         direction: "alternate",
      });
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
