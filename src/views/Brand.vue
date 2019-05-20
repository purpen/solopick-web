<template>
    <div class="sp-web-container brand">

    <!--头部-->
    <div class="sp-web-head">

      <!--导航-->
      <top-nav></top-nav>

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

  .sp-web-container {
    background: url("/static/img/branding-head-bg.png") no-repeat;
    background-size: 100% auto;
  }

  .sp-web-head {
    padding-bottom: 150px;
  }

  .brands {

    .brand-logos {
      display: flex;
      flex-flow: row wrap;
      margin: 0 -20px;

      .logo {
        width: 120px;
        height: 64px;
        margin-left: 20px;
        margin-right: 20px;
        margin-bottom: 50px;
      }
    }
  }

  .process {
    margin-top: 40px;
  }
</style>
