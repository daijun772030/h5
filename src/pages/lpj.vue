<template>
  <div class="lpj">
    <div class="bouncing-loader">
      <div class="img1"></div>
      <div class="img2"></div>
      <div class="img3"></div>
      <div class="img4"></div>
      <div class="img5"></div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style scoped>
  .lpj {
            background-image: url('../../static/images/wechat7.png');
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat
        }
  @keyframes bouncing-loader {
    from {
        opacity: 1;
        transform: translateX(0)
    }
    to {
        opacity: 0.7;
        transform: translateX(-8rem)
    }
  }
  
  .bouncing-loader {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  
  .bouncing-loader>div {
    width: 100%;
    height: 300px;
    margin: 20px 10px;
    background-color: #8385aa;
    border-radius: 40%;
    animation: bouncing-loader 2s infinite alternate;
  }
  
  .bouncing-loader>div:nth-child(2) {
    animation-delay: 1.8s;
  }
  
  .bouncing-loader>div:nth-child(3) {
    animation-delay: 1.4s;
  }
  
  .bouncing-loader>div:nth-child(4) {
    animation-delay: 1.2s;
  }
  
  .bouncing-loader>div:nth-child(5) {
    animation-delay: 0.8s;
  }
  .img1 {
    background-image: url('../../static/images/wechat1.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: cover;
  }
  
  .img2 {
    background-image: url('../../static/images/wechat2.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  .img3 {
    background-image: url('../../static/images/wechat3.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  .img4 {
    background-image: url('../../static/images/wechat4.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  .img5 {
    background-image: url('../../static/images/wechat5.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>

