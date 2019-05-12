<template>
  <div :class="['sp-web-wrapper', currentLang ]">
    <!--主体内容-->
    <keep-alive exclude="['Index', 'Store']">
      <router-view />
    </keep-alive>

    <!--底部-->
    <div class="sp-web-foot">
      <pc-foot></pc-foot>
    </div>

  </div>
</template>

<script>
  import * as global from '@/global/index'

  export default {
    name: 'Base',
    data () {
      return {
        windowWidth: '' // 屏幕规格
      }
    },
    mounted () {

    },
    methods: {
      // 跳转首页
      handleGoIndex () {
        this.$router.push({ path: 'Index' })
      }
    },
    computed: {
      // 当前语言
      currentLang () {
        let lang = this.$store.state.language

        if (lang === '') { // 为空时，获取浏览器默认语言
          let _lang = navigator.language
          _lang = _lang.substr(0, 2)
          if (_lang === 'zh') {
            lang = 'zhCN'
          } else {
            lang = 'en'
          }
        }
        return lang
      }
    }
  }
</script>

<style lang="scss">
  .sp-web-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;

    .sp-web-foot {
      flex: 0 0 auto;
    }

    &.en {
      .sp-block-wrapper {
        .sp-block {
          .title {
            font-size: 32px;
          }
        }
      }
    }
  }
</style>
