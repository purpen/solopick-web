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
            <span class="spot">{{ $t('store.slogan.spot') }}</span>{{ $t('store.slogan.title') }}
          </div>
          <div class="description">{{ $t('store.slogan.description') }}</div>
        </div>

        <!-- 产品图片 -->
        <div class="sp-block__image">
          <img class="white-products" src="/static/img/store-glance.jpg" alt="solopick">
        </div>
      </div>

    </div>

    <!--加盟流程-->
    <div class="process">
      <div class="sp-block-wrapper">
        <div class="sub-title">{{ $t('store.process.sub_title') }}</div>
        <div class="title">{{ $t('store.process.title') }}</div>

        <div class="sp-steps-wrapper">
          <div class="step">
            <div class="step__icon">1</div>
            <div class="step__content">
              <div class="title">{{ $t('store.process.step1.title') }}</div>
              <div class="desc">{{ $t('store.process.step1.desc') }}</div>
            </div>
          </div>
          <div class="step">
            <div class="step__icon">2</div>
            <div class="step__content">
              <div class="title">{{ $t('store.process.step2.title') }}</div>
              <div class="desc">{{ $t('store.process.step2.desc') }}</div>
            </div>
          </div>
          <div class="step">
            <div class="step__icon">3</div>
            <div class="step__content">
              <div class="title">{{ $t('store.process.step3.title') }}</div>
              <div class="desc">{{ $t('store.process.step3.desc') }}</div>
            </div>
          </div>
          <div class="step">
            <div class="step__icon">4</div>
            <div class="step__content">
              <div class="title">{{ $t('store.process.step4.title') }}</div>
              <div class="desc">{{ $t('store.process.step4.desc') }}</div>
            </div>
          </div>
          <div class="step">
            <div class="step__icon">5</div>
            <div class="step__content">
              <div class="title">{{ $t('store.process.step5.title') }}</div>
              <div class="desc">{{ $t('store.process.step5.desc') }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--旗舰店地址-->
    <div class="address">
      <div class="sp-block-wrapper">
        <div class="title">{{ $t('store.address.title') }}</div>
        <div class="desc">{{ $t('store.address.desc') }}</div>
        <img class="map" src="static/img/store-location.jpg" alt="solopick address">
      </div>
    </div>

    <!--联系我们-->
    <pc-foot-join></pc-foot-join>

  </div>
</template>

<script>
  export default {
    name: 'Store',
    data () {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .sp-web-head {
    background: url("/static/img/3-header-bg-imgs.jpg") no-repeat;
    padding-bottom: 150px;
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

  .address {
    margin-top: 120px;

    .sp-block-wrapper {
      display: flex;
      flex-direction: column;

      .desc {
        font-size: 14px;
        font-weight: 400;
        color: rgba(126, 128, 133, 1);
        line-height: 20px;
        margin-bottom: 20px;
      }

      .title {
        font-size: 34px;
        font-weight: 400;
        color: rgba(44, 46, 48, 1);
        line-height: 46px;
        margin-bottom: 18px;
      }
    }
  }
</style>
