<template>
    <div>
        <ul class="mui-table-view mui-grid-view">
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
                <a href="http://localhost:8080/#/good">
                    <img class="mui-media-object" src="../../assets/good.png">
                    <div class="info">
                        <div class="name">小米8 青春版</div>
                        <div class="brief">潮流镜面渐变色，自拍旗舰</div>
                        <div class="price">￥1299<span>起</span>
                            <span class="old">￥<s>1399</s></span>
                        </div>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
                <a href="http://localhost:8080/#/good">
                    <img class="mui-media-object" src="../../assets/good.png">
                    <div class="info">
                        <div class="name">小米8 青春版</div>
                        <div class="brief">潮流镜面渐变色，自拍旗舰</div>
                        <div class="price">￥1299<span>起</span>
                            <span class="old">￥<s>1399</s></span>
                        </div>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
                <a href="http://localhost:8080/#/good">
                    <img class="mui-media-object" src="../../assets/good.png">
                    <div class="info">
                        <div class="name">小米8 青春版</div>
                        <div class="brief">潮流镜面渐变色，自拍旗舰</div>
                        <div class="price">￥1299<span>起</span>
                            <span class="old">￥<s>1399</s></span>
                        </div>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
                <a href="http://localhost:8080/#/good">
                    <img class="mui-media-object" src="../../assets/good.png">
                    <div class="info">
                        <div class="name">小米8 青春版</div>
                        <div class="brief">潮流镜面渐变色，自拍旗舰</div>
                        <div class="price">￥1299<span>起</span>
                            <span class="old">￥<s>1399</s></span>
                        </div>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
                <a href="http://localhost:8080/#/good">
                    <img class="mui-media-object" src="../../assets/good.png">
                    <div class="info">
                        <div class="name">小米8 青春版</div>
                        <div class="brief">潮流镜面渐变色，自拍旗舰</div>
                        <div class="price">￥1299<span>起</span>
                            <span class="old">￥<s>1399</s></span>
                        </div>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
                <a href="http://localhost:8080/#/good">
                    <img class="mui-media-object" src="../../assets/good.png">
                    <div class="info">
                        <div class="name">小米8 青春版</div>
                        <div class="brief">潮流镜面渐变色，自拍旗舰</div>
                        <div class="price">￥1299<span>起</span>
                            <span class="old">￥<s>1399</s></span>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {},
    }
</script>

<style lang="less" scoped>
    .info {
        padding: .2rem .27rem;
        text-align: left;
        color: #3c3c3c;

        .name {
            font-size: 15px;
        }

        .brief {
            font-size: 12px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            width: 90%;
        }

        .price {
            font-size: 12px;
            color: red;

            .old {
                color: black;
            }
        }
    }

    .mui-table-view:after {
        background-color: #fff;
    }
</style>
