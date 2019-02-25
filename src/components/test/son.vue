<template>
    <div>
        我是子组件！
    </div>
</template>

<script>

    export default {
        data() {
            return {
                message:''
            }
        },
        methods: {},
        mounted() {
            this.$emit('sonTalk',{
                name:'steve',
                age:24
            })
        }
    }
</script>

<style lang="less" scoped>

</style>
