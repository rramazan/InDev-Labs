<template>
    <div id="app">
        <exchange></exchange>
    </div>
</template>

<script>
    import Exchange from './components/Exchange'

    export default {
        name: 'app',
        components: {
            Exchange
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
