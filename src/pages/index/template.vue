<template>
    <div @touchmove.prevent>
        <div id="drawingCurves"></div>
    </div>
</template>

<script>
    import Ball from "../../assets/js/ball";

    export default {
        name: "drawingCurves",
        data() {
            return {
                backgroundLayer: {},
            }
        },
        mounted() {
            let s = this;
            const w = document.body.clientWidth;
            const h = document.body.clientHeight;


            LInit(requestAnimationFrame, 'drawingCurves', w, h, function () {
                setTimeout(function () {
                    LGlobal.preventDefault = false;
                    main()
                }, 0);
            });

            function main() {
                initBackgroundLayer();


            }

            function initBackgroundLayer() {
                s.backgroundLayer = new LSprite();
                s.backgroundLayer.graphics.drawRect(0, '', [0, 0, w, h], true, '#ffffff');
                addChild(s.backgroundLayer);
            }
        },
        methods: {

        },
        destroyed() {
            removeChild(this.backgroundLayer);
        }
    };
</script>

<style scoped>
    .control{
        position: absolute;
        z-index: 1000;
    }
</style>
