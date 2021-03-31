<template>
  <div id="category">
    <nav-bar class="cate-bar"><template v-slot:center><div>商品分类</div></template></nav-bar>
      <div class="category-content">
        <scroll class="content-left" ref="lScroll">
          <slide-category :titles="titles" @titleClick="titleClick"/>
        </scroll> 
        <scroll class="content-right" ref="rScroll">
          <category-detail class="category-detail" :categoryDetails="categoryDetails" />
          <goods-list :goods="recGoods" />
        </scroll>
      </div>
      
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import SlideCategory from './childComps/SlideCategory'
import CategoryDetail from './childComps/CategoryDetail'
import GoodsList from 'components/content/goods/GoodsList.vue'

import Scroll from 'components/common/scroll/Scroll'

import {getSlideCategory, getCategoryDetail, getCategoryGoods} from 'network/category'

export default {
  name: 'Category',
  components: {
    NavBar,
    SlideCategory,
    CategoryDetail,
    Scroll,
    GoodsList
  },
  data () {
    return {
      titles: [],
      maitKey: 3627,
      categoryDetails: null,
      getCategoryGoods: {},
      miniWallkey: '10062603',
      recGoods: []
    }
  },
  created () {
    getSlideCategory().then(res => {
      this.titles = res.data.category.list
    }) 

    getCategoryDetail(this.maitKey).then(res => {
      this.categoryDetails = res.data.list
    })
    
    getCategoryGoods (this.miniWallkey).then(res => {
      this.recGoods = res
    })
  },
  updated () {
    setTimeout(() => {
      console.log();
      this.$refs.lScroll.refresh()
      this.$refs.rScroll.refresh()
    },500)
  },
  methods: {
    titleClick (index) {
      this.maitKey = this.titles[index].maitKey
      this.miniWallkey =this.titles[index].miniWallkey

      getCategoryDetail(this.maitKey).then(res => {
        this.categoryDetails = res.data.list
        this.type = res._id
      })
      getCategoryGoods(this.miniWallkey).then(res => {
        this.recGoods = res
      })
    },
    // getCategoryDetail(maitKey) {
    //   getCategoryDetail(maitKey).then(res => {
    //     console.log(res); 
    //   })
    // }
  } 
}
</script>
<style scoped>
  #category {
    height: 100vh;
    position: relative;
  }
  .cate-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 800;
  }
  .category-content {
    display: flex;
  }
  .content-left {
    position: absolute;
    left: 0;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
  }
  .content-right {
    position: absolute;
    left: 80px;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
  }
</style>
