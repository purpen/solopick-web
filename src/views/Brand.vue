<template>
  <div
    :class="windowWidth=='bigWindow'?'big-window':windowWidth=='middleWindow'?'middle-window':'small--window'"
  >
  <h5-tab v-if="windowWidth=='smallWindow'"></h5-tab>
    <div class="pc-hand__container">
      <!-- 头部导航 -->
      <div class="navbar">
        <img class="logo" src="/static/img/solopick-logo-l.png" alt>
        <div class="handle-pick">
          <div class="top">
            <span>简体中文</span>
            <img class="jian-tou" src="/static/img/arrow-down-break.png" alt>
          </div>
          <div class="bottom">
            <div
              class="span"
              v-for="(item,index) in category"
              :key="index"
              @click="handleGoOtherPage(item.id)"
            >
              <span>{{item.name}}</span>
              <p v-show="item.id == categoryActive" class="ren-line"></p>
            </div>
          </div>
        </div>
      </div>

      <!-- 左边的文字 品牌合作-->
      <div class="left-text">
        <div class="title-text">
          <span>品</span>牌合作
        </div>
        <div
          class="discription-text"
        >SOLOPICK与众多头部平台、品牌和制造商展开合作，以品质生活和美学生活为主题，甄选智能家居、家用生活、数码配件等品类的产品。</div>
      </div>
    </div>

    <div class="top-discription">
      <p class="frend">合作伙伴</p>
      <p class="xiaomi-youpin">小米有品海外授权</p>
      <div class="xiao-mi__discription">
        <img class="xiaomi-icon" src="/static/img/xiaomiyoupin-logo-l.png" alt>
        <div
          class="discription-box"
        >小米有品是小米旗下精品生活电商平台，也是小米“新零售”战略的重要一环。依托小米生态链体系，延续小米的“爆品”模式，致力于将“小米式的性价比”延伸到更广泛的家居生活领域。</div>
      </div>
    </div>

    <div class="brand-icon__list">
      <img :src="'/static/img/'+item" alt v-for="(item, index) in brandList" :key="index">
      <!-- <div class="loading-more">加载更多…</div> -->
    </div>

    <div class="public-location-box">
      <div class="top">
        <p class="one-line">诚邀合作</p>
        <p class="two-line">店铺加盟流程</p>
      </div>
      <div class="bottom">
        <div class="bottom-item" v-for="(item,index) in joinStoreList" :key="index">
          <div class="list-number">{{index+1}}</div>
          <div class="right-text">
            <p class="top-text">{{item.top}}</p>
            <p class="bottom-text">{{item.bottom}}</p>
          </div>
        </div>
      </div>
    </div>

    <pc-foot-join></pc-foot-join>
  </div>
</template>

<script>
import * as global from '@/global/index'
export default {
  name: 'Brand',
  data () {
    return {
      windowWidth: '', // 屏幕尺寸

      categoryActive: 'index',
      category: [
        {
          id: 'about',
          name: '关于我们'
        },
        {
          id: 'store',
          name: '店铺'
        },
        {
          id: 'brand',
          name: '品牌合作'
        },
        {
          id: 'call_me',
          name: '联系'
        }
      ],

      brandList: ['logo-s_0038_nine-bot.png', 'logo-s_0004_chunmi.png', 'logo-s_0007_zmi.png', 'logo-s_0023_swdk.png', 'logo-s_0005_smartmi.png', 'logo-s_0021_dreame.png'],
      joinStoreList: [
        {
          top: '取得联系',
          bottom: '品牌商请通过020-##########，与我们取得联系，确认合作意向后需寄送产品样品'
        },
        {
          top: '产品评测',
          bottom: 'SOLOPICK将对产品样品进行市场调研分析和产品评测，产品通过测试和评测后双方签订合作协议'
        },
        {
          top: '产品采买',
          bottom: '根据市场调研分析和产品评测报告过，SOLOPICK将产品添加至产品库，并根据市场需求进行采购'
        }
      ]
    }
  },
  mounted () {
    // 计算样式
    this.windowWidth = global.windowWidth()
    console.log(this.windowWidth)
    window.onresize = e => {
      this.windowWidth = global.windowWidth()
      console.log(this.windowWidth)
    }
  },
  methods: {
    // 跳转网页
    handleGoOtherPage (e) {
      this.categoryActive = e
      this.$router.push({path: e})
    }
  }
}
</script>

<style lang="scss" scoped>
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
          height: 0.2rem;
          border-bottom: 0.01rem solid white;
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
    padding: 0.55rem 4rem;
    border: 1px solid rgba(227, 232, 234, 1);
    background: rgba(246, 248, 249, 1);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    img {
      width: 1.2rem;
      height: 0.64rem;
    }
  }
  .public-location-box {
    .bottom {
      height: 4.53rem;
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
          height: 0.2rem;
          border-bottom: 0.01rem solid white;
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
          width: 0.09rem;
          height: 0.06rem;
          margin-left: 0.01rem;
        }
        .top {
          height: 0.2rem;
          border-bottom: 0.01rem solid white;
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
