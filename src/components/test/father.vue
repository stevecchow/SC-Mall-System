<template>
    <div>
        我是父组件！
        <son @sonTalk="speak"></son>
        儿子说：{{sonMsg.name}}
    </div>
</template>

<script>
    import son from './son'

    export default {
        data() {
            return {
                sonMsg: ''
            }
        },
        methods: {
            speak(m){
                this.sonMsg = m
            }
        },
        components: {
            son
        },
        mounted() {}
    }
</script>

<style lang="less" scoped>

</style>
