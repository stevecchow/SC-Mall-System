<template>
    <div>
        <swipe></swipe>
        <goodslist></goodslist>
    </div>
</template>

<script>
    import swipe from '../subComponents/Swipe'
    import goodslist from '../subComponents/GoodsList'

    console.log('Normal')

    export default {
        data() {
            return {}
        },
        methods: {},
        components: {
            swipe,
            goodslist
        },
    }
</script>

<style lang="less" scoped>

</style>
