<template>
  <div id="home">
    <nav-bar class="home-nav"><template v-slot:center><div>购物街</div></template></nav-bar>
    <tab-control :titles="['流行','新款','精选']"  
                  @tabClick="tabClick"
                  ref="tabControl1"
                  class="tab-control"
                  v-show="isTabFixed"/>
    <scroll class="content" ref="scroll" 
            :probeType="3" 
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
            
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
      <recommend-view :recommends="recommends" />
      <feature-view class="feature"/>
      <tab-control :titles="['流行','新款','精选']" 
                  @tabClick="tabClick"
                  ref="tabControl2"/>
      <goods-list :goods="showGoods" />
      
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop" />
  </div>
  
</template>
<script>
import HomeSwiper from './childComponents/HomeSwiper'
import RecommendView from './childComponents/RecommendView'
import FeatureView from './childComponents/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'

import {getHomeMultidata,getHomeGoods} from 'network/home'
import {itemListenerMixin, backTopMixin} from 'common/mixin'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll
  },
  data () {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
      currentType: 'pop',
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    }
  },
  mixins: [itemListenerMixin, backTopMixin],
  created () { 
    //1.请求首页数据
    this.getHomeMultidata()

    //2.请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted () {
    
  },
  computed: {
    showGoods () {
      return this.goods[this.currentType].list
      
    }
  },
  activated (){
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },
  deactivated (){
    this.saveY = this.$refs.scroll.getScrollY()

    //2.取消全局事件的监听
    this.$bus.$off('itemImageLoad',this.itemImgListener)
  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    swiperImageLoad () {
       //获取tabControl的offsetTop
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    loadMore () {
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.scroll.refresh()
    },

    tabClick (index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },

    contentScroll (position) {
      //1.判断backTop是否显示
      this.isShowBackTop = (-position.y) > 1000

      //2.决定tabControl是否吸顶
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    
    /**
     * 网络请求相关的 方法
     */
    getHomeMultidata () {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods (type){
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1

        //完成上拉加载更多
        this.$refs.scroll.finishPullUp()
      })
    }
  }
}

</script>
<style scoped>
  #home {
    /* padding-top: 44px; */
    height: 100vh;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 800;
    
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
  }
  
  .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .fixed {
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
  }
  .tab-control {
    position: relative;
    z-index: 99;
  }
  /* .tab-control {
    position: sticky;
    top: 44px;
    background-color: #fff;
  } */
  /* .content {
    height: calc(100% - 49px - 44px );
    overflow: hidden;
    margin-top: 44px;
    
  } */
  
</style>
