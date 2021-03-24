import BackTop from 'components/content/backTop/BackTop'

import { debounce } from 'common/utils.js'

export const itemListenerMixin = {
  data () {
    return {
      itemImgListener: null
    }
  },
  mounted () {
    const newRefresh = debounce(this.$refs.scroll.refresh, 100)
    this.itemImgListener = () => {
      newRefresh()
    }
    this.$bus.$on('itemImageLoad', this.itemImgListener)
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data () {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backTop () {
      this.$refs.scroll.scrollTo(0, 0, 300)
    }
  }
}