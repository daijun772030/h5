<template>
  <div>

  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  created () {
    this.queryWechat();
  },
  methods: {
    queryWechat () {
        const query = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe81288f5ea1062fa&redirect_uri=https://wechath5.pigcome.com/carveMoney&response_type=code&scope=snsapi_base&state='
        const state = this.$route.query.shareId;
        const stuble = '#wechat_redirect'
        const winQuery = query + state + stuble;
        window.location.href = winQuery;
      },
  }
}
</script>
<style scoped>

</style>

