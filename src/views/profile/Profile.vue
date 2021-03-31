<template>
  <div>
    <nav-bar class="nav-bar"> <template v-slot:center><div>我的档案</div></template></nav-bar>
    <profile-base-info />
    <profile-middle-info />
    <profile-cart-info />
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import ProfileBaseInfo from './childComps/ProfileBaseInfo'
import ProfileMiddleInfo from './childComps/ProfileMiddleInfo'
import ProfileCartInfo from './childComps/ProfileCartInfo'

export default {
  name: 'Profile',
  components: {
    NavBar,
    ProfileBaseInfo,
    ProfileMiddleInfo,
    ProfileCartInfo
  }
}
</script>
<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 800;
  }
</style>
