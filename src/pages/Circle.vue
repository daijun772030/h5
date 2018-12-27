<template>
  <div class="Circle" ref="activity">
    <header>
      <h3 v-if="list.title !== null">{{list.title}}</h3>
    </header>
    <div class="contentdj">
      <div class="nav">
        <div class="userImg">
          <img :src='"http://www.pigcome.com:81" + list.portrait'  alt="">
        </div>
        <div class="userCntent">
          <p>{{list.name}}</p>
          <p>{{list.createTime}}</p>
        </div>
      </div>
      <div class="content-content">
        <div v-if="list.thingNumber == 0" v-html="list.messageText" class="codeMessage"></div>
        <p v-if="list.thingNumber !== 0">{{list.messageText}}</p>
        <img :src="'http://www.pigcome.com:81' + item" alt="帖子图片详情" v-for="(item,index) in list.img" :key="index">
      </div>
    </div>
    <div class="footer">
      <img src="../../static/images/1.png" alt="">
      <button @click="updateApp">点击立即下载</button>
    </div>
  </div>
</template>
<script>
import qs from 'qs';
export default {
  components:{
    qs,
  },
  data () {
    return {
      clientHeight:null,
      messageid:null,//消息id
      userid:null,//用户id
      list:null//查询回来的数据
    }
  },
  created() {
    this.query();
  },
  mounted() {
    this.clientHeight = `${document.documentElement.clientHeight}`
    console.log(this.clientHeight);
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
    updateApp () {
       window.location.href = 'http://www.pigcome.com/wechat/download';
    },
    changeFixed(clientHeight){//动态修改最外层得body样式
      console.log(clientHeight);
      this.$refs.activity.style.height = clientHeight+'px';
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
          this.messageid = request[0];
          this.userid = request[1]
          console.log(this.messageid,this.userid);
        }
    },
    query(){//查询数据
      this.getUrl ();
      let data = qs.stringify({
        'messageid':this.messageid,
        'userid':this.userid
      });
      let api = '/test/message/findByMessageIdAll?' + data;
      console.log(api)
      this.$axios.get(api).then((res)=>{
        console.log(res)
        this.list = res.data.data.message;
        var spImg = this.list.img;
        console.log(this.list.messageText)
        if(spImg!=null) {
          var a = spImg.split(',');
          // console.log(a)
          this.list.img = a;
          // console.log(this.list)
        }
      })
    }
  }
}
</script>
<style scoped>
  .Circle{
    width: 100%;
  }
  header {
    width: 100%;
  }
  header h3{
    width: 95%;
    margin:0 auto;
    font-size: 60px;
    /* border: 1px solid red; */
  }
  .contentdj {
    width: 95%;
    margin: 40px auto;
  }
  .nav{
    width: 100%;
    height:100px;
    margin-bottom: 20px;
    /* border: 1px solid red; */
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .userImg{
    width:51px;
    max-height: 51px;
    /* border: 1px solid blue; */
  }
  .userImg>img {
    width: 100%;
    min-height: 100%;
  }
  .userCntent{
    width: calc(100% - 51px);
    height: 70px;
    font-size: 16px;
    display:flex;
    flex-direction: column;
    justify-content: center;
  }
  .userCntent p {
    margin-left: 20px;
    /* padding: 5px 0; */
  }
  .content-content {
    width: 100%;
    /* height:100px; */
  }
  .content-content p{
    width: 100%;
    margin-bottom: 20px;
    font-size:12px
  }
  .content-content img{
    width: 100%;
    /* max-height: 400px; */
    height:auto;
  }
  .footer {
    position: relative;
    width: 100%;
    background-image: url('../../static/images/1.png');
    overflow: hidden;
    /* height: 20px; */
    background-repeat: no-repeat;
    background-size: cover;
    background-position:inherit;
  }
  .footer button {
    width: 200px;
    height:65px;
    position:absolute;
    bottom: 0;
    top: 50%;
    right:20px;
    margin-top: -32px;
    font-size:26px;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
    background:rgba(0,203,153,1);
    border-radius:2px;
    text-align: center;
    border-radius: 40px;
    border: 0px;
    outline: none;
  }
</style>
