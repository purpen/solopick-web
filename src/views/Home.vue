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
          <img class="white-products" src="https://static.moebeast.com/static/sp/img/white-products.png" alt="solopick">
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
        <img class="best-time" src="https://static.moebeast.com/static/sp/img/landing-2.1-VIDEO.png" alt="solopick">
      </div>
    </div>

    <!--平台价值-->
    <div class="platform">
      <div class="sp-block-wrapper">
        <div class="sp-block__head">
          <div class="sub-title">{{ $t('home.platform.sub_title') }}</div>
          <div class="title">{{ $t('home.platform.title') }}</div>
          <!--div class="desc">{{ $t('home.platform.desc') }}</div-->
        </div>
        <div class="sp-block__body">
          <div class="platform-cards">
            <div class="card">
              <img src="https://static.moebeast.com/static/sp/img/icon-why-us-1.png" class="image">
              <div class="title">{{ $t('home.platform.card1.title') }}</div>
              <div class="description">{{ $t('home.platform.card1.description') }}</div>
            </div>
            <div class="card">
              <img src="https://static.moebeast.com/static/sp/img/icon-why-us-2.png" class="image">
              <div class="title">{{ $t('home.platform.card2.title') }}</div>
              <div class="description">{{ $t('home.platform.card2.description') }}</div>
            </div>
            <div class="card">
              <img src="https://static.moebeast.com/static/sp/img/icon-why-us-3.png" class="image">
              <div class="title">{{ $t('home.platform.card3.title') }}</div>
              <div class="description">{{ $t('home.platform.card3.description') }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--五大分类-->
    <div class="categories">
      <div class="sp-block-wrapper">
        <div class="sp-block__head">
          <div class="sub-title">{{ $t('home.category.sub_title') }}</div>
          <div class="title">{{ $t('home.category.title') }}</div>
        </div>
        <div class="sp-block__body">
          <div class="platform-cards">
            <div class="card">
              <img src="https://static.moebeast.com/static/sp/img/cate-01.png" class="image">
              <div class="title">{{ $t('home.category.card1.title') }}</div>
            </div>
            <div class="card">
              <img src="https://static.moebeast.com/static/sp/img/cate-02.png" class="image">
              <div class="title">{{ $t('home.category.card2.title') }}</div>
            </div>
            <div class="card">
              <img src="https://static.moebeast.com/static/sp/img/cate-03.png" class="image">
              <div class="title">{{ $t('home.category.card3.title') }}</div>
            </div>
            <div class="card">
              <img src="https://static.moebeast.com/static/sp/img/cate-04.png" class="image">
              <div class="title">{{ $t('home.category.card4.title') }}</div>
            </div>
            <div class="card">
              <img src="https://static.moebeast.com/static/sp/img/cate-05.png" class="image">
              <div class="title">{{ $t('home.category.card5.title') }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cooperation">
      <div class="sp-block-wrapper">
        <div class="sp-block__head no-btm">
          <img class="arrow" src="https://static.moebeast.com/static/sp/img/arrow-down-break.png" alt="solopick">
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
            <div
              class="logo"
              v-for="(item, index) in brandIcon"
              :key="index">
              <img :src="'https://static.moebeast.com/static/sp/img/'+item" alt="solopick">
            </div>
          </div>

        </div>
      </div>
    </div>

    <!--产品集合-->
    <div class="collection">
      <img class="image" src="https://static.moebeast.com/static/sp/img/landing-4.1-pic.png">
    </div>

    <!-- 加盟合作 -->
    <div class="cooperation">
      <div class="sp-block-wrapper">
        <div class="sp-block__head">
          <img class="arrow" src="https://static.moebeast.com/static/sp/img/arrow-down-break.png" alt="solopick">
          <!--div class="sub-title">{{ $t('home.cooperation.sub_title') }}</div-->
          <div class="title">{{ $t('home.cooperation.title') }}</div>
        </div>
      </div>
    </div>

    <div class="cooperation-content">
      <div class="sp-block-wrapper">
        <div class="sp-block sp-block--black">
          <div class="sub-title">{{ $t('home.cooperation.rule.sub_title') }}</div>
          <div class="title">{{ $t('home.cooperation.rule.title') }}</div>
          <div class="description">{{ $t('home.cooperation.rule.description') }}</div>
          <div class="description">{{ $t('home.cooperation.rule.description2') }}</div>
          <router-link :to="{ path: '/about' }" class="sp-btn">
            <span>{{ $t('home.cooperation.rule.btn_text') }}</span>
            <i class="el-icon-right"></i>
          </router-link>
        </div>
        <div class="sp-block__image">
          <img class="right-photo" src="https://static.moebeast.com/static/sp/img/store-video.png" alt="solopick">
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
        brandIcon: ['logo_0042_nine-bot.png', 'logo_0038_autobot.png', 'logo_0023_lefan.png', 'logo_0002_yueli.png',
          'logo_0039_KKF.png', 'logo_0043_showbay.png']
      }
    }
  }
</script>

<style lang="scss" scoped>

  .sp-web-head {
    background: url("https://static.moebeast.com/static/sp/img/landing-page.png") no-repeat;
    background-size: 100% auto;
  }

</style>
