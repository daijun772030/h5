<template>
    <div id="activity1" ref="activity1">
      <div class="content">
        <p class="p1">专属邀请码：</p>
        <p class="p2">{{share}}</p>
        <img class="img233" src="../../static/images/wechatImg.png" alt="">
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
          userid:null
        }
    },
    created () {
        // this.queryHeight();
        this.getUrl();
    },
    mounted() {
        this.clientHeight = `${window.screen.height}`
        this.clientWidth = `${window.screen.width}`
        // console.log(this.clientHeight);
        // alert(window.screen.height)
        // alert(window.screen.width)
        window.onresize = function temp () {
            this.clientHeight = `${window.screen.height}`;
            this.clientWidth = `${window.screen.width}`;
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
        console.log(clientHeight);
        this.$refs.activity1.style.height = this.clientHeight+'px';
        this.$refs.activity1.style.width = this.clientWidth+'px';
      },
      GetRequest (url) {
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
      getUrl () {
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
      
    }
}
</script>
<style scoped>
    #activity1{
        /* max-width:100%;
        max-height:100%; */
        background-image: url('../../static/images/backgroundImg.jpg');
        background-color:#ecfbf7;
        background-repeat: no-repeat;
        background-position:top;
        background-size: contain;
    }
    .content{
      width: 560px;
      height: 703px;
      position: absolute;
      margin-top: 529px;
      margin-left: 94px;
      display: flex;
      flex-direction:column;
      align-items: center;
      overflow: hidden;
    }
    .p1 {
      font-size:42px;
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:rgba(85,85,85,1);
      margin-top:100px;
    }
    .p2 {
      font-size:42px;
      font-family:PingFang-SC-Bold;
      font-weight:bold;
      color:rgba(108,212,192,1);
      margin-top: 44px;
    }
    .img233{
      width: 342px;
      height: 342px;
      margin-top: 58px;
    }
</style>