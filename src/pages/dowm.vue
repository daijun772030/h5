<template>
    <div id="dowm" ref="dowm">
        <img :src="img" alt="">
    </div>
</template>
<script>
export default {
    data () {
        return {
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
        var u = navigator.userAgent;
        var weixin= u.toLowerCase().indexOf('micromessenger') > -1 /*是否是微信*/
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        if(isiOS) {
                var test =document.getElementById('dowm');
                test.style.backgroundColor = 'white'
                console.log(test);
                // document.getElementById('dowm').style.backgroundColor='white';
            }
        // if(isAndroid==true && weixin==true){
        //     this.img = '../../static/images/dowmImg1.png'
        //     // Window.location.href="http://www.pigcome.com/wechat/download"
        //     // http://www.pigcome.com/app-release.apk
        // }
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

    },
    methods:{
        queryUser() {
            var u = navigator.userAgent;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端 
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 
            var webKit = u.indexOf('AppleWebKit') > -1; /*苹果、谷歌内核*/
            var mobile = !!u.match(/AppleWebKit.*Mobile.*/); /*是否为移动终端*/
            var weixin= u.toLowerCase().indexOf('micromessenger') > -1 /*是否是微信*/
            console.log(isAndroid,isiOS,weixin)
            // if(isiOS) {
            //     // this.img = '../../static/images/dowmImg.png'
            //     var test =document.getElementById('dowm');
            //     test.style.backgroundColor = 'white'
            // } 
            if(isAndroid==true && weixin==true){
                this.img = '../../static/images/dowmImg1.png'
                // Window.location.href="http://www.pigcome.com/wechat/download"
                // http://www.pigcome.com/app-release.apk
            }
             window.location.href = 'http://www.pigcome.com/wechat/download'
        }
    }
}
</script>
<style scoped>
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

</style>
