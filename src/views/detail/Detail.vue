<template>
  <div id="detail">
    <detail-nav-bar />
    <detail-swiper :topImages="topImages" />
  </div>
</template>
<script>
import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'


import {getDetail} from 'network/detail'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper

  },
  data () {
   return {
      iid: null,
      topImages: []
    }
  },
  created () {
    //1.保存传入的iid
    this.iid = this.$route.params.iid
    
    //2.根据保存的iid请求数据
    getDetail(this.iid).then(res => {
      //1.获取顶部图片数据
      this.topImages = res.result.itemInfo.topImages
    })
  }
}
</script>
<style scoped>
  
</style>
