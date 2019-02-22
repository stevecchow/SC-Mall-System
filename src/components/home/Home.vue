<template>
    <div>
        <homeHeader></homeHeader>

        <!--中间层-->
        <div class="content">
            <router-view></router-view>
        </div>

        <!--底部栏-->
        <bottomBar></bottomBar>
    </div>
</template>

<script>
    // 导入 mui.js
    import mui from '../../lib/mui/js/mui.min.js'

    import bottomBar from './BottomBar'
    import homeHeader from '../subComponents/HomeHeader'
    console.log('Home')

    export default {
        data() {
            return {}
        },
        methods: {},
        mounted() {
            mui(".mui-scroll-wrapper").scroll({
                deceleration: 0.0005
            });
        },
        components: {
            bottomBar,
            homeHeader
        }
    }
</script>

<style lang="less" scoped>
    * {
        touch-action: pan-y;
    }

    .content {
        margin-top: 2.2rem;
        margin-bottom: 1.2rem;
    }
</style>
