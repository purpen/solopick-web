<template>
  <!-- 头部导航 -->
  <div class="sp-navbar-wrapper">
    <div class="sp-navbar">

      <router-link :to="{ path: '/index' }" class="sp-logo-link">
        <img class="sp-logo" src="/static/img/solopick-logo-l.png">
      </router-link>

      <div class="sp-navbar__menu">
        <el-dropdown trigger="click" @command="handleChangeLanguage" class="sp-locale">
          <span class="el-dropdown-link">
            {{ locale }} <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="zh-CN">简体中文</el-dropdown-item>
            <el-dropdown-item command="en">English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="sp-navbar__nav">
          <router-link :class="['nav-link', activeNav == 'Index' ? 'active' : '']" :to="{ path: '/about' }">
            <span>{{ $t('navbar.about') }}</span>
          </router-link>
          <router-link :class="['nav-link', activeNav == 'Store' ? 'active' : '']" :to="{ path: '/store' }">
            <span>{{ $t('navbar.store') }}</span>
          </router-link>
          <router-link :class="['nav-link', activeNav == 'Brand' ? 'active' : '']" :to="{ path: '/brand' }">
            <span>{{ $t('navbar.brand') }}</span>
          </router-link>
          <router-link :class="['nav-link', activeNav == 'CallMe' ? 'active' : '']" :to="{ path: '/call_me' }">
            <span>{{ $t('navbar.contact') }}</span>
          </router-link>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import * as types from '@/vuex/types'

  export default {
    name: 'TopNav',
    data () {
      return {
        locale: 'English',
        activeNav: ''
      }
    },
    methods: {
      /**
       * 切换本地化语言
       * @param command
       */
      handleChangeLanguage (command) {
        let lang = ''
        if (command === 'zh-CN') {
          lang = 'zhCN'
          this.locale = '简体中文'
        } else {
          lang = 'en'
          this.locale = 'English'
        }
        this.$i18n.locale = lang
        this.$store.commit(types.SET_LANGUAGE, lang)
      }
    },
    created () {
      let lang = this.$store.state.language

      if (lang === 'zhCN') {
        this.locale = '简体中文'
      } else if (lang === 'en') {
        this.locale = 'English'
      } else { // 为空时，获取浏览器默认语言
        let _lang = navigator.language
        _lang = _lang.substr(0, 2)
        if (_lang === 'zh') {
          lang = 'zhCN'
          this.locale = '简体中文'
        } else {
          lang = 'en'
          this.locale = 'English'
        }
      }

      this.$i18n.locale = lang
    },
    activated () {
      this.activeNav = this.$route.name // this.$route.path.split('/')[1]
    }
  }
</script>

<style lang="scss" scoped>
  .sp-navbar-wrapper {
    position: absolute;
    top: 47px;
    left: 0;
    z-index: 9;
    width: 100%;

    .sp-navbar {
      display: flex;

      .sp-logo-link {
        flex: 0 0 auto;
      }

      .sp-navbar__menu {
        flex: 1;
        text-align: right;

        .sp-navbar__nav {
          margin-top: 20px;

          .nav-link {
            font-size:16px;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:24px;
            text-decoration: none;
            margin-left: 40px;
            padding-bottom: 5px;
            border-bottom: 4px solid transparent;

            span {
              height:4px;
              background: transparent;
              border-radius:2px;
              width: 100%;
            }

            &.router-link-active {
              border-bottom-color: rgba(255,0,0,1);
            }
          }
        }

      }

    }
  }
</style>
