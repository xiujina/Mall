<template>
  <div class="category-item">
    <a :href="itemInfo.link">
      <img :src="itemInfo.image" alt="">
      <div class="title">{{itemInfo.title}}</div>
    </a>
  </div>
</template>
<script>
export default {
  name: 'CategoryDetailItem',
  props: {
    itemInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      
    }
  },
  methods: {
   
      
  }
}
</script>
<style scoped>
  .category-item {
    width: 48%;
    font-size: 13px;
  }
  .category-item img {
    width: 50px;
    height: 50px;
  }
  .category-item .title {
    padding: 10px 0;
  }
</style>
