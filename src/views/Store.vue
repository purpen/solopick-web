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

      <!-- 左边的文字 店铺-->
      <div class="left-text">
        <div class="title-text">
          <span>S</span>OLOPICK生活馆
        </div>
        <div
          class="discription-text"
        >SOLOPICK生活馆是一个以“优质国货”为原则的生活美学专门店，专注精选生活家居和创新生活家电，涵盖智能家居、家用生活、数码配件等，SKU多达7000余种。</div>
        <div class="call-me__button">
          <span>关于我们</span>
        </div>
      </div>
    </div>

    <img class="top-right__photo" src="/static/img/store-glance.jpg" alt>

    <div class="public-location-box store-join__box">
      <div class="top">
        <p class="one-line">诚邀合作</p>
        <p class="two-line">店铺加盟流程</p>
      </div>
      <div class="bottom">
        <div class="bottom-item" v-for="(item,index) in joinStoreList" :key="index">
          <div class="list-number">{{index+1}}</div>
          <div class="right-box">
            <p class="top-text">{{item.top}}</p>
            <p class="bottom-text">{{item.bottom}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="public-location-box map-box">
      <div class="top">
        <p class="one-line">体验SOLOPICK</p>
        <p class="two-line">品牌体验店地址</p>
      </div>
      <img class="bottom-map" src="static/img/store-location.jpg" alt>
    </div>

    <pc-foot-join></pc-foot-join>
  </div>
</template>

<script>
import * as global from '@/global/index'
export default {
  name: 'Store',
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

      joinStoreList: [
        {
          top: '确认合作意向',
          bottom: '加盟商请通过020-xxxx 或 邮箱xxxxxxx@solopick.com，与我们取得联系'
        },
        {
          top: '评估审核',
          bottom: '合作负责人将对加盟商的铺位与经营方案进行审核评估，通过考核后双方签订合作协议'
        },
        {
          top: '店面装修',
          bottom: 'SOLOPICK 将为加盟商提供统一的设计店面装修方案'
        },
        {
          top: '货品采购',
          bottom: '加盟商根据经销货品进行配货采购'
        },
        {
          top: '管理培训服务',
          bottom: 'SOLOPICK 选品团队根据市场提供配货建议，加盟商确认后进行采购运送'
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
    background: url("/static/img/1-header-bg-imgs.jpg") no-repeat;
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
      // width: 100%;
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
  .top-right__photo {
    position: absolute;
    top: 2.65rem;
    left: 9.79rem;
    width: 5.41rem;
    height: 3.82rem;
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
  .top-right__photo {
    position: absolute;
    top: 5.1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 6.71rem;
    height: 4.73rem;
    border-radius: 5px;
  }
  .store-join__box {
    margin-top: 4.8rem;
  }
  .public-location-box {
    padding-left: 0.46rem;
    display: flex;
    flex-direction: column;
    .top {
      margin-bottom: 0.48rem;
    }
    .bottom {
      width: 5.91rem;
      height: 6.18rem;
      padding: 0.3rem 0.4rem;
      background: rgba(246, 248, 249, 1);
      border-radius: 8px;
      border: 1px solid rgba(227, 232, 234, 1);
      .bottom-item {
        .right-box {
          flex: 1;
        }
        .list-number {
          width: 0.73rem;
          height: 0.73rem;
          border: 1px solid rgba(32, 96, 159, 1);
          color: rgba(32, 96, 159, 1);
          line-height: 0.73rem;
          text-align: center;
          font-size: 0.34rem;
          margin-right: 0.3rem;
        }
      }
    }
  }
  .map-box {
    padding-left: 0.46rem;
    margin-top: 0.52rem;
    .one-line {
      height: 0.2rem;
      font-size: 0.14rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(126, 128, 133, 1);
      line-height: 0.2rem;
    }
    .two-line {
      height: 0.46rem;
      font-size: 0.34rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(44, 46, 48, 1);
      line-height: 0.46rem;
      margin: 0.11rem 0 0.14rem;
    }
    .bottom-map {
      width: 6.72rem;
      height: 2.84rem;
    }
  }
}

.small--window {
    .pc-hand__container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 3.2rem;
    height: 4.89rem;
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
      top: 0.96rem;
      .title-text {
        display: flex;
        flex-direction: row;
        font-size: 0.26rem;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        // line-height: 0.67rem;
        margin-bottom: 0.5rem;
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
        font-family:PingFangSC-Regular;
      }
      .call-me__button {
        display: none;
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
  .top-right__photo {
    position: absolute;
    top: 3.43rem;
    left: 50%;
    transform: translateX(-50%);
    width:2.71rem;
    height:1.91rem;
    border-radius: 5px;
  }
  .store-join__box {
    // margin-top: 4.80rem;
    .top {
      padding-left: 0.24rem;
      .two-line {
        font-size: 0.24rem;
      }
    }
  }
  .public-location-box {
    padding-left: 0;
    display: flex;
    flex-direction: column;
    .top {
      margin-bottom: 0.24rem;
    }
    .bottom {
      width: 2.72rem;
      height: 13.12rem;
      padding: 0.41rem 0.24rem;
      background: rgba(246, 248, 249, 1);
      border: none;
      border-radius: 0;
      .bottom-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        .right-box {
          width: 2.71rem;
        }
        .list-number {
          width: 0.73rem;
          height: 0.73rem;
          border: 1px solid rgba(32, 96, 159, 1);
          color: rgba(32, 96, 159, 1);
          line-height: 0.73rem;
          text-align: center;
          font-size: 0.34rem;
          margin-right: 0;
          margin-bottom: 0.3rem;
        }
      }
    }
  }
  .map-box {
    // padding-left: 0.46rem;
    margin-top: 0.76rem;
    .top {
      padding-left: 0.24rem;
    }
    .one-line {
      height: 0.2rem;
      font-size: 0.14rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(126, 128, 133, 1);
      line-height: 0.2rem;
    }
    .two-line {
      height: 0.46rem;
      font-size: 0.34rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(44, 46, 48, 1);
      line-height: 0.46rem;
      margin: 0.11rem 0 0.14rem;
    }
    .bottom-map {
      width: 3.2rem;
      height: 1.36rem;
    }
  }
}
</style>
