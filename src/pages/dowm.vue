<template>
    <div class="dowm">

    </div>
</template>
<script>
export default {
    data () {
        return {

        }
    },
    created () {

    },
    methods:{
        queryUser() {
            var u = navigator.userAgent;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端 
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 
            var webKit = u.indexOf('AppleWebKit') > -1; /*苹果、谷歌内核*/
            var mobile = !!u.match(/AppleWebKit.*Mobile.*/); /*是否为移动终端*/
            var weixin= u.toLowerCase().indexOf('micromessenger') > -1 /*是否是微信*/
            if(isAndroid) {
                Window.location.href="http://www.baidu.com"
            }else if(isiOS) {
                window.location.href="http://www.baidu.com"
            }
        }
    }
}
</script>
<style scoped>

</style>

