<template>
  <div id="list-detail">
    <detail-nav-bar @titleClick="titleClick" ref="nav" />
    <scroll class="list-content" 
            ref="scroll" 
            @scroll="contentScroll"
            :probe-type="3">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad" />
      <detail-param-info ref="params" :param-info ="paramInfo" />
      <detail-comment-info ref="comment" :comment-info = "commentInfo" />
      <goods-list ref="recommend" :goods="recommends"/>
    </scroll>
    <detail-bottom-bar class="bottom-bar" @addCart = "addToCart" />  
    <back-top @click.native="backTop" v-show="isShowBackTop" />  
  </div>
</template>
<script>
import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailParamInfo from './childComps/DetailParamInfo.vue'
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
import DetailBottomBar from './childComps/DetailBottomBar'


import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList.vue'

import {getDetail, Goods, Shop, GoodsParam, getRecommend} from 'network/detail'
import {itemListenerMixin, backTopMixin} from 'common/mixin'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar
  },
  mixins: [itemListenerMixin, backTopMixin],
  data () {
   return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      currentIndex: 0
    }
  },
  created () {
    //1.保存传入的iid
    this.iid = this.$route.params.iid
    
    //2.根据保存的iid请求数据
    getDetail(this.iid).then(res => {;
      //1.获取顶部图片数据
      const data = res.result
      this.topImages = data.itemInfo.topImages

      //2.获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      //3.获取店铺信息
      this.shop = new Shop(data.shopInfo)
      
      //4.保存商品的详情数据
      this.detailInfo = data.detailInfo

      //5.获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

      //6.获取评论信息
      if(data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      } 
      
    })

    //3.请求推荐数据
    getRecommend().then(res=> {
      this.recommends = res.data.list
    })
 
    
  },
  mounted() {
    console.log(this.$refs.scroll);
  },
  updated () {
    
  },
  destroyed () {
    this.$bus.$off('itemImageLoad',this.itemImgListener)
  },
  methods: {
    imgLoad () {
      this.$refs.scroll.refresh()

      this.$nextTick(() => {
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.params.$el.offsetTop - 44)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 44)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 44)
      this.themeTopYs.push(Number.MAX_VALUE)
      console.log(this.themeTopYs);
    })
    },
    titleClick (index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100)
    },
    contentScroll (position) {
      //1.获取y值
      const positionY = - position.y

      //2.positionY和主题中值进行对比
      let length = this.themeTopYs.length
      for(let i = 0; i < length -1; i++) {
        if(this.currentIndex !== i && ((i < length -1 && positionY >= this.themeTopYs[i] && positionY < 
        this.themeTopYs[i+1]))) {
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }

      //3.是否显示回到顶部
      this.isShowBackTop = -position.y > 1000
    },
    addToCart () {
      //1.获取购物车需要展示的信息
      const product = {}
      product.image = this.topImage[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.newPrice
      product.iid = this.iid
    }
  }
}
</script>
<style scoped>
  #list-detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  
  .list-content {
    height: calc(100vh - 93px);
    overflow: hidden;
  }
  
</style>
