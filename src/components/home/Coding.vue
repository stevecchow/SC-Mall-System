<template>
    <div>
        <header class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
            <h1 class="mui-title">开发中</h1>
        </header>
        <div class="coming mui-fullscreen">
            <div class="com">施工中...</div>
        </div>
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
    .coming {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        .com {
            font-size: 1rem;
        }
    }
</style>
