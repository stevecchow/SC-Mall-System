<template>
    <div>
        <div class="header">
            <div class="app-header-wrapper">
                <div class="logo">
                    <img src="../../assets/logo.png" alt="">
                </div>
                <!--搜索框部分-->
                <router-link tag="div" to="/coding" class="search">
                    <i class="icon-search"></i>
                    搜索商品
                </router-link>
                <div class="me">
                    <router-link tag="span" class="mui-icon mui-icon-contact" id="me" to="/me"></router-link>
                </div>
            </div>
            <div class="nav">
                <div id="slider" class="mui-slider">
                    <div id="sliderSegmentedControl"
                         class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                        <div class="mui-scroll">
                            <div class="mui-control-item mui-active" @click="toLink('normal/0')">
                                推荐
                            </div>
                            <div class="mui-control-item" v-for="(item,i) in typeList" :key="i" @click="toLink('normal/'+item.type_id)">
                                {{item.type}}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';

    console.log('GoodList')
    export default {
        data() {
            return {
                goodsList: [],
                typeList: [],
                path:''
            }
        },
        methods: {
            // 获取所有分类
            getTypes() {
                this.$http.get("api/types").then(result => {
                    if (result.body.status === 1) {
                        this.typeList = result.body.message
                        console.log(this.typeList)
                    } else {
                        Toast('获取types列表失败')
                    }
                })
            },
            toLink(where){
                location.href = 'http://localhost:8080/#/'+where
                this.path = where
            }
        },
        mounted() {
            this.getTypes()
        }
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
            height: 1.4rem;

            .mui-active {
                color: #ff6500;
            }

            a {
                pointer-events: auto;
            }
        }
    }
</style>
