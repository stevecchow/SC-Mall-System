<template>
    <div>
        <div class="header">
            <div class="app-header-wrapper">
                <div class="logo">
                    <img src="../../assets/logo.png" alt="">
                </div>
                <!--搜索框部分-->
                <div class="search">
                    <i class="icon-search"></i>
                    搜索商品
                </div>
                <div class="me">
                    <router-link tag="span" class="mui-icon mui-icon-contact" id="me" to="/me"></router-link>
                </div>
            </div>
            <div class="nav">
                <div id="slider" class="mui-slider">
                    <div id="sliderSegmentedControl"
                         class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                        <div class="mui-scroll">
                            <router-link class="mui-control-item mui-active" to="/recom">
                                推荐
                            </router-link>
                            <router-link class="mui-control-item" to="/normal">
                                手机
                            </router-link>
                            <router-link class="mui-control-item" to="/normal">
                                电脑
                            </router-link>
                            <router-link class="mui-control-item" to="/normal">
                                生活
                            </router-link>
                            <router-link class="mui-control-item" to="/normal">
                                智能
                            </router-link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    console.log('GoodList')
    export default {
        data() {
            return {}
        },
        methods: {},
    }
</script>

<style lang="less" scoped>
    .header {
        position: fixed;
        top: -1px;
        left: 0;
        right: 0;
        z-index: 99;
        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2);
        background: #f2f2f2;

        .app-header-wrapper {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-around;
            align-items: center;
            height: 1.17rem;
            background: #f2f2f2;
            color: #666;
            padding: 0;
            /*background: black;*/

            .logo {
                display: flex;
                justify-content: center;
                width: 1rem;
                height: 1rem;
                /*background: red;*/

                img {
                    height: 100%;
                }
            }

            .search {
                display: flex;
                align-items: center;
                width: 55%;
                height: 0.9rem;
                border: 1px solid #eee;
                border-radius: 0.2rem;
                color: #b3b0b0;
                background: white;

                .icon-search {
                    display: block;
                    width: 1rem;
                    height: 1rem;
                    background-image: url("../../assets/search.png");
                    background-size: 1rem 1rem;
                    background-repeat: no-repeat;
                    background-position: 50%;
                }
            }

            .me {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 1rem;
                height: 1rem;

                #me {
                    font-size: 35px;
                }

                img {
                    height: 75%;
                }
            }
        }

        .nav {
            height: 1.05rem;

            .mui-active {
                color: #ff6500;
            }

            a {
                pointer-events: auto;
            }
        }
    }
</style>
