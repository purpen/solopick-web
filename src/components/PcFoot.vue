<template>
  <div class="sp-web-foot">

    <div class="sp-block-wrapper">

      <div class="foot__wrapper">
        <div class="foot__link">
          <router-link :to="{ path: '/index' }" class="nav-item">{{ $t('navbar.home') }}</router-link>
          <span class="line">|</span>
          <router-link :to="{ path: '/about' }" class="nav-item">{{ $t('navbar.about') }}</router-link>
          <span class="line">|</span>
          <router-link :to="{ path: '/store' }" class="nav-item">{{ $t('navbar.store') }}</router-link>
          <span class="line">|</span>
          <router-link :to="{ path: '/brand' }" class="nav-item">{{ $t('navbar.brand') }}</router-link>
          <span class="line">|</span>
          <router-link :to="{ path: '/call_me' }" class="nav-item">{{ $t('navbar.contact') }}</router-link>
        </div>
        <div class="copyright">COPYRIGHT 2019 SOLOPICK {{ $t('contact.company') }} {{ $t('contact.copyright_no') }}</div>
      </div>
      <div class="foot__locale">
        <div class="social">
          <router-link to="" class="icon-social">
            <img src="https://static.moebeast.com/static/sp/img/icon-fb.png" alt="solopick facebook">
          </router-link>
          <router-link to="" class="icon-social">
            <img src="https://static.moebeast.com/static/sp/img/icon-ins.png" alt="solopick ins">
          </router-link>
        </div>
        <el-dropdown trigger="click" @command="handleChangeLanguage" class="sp-locale sp-locale--gray">
          <span class="el-dropdown-link">
            {{ locale }} <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="zh-CN">简体中文</el-dropdown-item>
            <el-dropdown-item command="en">English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

    </div>

  </div>
</template>

<script>
  import * as types from '@/vuex/types'

  export default {
    name: 'PcFoot',
    data () {
      return {
        locale: 'English'
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
    }
  }
</script>

<style lang="scss" scoped>
  .sp-web-foot {
    .sp-block-wrapper {
      display: flex;
      padding: 50px 0 90px;

      .foot__wrapper {
        flex: 1;
        color:rgba(181,188,199,1);

        .foot__link {
          display: flex;
          align-items: center;
          margin-bottom: 10px;


          .nav-item {
            font-size:16px;
            font-weight:400;
            color:rgba(181,188,199,1);
            line-height:22px;
            margin-left: 10px;
            margin-right: 10px;

            &:first-child {
              margin-left: 0;
            }
          }

          .line {
            color:rgba(181,188,199,1);
          }
        }

        .copyright {
          font-size:14px;
          font-weight:400;
          line-height:20px;
        }
      }

      .foot__locale {
        flex: 0 0 auto;

        .social {
          margin-bottom: 10px;

          .icon-social {
              margin-right: 10px;
          }

        }
      }
    }
  }

  @media (max-width: 767.98px) {
    .sp-web-foot {
      .sp-block-wrapper {
        display: block;
        text-align: center;
        padding-bottom: 50px;
        margin: 0;

        .foot__wrapper {
          .foot__link {
            justify-content: center;

            .nav-item {
              font-size: 12px;

              &:last-child {
                margin-right: 0;
              }
            }
          }

          .copyright {
            padding: 0 25px;
          }
        }

        .foot__locale {
          text-align: center;
          margin-top: 20px;

          .social {
            margin-bottom: 20px;
          }
        }
      }
    }
  }

</style>
