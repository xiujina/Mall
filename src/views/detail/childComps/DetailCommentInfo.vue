<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
       <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="info-imgs">
        <img :src="item" v-for="(item, index) in commentInfo.images" :key="index" alt="">
      </div>
    </div>
  </div>
  
</template>
<script>
import {formatDate} from 'common/utils.js'

export default {
  name: 'DetailCommentInfo',
  props: {
    commentInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  filters: {
    showDate(value) {
      const date = new Date(value * 1000)
      return formatDate(date, "yyyy-MM-dd")
    }
  }
}
</script>
<style scoped>
  .comment-info {
    padding: 5px 12px;
  }
  .info-header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 12px;
    border-bottom: 2px solid #ddd;
  }
  .info-header .header-title {
    color: #222;
    font-size: 16px;
  }
  .info-header .header-more {
    color: #222;
    font-size: 14px;
    padding-right: 6px;
  }
  .info-user {
    position: relative;
  }
  .info-user img {
    border: 1px solid rgba(100,100,100,.1);
    border-radius: 50%;
    width: 40px;
    margin: 8px 0;
  }
  .info-user span {
    position: absolute;
    font-size: 15px;
    line-height: 56px;
    margin-left: 10px;
  }

  .info-detail {
    padding: 0 5px 15px;
  }
  .info-detail p {
    font-size: 14px;
    color: #777;
    line-height: 1.5;
  }
  .info-detail .info-other {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
  .info-other .date {
    margin-right: 8px;
  }
  .info-imgs img {
    width: 70px;
    height: 70px;
    margin-right: 5px;
    margin-top: 8px;
  }
</style>
