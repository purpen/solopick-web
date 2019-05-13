<template>
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
        <router-link :to="{ path: '/call_me' }" class="call-me">
          <span>{{ $t('home.coop_contact.brand.btn_text') }}</span>
          <i class="el-icon-right"></i>
        </router-link>
      </div>
      <div class="card">
        <img class="icon" src="/static/img/icon-coop-store.png" alt="solopick">
        <div class="title">{{ $t('home.coop_contact.store.title') }}</div>
        <div class="description">{{ $t('home.coop_contact.store.description') }}</div>
        <router-link :to="{ path: '/call_me' }" class="call-me">
          <span>{{ $t('home.coop_contact.store.btn_text') }}</span>
          <i class="el-icon-right"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PcFootJoin'
  }
</script>

<style lang="scss" scoped>
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
