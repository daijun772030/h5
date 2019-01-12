<template>
  <div class="carveMoney" ref="activity">
    <div class="wen_bg" id="activ">
      <div class="dzBnner wen_bg"></div>
      <div class="dzContent">
        <div class="dzContent-name">
          <p>第{{shareSting.status}}期活动</p>
          <p>{{shareSting.createTime}} 至 {{shareSting.endTime}}</p>
        </div>
        <div class='dzContent-content'>
          <div class="wechatName">
            <img src="../../static/images/touxiang.png" alt="">
            <span>-{{shareSting.name}}-</span>
          </div>
          <div class="good">
            <p class="goodNum">当前赞数:{{shareSting.num}}赞</p>
            <!-- <p class="goodP">距上一名差{{shareSting.num}}赞</p> -->
          </div>
          <div>
            <button class="button" @click="give">为Ta点赞</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import qs from 'qs';
export default {
    components:{
      qs
    },
    data () {
        return {
          img1:'',
          clientHeight:'',
          clientWidth:'',
          wechatOppenid:null,//微信号的oppenid
          shareSting:null//获取当前用户的点赞信息
        }
    },
    created () {
        this.upShareNum();
    },
    mounted() {
        this.clientHeight = `${window.screen.height - 128}`
        this.clientWidth = `${window.screen.width - 128}`
        // console.log(this.clientHeight);
        // alert(window.screen.height)
        // alert(window.screen.width)
        window.onresize = function temp () {
            this.clientHeight = `${window.screen.height - 128}`;
            this.clientWidth = `${window.screen.width - 128}`;
        };
    },
    watch:{
        clientHeight:function () {
          console.log(this.clientHeight)
            this.changeFixed(this.clientHeight);
        },
        clientWidth:function () {
          this.changeFixed(this.clientWidth)
        }
    },
    methods: {
      changeFixed(clientHeight){                        //动态修改样式
        console.log(clientHeight);
        this.$refs.activity.style.height = this.clientHeight+'px';
        this.$refs.activity.style.width = this.clientWidth+'px';
      },
      // 发送请求到node服务器获取token
      queryMessage () {
        let url = `/getToken?code=${this.$route.query.code}`;
        this.$axios.get(url).then((res)=>{
          console.log(res);
          this.wechatOppenid = res.data.oppenid;
        }).catch((error)=>{
          console.log(error)
        });
      },
      give() {//点击提交点赞
        this.$api('upShare',{sharesId:'3',appid:'oDpBg1gsMPJKWcaVaWk7PeqUG0H0'}).then((res)=>{
          console.log(res);
          alert(res.data.message)
          if(res.data.retCode == 200 ) {
            this.$router.replace({path:'/shareSuccess'})
          }
        })
      },
      upShareNum () {//查询当前点赞数
        this.$api('upShareNum',{params:{sharesId:'3'}}).then((res)=>{
          console.log(res);
          this.shareSting = res.data.data;
          var startTime = this.shareSting.createTime;
          var endtime = this.shareSting.endTime;
          const date1 = startTime.split(':');
          const date2 = endtime.split(':');
          this.shareSting.createTime = date1[0] + ':' + date1[1];
          this.shareSting.endTime = date2[0] + ":" + date2[1];
          console.log(this.shareSting.createTime,this.shareSting.endTime)
        })
      },
      // AppIdShare () {//查询当前点赞排行
      //   this.$api('shareSid',{params:{shareId:'7'}}).then((res)=>{
      //     console.log(res);
      //   })
      // }
    }
}
</script>
<style scoped>
    /* #app{
      width:100%;
      height:100%;
    } */
    .wen_bg {
      background-repeat: no-repeat;
      background-size:100% 100%;  
      filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='../../static/images/berijing1.png',sizingMethod='image');
    }
    .carveMoney{
      width: 100%;
      min-width: 100%;
      background-image: url('../../static/images/hongse.png');
       background-repeat: no-repeat;
      background-size:100% 100%;  
    }
    #activ{
        width:750px;
        height:1206px;
        background-image: url('../../static/images/berijing1.png');
        /* display:flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center; */
        position: inherit;
        /* filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='../../static/images/berijing.png',sizingMethod='scale'); */
        overflow: hidden;
    }
    .dzBnner {
      width: 690px;
      height:292px;
      margin:33px 30px 0 30px;
      background-image: url('../../static/images/banner.png');
      filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='../../static/images/banner.png',sizingMethod='scale');
    }
    .dzContent {
      width: 690px;
      height:750px;
      /* position: absolute; */
      margin:87px 30px 0 30px;
      background-image: url('../../static/images/kuang.png');
      background-repeat: no-repeat;
      background-size:100% 100%;
      position: relative;
      filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='../../static/images/kuang.png',sizingMethod='scale');
    }
    .dzContent-name{
      width:436px;
      height:106px;
      position:absolute;
      top:-53px;
      left: 125px;
      margin:0 auto;
      background:rgba(255,188,31,1);
      border:3px solid rgba(89,55,5,1);
      border-radius:10px;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content:space-around;
      align-items: center;
      /* overflow: hidden; */
    }
    .dzContent-name>:first-child{
      font-size:38px;
      font-family:PingFang-SC-Heavy;
      font-weight:800;
      margin: 0 0;
      color:rgba(255,255,255,1);
    }
    .dzContent-name>:last-child {
      font-size:22px;
      font-family:PingFang-SC-Bold;
      font-weight:bold;
      margin:0 0;
      color:rgba(255,255,255,1);
    }
    .dzContent-content {
      width: 100%;
      height:697px;
      display:flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
    .wechatName{
      /* width: 200px; */
      height:230px;
      margin-top:53px;
      display:flex;
      flex-direction:column;
      justify-content: space-between;
      align-items: center;
    }
    .wechatName>img{
      max-height: 176px;
      max-width:176px;
    }
    .wechatName>span {
      font-size:43px;
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:rgba(51,51,51,1);
    }
    .good{
      text-align: center;
    }
    .goodNum{
      font-size:50px;
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:rgba(255,255,255,1);
    }
    .goodP {
      margin-top:28px;
      font-size:32px;
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:rgba(255,255,255,1);
    }
    .button{
      width:292px;
      height:72px;
      font-size:38px;
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:rgba(255,255,255,1);
      background:rgba(255,188,31,1);
      border-radius:36px;
      border: none;
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.3), 0 6px 20px 0 rgba(0,0,0,0.19);
    }
</style>