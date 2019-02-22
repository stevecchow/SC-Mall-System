<template>
    <div>
        <div class="status">
            <span class="mui-icon mui-icon-contact" id="me"></span>
            <div class="choice">
                <router-link to="/login">登录</router-link>/
                <router-link to="/regist">注册</router-link>
            </div>
        </div>
        <div class="title">
            <span class="name">我的订单</span>
            <a class="more">全部订单 ></a>
        </div>
        <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell mui-media first">
                <a class="box">
                    <img src="../../assets/icons/dfk.png">
                    <span>
                        待付款
                    </span>
                </a>
                <a class="box">
                    <img src="../../assets/icons/dsh.png">
                    <span>
                        待收获
                    </span>
                </a>
                <a class="box">
                    <img src="../../assets/icons/txh.png">
                    <span>
                        退修换
                    </span>
                </a>
            </li>
        </ul>

        <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell mui-media second">
                <div class="left">
                    <div class="img">
                        <img src="../../assets/icons/hg.png" alt="">
                    </div>
                    <div class="item">会员中心</div>
                </div>
                <span> > </span>
            </li>
            <li class="mui-table-view-cell mui-media second">
                <div class="left">
                    <div class="img">
                        <img src="../../assets/icons/yh.png" alt="">
                    </div>
                    <div class="item">我的优惠</div>
                </div>
                <span> > </span>
            </li>
            <li class="mui-table-view-cell mui-media second">
                <div class="left">
                    <div class="img">
                        <img src="../../assets/icons/fw.png" alt="">
                    </div>
                    <div class="item">服务中心</div>
                </div>
                <span> > </span>
            </li>
        </ul>

        <!--底部栏-->
        <bottomBar></bottomBar>
    </div>
</template>

<script>
    import bottomBar from './BottomBar'

    export default {
        data() {
            return {}
        },
        methods: {},
        components: {
            bottomBar
        }
    }
</script>

<style lang="less" scoped>
    .mui-icon {
        color: white;
        font-size: 1.3rem;
        padding: 0 0.5rem;
    }

    .status {
        display: flex;
        align-items: center;
        width: 100%;
        height: 2rem;
        background: #f37d0f;

        .img {
            width: 1rem;
            height: 1rem;
            background: #007aff;

            img {

            }
        }

        .choice {
            color: white;

            a {
                color: white;
            }
        }
    }


    .title {
        display: flex;
        justify-content: space-between;
        padding: 0.3rem 0.5rem;

        .name {
            font-size: 0.4rem;
        }

        .more {

        }
    }

    .first {
        display: flex;
        justify-content: space-around;

        .box {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 !important;
            padding: 0.5rem 0;

            img {
                width: 0.8rem;
            }

            span {

            }
        }
    }

    .second {
        display: flex;
        justify-content: space-between;
        margin: 0 0.5rem;

        .left {
            margin: 0.4rem 0;
            display: flex;
            align-items: center;

            .img {
                width: 0.7rem;
                height: 0.7rem;
            }

            .item {
                font-size: 0.4rem;
            }
        }

    }

    .mui-table-view-chevron .mui-table-view-cell {
        padding: 0;
    }
</style>
