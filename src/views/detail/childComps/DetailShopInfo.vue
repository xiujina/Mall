<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="">
      <span class="title">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">
            {{shop.sells | sellCountFilter}}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{shop.goodsCount}}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高' : '低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shop: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  filters: {
    sellCountFilter: function (value) {
      if(value < 10000) return value
      return (value/10000).toFixed(1) + '万'
    }
  }
}
</script>
<style scoped>
  .shop-info {
    padding: 20px 8px;
    border-bottom: 5px solid #f2f5f8;
    color: #333;
  }
  .shop-top {
    display: flex;
    line-height: 45px;
    align-items: center;
  }
  .shop-top img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.1);
  }
  .shop-top .title {
    margin-left: 10px;
    vertical-align: middle;
  }

  .shop-middle {
    margin-top: 10px;
    display: flex;
    align-items: center;
  }
  .shop-middle-item {
    flex: 1;
    font-size: 14px;
  }
  .shop-middle-left {
    display: flex;
    justify-content: space-evenly;
    color: #333;
    text-align: center;
    line-height: 26px;
    position: relative;
  }
  .shop-middle-left .info-goods:after {
    content: '';
    display: block;
    position: absolute;
    top: 3px;
    right: 0px;
    width: 1px;
    height: 42px;
    background-color: #aaa;
  }
  .shop-middle-right {
    line-height: 26px;
    display: flex;
    justify-content: space-between;
    flex-grow: 0.9;
    padding-left: 32px;
  }
  .shop-middle-right .score {
    color: #2a5;
    padding-left: 12px;
    padding-right: 12px;
  }
  .shop-middle-right .score-better {
    color: #f00;
  }
  .shop-middle-right .better span {
    background-color: #2a5;
    color: #fff;
  }
  .shop-middle-right .better-more span {
    color: #fff;
    background-color: #f00;
  }
  .shop-bottom {
    text-align: center;
    margin-top: 10px;
  }
  .enter-shop {
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
  }
</style>
