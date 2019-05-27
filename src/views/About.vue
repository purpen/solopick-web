<template>
  <div class="sp-web-container about">

    <!--头部-->
    <div class="sp-web-head">

      <!--导航-->
      <top-nav></top-nav>

      <div class="sp-block-wrapper">
          <!--首屏-->
        <div class="sp-block sp-block--head">
          <div class="title">
            <span class="spot">{{ $t('about.slogan.spot') }}</span>{{ $t('about.slogan.title') }}
          </div>
          <div class="description">{{ $t('about.slogan.description') }}</div>
        </div>
      </div>

    </div>

    <!--名称的由来-->
    <div class="cooperation">
      <div class="sp-block-wrapper">
        <div class="sp-block__head no-btm">
          <img class="arrow" src="https://static.moebeast.com/static/sp/img/arrow-down-break.png" alt="solopick">
        </div>
      </div>
    </div>

    <div class="sp-block-wrapper origin">
      <div class="sp-block sp-block--black">
        <div class="sub-title">{{ $t('about.origin.sub_title') }}</div>
        <div class="title">{{ $t('about.origin.title') }}</div>
        <div class="description">{{ $t('about.origin.description') }}</div>
      </div>
      <div class="sp-block__image">
        <img class="best-time" src="https://static.moebeast.com/static/sp/img/what-means.jpg" alt="solopick">
      </div>
    </div>

    <!--选品理念-->
    <div class="concept">
      <div class="sp-block-wrapper">
        <div class="sp-block__head">
          <div class="sub-title">{{ $t('about.concept.sub_title') }}</div>
          <div class="title">{{ $t('about.concept.title') }}</div>
          <div class="description">{{ $t('about.concept.desc') }}</div>
        </div>
      </div>

      <div class="coop-body">
        <div class="concept-cards">
          <div class="card">
            <img src="https://static.moebeast.com/static/sp/img/product-selection-1.png" class="image">
            <div class="title">{{ $t('about.concept.card1.title') }}</div>
            <div class="description">{{ $t('about.concept.card1.description') }}</div>
          </div>
          <div class="card">
            <img src="https://static.moebeast.com/static/sp/img/product-selection-2.png" class="image">
            <div class="title">{{ $t('about.concept.card2.title') }}</div>
            <div class="description">{{ $t('about.concept.card2.description') }}</div>
          </div>
          <div class="card">
            <img src="https://static.moebeast.com/static/sp/img/product-selection-3.png" class="image">
            <div class="title">{{ $t('about.concept.card3.title') }}</div>
            <div class="description">{{ $t('about.concept.card3.description') }}</div>
          </div>
        </div>
      </div>

    </div>

    <!--联系我们-->
    <pc-foot-join></pc-foot-join>

  </div>
</template>

<script>
  import * as types from '../vuex/types.js'

  export default {
    name: 'About',
    data () {
      return {

      }
    },
    created () {

    },
    methods: {

    },
    activated () {

    }
  }
</script>

<style lang="scss" scoped>
  .sp-web-head {
    background: url("https://static.moebeast.com/static/sp/img/supply-chain-head-bg.png") no-repeat;
    background-size: 100% auto;
  }

  .sp-web-head {
    padding-bottom: 150px;
  }

  .sp-block__arrow {
    width: 100px;
    margin: 40px auto -40px;
  }

  .concept {
    padding-top: 40px;

    .sp-block-wrapper {
      display: flex;
      flex-direction: column;
    }

    .concept-cards {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-bottom: 80px;

      .card {
        width: 20%;
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
</style>
