<template>
    <div>
        <!--底部选项卡-->
        <nav class="mui-bar mui-bar-tab">
            <!--mui-active-->
            <router-link class="mui-tab-item" to="/">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/category">
                <span class="mui-icon mui-icon-star"></span>
                <span class="mui-tab-label">分类</span>
            </router-link>
            <router-link class="mui-tab-item" to="/cart">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge">9</span>
                </span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/me">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">我的</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.min.js'
    console.log('BottomBar')

    mui('body').on('tap', 'a', function () {
        document.location.href = this.href;
    })
    export default {
        data() {
            return {}
        },
        methods: {},
        mounted() {

        }
    }
</script>

<style lang="less" scoped>
    .mui-bar-tab {
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.2);
        background: #f4f4f4;

        .mui-tab-item.mui-active {
            color: #ff6500;
        }
    }
</style>
