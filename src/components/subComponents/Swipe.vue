<template>
    <div>
        <mt-swipe :auto="4000" :class="{'heighter':isHeight}">
            <mt-swipe-item v-for="(item,i) in wipeList" :key="i">
                <img :src="item" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'

    export default {
        data() {
            return {
                wipeList: [],
                path: this.$route,
                isHeight: false
            }
        },
        methods: {
            getWipes(id) {
                if (id != 0) {
                    this.$http.get("api/getWipe/" + id).then(result => {
                        if (result.body.status === 1) {
                            this.wipeList = []
                            var arr = result.body.message
                            console.log(arr)
                            for (var i in arr) {
                                this.wipeList.push(arr[i].img_ads)
                            }
                        } else {
                            Toast('获取wipe失败')
                        }
                    })
                } else {
                    this.$http.get("api/getRecom").then(result => {
                        if (result.body.status === 1) {
                            this.wipeList = []
                            var arr = result.body.message
                            console.log(arr)
                            for (var i in arr) {
                                this.wipeList.push(arr[i].img_ads)
                            }
                        } else {
                            Toast('获取wipe失败')
                        }
                    })
                }
            }
        },
        watch: {
            // 通过 watch，可以很方便地监视到 this.$route.path（路由地址） 的改变
            '$route.params': function (newVal, oldVal) {
                console.log('---'+newVal.id)
                this.getWipes(newVal.id)
            }
        },
        mounted() {
            if (this.path.fullPath.indexOf("/good") == 0) {
                this.$http.get("api" + this.path.fullPath).then(result => {
                    if (result.body.status === 1) {
                        this.wipeList = result.body.message[0].img_detail
                        // console.log(this.wipeList)
                        this.isHeight = true
                    } else {
                        Toast('获取wipe失败')
                    }
                })
            } else {
                this.$http.get("api/getRecom").then(result => {
                    if (result.body.status === 1) {
                        this.wipeList = []
                        var arr = result.body.message
                        console.log(arr)
                        for (var i in arr) {
                            this.wipeList.push(arr[i].img_ads)
                        }
                    } else {
                        Toast('获取wipe失败')
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .mint-swipe {
        height: 5rem;

        .mint-swipe-items-wrap {
            overflow: auto;

            .mint-swipe-item {
                text-align: center;

                img {
                    width: 100%;
                }
            }

        }
    }

    .full {
        width: 100%;
    }

    .heighter {
        height: 11rem;
    }
</style>
