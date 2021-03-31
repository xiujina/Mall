<template>
  <div class="category-detail">
    <category-detail-item v-for="(item,index) in categoryDetails" 
          :key="index"
          :itemInfo="item" />
  </div>
</template>
<script>
import CategoryDetailItem from './CategoryDetailItem'

export default {
  name: 'CategoryDetail',
  components: {
    CategoryDetailItem
  },
  props: {
    categoryDetails: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style scoped>
  .category-detail {
    width: 160px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;
    margin-left: 15px;
  }
</style>
