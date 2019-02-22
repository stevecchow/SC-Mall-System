<template>
    <div>
        <goodslist></goodslist>
    </div>
</template>

<script>
    import goodslist from '../../subComponents/GoodsList'
    console.log('Normal')

    export default {
        data() {
            return {}
        },
        methods: {},
        components:{
            goodslist
        }
    }
</script>

<style lang="less" scoped>

</style>
