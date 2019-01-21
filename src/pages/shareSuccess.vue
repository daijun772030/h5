<template>
  <div class="activity" ref="activity">
    <div class="activity-background">
      <img src="../../static/images/shareJPG.jpg" alt="">
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      clientHeight:null,
      clientWidth:null
    }
  },
  created () {
    // this.upShareNum();
    // this.changeFixed()
  },
  mounted() {
        this.clientHeight = `${document.documentElement.clientHeight}`
        this.clientWidth = `${document.documentElement.clientWidth}`
        console.log(document.body.clientHeight);
        console.log( document.body.clientWidth);
        // console.log(window.screen.height * window.devicePixelRatio);
        // alert(window.screen.height)
        // alert(window.screen.width)
        window.onresize = function temp () {
            this.clientHeight = `${document.documentElement.clientHeight}`;
        this.clientWidth = `${document.documentElement.clientWidth}`;
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
    methods:{
    changeFixed(clientHeight){                        //动态修改样式
        // console.log(clientHeight);
        this.$refs.activity.style.height = this.clientHeight+'px';
        this.$refs.activity.style.width = this.clientWidth+'px';
      }
    }
}
</script>
<style scoped>
  .activity {
    width: 100%;
    min-height:100%;
    border: none;
    background-image:url('../../static/images/DJbackground.png');
    background-repeat: no-repeat;
    background-size:cover;
    background-position: top;
  }
  .activity-background{
    width:100%;
    height:100%;
    background:rgba(255,211,211,.75);
    /* opacity:0.75; */
  }
  img {
    width: 100%;
    height: auto;
  }
</style>

