<template>
  <div class="container" :class="windowWidth">
    <!-- 中间 -->
    <div class="page-middle">
      <router-view :windowWidth="windowWidth"/>
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
      console.log(this.windowWidth)
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
