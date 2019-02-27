<template>
    <div>
        <a id="back" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
        <swipe></swipe>
        <div class="detail">
            <div class="pro_name">{{good.name}}</div>
            <div class="brief">
                <span v-for="(item,i) in good.functions" :key="i">
                    {{'/'+item}}
                </span>
            </div>
            <div class="price">
                ￥{{price.now_price}}
                <div class="old">￥<s>{{price.old_price}}</s></div>
            </div>
            <div class="tag">
                <div class="box">
                    <div class="product-section">
                        <div class="title">已选</div>
                        <div class="select" @click="actionSheet">{{good.name}} 青春版 6GB+64GB 梦幻蓝 x 1</div>
                        >
                    </div>
                    <div class="service">
                        <div class="title" v-for="(item,i) in good.service">
                            <img src="../../assets/v.png" alt="">
                            {{item}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="comment">
                <CommentList></CommentList>
            </div>
            <div class="des">
                <div class="img">
                    <img :src="item" alt="" v-for="(item,i) in good.img_content">
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="box">
                <div class="con">
                    <div class="ic_box">
                        <a class="ic" href="http://localhost:8080/#/">
                            <img src="../../assets/home_1.png" alt="">
                            <div class="tit">首页</div>
                        </a>
                        <a class="ic" href="http://localhost:8080/#/">
                            <img src="../../assets/cart_1.png" alt="">
                            <div class="tit">购物车</div>
                        </a>
                    </div>
                    <div class="btn_box">加入购物车</div>
                </div>
            </div>
        </div>
        <mt-popup v-model="popupVisible" position="bottom">
            <div class="pop">
                <div class="pro-info">
                    <div class="product-img">
                        <img src="../../assets/goods/1.png" alt="">
                    </div>
                    <div class="product-desc">
                        <div class="product-price">￥1399</div>
                        <div class="name">红米Note 7 全网通 6GB+64GB 亮黑色</div>
                    </div>
                </div>
                <div class="pro-con">
                    <div class="tabox">
                        <div class="option-title">
                            版本
                        </div>
                        <div class="options-group">
                            <div class="option-item">
                                <span>3GB+32GB</span>
                                <span>999元</span>
                            </div>
                            <div class="option-item">
                                <span>3GB+32GB</span>
                                <span>999元</span>
                            </div>
                            <div class="option-item">
                                <span>3GB+32GB</span>
                                <span>999元</span>
                            </div>
                        </div>
                    </div>
                    <div class="tabox">
                        <div class="option-title">
                            颜色
                        </div>
                        <div class="options-group">
                            <div class="option-item">
                                <span>玫瑰金</span>
                            </div>
                            <div class="option-item">
                                <span>黑色</span>
                            </div>
                            <div class="option-item">
                                <span>白色</span>
                            </div>
                        </div>
                    </div>
                    <div class="tabox num">
                        <div class="option-title">
                            购买数量
                        </div>
                        <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
                            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                            <input id="test" class="mui-input-numbox" type="number" value="5"/>
                            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                        </div>
                    </div>
                </div>
                <div class="btn-bottom">
                    确定
                </div>
            </div>
        </mt-popup>
    </div>
</template>

<script>
    // 导入 自定义 组件
    import swipe from './Swipe'
    // import goodSwipe from './goodSwipe'
    import CommentList from './CommentList'
    import {Toast} from 'mint-ui'

    // 导入 mui.js
    import mui from '../../lib/mui/js/mui.min.js'

    export default {
        data() {
            return {
                popupVisible: false,
                id: '',
                good: {},
                price:{}
            }
        },
        methods: {
            actionSheet: function () {
                // 打开action sheet
                this.popupVisible = true;
            },
            getGood(id) {
                this.$http.get("api/good/" + id).then(result => {
                    if (result.body.status === 1) {
                        this.good = result.body.message[0]
                        this.price.old_price = this.good.versions[0].old_price
                        this.price.now_price = this.good.versions[0].now_price
                        // console.log(this.good)
                    } else {
                        Toast('获取商品信息失败')
                    }
                })
            }
        },
        components: {
            swipe,
            CommentList,
        },
        mounted() {
            mui(".mui-scroll-wrapper").scroll({
                deceleration: 0.0005
            });
            this.getGood(this.$route.params.id)
        }
    }
</script>

<style lang="less" scoped>
    * {
        touch-action: pan-y;
    }

    body {
        background-color: white;
    }

    #back {
        position: absolute;
        top: 10px;
        left: 10px;
        color: white;
        background: rgba(0, 0, 0, 0.2);
        z-index: 99;
        font-size: 1rem;
        border-radius: 50%;
    }

    .detail {
        text-align: left;
        background: white;
        padding-bottom: 1.5rem;

        .pro_name {
            font-size: 20px;
            padding: 0.5rem;
        }

        .brief {
            font-size: 12px;
            padding: 0 0.5rem 0.5rem 0.5rem;
            color: rgba(0, 0, 0, .54);
        }

        .price {
            display: flex;
            align-items: flex-end;
            padding-left: 0.5rem;
            color: #ff6700;
            font-size: 20px;

            .old {
                padding-left: 0.1rem;
                color: black;
                font-size: 12px;
            }
        }

        .tag {
            margin-top: 0.5rem;
            display: flex;
            justify-content: center;

            .box {
                width: 90%;
                height: 2.06rem;
                background: #fafafa;
                border: 1px solid #efecec;
                border-radius: 0.25rem;

                .product-section {
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 90%;
                    height: 1rem;
                    border-bottom: 1px solid #eee;
                }

                .service {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin: 0 auto;
                    width: 90%;
                    height: 1rem;

                    img {
                        width: 10px;
                    }
                }
            }
        }

        .comment {
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
        }

        .des {
            width: 100%;
            overflow: hidden;

            .img {
                width: 100%;

                img {
                    display: block;
                    width: 100%;
                    margin: 0;
                    padding: 0;
                }
            }
        }
    }

    .footer {
        width: 100%;
        height: 2rem;
        position: fixed;
        bottom: 2px;
        z-index: 99;

        .box {
            width: 90%;
            height: 1.5rem;
            margin: 0 auto;
            border-radius: 0.2rem;
            background-color: hsla(0, 0%, 100%, .96) !important;
            border: 1px solid #e5e5e5;
            overflow: hidden;
            box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px rgba(0, 0, 0, .14), 0 1px 10px rgba(0, 0, 0, .12);

            .con {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 90%;
                height: 1.5rem;
                margin: 0 auto;

                .ic_box {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100px;
                    height: 1.5rem;

                    .ic {
                        width: 1rem;
                        height: 1.12rem;

                        img {
                            display: block;
                            margin: 0 auto;
                            width: 0.7rem;
                        }

                        .tit {
                            font-size: 12px;
                            text-align: center;
                            color: rgba(0, 0, 0, 0.54);
                        }
                    }
                }

                .btn_box {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 118px;
                    height: 32px;
                    border-radius: 1rem;
                    background: #ff6700;
                    color: #fff;
                }


            }
        }
    }

    .mint-popup {
        width: 100%;
        display: flex;
        justify-content: center;

        .pop {
            position: fixed;
            bottom: 0;
            width: 100%;
            height: 13.5rem;
            background: white;
            border-top-left-radius: 0.4rem;
            border-top-right-radius: 0.4rem;
            padding: 0.45rem;

            .pro-info {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                height: 3rem;

                .product-img {
                    width: 3rem;
                    height: 3rem;
                    overflow: hidden;

                    img {
                        width: 100%;
                    }
                }

                .product-desc {
                    width: 5.5rem;
                    height: 3rem;

                    .product-price {
                        color: #ff6700;
                        font-size: 24px;
                        padding-top: 0.5rem;
                    }

                    .name {
                        padding-top: 0.3rem;
                        font-size: 14px;
                    }
                }
            }

            .pro-con {
                margin-top: 0.3rem;
                width: 100%;
                height: 7.6rem;
                overflow-y: scroll;

                .num {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .tabox {
                    margin: 0 0 0.3rem;

                    .option-title {
                        height: 1.1rem;
                        line-height: 0.7rem;
                        padding: 10px;
                        font-weight: bold;
                    }

                    .options-group {
                        display: flex;
                        flex-direction: column;
                        /*align-content: center;*/

                        .option-item {
                            display: flex;
                            justify-content: space-between;
                            margin: 0 auto;
                            width: 90%;
                            padding: 0.2rem;
                        }

                        .option-item:hover {
                            color: #fff;
                            background: #f56600;
                        }
                    }
                }
            }

            .btn-bottom {
                margin-top: 0.3rem;
                width: 100%;
                height: 1.3rem;
                background: #ff6700;
                border-radius: 0.2rem;
                font-size: 15px;
                color: white;
                line-height: 1.3rem;
                text-align: center;
            }

        }
    }
</style>
