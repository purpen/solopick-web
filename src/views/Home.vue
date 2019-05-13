<template>
  <div class="sp-web-container home">

    <!--头部-->
    <div class="sp-web-head">

      <!--导航-->
      <top-nav></top-nav>

      <div class="sp-block-wrapper">
          <!--首屏-->
        <div class="sp-block sp-block--head">
          <div class="title">
            <span class="spot">{{ $t('home.slogan.spot') }}</span>{{ $t('home.slogan.title') }}
          </div>
          <div class="description">{{ $t('home.slogan.description') }}</div>
          <router-link :to="{ path: '/about' }" class="sp-btn">
            <span>{{ $t('home.slogan.btn_text') }}</span>
            <i class="el-icon-right"></i>
          </router-link>
        </div>

        <!-- 产品图片 -->
        <div class="sp-block__image">
          <img class="white-products" src="/static/img/white-products.png" alt="solopick">
        </div>

      </div>

    </div>

    <!--新国货出海-->
    <div class="sp-block-wrapper overseas">
      <div class="sp-block sp-block--black chance">
        <div class="sub-title">{{ $t('home.chance.sub_title') }}</div>
        <div class="title">{{ $t('home.chance.title') }}</div>
        <div class="description">{{ $t('home.chance.description') }}</div>
        <div class="description">{{ $t('home.chance.description2') }}</div>
      </div>
      <div class="sp-block__image">
        <img class="best-time" src="/static/img/best-time.jpg" alt="solopick">
      </div>
    </div>

    <!--平台价值-->
    <div class="platform">
      <div class="sp-block-wrapper">
        <div class="sp-block__head">
          <div class="sub-title">{{ $t('home.platform.sub_title') }}</div>
          <div class="title">{{ $t('home.platform.title') }}</div>
          <div class="desc">{{ $t('home.platform.desc') }}</div>
        </div>
        <div class="sp-block__body">
          <div class="platform-cards">
            <div class="card">
              <img src="/static/img/icon-why-us-1.png" class="image">
              <div class="title">{{ $t('home.platform.card1.title') }}</div>
              <div class="description">{{ $t('home.platform.card1.description') }}</div>
            </div>
            <div class="card">
              <img src="/static/img/icon-why-us-2.png" class="image">
              <div class="title">{{ $t('home.platform.card2.title') }}</div>
              <div class="description">{{ $t('home.platform.card2.description') }}</div>
            </div>
            <div class="card">
              <img src="/static/img/icon-why-us-3.png" class="image">
              <div class="title">{{ $t('home.platform.card3.title') }}</div>
              <div class="description">{{ $t('home.platform.card3.description') }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--合作品牌-->
    <div class="brands">
      <div class="sp-block-wrapper">
        <div class="sp-block__head">
          <div class="sub-title">{{ $t('home.brands.sub_title') }}</div>
          <div class="title">{{ $t('home.brands.title') }}</div>
          <div class="desc">{{ $t('home.brands.description') }}</div>
          <router-link :to="{ path: '/about' }" class="sp-btn lg">
            <span>{{ $t('home.brands.btn_text') }}</span>
            <i class="el-icon-right"></i>
          </router-link>
        </div>
        <div class="sp-block__body">
          <div class="brand-logos">
            <img
              class="logo"
              :src="'/static/img/'+item"
              v-for="(item, index) in brandIcon"
              :key="index">
          </div>

        </div>
      </div>
    </div>

    <!--产品集合-->
    <div class="collection">
      <img class="image" src="/static/img/cooper-products-1.jpg">
    </div>

    <!-- 加盟合作 -->
    <div class="cooperation">
      <div class="sp-block-wrapper">
        <div class="sp-block__head">
          <img class="arrow" src="/static/img/arrow-down-break.png" alt="solopick">
          <div class="sub-title">{{ $t('home.cooperation.sub_title') }}</div>
          <div class="title">{{ $t('home.cooperation.title') }}</div>
        </div>
      </div>

      <div class="coop-body">
        <div class="coop-rule__wrapper">
          <div class="sp-block">
            <div class="sub-title">{{ $t('home.cooperation.rule.sub_title') }}</div>
            <div class="title">{{ $t('home.cooperation.rule.title') }}</div>
            <div class="description">{{ $t('home.cooperation.rule.description') }}</div>
            <div class="description">{{ $t('home.cooperation.rule.description2') }}</div>
            <router-link :to="{ path: '/about' }" class="sp-btn">
              <span>{{ $t('home.cooperation.rule.btn_text') }}</span>
            </router-link>
          </div>
        </div>
        <div class="coop-store">
          <img class="right-photo" src="/static/img/about-store.jpg" alt="solopick">
        </div>
      </div>

    </div>

    <!--联系我们-->
    <pc-foot-join></pc-foot-join>

  </div>
</template>

<script>
  import TopNav from '@/components/TopNav'

  export default {
    name: 'Home',
    components: {
      TopNav
    },
    data () {
      return {
        brandIcon: ['logo-s_0042_nine-bot.png', 'logo-s_0004_chunmi.png', 'logo-s_0007_zmi.png', 'logo-s_0027_swdk.png',
          'logo-s_0005_smartmi.png', 'logo-s_0021_dreame.png']
      }
    }
  }
</script>

<style lang="scss" scoped>

  .sp-web-head {
    background: url("/static/img/1-header-bg-imgs.jpg") no-repeat;
  }

</style>
