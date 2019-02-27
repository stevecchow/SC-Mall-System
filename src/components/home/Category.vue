<template>
    <div>
        <header class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
            <h1 class="mui-title">分类</h1>
        </header>
        <div class="mui-content mui-row mui-fullscreen">
            <div class="mui-col-xs-3">
                <div id="segmentedControls"
                     class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-vertical">
                </div>
            </div>
            <div id="segmentedControlContents" class="mui-col-xs-9" style="border-left: 1px solid #eee;">
            </div>
        </div>
        <!--底部栏-->
        <bottomBar></bottomBar>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    import bottomBar from './BottomBar'
    import mui from '../../lib/mui/js/mui.min.js'

    // 这里的样式是组件最先载入的
    // import '../../lib/mui/css/category.css'

    export default {
        data() {
            return {}
        },
        methods: {
            getTypes() {

            },
            getAllGoods() {

            },
            start() {
                mui.init({
                    swipeBack: true //启用右滑关闭功能
                });
                var controls = document.getElementById("segmentedControls");
                var contents = document.getElementById("segmentedControlContents");
                var html = [];
                var i = 1,
                    j = 1,
                    m = 6, //左侧选项卡数量+1
                    n = 6; //每个选项卡列表数量+1

                // getTypes
                var types = []
                this.$http.get('api/types').then(result => {
                    if (result.body.status === 1) {
                        var arr = result.body.message
                        for (var i in arr) {
                            types.push(arr[i].type)
                        }

                        // 使用 types
                        for (var i = 0; i < 5; i++) {
                            html.push('<a class="mui-control-item" data-index="' + i + '">' + types[i] + '</a>');
                        }
                        controls.innerHTML = html.join('');
                        html = [];

                        // getGoods
                        this.$http.get('api/allGoods').then(result => {
                            if (result.body.status === 1) {
                                var allGoods = result.body.message


                                // 使用 goods
                                allGoods.sort((a, b) => {
                                    return (a.type_id - b.type_id)
                                })

                                console.log(allGoods)

                                for (i = 1; i < 26; i+=5) {
                                    html.push('<div id="content' + i + '" class="mui-control-content"><ul class="mui-table-view">');
                                    html.push('<li class="mui-table-view-cell"><div class="boxer"><a href="http://localhost:8080/#/good/'+allGoods[i-1]._id+'"><img src="' + allGoods[i-1].img_ads + '" alt=""></a></div></li>');
                                    for (j = 0; j < 5; j++) {
                                        html.push('<li class="mui-table-view-cell"><a href="http://localhost:8080/#/good/'+allGoods[i+j-1]._id+'"><div class="img"><img src="' + allGoods[i+j-1].img_banner + '" alt=""></div></a><span>' + allGoods[i+j-1].name + '</span></li>');
                                    }
                                    html.push('</ul></div>');
                                }
                                // for (var i = 0; i < 25; i+=5) {
                                //     console.log('我是banner:' + goods[i])
                                //     for (var j = 0; j < 5; j++) {
                                //         console.log('我是内容：'+goods[i+j])
                                //     }
                                // }

                                contents.innerHTML = html.join('');
                                //默认选中第一个
                                controls.querySelector('.mui-control-item').classList.add('mui-active');
                                //			contents.querySelector('.mui-control-content').classList.add('mui-active');
                                (function () {
                                    var controlsElem = document.getElementById("segmentedControls");
                                    var contentsElem = document.getElementById("segmentedControlContents");
                                    var controlListElem = controlsElem.querySelectorAll('.mui-control-item');
                                    var contentListElem = contentsElem.querySelectorAll('.mui-control-content');
                                    var controlWrapperElem = controlsElem.parentNode;
                                    var controlWrapperHeight = controlWrapperElem.offsetHeight;
                                    var controlMaxScroll = controlWrapperElem.scrollHeight - controlWrapperHeight;//左侧类别最大可滚动高度
                                    var maxScroll = contentsElem.scrollHeight - contentsElem.offsetHeight;//右侧内容最大可滚动高度
                                    var controlHeight = controlListElem[0].offsetHeight;//左侧类别每一项的高度
                                    var controlTops = []; //存储control的scrollTop值
                                    var contentTops = [0]; //存储content的scrollTop值
                                    var length = contentListElem.length;
                                    for (var i = 0; i < length; i++) {
                                        controlTops.push(controlListElem[i].offsetTop + controlHeight);
                                    }
                                    for (var i = 1; i < length; i++) {
                                        var offsetTop = contentListElem[i].offsetTop;
                                        if (offsetTop + 100 >= maxScroll) {
                                            var height = Math.max(offsetTop + 100 - maxScroll, 100);
                                            var totalHeight = 0;
                                            var heights = [];
                                            for (var j = i; j < length; j++) {
                                                var offsetHeight = contentListElem[j].offsetHeight;
                                                totalHeight += offsetHeight;
                                                heights.push(totalHeight);
                                            }
                                            for (var m = 0, len = heights.length; m < len; m++) {
                                                contentTops.push(parseInt(maxScroll - (height - heights[m] / totalHeight * height)));
                                            }
                                            break;
                                        } else {
                                            contentTops.push(parseInt(offsetTop));
                                        }
                                    }
                                    contentsElem.addEventListener('scroll', function () {
                                        var scrollTop = contentsElem.scrollTop;
                                        for (var i = 0; i < length; i++) {
                                            var offsetTop = contentTops[i];
                                            var offset = Math.abs(offsetTop - scrollTop);
//						console.log("i:"+i+",scrollTop:"+scrollTop+",offsetTop:"+offsetTop+",offset:"+offset);
                                            if (scrollTop < offsetTop) {
                                                if (scrollTop >= maxScroll) {
                                                    onScroll(length - 1);
                                                } else {
                                                    onScroll(i - 1);
                                                }
                                                break;
                                            } else if (offset < 20) {
                                                onScroll(i);
                                                break;
                                            } else if (scrollTop >= maxScroll) {
                                                onScroll(length - 1);
                                                break;
                                            }
                                        }
                                    });
                                    var lastIndex = 0;
                                    //监听content滚动
                                    var onScroll = function (index) {
                                        if (lastIndex !== index) {
                                            lastIndex = index;
                                            var lastActiveElem = controlsElem.querySelector('.mui-active');
                                            lastActiveElem && (lastActiveElem.classList.remove('mui-active'));
                                            var currentElem = controlsElem.querySelector('.mui-control-item:nth-child(' + (index + 1) + ')');
                                            currentElem.classList.add('mui-active');
                                            //简单处理左侧分类滚动，要么滚动到底，要么滚动到顶
                                            var controlScrollTop = controlWrapperElem.scrollTop;
                                            if (controlScrollTop + controlWrapperHeight < controlTops[index]) {
                                                controlWrapperElem.scrollTop = controlMaxScroll;
                                            } else if (controlScrollTop > controlTops[index] - controlHeight) {
                                                controlWrapperElem.scrollTop = 0;
                                            }
                                        }
                                    };
                                    //滚动到指定content
                                    var scrollTo = function (index) {
                                        contentsElem.scrollTop = contentTops[index];
                                    };
                                    mui(controlsElem).on('tap', '.mui-control-item', function (e) {
                                        scrollTo(this.getAttribute('data-index'));
                                        return false;
                                    });
                                })();
                            } else {
                                Toast('获取商品列表失败')
                            }
                        })
                    } else {
                        Toast('获取商品信息失败')
                    }
                })


            },
        },
        components: {
            bottomBar
        },
        mounted() {
            this.start()
        },
    }
</script>

<style lang="less" scoped>
    .mui-fullscreen {
        bottom: 1.3rem;
    }

    .mui-bar {
        background: #f2f2f2;
    }
</style>
