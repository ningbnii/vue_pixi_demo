<template>
    <div @touchmove.prevent>

    </div>
</template>

<script>
    import * as PIXI from 'pixi.js'
    export default {
        name: "hello",
        data() {
            return {

            }
        },
        mounted() {
            let type = "WebGL";
            if(!PIXI.utils.isWebGLSupported()){
                type = "canvas";
            }
            PIXI.utils.sayHello(type)
        },
        methods: {

        },
        destroyed() {

        }
    };
</script>

<style scoped>
    .control{
        position: absolute;
        z-index: 1000;
    }
</style>
