<template>
  <div class="Circle" ref="activity">
    dadadada
  </div>
</template>
<script>
export default {
  data () {
    return {
      clientHeight:null
    }
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
    changeFixed(clientHeight){                        //动态修改样式
      console.log(clientHeight);
      this.$refs.activity.style.height = clientHeight+'px';

      },
  }
}
</script>
<style scoped>
  .Circle{
    width: 100%;
  }
</style>
