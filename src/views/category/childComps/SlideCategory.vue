<template>
  <div class="slide-category">
    <div v-for="(item,index) in titles" 
         :key="index"
         class="title"
         @click="titleClick(index)"
         :class="{active: index === currentIndex}">
        <span>{{item.title}}</span>
  </div>

  </div>
</template>
<script>
export default {
  name: 'SlideCategory',
  data () {
    return {
      currentIndex: 0,
      maitKey: null
    }
  },
  props: {
    titles: Array
  },
  methods: {
    titleClick (index) {
      this.currentIndex = index
      this.$emit('titleClick', index)
    }
  }
}
</script>
<style scoped>
  .slide-category {
    width: 80px;
    font-size: 13px;
  }
  .title {
    /* position: relative; */
    width: 80px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    background-color: #eee;
  }

  .active {
    background-color: #fff;
    color: var(--color-high-text);
    font-weight: 600;
  }
</style>
