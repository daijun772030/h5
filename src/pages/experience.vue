<template>
  <div class="law">
    <div class="text">
      <!-- <h2>经验值规则</h2> -->
    <h5>1.  登录获取经验值：</h5>
    <p>1.1  仅限每天首次登录</p>
    <p>1.2  按周计算</p>
    <p>1.3  从登录的当天开始计算</p>
    <p>1.4  连续登录的第1-6天，每天+1点经验值</p>
    <p>1.5  连续登录的第7天，+5点经验值</p>
    <p>1.6  任意一天没有连续登录，都会从头开始计算</p>
    <h5>2.  求助帖、求购贴、出售贴获取经验值：</h5>
    <p>2.1  每天可获取的经验值上限为20</p>
    <p>2.2  发帖、被收藏、被点赞经验值  +1（经验值为发帖人所获得）</p>
    <p>2.3  评论别人的帖子，经验值  +1（经验值为评论者所获得）</p>
    <h5>3.  经验贴获取经验值：</h5>
    <p>3.1  每天可获取的经验值没有上限</p>
    <p>3.2  发帖经验值  +5、被收藏经验值  +5，被点赞经验值  +1  （经验值为发帖人所获得）</p>
    <p>3.3  评论别人的帖子，经验值  +1（经验值为评论者所获得）</p>
    <h5>4.  经验值兑换：</h5>
    <p>4.1  1个经验值  =  0.1元</p>
    <p>4.2  在耗材页面提交订单的时候直接减去相对应的金额（以商品单价为标准），比如200个经验值，便减去20元</p>
    <p>4.3  经验值所减去的金额不能大于当前商品的单价</p>
    <p>4.4  如果当前订单金额减下来为0元，系统默认支付金额为0.1元</p>
    <h5>5.  等级：</h5>
    <p>5.1  注册即为铜牌会员：0-999经验值</p>
    <p>5.2  银牌会员：1000-2999经验值</p>
    <p>5.3  黄金会员：3000-7999经验值</p>
    <p> 5.4  铂金会员：8000-18888经验值</p>
    <p>5.5  钻石会员：18889经验值及以上</p>
    <p class="p2"></p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  beforeCreate () {
    console.log(this.$refs.button);
  },
  mounted () {
    console.log(this.$refs.button)

    }
  }
</script>
<style scoped>
  .law {
    width: 100%;
    height: 100%;
  }
  h2{
    border-bottom: 1px solid rgb(192, 188, 188);
    padding: 10px;
    text-align: center;
  }
  h4,h5{
    padding: 10px 0;
  }
  .text {
    width: 90%;
    height: 100%;
    margin: 10px auto;
  }
  p{
    font-size: 25px;
    text-indent: 40px;
    line-height: 60px;
  }
  .p2 {
    width: 100%;
    height:200px;
  }
</style>
</style>
