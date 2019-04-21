<template>
  <div class="container" :class="windowWidth">
    <!-- 中间 -->
    <div class="page-middle">
      <keep-alive exclude="['Index', 'Store']">
        <router-view :windowWidth="windowWidth"/>
      </keep-alive>
    </div>

    <!-- 底部 -->
    <div class="page-foot">
      <!--pc底部 -->
      <div>
        <pc-foot></pc-foot>
      </div>
    </div>
  </div>
</template>

<script>
import * as global from '@/global/index'
export default {
  name: 'Master',
  data () {
    return {
      windowWidth: '' // 屏幕规格
    }
  },
  mounted () {
    // 计算样式
    this.windowWidth = global.windowWidth()
    window.onresize = e => {
      this.windowWidth = global.windowWidth()
    }
  },
  methods:{
    // 跳转首页
    handleGoIndex () {
      this.$router.push({path:'Index'})
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  height: 100%;
  display: flex;
  flex-direction: column;
  .page-middle{
    flex: 1;
  }
}
</style>
