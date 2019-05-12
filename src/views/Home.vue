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
    <div class="sp-block-wrapper">
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
          <router-link :to="{ path: '/about' }" class="sp-btn">
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
    <div class="coop-contact">
      <div class="sp-block-wrapper">
        <div class="sp-block__head">
          <img class="arrow" src="/static/img/arrow-down-break.png" alt="solopick">
          <div class="sub-title">{{ $t('home.coop_contact.sub_title') }}</div>
          <div class="title">{{ $t('home.coop_contact.title') }}</div>
        </div>
      </div>

      <div class="coop-body">
        <div class="card">
          <img class="icon" src="/static/img/icon-coop-brand.png" alt="solopick">
          <div class="title">{{ $t('home.coop_contact.brand.title') }}</div>
          <div class="description">{{ $t('home.coop_contact.brand.description') }}</div>
          <router-link :to="{ path: '/about' }" class="call-me">
            <span>{{ $t('home.coop_contact.brand.btn_text') }}</span>
            <i class="el-icon-right"></i>
          </router-link>
        </div>
        <div class="card">
          <img class="icon" src="/static/img/icon-coop-store.png" alt="solopick">
          <div class="title">{{ $t('home.coop_contact.store.title') }}</div>
          <div class="description">{{ $t('home.coop_contact.store.description') }}</div>
          <router-link :to="{ path: '/about' }" class="call-me">
            <span>{{ $t('home.coop_contact.store.btn_text') }}</span>
            <i class="el-icon-right"></i>
          </router-link>
        </div>
      </div>
    </div>

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
  .sp-web-container {
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .sp-web-head {
    background: url("/static/img/1-header-bg-imgs.jpg") no-repeat;
    background-size: cover;
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

  .coop-contact {
    padding-top: 84px;

    .sp-block-wrapper {
      display: flex;
      flex-direction: column;

      .arrow {
        margin-bottom: 60px;
      }
    }

    .coop-body {
      margin-top: 80px;
      display: flex;
      justify-content: center;
      background: rgba(16, 54, 92, 1);
      padding-bottom: 295px;


      .card {
        margin-top: -80px;
        width: 410px;
        text-align: center;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.14);
        border-radius: 5px;
        padding: 48px 56px;

        &:first-child {
          margin-right: 30px;
        }

        .icon {
          width: 108px;
          height: 108px;
        }
        .title {
          margin-top: 40px;
          font-size:24px;
          font-weight:400;
          color:rgba(44,46,48,1);
          line-height:34px;
        }
        .description {
          margin-top: 26px;
          font-size:16px;
          font-weight:400;
          color:rgba(84,86,90,1);
          line-height:28px;
        }
        .call-me {
          margin-top: 60px;
          display: inline-block;
        }

      }
    }

  }

</style>
