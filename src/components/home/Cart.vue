<template>
    <div>
        <header class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
            <h1 class="mui-title">购物车</h1>
        </header>
        <div class="mui-content">
            <ul id="OA_task_2" class="mui-table-view">
                <li class="mui-table-view-cell">
                    <div class="mui-slider-right mui-disabled">
                        <a class="mui-btn mui-btn-red">删除</a>
                    </div>
                    <div class="mui-slider-handle mui-table">
                        <div class="mui-table-cell">
                            <div class="mui-input-row mui-checkbox mui-left">
                                <label>&nbsp;</label>
                                <input name="checkbox" value="Item 1" type="checkbox">
                            </div>
                        </div>
                        <div class="img">
                            <img src="../../assets/goods/1.png" alt="">
                        </div>
                        <div class="info">
                            <div class="up">Amazfit智能运动手表2S 黑色</div>
                            <div class="middle">售价：￥1990</div>
                            <div class="down">
                                <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
                                    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                                    <input id="test" class="mui-input-numbox" type="number" value="5"/>
                                    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="mui-table-view-cell">
                    <div class="mui-slider-right mui-disabled">
                        <a class="mui-btn mui-btn-red">删除</a>
                    </div>
                    <div class="mui-slider-handle mui-table">
                        <div class="mui-table-cell">
                            <div class="mui-input-row mui-checkbox mui-left">
                                <label>&nbsp;</label>
                                <input name="checkbox" value="Item 1" type="checkbox">
                            </div>
                        </div>
                        <div class="img">
                            <img src="../../assets/goods/1.png" alt="">
                        </div>
                        <div class="info">
                            <div class="up">Amazfit智能运动手表2S 黑色</div>
                            <div class="middle">售价：￥1990</div>
                            <div class="down">
                                <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
                                    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                                    <input id="test" class="mui-input-numbox" type="number" value="5"/>
                                    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="bottom-submit">
            <div class="price-box">
                <span class="title">共3件 总计:</span>
                <span class="price">￥5000</span>
            </div>
            <a class="shop" href="">继续购物</a>
            <a class="goMoney" href="">去结算</a>
        </div>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.min.js'

    export default {
        data() {
            return {}
        },
        methods: {
            init() {
                mui.init();
                (function ($) {
                    var btnArray = ['确认', '取消'];
                    //第二个demo，向左拖拽后显示操作图标，释放后自动触发的业务逻辑
                    $('#OA_task_2').on('slideleft', '.mui-table-view-cell', function (event) {
                        var elem = this;
                        mui.confirm('确认删除该条记录？', 'Hello MUI', btnArray, function (e) {
                            if (e.index == 0) {
                                elem.parentNode.removeChild(elem);
                            } else {
                                setTimeout(function () {
                                    $.swipeoutClose(elem);
                                }, 0);
                            }
                        });
                    });
                })(mui);
            }
        },
        mounted() {
            this.init()
        }
    }
</script>

<style lang="less" scoped>
    .mui-table-view-cell {
        height: 3rem;

        .mui-table {
            display: flex;
            align-items: center;
            width: 100%;

            .img {
                width: 2.3rem;
                height: 2.3rem;
                background: #000;

                img {
                    width: 100%;
                    border: 1px solid #eee;
                }
            }

            .info {
                .middle {
                    color: #999;
                }
            }

        }

        .mui-checkbox.mui-left input[type=checkbox], .mui-radio.mui-left input[type=radio] {
            left: 0;
        }
    }

    .mui-checkbox.mui-left label, .mui-radio.mui-left label {
        padding-left: 0.5rem;
    }

    .mui-table-view:before {
        background-color: #fff;
    }

    .mui-checkbox input[type=checkbox]:checked:before, .mui-radio input[type=radio]:checked:before {
        color: #ff6700;
    }

    .mui-table-view-cell:after {
        background-color: #eee;
    }

    .bottom-submit {
        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: #fff;
        z-index: 99;
        box-shadow: 0 3px 14px 2px rgba(0, 0, 0, .12);
        height: 1.5rem;

        .price-box {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100%;
            width: 33%;
            color: #999;

            .title {
                padding-top: 5%;
                font-size: 13px;
                font-weight: lighter;
            }

            .price {
                color: #ff5722;
                font-size: 20px;
            }
        }

        .shop {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #f4f4f4;
            color: #333;
            width: 33%;
            height: 100%;
            font-size: 15px;
        }

        .goMoney {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #ff6700;
            color: white;
            width: 34%;
            height: 100%;
            font-size: 15px;
        }
    }
</style>
