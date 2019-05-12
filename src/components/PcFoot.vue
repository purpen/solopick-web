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
        <div class="copyright">COPYRIGHT 2019 SOLOPICK 广州米选科技所有 粤ICP备18068342号-1</div>
      </div>
      <div class="foot__locale">
        <div class="social">
          <router-link to="" class="icon-social">
            <img src="/static/img/icon-fb.png" alt="solopick facebook">
          </router-link>
          <router-link to="" class="icon-social">
            <img src="/static/img/icon-ins.png" alt="solopick ins">
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
.big-window {
  .pc-foot {
    height: 2rem;
    background: rgba(246, 248, 249, 1);
    padding: 0 4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .left {
      font-size: 0.16rem;
      color: rgba(181, 188, 199, 1);
      line-height: 0.22rem;
      .top {
        margin-bottom: 0.2rem;
        cursor: pointer;
      }
    }
    .right {
      text-align: right;
      img {
        width: 0.24rem;
        height: 0.24rem;
        margin-left: 0.08rem;
        margin-bottom: 0.2rem;
      }
      color: rgba(181, 188, 199, 1);
      line-height: 0.2rem;
    }
  }
}

.middle-window {
  .pc-foot {
    position: relative;
    height: 2.77rem;
    width: 7.68rem;
    background: rgba(246, 248, 249, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .left {
      font-size: 0.16rem;
      color: rgba(181, 188, 199, 1);
      line-height: 0.22rem;
      .top {
        position: absolute;
        top: 0.47rem;
        left: 50%;
        transform: translateX(-50%);
      }
      .bottom{
        width: 5.20rem;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 2rem;
        text-align: center;
      }
    }
    .right {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 1.05rem;
      text-align: center;
      img {
        width: 0.24rem;
        height: 0.24rem;
        margin-bottom: 0.15rem;
      }
      color: rgba(181, 188, 199, 1);
      line-height: 0.2rem;
    }
  }
}

.small--window{
  .pc-foot {
    position: relative;
    height: 2.69rem;
    width: 3.20rem;
    background: rgba(246, 248, 249, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .left {
      font-size: 0.14rem;
      color: rgba(181, 188, 199, 1);
      line-height: 0.22rem;
      .top {
        position: absolute;
        top: 0.47rem;
        left: 50%;
        transform: translateX(-50%);
        height:0.20rem;
        width:2.69rem;
        font-size:0.14rem;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(181,188,199,1);
        line-height:0.20rem;
        cursor: pointer;
      }
      .bottom{
        width:2.69rem;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 2rem;
        text-align: center;
      }
    }
    .right {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 1.05rem;
      text-align: center;
      img {
        width: 0.24rem;
        height: 0.24rem;
        margin-bottom: 0.15rem;
      }
      color: rgba(181, 188, 199, 1);
      line-height: 0.2rem;
    }
  }

}
</style>
