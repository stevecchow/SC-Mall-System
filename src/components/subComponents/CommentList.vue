<template>
    <div>
        <mt-swipe :show-indicators="false">
            <mt-swipe-item>
                <div class="com">
                    <div class="comer">
                        <div class="comer-box">
                            <div class="comment-header">
                                <div class="avatar-img-box">
                                    <img src="../../assets/comment/icon_user.jpg" alt="">
                                </div>
                                <div class="user-info">
                                    <div class="name">steve</div>
                                    <div class="date">2019-02-19</div>
                                </div>
                            </div>
                            <div class="text">
                                <div class="con">
                                    很不错，一直都是用iphone，这次换成了小米，的确是不一样的感受啊。可是，小米现在做得真不错！必须得赞一个了！
                                </div>
                            </div>
                            <div class="images">
                                <div class="img">
                                    <img src="../../assets/comment/1.jpg" alt="">
                                </div>
                                <div class="img">
                                    <img src="../../assets/comment/2.jpg" alt="">
                                </div>
                                <div class="img">
                                    <img src="../../assets/comment/3.jpg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </mt-swipe-item>
            <mt-swipe-item>
                <div class="com">
                    <div class="comer">
                        <div class="comer-box">
                            <div class="comment-header">
                                <div class="avatar-img-box">
                                    <img src="../../assets/comment/icon_user.jpg" alt="">
                                </div>
                                <div class="user-info">
                                    <div class="name">steve</div>
                                    <div class="date">2019-02-19</div>
                                </div>
                            </div>
                            <div class="text">
                                <div class="con">
                                    很不错，一直都是用iphone，这次换成了小米，的确是不一样的感受啊。可是，小米现在做得真不错！必须得赞一个了！
                                </div>
                            </div>
                            <div class="images">
                                <div class="img">
                                    <img src="../../assets/comment/1.jpg" alt="">
                                </div>
                                <div class="img">
                                    <img src="../../assets/comment/2.jpg" alt="">
                                </div>
                                <div class="img">
                                    <img src="../../assets/comment/3.jpg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    console.log('CommentList')
    export default {
        data() {
            return {}
        },
        methods: {},
    }
</script>

<style lang="less" scoped>
    .mint-swipe {
        height: 5rem;

        .mint-swipe-items-wrap {
            overflow: auto;

            .mint-swipe-item {
                text-align: center;

                .com {
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    height: 5rem;

                    .comer {
                        width: 9rem;
                        height: 5rem;
                        background: #fafafa;
                        border: 1px solid #efecec;
                        border-radius: 0.25rem;

                        .comer-box {
                            width: 9rem;
                            height: 5rem;
                            box-sizing: border-box;
                            padding: 0.3rem;

                            .comment-header {
                                display: flex;
                                /*justify-content: space-between;*/
                                align-items: center;

                                .avatar-img-box {
                                    margin-right: .24rem;
                                    width: 1rem;
                                    height: 1rem;
                                    overflow: hidden;
                                    border-radius: 100%;

                                    img {
                                        width: 100%;
                                    }
                                }

                                .user-info {
                                    .name {
                                        font-size: 12px;
                                    }

                                    .date {
                                        font-size: 12px;
                                    }
                                }
                            }

                            .text {
                                font-size: 12px;
                                height: 1.2rem;
                                margin-top: 0.2rem;
                                /*多行文字溢出省略*/
                                overflow: hidden;
                                text-overflow: ellipsis;
                                display: -webkit-box;
                                -webkit-line-clamp: 2;
                                -webkit-box-orient: vertical;

                                .con {

                                }
                            }

                            .images {
                                width: 100%;
                                height: 1.8rem;
                                display: flex;
                                align-items: center;
                                justify-content: space-between;

                                .img {
                                    width: 30%;
                                    height: 1.6rem;
                                    border-radius: 0.2rem;
                                    overflow: hidden;

                                    img {

                                    }
                                }
                            }
                        }
                    }
                }
            }

        }
    }

</style>
