<template>
  <div class="sp-web-container contact">

    <!--头部-->
    <div class="sp-web-head">

      <!--导航-->
      <top-nav></top-nav>

      <div class="coop-contact">
        <div class="card">
          <img class="icon" src="/static/img/icon-coop-brand.png" alt="solopick">
          <div class="title">{{ $t('home.coop_contact.brand.title') }}</div>
          <div class="description">{{ $t('home.coop_contact.brand.description') }}</div>
          <router-link :to="{ path: '/call_me' }" class="call-me">
            <span>brand.coop@solopick.com</span>
          </router-link>
        </div>
        <div class="card">
          <img class="icon" src="/static/img/icon-coop-store.png" alt="solopick">
          <div class="title">{{ $t('home.coop_contact.store.title') }}</div>
          <div class="description">{{ $t('home.coop_contact.store.description') }}</div>
          <router-link :to="{ path: '/call_me' }" class="call-me">
            <span>store.coop@solopick.com</span>
          </router-link>
        </div>
      </div>

    </div>

    <!--地址-->
    <div class="address">
      <div class="sp-block-wrapper">
        <img class="arrow" src="/static/img/arrow-down-break.png" alt="solopick">
        <div class="addr">
          <i class="el-icon-location"></i> {{ $t('contact.addr') }}
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'CallMe',
    data () {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .sp-web-head {
    background: url("/static/img/5-header-bg-imgs.jpg") no-repeat;
    padding-bottom: 100px;
  }

  .coop-contact {
    padding-top: 84px;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    padding-bottom: 5px;

    .card {
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

  .address {
    margin-top: 50px;
    margin-bottom: 50px;

    .sp-block-wrapper {
      display: flex;
      flex-direction: column;
      text-align: center;

      .arrow {
        width: 100px;
        height: 36px;
        margin: 0 auto 40px;
      }

      .addr {
        font-size:14px;
        font-weight:400;
        color:rgba(126,128,133,1);
        line-height:20px;
      }
    }
  }
</style>
