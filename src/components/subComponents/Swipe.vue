<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item>
                <img src="../../assets/swipe/1.png" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../assets/swipe/2.png" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../assets/swipe/3.png" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    console.log('swipe')
    export default {
        data() {
            return {}
        },
        methods: {},
    }
</script>

<style lang="less" scoped>
    .mint-swipe {
        height: 5rem;

        .mint-swipe-items-wrap {
            overflow: auto;

            .mint-swipe-item {
                text-align: center;

                img {
                    width: 100%;
                }
            }

        }
    }

    .full {
        width: 100%;
    }
</style>
