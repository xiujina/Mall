<template>
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[0].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in serviceLength -1" 
            :key="index">
        <img :src="goods.services[index].icon" alt="">
        <span>{{goods.services[index].name}}</span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    serviceLength () {
      if (this.goods.services.length > 4) {
        return 4
      }else {
        return this.goods.services.length
      }
    }
  }
}
</script>
<style scoped>
  .base-info {
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-title {
    color: #222;
    margin-bottom: 11px;
  }
  .info-price .n-price {
    font-size: 24px;
    color: var(--color-high-text);
  }
  .info-price .o-price {
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }
  .info-price .discount {
    color: #fff;
    font-size: 13px;
    border-radius: 100px;
    padding: 2px 6px;
    margin-left: 5px;
    vertical-align: text-top;
    background-color: var(--color-high-text);
  }
  .info-other {
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding-bottom: 3px;
    border-bottom: 3px solid #f2f5f8;
  }
  .info-service {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin: 16px 0;
    color: #333;
  }
  .info-service-item img {
    width: 14px;
    height: 14px;
    vertical-align: middle;
    margin-right: 2px;
  }
</style>
