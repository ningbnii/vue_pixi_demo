<template>
    <div @touchmove.prevent>
        <div id="sprite"></div>
    </div>
</template>

<script>
    // import logo from '@/assets/logo.png'
    import * as PIXI from 'pixi.js'

    export default {
        name: "sprite",
        data() {
            return {}
        },
        mounted() {
            const w = window.innerWidth;
            const h = window.innerHeight;
            const loader = PIXI.Loader.shared;
            let app = new PIXI.Application({
                width: w, // 画布的宽度
                height: h, // 画布的高度
                antialias: true, // 反锯齿，默认false，
                transparent: true, // 透明，默认false
                // resolution:1, // 分辨率，默认1
                // backgroundColor:0xff0000
            });
            document.getElementById('sprite').appendChild(app.view);
            loader.add("./assets/logo.png").load(setup)
            // loader.load((loader,resources)=>{
            //     sprite = new PIXI.Sprite(resources.logo.texture)
            //     app.stage.addChild(sprite)
            // })


            function setup(){
                // let sprite = PIXI.Sprite.from(logo)
                let sprite = new PIXI.Sprite(loader.resources['./assets/logo.png'].texture);
                app.stage.addChild(sprite)
            }

            // sprite.visible = true; // 将sprite隐藏


        },
        methods: {},
        destroyed() {

        }
    };
</script>

<style scoped>
    .control {
        position: absolute;
        z-index: 1000;
    }
</style>
