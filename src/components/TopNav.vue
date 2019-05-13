<template>
  <!-- 头部导航 -->
  <div class="sp-navbar-wrapper">
    <div class="sp-navbar sp-navbar--web">

      <router-link :to="{ path: '/index' }" class="sp-logo-link">
        <img class="sp-logo" src="/static/img/solopick-logo-l.png">
      </router-link>

      <!--PC / Tablet-->
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
          <router-link :class="['nav-link', activeNav == 'About' ? 'active' : '']" :to="{ path: '/about' }">
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

    <!--H5-->
    <div class="sp-navbar--h5">
      <div class="sp-navbar-head">
        <router-link :to="{ path: '/index' }" class="sp-logo-link">
          <img class="sp-logo" src="/static/img/solopick-logo-m.png">
        </router-link>
        <div class="sp-navbar__icon" @click="handleOpenMenu">
          <i class="el-icon-menu"></i>
        </div>
      </div>
      <div :class="['sp-navbar__items', showH5Menu ? 'opened' : '']">
        <div class="sp-navbar__item">
          <div :class="['nav-link', activeNav == 'Index' ? 'active' : '']" @click="handleGoRedirect('/index')">
            <span>{{ $t('navbar.home') }}</span>
          </div>
          <div :class="['nav-link', activeNav == 'About' ? 'active' : '']" @click="handleGoRedirect('/about')">
            <span>{{ $t('navbar.about') }}</span>
          </div>
          <div :class="['nav-link', activeNav == 'Store' ? 'active' : '']" @click="handleGoRedirect('/store')">
            <span>{{ $t('navbar.store') }}</span>
          </div>
          <div :class="['nav-link', activeNav == 'Brand' ? 'active' : '']" @click="handleGoRedirect('/brand')">
            <span>{{ $t('navbar.brand') }}</span>
          </div>
          <div :class="['nav-link', activeNav == 'CallMe' ? 'active' : '']" @click="handleGoRedirect('/call_me')">
            <span>{{ $t('navbar.contact') }}</span>
          </div>
          <div class="nav-link" @click="handleChangeLanguage2('zh-CN')">
            <span>简体中文</span>
          </div>
          <div class="nav-link" @click="handleChangeLanguage2('en')">
            <span>English</span>
          </div>
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
        activeNav: '',
        showH5Menu: false
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
      },

      /**
       * 切换本地化语言
       */
      handleChangeLanguage2 (command) {
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

        this.showH5Menu = false
      },

      /**
       * H5 打开菜单
       */
      handleOpenMenu () {
          this.showH5Menu = !this.showH5Menu
      },

      /**
       * 跳转
       * @param path
       */
      handleGoRedirect (path) {
        this.showH5Menu = false
        this.$router.push(path)
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
  @-webkit-keyframes slideInUp {
    from {
      opacity: 0;
      height: 0px;
    }

    to {
      opacity: 1;
      height: 200px;
    }
  }

  @keyframes slideInUp {
    from {
      opacity: 0;
      height: 0px;
    }

    to {
      opacity: 1;
      height: 200px;
    }
  }

  @-webkit-keyframes slideInDown {
    from {
      opacity: 1;
      height: 200px;
    }

    to {
      opacity: 0;
      height: 0px;
    }
  }

  @keyframes slideInDown {
    from {
      opacity: 1;
      height: 200px;
    }

    to {
      opacity: 0;
      height: 0px;
    }
  }

  .sp-navbar-wrapper {
    margin-bottom: 85px;

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

  .sp-navbar--h5 {
    display: none;

    .sp-navbar-head {
      background:rgba(10,35,61,1);
      padding: 20px 25px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .sp-logo-link {
        flex: 0 0 auto;
      }

      .sp-navbar__icon {
        flex: 0 0 auto;
        color: #ffffff;
        font-size: 24px;
      }
    }

    .sp-navbar__items {
      background:rgba(10,35,61,1);
      display: none;
      -webkit-animation: slideInDown .2s;
      animation: slideInDown .2s;

      &.opened {
        display: block;
        -webkit-animation: slideInUp .2s;
        animation: slideInUp .2s;
      }

      .sp-navbar__item {
        padding-left: 44px;

        .nav-link {
          display: block;
          line-height: 50px;
          border-bottom: 1px solid #184878;
          color: #fff;

          &:before {
            width:8px;
            height:4px;
            background:rgba(255,0,0,1);
            border-radius:2px;
          }

          &:hover {
            color: #f1f1f1;
          }
        }
      }
    }

  }

  @media (max-width: 767.98px) {
    .sp-navbar-wrapper {
      .sp-navbar--web {
        display: none;
      }
    }

    .sp-navbar--h5 {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 9;
      width: 100%;
    }
  }

</style>
