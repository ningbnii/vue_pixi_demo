<template>
    <div id="app">
        <vue-page-stack>
            <router-view/>
        </vue-page-stack>
    </div>
</template>

<script>

	export default {
		name: 'App',
		components: {},
	}
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 100vw;
        height: 100vh;
        /*这段css使移动端长按屏幕的时候不出现选择，防止选取div元素文本*/
        -webkit-user-select:none;-moz-user-select:none;user-select:none;
    }
    canvas{
        width: 100vw;
        height: 100vh;
        flex: 1;
        position: absolute;
    }
    /*控制层，浮现到canvas上面*/
    .control{
        position: absolute;
        z-index: 10000;
    }

</style>
