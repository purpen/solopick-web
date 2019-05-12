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
            line-height: 42px;
          }
        }
      }
    }
  }

  .sp-web-container {
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .sp-web-head {
    background-size: auto 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 193px;
  }

  .platform {
    background: rgba(246,248,249,1);
    padding-top: 90px;

    .sp-block-wrapper {
      display: flex;
      flex-direction: column;
    }

    .platform-cards {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 80px;

      .card {
        width: 30%;
        text-align: center;
        font-weight: 400;

        .image {
          width: 120px;
          height: 120px;
          margin-bottom: 25px;
        }

        .title {
          font-size: 24px;
          color: rgba(44, 46, 48, 1);
          line-height: 33px;
          margin-bottom: 20px;
        }

        .description {
          font-size: 16px;
          color: rgba(126, 128, 133, 1);
          line-height: 28px;
        }

      }
    }
  }

  .sp-block-wrapper {
    display: flex;

    .sp-block {
      flex: 1;

      .title {
        font-size:48px;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:67px;
        margin-bottom: 31px;
        padding-bottom: 5px;

        .spot {
          border-bottom: 4px solid rgba(255,0,0,1);
          border-radius:2px;
        }
      }

      .description {
        font-size:18px;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:34px;
        margin-bottom: 40px;
        width: 450px;

        .spot {
          border-bottom: 3px solid rgba(255,0,0,1);
          border-radius: 2px;
        }
      }

      .sp-btn {
        height:52px;
        line-height: 52px;
        border-radius:38px;
        border:2px solid rgba(255,255,255,1);
        color: rgba(255,255,255,1);
        padding: 0 28px;
        font-size:18px;
        font-weight:600;
        text-decoration: none;
        margin-bottom: 152px;
        display: inline-block;
      }

    }

    .sp-block__image {
      flex: 0 0 auto;

      .white-products {
        width: 650px;
        height: 570px;
      }

      .best-time {
        width: 540px;
        height: 380px;
        margin-top: 68px;
        margin-bottom: 108px;
        border-radius: 5px;
      }
    }

    .sp-block--black {
      color: rgba(126,128,133,1);
      font-weight:400;

      .sub-title {
        font-size:14px;
        line-height:20px;
        margin-bottom: 10px;
      }

      .title {
        font-size:34px;
        color:rgba(44,46,48,1);
        line-height:46px;
        margin-bottom: 10px;
      }

      .description {
        font-size:16px;
        line-height:28px;
        margin-bottom: 20px;
        color: rgba(126,128,133,1);
      }
    }

    .sp-block.chance {
      margin-top: 40px;
    }

    .sp-block__head {
      text-align: center;
      font-weight: 400;
      margin-bottom: 60px;

      .sub-title {
        font-size: 14px;
        color: rgba(126, 128, 133, 1);
        margin-bottom: 10px;
      }

      .title {
        font-size: 34px;
        color: rgba(44, 46, 48, 1);
        line-height: 46px;
        margin-bottom: 10px;
      }

      .desc {
        font-size: 16px;
        color: rgba(126, 128, 133, 1);
        line-height: 28px;
      }
    }

  }

  .brands {
    padding-top: 90px;
    padding-bottom: 60px;

    .sp-block-wrapper {
      display: flex;
      flex-direction: column;

      .sp-block__head {
        .desc {
          width: 635px;
          margin: 0 auto 40px;
        }
      }

      .sp-btn {
        width: 152px;
        height: 52px;
        border-radius:38px;
        border: 2px solid rgba(32,96,159,1);
        display: inline-block;
        line-height: 52px;
        font-size:18px;
        font-weight:600;
        color:rgba(32,96,159,1);
      }
    }

    .brand-logos {
      display: flex;
      justify-content: space-between;

      .logo {
        width: 120px;
        flex: 0 0 120px;
      }
    }

  }

  .collection {
    .image {
      width: 100%;
    }
  }

  .cooperation {
    padding-top: 84px;

    .sp-block-wrapper {
      display: flex;
      flex-direction: column;

      .arrow {
        margin-bottom: 60px;
      }
    }

    .coop-body {
      display: flex;

      .coop-rule__wrapper {
        flex: 1;
        display: flex;
        margin-right: 200px;
        flex-direction: row-reverse;

        .sp-block {
          width: 485px;

          color: rgba(126,128,133,1);
          font-weight:400;

          .sub-title {
            font-size:14px;
            line-height:20px;
            margin-bottom: 10px;
          }

          .title {
            font-size:34px;
            color:rgba(44,46,48,1);
            line-height:46px;
            margin-bottom: 10px;
          }

          .description {
            font-size:16px;
            line-height:28px;
            margin-bottom: 20px;
            color: rgba(126,128,133,1);
          }
        }
      }

      .coop-store {
        flex: 0 0 auto;
      }

    }
  }

  .process {
    .sp-block-wrapper {
      display: flex;
      flex-direction: column;

      .sub-title {
        font-size:14px;
        font-weight:400;
        color:rgba(126,128,133,1);
        line-height:20px;
        margin-bottom: 10px;
      }

      .title {
        font-size:34px;
        font-weight:400;
        color:rgba(44,46,48,1);
        line-height:46px;
        margin-bottom: 48px;
      }

      .sp-steps-wrapper {
        background:rgba(246,248,249,1);
        border-radius:8px;
        border:1px solid rgba(227,232,234,1);
        padding: 84px 0 84px 84px;

        .step {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-bottom: 35px;

          .step__icon {
            flex: 0 0 auto;
            margin-right: 68px;
            width:73px;
            height:73px;
            border:1px solid rgba(32,96,159,1);
            border-radius: 36.5px;
            font-size:34px;
            font-weight:normal;
            color:rgba(32,96,159,1);
            line-height:73px;
            text-align: center;
          }

          .step__content {
            flex: 1;

            .title {
              font-size:22px;
              font-weight:400;
              color:rgba(44,46,48,1);
              line-height:46px;
              margin-bottom: 0;
            }

            .desc {
              font-size:16px;
              font-weight:400;
              color:rgba(126,128,133,1);
              line-height:28px;
              width: 80%;
            }
          }
        }
      }
    }
  }

</style>
