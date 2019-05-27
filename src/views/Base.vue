<template>
  <div :class="['sp-web-wrapper', currentLang ]">
    <!--主体内容-->
    <keep-alive exclude="['Index', 'Store']">
      <router-view />
    </keep-alive>

    <!--底部-->
    <pc-foot></pc-foot>

  </div>
</template>

<script>

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

      .brands {
        .sp-block-wrapper {
          .sp-btn {
            width: auto;
            padding: 0 20px;
          }
        }
      }
    }
  }

  .sp-web-container {
    position: relative;
  }

  .sp-web-head {
    background-size: auto 100%;
    position: relative;
    padding-top: 50px;
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

  .categories {
    padding-top: 90px;

    .sp-block-wrapper {
      display: flex;
      flex-direction: column;
    }

    .platform-cards {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .card {
        width: 20%;
        text-align: center;
        font-weight: 400;

        .image {
          width: 133px;
          height: 138px;
          margin-bottom: 25px;
        }

        .title {
          font-size: 24px;
          color: rgba(44, 46, 48, 1);
          line-height: 33px;
        }

      }
    }
  }

  .sp-block-wrapper {
    display: flex;
    justify-content: space-between;

    .sp-block {
      flex: 0 0 50%;

      .title {
        font-size: 42px;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:60px;
        margin-bottom: 21px;
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
        margin-bottom: 30px;

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
      flex: 0 0 45%;

      .white-products {
        max-width: 100%;
        height: auto;
      }

      .best-time {
        max-width: 100%;
        height: auto;
        margin-top: 68px;
        margin-bottom: 108px;
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
      flex-flow: row wrap;
      justify-content: space-between;
      align-items: center;

      .logo {
        flex: 0 0 120px;
        img {
          max-width: 100%;
          height: auto;
        }
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

      .sp-block__head {

        .arrow {
          margin-bottom: 60px;
        }

        &.no-btm {
          margin-bottom: 0;
        }
      }
    }
  }

  .cooperation-content {
    background: #F6F8F9 url("/static/img/landing-3.2-line.png") no-repeat left bottom;

    .sp-block-wrapper {
      align-items: center;
      .sp-block {
        .sp-btn {
          width: auto;
          height: 52px;
          border-radius: 38px;
          border: 2px solid rgba(32, 96, 159, 1);
          display: inline-block;
          line-height: 52px;
          font-size: 18px;
          font-weight: 600;
          color: rgba(32, 96, 159, 1);
          margin-bottom: 5px;
        }
      }
    }

    .sp-block__image {
      flex: 0 0 45%;

      .right-photo {
        max-width: 100%;
        height: auto;
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
