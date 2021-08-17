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
                // backgroundColor:0xff0000
            });
            document.getElementById('stage').appendChild(app.view);
            // 更改画布背景颜色
            app.renderer.backgroundColor = 0xffff00;
            // 查看画布的宽度和高度
            console.log(app.renderer.view.width)
            console.log(app.renderer.view.height)
            // 更改画布大小
            app.renderer.autoResize = true;
            app.renderer.resize(100,100);
            // 让画布填充整个窗口，可以使用css样式并将渲染器的大小调整到浏览器窗口的大小
            app.renderer.view.style.position = "absolute";
            app.renderer.view.style.display = "block";
            app.renderer.resize(window.innerWidth,window.innerHeight);
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
