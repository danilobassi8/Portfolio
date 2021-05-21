<template class="">
    <div>
        <svg class="svg" viewBox="0 0 800 600" preserveAspectRatio="none">
            <polygon
        
                ref="svgmorph"
                stroke="none"
                fill="red"
                points="0 0 , 800 0 , 800 250 , 800 600 , 0 600 , 0 250 , 0 150 0 0"
            ></polygon>
        </svg>
    </div>
</template>

<script>
import anime from "animejs";

export default {
    mounted() {
        anime({
            targets: this.$refs.svgmorph,
            points: [
                {
                    value:
                        "0 0 , 800 0 , 800 250 , 800 600 , 0 600 , 0 250 , 0 150 0 0",
                },
                {
                    value:
                        "0 0 , 800 0 , 800 200 , 800 600 , 0 200 , 0 150 , 0 150 0 0 ",
                },
            ],
            easing: "easeOutQuad",
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
    background-color: rgb(203, 148, 255);
}
</style>