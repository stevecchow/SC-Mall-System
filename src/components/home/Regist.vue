<template>
    <div>
        <header class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
            <h1 class="mui-title">注册账号</h1>
        </header>
        <div class="mui-content">
            <div class="img">
                <img src="../../assets/logo.png" alt="">
            </div>
            <form id='login-form' class="mui-input-group">
                <div class="mui-input-row">
                    <label>邮箱</label>
                    <input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
                </div>
                <div class="mui-input-row">
                    <label>密码</label>
                    <input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
                </div>
                <div class="mui-input-row">
                    <label>密码</label>
                    <input id='password' type="password" class="mui-input-clear mui-input" placeholder="请再次输入密码">
                </div>
            </form>
            <div class="mui-content-padded">
                <button id='regist' type="button" class="mui-btn mui-btn-block mui-btn-primary">注册</button>
                <div class="link-area">
                    <router-link id='reg' to="/login">登录</router-link>
                    <!--<span class="spliter">|</span>-->
                    <!--<router-link id='forgetPassword'>忘记密码</router-link>-->
                </div>
            </div>
            <div class="mui-content-padded oauth-area">

            </div>
        </div>
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
    .ui-page-login,
    body {
        width: 100%;
        height: 100%;
        margin: 0px;
        padding: 0px;
    }

    .mui-content {
        height: 100%;
    }

    .area {
        margin: 20px auto 0px auto;
    }

    .mui-input-group {
        margin-top: 10px;
    }

    .mui-input-group:first-child {
        margin-top: 20px;
    }

    .mui-input-group label {
        font-size: 17px;
        width: 22%;
    }

    .mui-input-row label ~ input,
    .mui-input-row label ~ select,
    .mui-input-row label ~ textarea {
        width: 78%;
    }

    .mui-checkbox input[type=checkbox],
    .mui-radio input[type=radio] {
        top: 6px;
    }

    .mui-content-padded {
        margin-top: 25px;
    }

    .mui-btn {
        padding: 10px;
    }

    .link-area {
        display: block;
        margin-top: 25px;
        text-align: center;
        font-size: 17px;
    }

    .spliter {
        color: #bbb;
        padding: 0px 8px;
    }

    .oauth-area {
        position: absolute;
        bottom: 20px;
        left: 0px;
        text-align: center;
        width: 100%;
        padding: 0px;
        margin: 0px;
    }

    .oauth-area .oauth-btn {
        display: inline-block;
        width: 50px;
        height: 50px;
        background-size: 30px 30px;
        background-position: center center;
        background-repeat: no-repeat;
        margin: 0px 20px;
        /*-webkit-filter: grayscale(100%); */
        border: solid 1px #ddd;
        border-radius: 25px;
    }

    .oauth-area .oauth-btn:active {
        border: solid 1px #aaa;
    }

    .oauth-area .oauth-btn.disabled {
        background-color: #ddd;
    }

    .mui-content {
        .img {
            width: 2rem;
            height: 2rem;
            margin: 1rem auto;
            img {
                width: 100%;
            }
        }
    }

    .mui-btn-blue, .mui-btn-primary, input[type=submit] {
        color: #fff;
        border: 1px solid #f37d0f;
        background-color: #f37d0f;
    }

    .link-area {
        a {
            color: #333;
        }
    }

    input {
        background: rgb(0,0,0,0);
    }
</style>
