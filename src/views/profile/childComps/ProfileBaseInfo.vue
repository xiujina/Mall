<template>
  <div class="profile-base-info">
    <div class="avatar-info">
      <div class=avatar-left>
        <div class="avatar-img"><img src="~assets/img/profile/avatar.svg" alt=""></div>
        <div class="avatar-log">
          <div class="log">登录/注册</div>
          <div class="bind-phone">
            <img src="~assets/img/profile/phone.svg" alt="">
            <span>暂无绑定手机</span>
          </div>
        </div>
      </div>
      <div class="arrow">></div>
    </div>
    <div class="account">
      <div class="account-balance">
        <div><span class="number">0.00</span>元</div>
        <div>我的余额</div>
      </div>
      <div class="account-balance">
        <div><span class="number">0</span>个</div>
        <div>我的优惠</div>
      </div>
      <div class="account-balance">
        <div><span class="number">0</span>分</div>
        <div>我的积分</div>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProfileBaseInfo',
}
</script>
<style scoped>
  .avatar-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;

    background-color: var(--color-tint);
    color: #fff;
  }

  .avatar-left {
    display: flex;
    align-items: center;
  }
  
  .avatar-left .avatar-img {
    margin: 0 15px;
  }
  .avatar-img img {
    width: 50px;
    height: 50px;
  }
  .avatar-log .bind-phone {
    font-size: 12px;
    margin-top: 5px;
    vertical-align: middle;
    display: flex;
  }
  .bind-phone img {
    width: 15px;
    height: 15px;
  }
  
  .arrow {
    margin-right: 15px;
  }

  .account {
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
    padding-bottom: 15px;
    border-bottom: 10px solid #eee;
  }
  .account .number {
    color: red;
    font-size: 22px;
    font-weight: bold;
    margin-right: 2px;
  }
</style>
