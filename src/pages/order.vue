<template>
    <div id="activity" ref="activity">
      <div class="content">
        <input class="input" type="text" placeholder="输入订单号" v-model="value">
        <button  @click="updata" class="button">重新发起</button>
      </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
          img1:'',
          clientHeight:'',
          clientWidth:'',
          share:null,
          userid:null,
          value:null
        }
    },
    created () {
        // this.queryHeight();
        this.getUrl();
        this.queryWechat()

    },
    mounted() {
        this.clientHeight = `${window.screen.availHeight}`
        this.clientWidth = `${window.screen.availWidth}`
        // console.log(this.clientHeight);
        // alert(window.screen.height)
        // alert(window.screen.width)
        window.onresize = function temp () {
            this.clientHeight = `${window.screen.availHeight}`;
            this.clientWidth = `${window.screen.availWidth}`;
        };
    },
    watch:{
        clientHeight:function () {
            this.changeFixed(this.clientHeight);
        },
        clientWidth:function () {
          this.changeFixed(this.clientWidth)
        }
    },
    methods: {
      changeFixed(clientHeight){                        //动态修改样式
        console.log(this.clientHeight);
        console.log(this.clientWidth);
        this.$refs.activity.style.height = this.clientHeight+'px';
        this.$refs.activity.style.width = this.clientWidth+'px';
      },
      GetRequest (url) {//查看请求地址
        var props = [];
          if (url.indexOf("?") != -1) {    //判断是否有参数
              var parameters = url.split("?")[1]; 
              var parametersArr = parameters.split("&");
              for(var i = 0; i < parametersArr.length; i++) {
                  props.push(parametersArr[i].split("=")[1]);
              }
          }
          return props;
      },
      
      queryWechat () {
        window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe81288f5ea1062fa&redirect_uri=https://wechath5.pigcome.com/carveMoney&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
      },
      getUrl () {//获取地址参数
        // debugger;
        var url = location.href;
        console.log(url)
        this.GetRequest(url)
          var cs;
          var request = this.GetRequest(url)
          console.log(request)
          if(request != null || request.length >=2 || request.length>1) {
            this.share = request[0];
            this.userid = request[1]
            console.log(this.messageid,this.userid);
          }
      },
      updata() {
        console.log(this.value);
        this.$api('orderCallback',{order_status:7,order_id:this.value,cancel_from:0}).then((res)=>{
          console.log(res);
          if(res.status == 200) {
            this.$message('重发订单成功，请等待达达接单');
            this.shopId = false;
          }else {
            this.$message.error('重发订单失败，请重试')
          }
        })
      }
      
    }
}
</script>
<style scoped>
    #activity{
        width: 100%;
        max-height:100%;
        background-image: url('../../static/images/background1.jpg');
        background-repeat: no-repeat;
        background-size: contain;
        background-position:inherit;
        background-color:#ecfbf7;
    }
    .content{
      width: 560px;
      height: 703px;
      position: absolute;
      margin-top: 529px;
      margin-left: 94px;
      display: flex;
      flex-direction:column;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    }
    .content>.input{
    width: 100%;
    height:65px;
    /* margin-top: 38px; */
    text-align: center;
    vertical-align:middle;
    font-size:26px;
    font-family:PingFang-SC-Regular;
    color:rgba(153,153,153,1);
    border: none;
    outline: none;
  }
  .content>.button {
    width: 100%;
    height:65px;
    margin-top: 50px;
    font-size:26px;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
    background:rgba(0,203,153,1);
    border-radius:2px;
    text-align: center;
    border:none;
    outline: none;
  }
</style>