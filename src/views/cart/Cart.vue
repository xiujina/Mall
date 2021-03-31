<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <template #center>
        <div>购物车({{cartLength}})</div>
      </template>
    </nav-bar>
    <scroll class="cart-list" ref="scroll">
      <cart-list />
    </scroll>
    <cart-bottom-bar />
  </div>
</template>
<script>
import NavBar  from 'components/common/navbar/NavBar'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar.vue'

import Scroll from 'components/common/scroll/Scroll'

import {mapGetters} from 'vuex'

export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    Scroll,
    CartBottomBar
  },
  computed: {
    ...mapGetters(['cartLength'])
  },
  updated () {
    setTimeout(() => {
      this.$refs.scroll.refresh()
    },500)
  }
}
</script>
<style scoped>
  .cart {
    height: 100vh;
  }
  .cart-list {
    height: calc(100% - 133px);
    overflow: hidden;
  }
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 800;
  }
</style>
