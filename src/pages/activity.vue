<template>
<<<<<<< HEAD
    <div id="activity" ref="activity">
        <img src="../../static/images/wechatOne.png" alt="">
        <span></span>
=======
    <div class="activity">
        <img src="../../static/images/wechatTwo.png" alt="">
>>>>>>> 7080233bdb1fb5a2fa6ce2c0e9c240b298a98b81
    </div>
</template>
<script>
export default {
    data () {
        return {
<<<<<<< HEAD
          img1:'',
          clientHeight:'',
        }
    },
    created () {
        // this.queryHeight();
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
    methods: {
        changeFixed(clientHeight){                        //动态修改样式
        console.log(clientHeight);
        this.$refs.activity.style.height = clientHeight+'px';

        },
=======

        }
>>>>>>> 7080233bdb1fb5a2fa6ce2c0e9c240b298a98b81
    }
}
</script>
<style scoped>
<<<<<<< HEAD
    #activity{
        width: 100%;
        height:1240px;
        /* max-height: 1624px;
        padding-bottom: 292px; */
        background-color:#222fac;
=======
    .activity{
        width: 100%;
>>>>>>> 7080233bdb1fb5a2fa6ce2c0e9c240b298a98b81
    }
    img{
        width: 100%;
    }
<<<<<<< HEAD
    /* span{
        display: inline-block;
        width: 100%;
        height: 146px;
        margin-top:-20px;
    } */
</style>
=======
</style>

>>>>>>> 7080233bdb1fb5a2fa6ce2c0e9c240b298a98b81
