<template>
    <div class="sp-web-container">

    <!--导航-->
    <top-nav></top-nav>

    <!--头部-->
    <div class="sp-web-head">
      <div class="sp-block-wrapper">
        <!--首屏-->
        <div class="sp-block sp-block--head">
          <div class="title">
            <span class="spot">{{ $t('brand.slogan.spot') }}</span>{{ $t('brand.slogan.title') }}
          </div>
          <div class="description">{{ $t('brand.slogan.description') }}</div>
        </div>
      </div>

    </div>

    <!--合作品牌-->
      <div class="brands">
        <div class="sp-block-wrapper">
          <div class="sp-block__head">
            <div class="sub-title">{{ $t('brand.brands.sub_title') }}</div>
            <div class="title">{{ $t('brand.brands.title') }}</div>
          </div>
          <div class="sp-block__body">
            <div class="brand-logos">
              <img
                class="logo"
                :src="'/static/img/'+item"
                v-for="(item, index) in brandList"
                :key="index">
            </div>
          </div>
        </div>
      </div>

    <!--加盟流程-->
    <div class="process">
      <div class="sp-block-wrapper">
        <div class="sub-title">{{ $t('brand.process.sub_title') }}</div>
        <div class="title">{{ $t('brand.process.title') }}</div>

        <div class="sp-steps-wrapper">
          <div class="step">
            <div class="step__icon">1</div>
            <div class="step__content">
              <div class="title">{{ $t('brand.process.step1.title') }}</div>
              <div class="desc">{{ $t('brand.process.step1.desc') }}</div>
            </div>
          </div>
          <div class="step">
            <div class="step__icon">2</div>
            <div class="step__content">
              <div class="title">{{ $t('brand.process.step2.title') }}</div>
              <div class="desc">{{ $t('brand.process.step2.desc') }}</div>
            </div>
          </div>
          <div class="step">
            <div class="step__icon">3</div>
            <div class="step__content">
              <div class="title">{{ $t('brand.process.step3.title') }}</div>
              <div class="desc">{{ $t('brand.process.step3.desc') }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--联系我们-->
    <pc-foot-join></pc-foot-join>

  </div>
</template>

<script>
  export default {
    name: 'Brand',
    data () {
      return {
        brandList: [
          'logo-s_0038_nine-bot.png',
          'logo-s_0004_chunmi.png',
          'logo-s_0007_zmi.png',
          'logo-s_0023_swdk.png',
          'logo-s_0005_smartmi.png',
          'logo-s_0021_dreame.png',
          'logo-s_0007_soocas.png',
          'logo-s_0006_stone.png',
          'logo-s_0001_townew.png',
          'logo-s_0000_qcooker.png',
          'logo-s_0039_showbay.png',
          'logo-s_0013_90.png',
          'logo-s_0014_jordanjudy.png',
          'logo-s_0018_lefan.png',
          'logo-s_0034_autobot.png',
          'logo-s_0036_lkk.png',
          'logo-s_0015_1more.png',
          'logo-s_0012_8h.png',
          'logo-s_0001_xinxiang.png',
          'logo-s_0032_loffee.png',
          'logo-s_0035_orashark.png',
          'logo-s_0002_deerma.png',
          'logo-s_0029_canban.png',
          'logo-s_0028_l-mix.png',
          'logo-s_0027_poputar.png',
          'logo-s_0026_yunmai.png',
          'logo-s_0029_rock.png',
          'logo-s_0006_yeelight.png',
          'logo-s_0039_KKF.png',
          'logo-s_0026_fascinate.png',
          'logo-s_0025_ireader.png',
          'logo-s_0024_mushu.png',
          'logo-s_0023_realbrella.png',
          'logo-s_0037_lena.png',
          'logo-s_0016_iflytek.png',
          'logo-s_0020_gimi.png',
          'logo-s_0015_huanxiang.png',
          'logo-s_0018_levn.png',
          'logo-s_0017_dongfangmaitian.png',
          'logo-s_0000_ruimi.png',
          'logo-s_0037_sleep-tailor.png',
          'logo-s_0034_fifish.png'
          ],
        joinStoreList: [
          {
            top: '取得联系',
            bottom: '品牌商请通过020-##########，与我们取得联系，确认合作意向后需寄送产品样品',
            etop: '',
            ebottom: ''
          },
          {
            top: '产品评测',
            bottom: 'SOLOPICK将对产品样品进行市场调研分析和产品评测，产品通过测试和评测后双方签订合作协议',
            etop: '',
            ebottom: ''
          },
          {
            top: '产品采买',
            bottom: '根据市场调研分析和产品评测报告过，SOLOPICK将产品添加至产品库，并根据市场需求进行采购',
            etop: '',
            ebottom: ''
          }
        ]
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .sp-web-head {
    background: url("/static/img/4-header-bg-imgs.jpg") no-repeat;
    padding-bottom: 150px;
  }

  .brands {
    background:rgba(246,248,249,1);

    .brand-logos {
      display: flex;
      flex-flow: row wrap;

      .logo {
        width: 120px;
        height: 64px;
        margin-right: 80px;
        margin-bottom: 50px;
      }
    }
  }

  .process {
    margin-top: 40px;
  }

@import "@/assets/css/public.scss";
.big-window {
  .pc-hand__container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 19.2rem;
    height: 6.1rem;
    padding-top: 0.4rem;
    background: url("/static/img/4-header-bg-imgs.jpg") no-repeat;
    background-size: auto 100%;
    .navbar {
      display: flex;
      flex-direction: row;
      .logo {
        height: 0.62rem;
        width: 1.2rem;
        margin-left: 4rem;
        cursor: pointer;
      }
      .handle-pick {
        flex: 1;
        padding-right: 4rem;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        font-size: 0.14rem;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 0.2px;
        .jian-tou {
          width: 0.09rem;
          height: 0.06rem;
          margin-left: 0.01rem;
        }
        .top {
          position: relative;
          height: 0.2rem;
          border-bottom: 0.01rem solid white;
          cursor: pointer;
        }
        .bottom {
          padding-top: 0.2rem;
          font-size: 0.17rem;
          color: rgba(255, 255, 255, 1);
          line-height: 0.24rem;
          .span {
            display: inline-block;
            padding-left: 0.4rem;
            cursor: pointer;
            .ren-line {
              height: 4px;
              margin-top: 0.03rem;
              background: rgba(255, 0, 0, 1);
            }
          }
        }
      }
    }
    .left-text {
      width: 100%;
      padding-left: 4rem;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      .title-text {
        display: flex;
        flex-direction: row;
        font-size: 0.48rem;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 0.67rem;
        span {
          border-bottom: 2px solid rgba(255, 0, 0, 1);
          height: 0.67rem;
        }
      }
      .discription-text {
        width: 4.29rem;
        margin-top: 0.1rem;
        font-size: 0.18rem;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 0.34rem;
      }
      .call-me__button {
        display: inline-block;
        color: rgba(255, 255, 255, 1);
        padding: 0.14rem 0.3rem;
        border-radius: 0.3rem;
        border: 1px solid white;
        margin-top: 0.33rem;
        font-size: 18px;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
        line-height: 25px;
        span {
          margin-right: 0.1rem;
        }
      }
    }
  }
  .top-discription {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0.7rem;
    .frend {
      font-size: 0.14rem;
      color: rgba(126, 128, 133, 1);
      line-height: 0.2rem;
    }
    .xiaomi-youpin {
      font-size: 0.34rem;
      color: rgba(44, 46, 48, 1);
      line-height: 0.46rem;
      margin: 0.1rem 0 0.4rem;
    }
    .xiao-mi__discription {
      display: flex;
      flex-direction: row;
      align-items: center;
      .xiaomi-icon {
        width: 2.29rem;
        height: 0.83rem;
        margin-right: 0.54rem;
      }
      .discription-box {
        width: 5.9rem;
        height: 0.83rem;
        font-size: 0.16rem;
        color: rgba(84, 86, 90, 1);
        line-height: 0.28rem;
      }
    }
  }
  .brand-icon__list {
    padding: 0.55rem 3.2rem;
    border: 1px solid rgba(227, 232, 234, 1);
    background: rgba(246, 248, 249, 1);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    .brand-icon__list--item{
      margin: 0.3rem 0.4rem;
    }
    img {
      width: 1.2rem;
      height: 0.64rem;
    }
  }
  .public-location-box {
    .bottom {
      height: 4.53rem;
      .bottom-item{
        .right-text{
          flex: 1;
        }
      }
    }
  }
}

.middle-window {
  .pc-hand__container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 7.68rem;
    height: 6rem;
    padding-top: 0.4rem;
    background: url("/static/img/1-header-bg-imgs.jpg") no-repeat;
    background-size: auto 100%;
    .navbar {
      display: flex;
      flex-direction: row;
      .logo {
        height: 0.3rem;
        width: 0.6rem;
        margin-left: 0.5rem;
        cursor: pointer;
      }
      .handle-pick {
        flex: 1;
        padding-right: 0.5rem;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        font-size: 0.14rem;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 0.2px;
        .jian-tou {
          width: 0.09rem;
          height: 0.06rem;
          margin-left: 0.01rem;
        }
        .top {
          position: relative;
          height: 0.2rem;
          border-bottom: 0.01rem solid white;
          cursor: pointer;
        }
        .bottom {
          padding-top: 0.2rem;
          font-size: 0.17rem;
          color: rgba(255, 255, 255, 1);
          line-height: 0.24rem;
          .span {
            display: inline-block;
            padding-left: 0.4rem;
            cursor: pointer;
            .ren-line {
              height: 4px;
              margin-top: 0.03rem;
              background: rgba(255, 0, 0, 1);
            }
          }
        }
      }
    }
    .left-text {
      // width: 100%;
      padding-left: 0.5rem;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      .title-text {
        display: flex;
        flex-direction: row;
        font-size: 0.48rem;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 0.67rem;
        span {
          border-bottom: 2px solid rgba(255, 0, 0, 1);
          height: 0.67rem;
        }
      }
      .discription-text {
        width: 4.29rem;
        margin-top: 0.1rem;
        font-size: 0.18rem;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 0.34rem;
      }
      .call-me__button {
        display: inline-block;
        color: rgba(255, 255, 255, 1);
        padding: 0.14rem 0.3rem;
        border-radius: 0.3rem;
        border: 1px solid white;
        margin-top: 0.33rem;
        font-size: 18px;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
        line-height: 25px;
        span {
          margin-right: 0.1rem;
        }
      }
    }
  }
  .top-discription {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0.7rem;
    .frend {
      font-size: 0.14rem;
      color: rgba(126, 128, 133, 1);
      line-height: 0.2rem;
    }
    .xiaomi-youpin {
      font-size: 0.34rem;
      color: rgba(44, 46, 48, 1);
      line-height: 0.46rem;
      margin: 0.1rem 0 0.4rem;
    }
    .xiao-mi__discription {
      display: flex;
      flex-direction: column;
      align-items: center;
      .xiaomi-icon {
        width: 2.29rem;
        height: 0.83rem;
        margin-right: 0.54rem;
      }
      .discription-box {
        width: 5.9rem;
        height: 0.83rem;
        font-size: 0.16rem;
        color: rgba(84, 86, 90, 1);
        line-height: 0.28rem;
      }
    }
  }
  .brand-icon__list {
    padding: 0.55rem 1.26rem;
    border: 1px solid rgba(227, 232, 234, 1);
    box-sizing: border-box;
    background: rgba(246, 248, 249, 1);
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto;
    flex-wrap: wrap;
    justify-content: space-between;
    .loading-more {
      width: 1.24rem;
      height: 0.4rem;
      border-radius: 0.38rem;
      border: 1px solid rgba(155, 155, 155, 1);
      font-size: 0.16rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(126, 128, 133, 1);
      line-height: 0.4rem;
      text-align: center;
      margin-top: 0.87rem;
      margin: 0 auto;
    }
    img {
      width: 1.2rem;
      height: 0.64rem;
    }
  }
  .public-location-box {
    padding-left: 0.46rem;
    margin-top: 0.82rem;
    .top {
      margin-bottom: 0.38rem;
    }
    .bottom {
      width: 5.85rem;
      height: 3.36rem;
      background: rgba(246, 248, 249, 1);
      border-radius: 4px;
      border: 1px solid rgba(227, 232, 234, 1);
      padding: 0.32rem 0.43rem;
      .bottom-item {
        .list-number {
          margin-right: 0.38rem;
        }
      }
      .right-text {
        flex: 1;
      }
    }
  }
}

.small--window {
  .pc-hand__container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 3.2rem;
    height: 3.97rem;
    padding-top: 0.16rem;
    background: url("/static/img/1-header-bg-imgs.jpg") no-repeat;
    background-size: auto 100%;
    .navbar {
      display: flex;
      flex-direction: row;
      .logo {
        height: 0.3rem;
        width: 0.6rem;
        margin-left: 0.24rem;
      }
      .handle-pick {
        flex: 1;
        padding-right: 0.5rem;
        display: none;
        flex-direction: column;
        align-items: flex-end;
        font-size: 0.14rem;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 0.2px;
        .jian-tou {
          position: relative;
          width: 0.09rem;
          height: 0.06rem;
          margin-left: 0.01rem;
        }
        .top {
          height: 0.2rem;
          border-bottom: 0.01rem solid white;
          cursor: pointer;
        }
        .bottom {
          padding-top: 0.2rem;
          font-size: 0.17rem;
          color: rgba(255, 255, 255, 1);
          line-height: 0.24rem;
          .span {
            display: inline-block;
            padding-left: 0.4rem;
            cursor: pointer;
            .ren-line {
              height: 4px;
              margin-top: 0.03rem;
              background: rgba(255, 0, 0, 1);
            }
          }
        }
      }
    }
    .left-text {
      // width: 100%;
      padding-left: 0.24rem;
      position: absolute;
      top: 0.97rem;
      .title-text {
        display: flex;
        flex-direction: row;
        font-size: 0.26rem;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        // line-height: 0.67rem;
        margin-bottom: 0.4rem;
        span {
          border-bottom: 2px solid rgba(255, 0, 0, 1);
          // height: 0.67rem;
        }
      }
      .discription-text {
        width: 2.71rem;
        font-size: 0.14rem;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 0.28rem;
      }
      .call-me__button {
        display: inline-block;
        color: rgba(255, 255, 255, 1);
        padding: 0.14rem 0.3rem;
        border-radius: 0.3rem;
        border: 1px solid white;
        margin-top: 0.33rem;
        font-size: 18px;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
        line-height: 25px;
        span {
          margin-right: 0.1rem;
        }
      }
    }
  }
  .top-discription {
    display: flex;
    flex-direction: column;
    align-items: center;
    // margin-bottom: 0.7rem;
    .frend {
      height: 0.17rem;
      font-size: 0.12rem;
      color: rgba(126, 128, 133, 1);
      line-height: 0.17rem;
    }
    .xiaomi-youpin {
      height: 0.46rem;
      font-size: 0.24rem;
      color: rgba(44, 46, 48, 1);
      line-height: 0.46rem;
    }
    .xiao-mi__discription {
      display: flex;
      flex-direction: column;
      align-items: center;
      .xiaomi-icon {
        width: 2.29rem;
        height: 0.83rem;
        margin-bottom: 0.3rem;
      }
      .discription-box {
        width: 2.71rem;
        height: 1.79rem;
        font-size: 0.16rem;
        color: rgba(84, 86, 90, 1);
        line-height: 0.28rem;
      }
    }
  }
  .brand-icon__list {
    padding: 0.55rem 0.24rem;
    border: 1px solid rgba(227, 232, 234, 1);
    box-sizing: border-box;
    background: rgba(246, 248, 249, 1);
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    flex-wrap: wrap;
    justify-content: space-between;
    .loading-more {
      width: 1.24rem;
      height: 0.4rem;
      border-radius: 0.38rem;
      border: 1px solid rgba(155, 155, 155, 1);
      font-size: 0.16rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(126, 128, 133, 1);
      line-height: 0.4rem;
      text-align: center;
      margin-top: 0.87rem;
      margin: 0 auto;
    }
    img {
      width: 1.2rem;
      height: 0.64rem;
    }
  }
  .public-location-box {
    padding-left: 0;
    margin-top: 0.76rem;
    .top {
      margin-bottom: 0rem;
      display: none;
    }
    .bottom {
      width: 2.6rem;
      height: 8.36rem;
      background: rgba(246, 248, 249, 1);
      border-radius: 0;
      border: none;
      padding: 0.4rem 0.3rem;
      .bottom-item {
        display: flex;
        flex-direction: column;
        .list-number {
          margin-right: 0;
          margin-bottom: 0.17rem;
        }
        .right-text{
          flex: 1;
        }
      }
      .right-text {
        .bottom-text {
          width: 2.71rem;
          font-size: 0.16rem;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(126, 128, 133, 1);
          line-height: 0.28rem;
        }
      }
    }
  }
}
</style>
