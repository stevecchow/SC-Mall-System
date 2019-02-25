<template>
    <div>
        <ul class="mui-table-view mui-grid-view">
            <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="(item,i) in goodsList" :key="i">
                <a href="http://localhost:8080/#/good">
                    <div class="box">
                        <img class="mui-media-object" :src="item.img_banner">
                    </div>
                    <div class="info">
                        <div class="name">{{item.name}}</div>
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
    import {Toast} from 'mint-ui'

    export default {
        data() {
            return {
                goodsList: []
            }
        },
        methods: {
            getGoodsList(path) {
                console.log(path)
                if (path != 0) {
                    this.$http.get("api/getTypeAll/" + path).then(result => {
                        if (result.body.status === 1) {
                            this.goodsList = result.body.message
                            console.log(this.goodsList)
                        } else {
                            Toast('获取商品列表失败')
                        }
                    })
                } else {
                    this.$http.get("api/getRecom").then(result => {
                        if (result.body.status === 1) {
                            this.goodsList = result.body.message
                            console.log(this.goodsList)
                        } else {
                            Toast('获取商品列表失败')
                        }
                    })
                }
            }
        },
        mounted() {
            this.$http.get("api/getRecom").then(result => {
                if (result.body.status === 1) {
                    this.goodsList = result.body.message
                    console.log(this.goodsList)
                } else {
                    Toast('获取商品列表失败')
                }
            })
        },
        watch: {
            // 通过 watch，可以很方便地监视到 this.$route.path（路由地址） 的改变
            '$route.params': function (newVal, oldVal) {
                this.getGoodsList(newVal.id)
            }
        }
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

    .box {
        display: flex;
        align-items: center;
        width: 100%;
        height: 3.5rem;
        background: red;
        overflow: hidden;
    }
</style>
