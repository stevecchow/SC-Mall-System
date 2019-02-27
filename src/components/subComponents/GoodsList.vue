<template>
    <div>
        <ul class="mui-table-view mui-grid-view">
            <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="(item,i) in goodsList" :key="i">
                <router-link :to="'/good/'+item._id">
                    <div class="box">
                        <img class="mui-media-object" :src="item.img_banner">
                    </div>
                    <div class="info">
                        <div class="name">{{item.name}}</div>
                        <div class="brief">{{item.slog}}</div>
                        <div class="price">￥{{item.versions[0].now_price}}<span>起</span>
                            <span class="old">￥<s>{{item.versions[0].old_price}}</s></span>
                        </div>
                    </div>
                </router-link>
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
            color: #c3c3c3;
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
