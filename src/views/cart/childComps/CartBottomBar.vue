<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button 
            :is-checked="isSelectAll" 
            class="check-button"
            @click.native="checkClick" />
      <span>全选</span>
    </div>

    <div class="price">{{totalPrice}}</div>

    <div class="calculate" @click="calculate">
      去计算: ({{checkLength}})
    </div>
  </div>
</template>
<script>
import CheckButton from 'components/content/checkButton/CheckButton'

import {mapGetters} from 'vuex'

export default {
  name: 'CartBottomBar',
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice () {
      return '￥' + this.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      },0).toFixed(2)
    },
    checkLength () {
      return this.$store.state.cartList.filter(item => item.checked).length
    },
    isSelectAll () {
    //  return !(this.cartList.filter(item => !item.checked).length)
    // return !this.cartList.find(item => !item.checked)
    if(this.cartList.length === 0) return false
    return this.cartList.every(item => item.checked)
    }
  },
  methods: {
    checkClick () {
      if(this.isSelectAll) {
        this.cartList.forEach(item => item.checked = false)
      }else {
        this.cartList.forEach(item => item.checked = true)
      } 
    },
    calculate () {
      if(!this.isSelectAll) {
        this.$toast.show('请选择购买的商品', 
        2000)
      }
    }
  }
}
</script>
<style scoped>
  .bottom-bar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 49px;
    display: flex;
    align-items: center;

    background-color: #eee;
  }
  .check-content {
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 80px;
  }
  .check-button {
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 5px; 
  }

  .price {
    margin-left: 20px;
    flex: 1;
  }
  
  .calculate {
    width: 120px;
    background-color: red;
    color: #fff;
    text-align: center;
    right: 0;
    line-height: 40px;
  }
</style>
