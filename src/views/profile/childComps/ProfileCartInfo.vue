<template>
  <div class="profile-cart-info">
    <div class="cart">
      <img src="~assets/img/profile/cart.svg" alt="">
      <span>我的购物车</span>
    </div>
    <div class="shopping">
      <img src="~assets/img/profile/shopping.svg" alt="">
      <span>下载购物APP</span>
    </div>    
  </div>
</template>
<script>
export default {
  name: 'ProfileCartInfo',
}
</script>
<style scoped>
  /* .profile-cart-info {
    font-size: 16px;
  } */
  .profile-cart-info img {
    width: 20px;
    margin-left: 10px;
    vertical-align: middle;
  }
  .profile-cart-info span {
    margin-left: 10px;
  }
  .cart, .shopping {
    padding: 10px 0;
  }
  .cart {
    border-bottom: 2px solid #eee;
  }
</style>
