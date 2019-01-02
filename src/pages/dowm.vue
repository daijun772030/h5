<template>
<<<<<<< HEAD
    <div id="dowm" ref="dowm">
        <img :src="img" alt="">
=======
    <div class="dowm">

>>>>>>> 7080233bdb1fb5a2fa6ce2c0e9c240b298a98b81
    </div>
</template>
<script>
export default {
    data () {
        return {
<<<<<<< HEAD
            img:null
        }
    },
    created () {
        this.queryUser();
    },
    mounted() {
        this.clientHeight = `${document.documentElement.clientHeight}`
        console.log(self.clientHeight);
        window.onresize = function temp () {
            this.clientHeight = `${document.documentElement.clientHeight}`;
        };
    },
    watch:{
        clientHeight:function () {
            this.changeFixed(this.clientHeight)
        }
    },
    methods:{
        changeFixed(clientHeight){                        //动态修改样式
        console.log(clientHeight);
        this.$refs.dowm.style.height = clientHeight+'px';

        },
=======

        }
    },
    created () {

    },
    methods:{
>>>>>>> 7080233bdb1fb5a2fa6ce2c0e9c240b298a98b81
        queryUser() {
            var u = navigator.userAgent;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端 
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 
            var webKit = u.indexOf('AppleWebKit') > -1; /*苹果、谷歌内核*/
            var mobile = !!u.match(/AppleWebKit.*Mobile.*/); /*是否为移动终端*/
            var weixin= u.toLowerCase().indexOf('micromessenger') > -1 /*是否是微信*/
<<<<<<< HEAD
            console.log(isAndroid,isiOS,weixin)
            // if(isiOS) {
            //     // this.img = '../../static/images/dowmImg.png'
            //     window.location.href = 'http://www.pigcome.com/wechat/download'
            // } 
            if(isAndroid==true && weixin==true){
                this.img = '../../static/images/dowmImg1.png'
                // Window.location.href="http://www.pigcome.com/wechat/download"
                // http://www.pigcome.com/app-release.apk
            }
             window.location.href = 'http://www.pigcome.com/wechat/download'
        
    
=======
            if(isAndroid) {
                Window.location.href="http://www.baidu.com"
            }else if(isiOS) {
                window.location.href="http://www.baidu.com"
            }
>>>>>>> 7080233bdb1fb5a2fa6ce2c0e9c240b298a98b81
        }
    }
}
</script>
<style scoped>
<<<<<<< HEAD
    #dowm{
        width: 100%;
        /* height:1240px; */
        background-color: #bc210f;
    }
    img{
        width: 100%;
        max-height:100%;
    }
    
</style>
=======

</style>

>>>>>>> 7080233bdb1fb5a2fa6ce2c0e9c240b298a98b81
