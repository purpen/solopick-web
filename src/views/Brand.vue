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
              <div
                class="logo"
                v-for="(item, index) in brandList"
                :key="index">
                <img :src="'https://static.moebeast.com/static/sp/img/'+item" class="solopick">
              </div>
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
          'logo_0042_nine-bot.png',
          'logo_0017_chunmi.png',
          'logo_0007_julavie.png',
          'logo_0027_swdk.png',
          'logo_0018_smartmi.png',
          'logo_0022_dreame.png',
          'logo_0016_soocas.png',
          'logo_0015_stone.png',
          'logo_0014_townew.png',
          'logo_0013_qcooker.png',
          'logo_0043_showbay.png',
          'logo_0020_90.png',
          'logo_0008_dingling.png',
          'logo_0023_lefan.png',
          'logo_0038_autobot.png',
          'logo_0040_lkk.png',
          'logo_0005_happy-life2.png',
          'logo_0006_stylepie.png',
          'logo_0010_xinxiang.png',
          'logo_0036_loffee.png',
          'logo_0035_orashark.png',
          'logo_0011_deerma.png',
          'logo_0033_canban.png',
          'logo_0032_l-mix.png',
          'logo_0031_poputar.png',
          'logo_0030_yunmai.png',
          'logo_0029_rock.png',
          'logo_0019_yeelight.png',
          'logo_0039_KKF.png',
          'logo_0026_fascinate.png',
          'logo_0000_circle-joy.png',
          'logo_0025_mushu.png',
          'logo_0024_realbrella.png',
          'logo_0041_lena.png',
          'logo_0004_17PIN.png',
          'logo_0002_yueli.png',
          'logo_0001_minij.png',
          'logo_0021_levn.png',
          'logo_0003_so-white.png',
          'logo_0009_wuro.png',
          'logo_0037_sleep-tailor.png',
          'logo_0034_fifish.png'
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
    padding-bottom: 150px;
    background: url("https://static.moebeast.com/static/sp/img/branding-head-bg.png") no-repeat;
    background-size: 100% auto;
    margin-bottom: 50px;
  }

  .brands {

    .brand-logos {
      display: flex;
      flex-flow: row wrap;
      margin: 0 -20px;
      justify-content: space-between;
      align-items: center;

      .logo {
        flex: 0 0 110px;
        margin-left: 20px;
        margin-right: 20px;
        margin-bottom: 50px;
        text-align: center;

        img {
          max-width: 100%;
          height: auto;
        }
      }

      .logo-space {
        flex: 0 0 110px;
        width: 110px;
        height: 1px;
      }
    }
  }

  .process {
    margin-top: 40px;
  }
</style>
