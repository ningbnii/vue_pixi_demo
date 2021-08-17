<template>
    <div>
        <p>
            <router-link to="/index/hello">sayHello</router-link>
        </p>
        <p>
            <router-link to="/index/stage">创建舞台</router-link>
        </p>
        <p>
            <router-link to="/index/pulse">脉冲动画</router-link>
        </p>
        <p>
            <router-link to="/index/random">两个角的波</router-link>
        </p>
        <p>
            <router-link to="/index/wave2">绘制正弦波</router-link>
        </p>
        <p>
            <router-link to="/index/circle">圆形运动</router-link>
        </p>
        <p>
            <router-link to="/index/oval">椭圆形运动</router-link>
        </p>
        <p>
            <router-link to="/index/distance">两点之间的距离</router-link>
        </p>
        <p>
            <router-link to="/index/drawingapp">绘制线条</router-link>
        </p>
        <p>
            <router-link to="/index/drawingCurves">二次贝塞尔曲线</router-link>
        </p>
        <p>
            <router-link to="/index/multiCurves">多曲线</router-link>
        </p>
        <p>
            <router-link to="/index/filters">模糊滤镜</router-link>
        </p>
    </div>
</template>

<script>
	export default {
		name: "index",
		created() {
		},
		methods: {

		}
	};
</script>

<style scoped>
</style>
