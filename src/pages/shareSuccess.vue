<template>
  <div class="activity" ref="activity">
    <img src="../../static/images/shareJPG.jpg" alt="">
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
  },
  mounted() {
        this.clientHeight = `${window.screen.height}`
        this.clientWidth = `${window.screen.width}`
        console.log(window.screen.height);
        console.log( window.devicePixelRatio);
        console.log(window.screen.height * window.devicePixelRatio);
        // alert(window.screen.height)
        // alert(window.screen.width)
        window.onresize = function temp () {
            this.clientHeight = `${window.screen.height}`;
        this.clientWidth = `${window.screen.width}`;
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
  }
  img {
    width: 100%;
    height: 100%;
  }
</style>

