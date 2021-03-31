<template>
  <div class="profile-middle-info">
    <div class="message">
      <img src="~assets/img/profile/message.svg" alt="">
      <span>我的消息</span>
    </div>
    <div class="pointer">
      <img src="~assets/img/profile/pointer.svg" alt="">
      <span>积分商城</span>
    </div>
    <div class="vip">
      <img src="~assets/img/profile/vip.svg" alt="">
      <span>会员卡</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProfileMiddleInfo',
}
</script>
<style scoped>
  .profile-middle-info {
    border-bottom: 10px solid #eee;
    padding: 0 10px;
  }
  .profile-middle-info img {
    width: 20px;
    margin-right: 10px;
    vertical-align: middle;
  }
  .message, .pointer {
    border-bottom: 2px solid #eee;
  }
  .message, .pointer, .vip {
    padding: 10px 0;
  }
</style>
