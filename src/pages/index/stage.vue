<template>
    <div @touchmove.prevent>
        <div id="stage"></div>
    </div>
</template>

<script>
    import * as PIXI from 'pixi.js'
    export default {
        name: "stage",
        data() {
            return {

            }
        },
        mounted() {
            const w = document.body.clientWidth;
            const h = document.body.clientHeight;
            let app = new PIXI.Application({
                width:w, // 画布的宽度
                height:h, // 画布的高度
                antialias:true, // 反锯齿，默认false，
                transparent:false, // 透明，默认false
                resolution:1, // 分辨率，默认1
                backgroundColor:0xff0000
            });
            document.getElementById('stage').appendChild(app.view);
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
