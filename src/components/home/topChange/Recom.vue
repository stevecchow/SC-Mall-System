<template>
    <div>
        <swipe></swipe>
        <goodslist></goodslist>
    </div>
</template>

<script>
    // 引入 swipe 组件
    import swipe from '../../subComponents/Swipe'
    import goodslist from '../../subComponents/GoodsList'
    console.log('Recom')

    export default {
        data() {
            return {}
        },
        methods: {},
        components:{
            swipe,
            goodslist
        }
    }
</script>

<style lang="less" scoped>

</style>
