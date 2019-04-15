<template>
  <div>
    <!-- <pc-hand></pc-hand> -->
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

        <!-- 左边的文字 首页-->
        <div class="left-text">
          <div class="title-text">
            <span>新</span>国货出海第一渠道
          </div>
          <div class="discription-text">我们输送中国制造业优质品牌到海外市场，致力于输送中国制造业优质品牌到海外市场，真正让“中国制造”落于实地。</div>
          <div class="call-me__button">
            <span>关于我们</span>
          </div>
        </div>
      </div>

      <!-- 产品图片 -->
      <img class="product-photo" src="/static/img/white-products.png" alt>

      <div class="bottom-discription">
        <div class="text-box">
          <div class="title">新国货出海</div>
          <div class="disciption-one">中国品牌出海最佳时机</div>
          <div class="disciption-two">中国制造业高质量发展，涌现一批以用户为中心，打造涵盖美学设计、价值标签等个性特征的优质企业与品牌，国际竞争力不断提高。</div>
          <div class="disciption-three">而随着走向全球的中国品牌日益增多，全球消费者的认可度逐年提升，现在正值中国品牌海外扩张的有利时机。</div>
        </div>
        <img src="/static/img/best-time.jpg" alt>
      </div>
      <!-- 平台价值 -->
      <div class="ping-tai">
        <div class="hand-text">平台价值</div>
        <div class="pick-text">为什么选择SOLOPICK</div>
        <div class="pick-so__discripion">洞察消费者诉求，连接丰富的海外渠道资源与自身的的头部品牌制造商</div>
        <div class="item-box">
          <div
            class="item"
            :class="index==1?'margin-left__right':''"
            v-for="(item,index) in bigWindowPickMe"
            :key="index"
          >
            <img class="item-img" :src="item.image" alt>
            <div class="item-title">{{item.title}}</div>
            <p class="item-discription">{{item.name}}</p>
          </div>
        </div>
      </div>

      <!--  小米有品海外授权 合作品牌-->
      <div class="brand-join">
        <div class="item">
          <div class="hand-text">合作伙伴</div>
          <div class="middle-text">小米有品海外授权</div>
          <div class="bottom-box">
            <img class="xiao-mi__icon" src="/static/img/xiaomiyoupin-logo-l.png" alt>
            <p>小米有品是小米旗下精品生活电商平台，也是小米“新零售”战略的重要一环。依托小米生态链体系，延续小米的“爆品”模式，致力于将“小米式的性价比”延伸到更广泛的家居生活领域。</p>
          </div>
          <img class="xia-jian__tou" src="/static/img/arrow-down-break.png" alt>
        </div>

        <div class="item">
          <div class="hand-text">品质 x 科技 x 美学</div>
          <div class="middle-text">合作品牌</div>
          <div class="bottom-box">
            <p>SOLOPICK与国内众多头部平台、品牌和制造商展开合作，以品质生活和美学生活为主题，甄选智能家居、家用生活、数码配件等品类的精选产品。</p>
          </div>
          <div class="join-function__btn">合作流程</div>
          <div class="brad-icon__box">
            <img
              :src="'/static/img/'+item"
              v-for="(item, index) in brandIcon"
              :key="index"
              v-if="windowWidth == 'bigWindow'"
            >
            <img
              :src="'/static/img/'+item"
              v-for="(item, index) in brandIconMiddle"
              :key="index"
              v-if="windowWidth == 'middleWindow' || windowWidth == 'smallWindow'"
            >
          </div>
        </div>
      </div>

      <!-- 中间产品集合大图 -->
      <img
        class="middle-product__photo--big"
        src="/static/img/cooper-products-1.jpg"
        v-if="windowWidth == 'middleWindow' || windowWidth == 'bigWindow'"
      >
      <div class="middle-product__photo--big" v-if="windowWidth == 'smallWindow'"></div>

      <!-- 加盟的头部 -->
      <div class="join-hand">
        <img class="xia-jian__tou" src="/static/img/arrow-down-break.png" alt>
        <div class="top">智美生活馆</div>
        <div class="bottom">店铺加盟</div>
      </div>

      <!-- 加盟的产品图片以及说明 -->
      <div class="join-store__product">
        <div class="left-discription">
          <div class="ont-line__text">精选生活</div>
          <div class="two-line__text">店铺合作伙伴</div>
          <div class="three-line__box">
            <p class="top">SOLOPICK以好产品为准则，产品涵盖生活家电与生活家居，SKU多达7000余种。</p>
            <p class="bottom">如果你也喜爱和认同SOLOPICK，欢迎加入成为我们的一份子。</p>
          </div>
          <div class="btn">加盟政策</div>
        </div>
        <img class="right-photo" src="/static/img/about-store.jpg" alt>
      </div>

      <pc-foot-join></pc-foot-join>
    </div>
  </div>
</template>

<script>
import * as global from '@/global/index'
export default {
  name: 'Index',
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

      // 大屏幕下
      bigWindowPickMe: [
        {
          image: '/static/img/icon-why-us-1.png',
          title: '洞察新兴市场消费诉求',
          name: 'SOLOPICK 专业市场选品团队，根据……的产品理念，从线下零售切入。'
        },
        {
          image: '/static/img/icon-why-us-2.png',
          title: '深耕海外头部渠道',
          name: '覆盖全球近120个主要国家和地区，整合上千家海外经销商资源，拥有丰富的线上线下资源。'
        },
        {
          image: '/static/img/icon-why-us-3.png',
          title: '共同构建出海平台',
          name: '为优质中国品牌构建出海平台，连接全球消费者与中国制造。'
        }
      ],
      // 品牌商标
      brandIcon: ['logo-s_0042_nine-bot.png', 'logo-s_0004_chunmi.png', 'logo-s_0007_zmi.png', 'logo-s_0027_swdk.png', 'logo-s_0005_smartmi.png', 'logo-s_0021_dreame.png'],
      brandIconMiddle: ['logo-s_0042_nine-bot.png', 'logo-s_0004_chunmi.png', 'logo-s_0007_zmi.png', 'logo-s_0027_swdk.png']
    }
  },
  created () {
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
.big-window {
  .join-hand {
    display: flex;
    flex-direction: column;
    align-items: center;
    .xia-jian__tou {
      width: 0.92rem;
      height: 0.3rem;
      margin: 0.84rem 0 0.63rem;
    }
    .top {
      height: 0.22rem;
      font-size: 0.16rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(126, 128, 133, 1);
      line-height: 0.22rem;
    }
    .bottom {
      height: 0.46rem;
      font-size: 0.34rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(44, 46, 48, 1);
      line-height: 0.46rem;
      margin: 0.06rem 0 0.63rem;
    }
  }
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
  .product-photo {
    position: absolute;
    top: 1.57rem;
    left: 9rem;
    width: 6.5rem;
    height: 5.7rem;
  }
  .bottom-discription {
    padding: 1.5rem 4rem 1.22rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .text-box {
      width: 4rem;
    }
    .title {
      font-size: 0.14rem;
      font-weight: 0.4rem;
      color: rgba(126, 128, 133, 1);
      line-height: 0.2rem;
    }
    .disciption-one {
      font-size: 0.34rem;
      font-weight: 400;
      color: rgba(44, 46, 48, 1);
      line-height: 0.46rem;
      margin: 0.11rem 0;
    }
    .disciption-two,
    .disciption-three {
      font-size: 0.16rem;
      font-weight: 400;
      color: rgba(126, 128, 133, 1);
      line-height: 0.28rem;
      margin-bottom: 0.3rem;
    }
    img {
      width: 5.41rem;
      height: 3.82rem;
      border-radius: 5px;
    }
  }

  .join-store__product {
    height: 6.4rem;
    display: flex;
    flex-direction: row;
    .left-discription {
      flex: 1;
      padding-top: 1.54rem;
      padding-left: 4rem;
      background: rgba(246, 248, 249, 1);
      .ont-line__text {
        font-size: 0.16rem;
        color: rgba(126, 128, 133, 1);
        line-height: 0.22rem;
      }
      .two-line__text {
        font-size: 0.34rem;
        color: rgba(44, 46, 48, 1);
        line-height: 0.46rem;
        margin: 0.11rem 0;
      }
      .three-line__box {
        width: 4.04rem;
        height: 1.6rem;
        font-size: 0.16rem;
        color: rgba(84, 86, 90, 1);
        line-height: 0.28rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 0.3rem;
      }
      .btn {
        display: inline-block;
        padding: 0.14rem 0.28rem;
        border-radius: 0.38rem;
        border: 2px solid rgba(32, 96, 159, 1);
        font-size: 0.18rem;
        font-weight: 600;
        color: rgba(32, 96, 159, 1);
        line-height: 0.25rem;
      }
    }
    .right-photo {
      width: 9.59rem;
      height: 6.4rem;
    }
  }
  .middle-product__photo--big {
    width: 19.2rem;
    height: 6.4rem;
  }

  .ping-tai {
    padding: 0 4rem;
    height: 6.34rem;
    background: rgba(246, 248, 249, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    .hand-text {
      font-size: 0.14rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(126, 128, 133, 1);
      line-height: 0.2rem;
      margin-top: 0.9rem;
      margin-bottom: 0.11rem;
    }
    .pick-text {
      font-size: 0.34rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(44, 46, 48, 1);
      line-height: 0.46rem;
      margin-bottom: 0.26rem;
    }
    .pick-so__discripion {
      height: 0.86rem;
      font-size: 0.16rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(126, 128, 133, 1);
      line-height: 0.28rem;
    }
    .item-box {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .item {
        width: 3.46rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        .item-img {
          height: 1.12rem;
          width: 1.12rem;
          margin-bottom: 0.23rem;
        }
        .item-title {
          font-size: 0.24rem;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(44, 46, 48, 1);
          line-height: 0.33rem;
          margin-bottom: 0.19rem;
        }
        .item-discription {
          text-align: center;
          font-size: 0.16rem;
          color: rgba(126, 128, 133, 1);
          line-height: 0.28rem;
        }
      }
    }
  }
  .brand-join {
    padding: 0.9rem 4rem 0.67rem;
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      .join-function__btn {
        padding: 0.14rem 0.28rem;
        border-radius: 0.38rem;
        border: 2px solid rgba(32, 96, 159, 1);
        font-size: 0.18rem;
        font-weight: 600;
        color: rgba(32, 96, 159, 1);
        line-height: 0.25rem;
        margin: 0.37rem 0 0.52rem;
      }
      .brad-icon__box {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        img {
          width: 1.2rem;
          height: 0.64rem;
        }
      }
      .xia-jian__tou {
        width: 0.92rem;
        height: 0.3rem;
        margin: 0.37rem 0 0.84rem;
      }
      .hand-text {
        font-size: 0.14rem;
        font-weight: 400;
        color: rgba(126, 128, 133, 1);
        line-height: 0.2rem;
        margin-bottom: 0.06rem;
      }
      .middle-text {
        font-size: 0.34rem;
        font-weight: 400;
        color: rgba(44, 46, 48, 1);
        line-height: 0.46rem;
        margin-bottom: 0.4rem;
      }
      .xiao-mi__icon {
        width: 2.29rem;
        height: 0.83rem;
      }
      .bottom-box {
        display: flex;
        flex-direction: row;
        align-items: center;
        span,
        p {
          font-size: 0.16rem;
          font-weight: 400;
          color: rgba(126, 128, 133, 1);
          line-height: 0.28rem;
          margin-left: 0.54rem;
        }
        span {
          width: 5.29rem;
        }
        p {
          width: 6.32rem;
        }
      }
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
  .join-hand {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.6rem 0 0.44rem;
    .xia-jian__tou {
      width: 0.92rem;
      height: 0.3rem;
    }
    .top {
      height: 0.17rem;
      font-size: 0.12rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(126, 128, 133, 1);
      line-height: 0.17rem;
      margin: 0.67rem 0 0.07rem;
    }
    .bottom {
      height: 0.46rem;
      font-size: 0.26rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(44, 46, 48, 1);
      line-height: 0.46rem;
    }
  }
  .product-photo {
    position: absolute;
    top: 1.57rem;
    left: 4.2rem;
    width: 3.2rem;
    height: 2.8rem;
  }
  .bottom-discription {
    padding: 1rem 0.4rem 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .text-box {
      width: 2.77rem;
    }
    .title {
      font-size: 0.12rem;
      font-weight: 0.4rem;
      color: rgba(126, 128, 133, 1);
      line-height: 0.17rem;
    }
    .disciption-one {
      font-size: 0.26rem;
      font-weight: 400;
      color: rgba(44, 46, 48, 1);
      line-height: 0.37rem;
      margin: 0.11rem 0;
    }
    .disciption-two,
    .disciption-three {
      font-size: 0.14rem;
      font-weight: 400;
      color: rgba(126, 128, 133, 1);
      line-height: 0.28rem;
      margin-bottom: 0.15rem;
    }
    img {
      width: 3.38rem;
      height: 2.39rem;
      border-radius: 5px;
    }
  }

  .join-store__product {
    height: 4.15rem;
    width: 7.68rem;
    display: flex;
    flex-direction: row;
    .left-discription {
      flex: 1;
      padding-top: 0.6rem;
      padding-left: 0.97rem;
      background: rgba(246, 248, 249, 1);
      .ont-line__text {
        height: 0.17rem;
        font-size: 0.12rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(126, 128, 133, 1);
        line-height: 0.17rem;
      }
      .two-line__text {
        height: 0.46rem;
        font-size: 0.26rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(44, 46, 48, 1);
        line-height: 0.46rem;
      }
      .three-line__box {
        width: 2.65rem;
        height: 1.55rem;
        font-size: 0.14rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(84, 86, 90, 1);
        line-height: 0.28rem;
        margin-bottom: 0.2rem;
        .top {
          margin-bottom: 0.5rem;
        }
      }
      .btn {
        display: inline-block;
        padding: 0.14rem 0.28rem;
        border-radius: 0.38rem;
        border: 2px solid rgba(32, 96, 159, 1);
        font-size: 0.18rem;
        font-weight: 600;
        color: rgba(32, 96, 159, 1);
        line-height: 0.25rem;
      }
    }
    .right-photo {
      width: 3.72rem;
      height: 4.12rem;
    }
  }
  .middle-product__photo--big {
    width: 7.68rem;
    height: 3.28rem;
    border-radius: 5px;
  }

  .ping-tai {
    height: 11.86rem;
    background: rgba(246, 248, 249, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    .hand-text {
      font-size: 0.12rem;
      color: rgba(126, 128, 133, 1);
      line-height: 0.17rem;
      margin-top: 0.66rem;
      margin-bottom: 0.05rem;
    }
    .pick-text {
      height: 0.46rem;
      font-size: 0.26rem;
      color: rgba(44, 46, 48, 1);
      line-height: 0.46rem;
      margin-bottom: 0.17rem;
    }
    .pick-so__discripion {
      height: 0.86rem;
      font-size: 0.14rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(126, 128, 133, 1);
      line-height: 0.28rem;
    }
    .item-box {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .item {
        width: 3.46rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 0.49rem;
        .item-img {
          height: 1.12rem;
          width: 1.12rem;
          margin-bottom: 0.25rem;
        }
        .item-title {
          font-size: 0.24rem;
          color: rgba(44, 46, 48, 1);
          line-height: 0.33rem;
          margin-bottom: 0.19rem;
        }
        .item-discription {
          text-align: center;
          font-size: 0.16rem;
          color: rgba(126, 128, 133, 1);
          line-height: 0.28rem;
        }
      }
    }
  }
  .brand-join {
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      .join-function__btn {
        padding: 0.14rem 0.28rem;
        border-radius: 0.38rem;
        border: 2px solid rgba(32, 96, 159, 1);
        font-size: 0.18rem;
        font-weight: 600;
        color: rgba(32, 96, 159, 1);
        line-height: 0.25rem;
        margin: 0.37rem 0 0.52rem;
      }
      .brad-icon__box {
        padding: 0 0.5rem 0.4rem 0.5rem;
        width: 6.68rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        img {
          width: 1.2rem;
          height: 0.64rem;
        }
      }
      .xia-jian__tou {
        width: 0.92rem;
        height: 0.3rem;
        margin: 0.32rem 0 0.84rem;
      }
      .hand-text {
        font-size: 0.14rem;
        font-weight: 400;
        color: rgba(126, 128, 133, 1);
        line-height: 0.2rem;
        margin-bottom: 0.03rem;
      }
      .middle-text {
        font-size: 0.26rem;
        font-weight: 400;
        color: rgba(44, 46, 48, 1);
        line-height: 0.46rem;
        margin-bottom: 0.35rem;
      }
      .xiao-mi__icon {
        width: 2.29rem;
        height: 0.83rem;
        margin-bottom: 0.32rem;
      }
      .bottom-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        span,
        p {
          width: 6.71rem;
          height: 0.78rem;
          font-size: 0.16rem;
          color: rgba(126, 128, 133, 1);
          font-family: PingFangSC-Regular;
          font-weight: 400;
          line-height: 0.28rem;
        }
        span {
          width: 5.29rem;
        }
        // p {
        //   width: 6.32rem;
        // }
      }
    }
  }
}

.small--window {
  width: 3.2rem;
  overflow: hidden;
  .pc-hand__container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 3.2rem;
    height: 5.38rem;
    padding-top: 0.4rem;
    background: url("/static/img/1-header-bg-imgs.jpg") no-repeat;
    background-size: auto 100%;
    margin-bottom: 0.57rem;
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
      top: 0.76rem;
      // transform: translateY(-50%);
      .title-text {
        display: flex;
        flex-direction: row;
        font-size: 0.26rem;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 0.37rem;
        margin-bottom: 0.3rem;
        span {
          border-bottom: 2px solid rgba(255, 0, 0, 1);
          // height: 0.67rem;
        }
      }
      .discription-text {
        width: 2.32rem;
        margin-top: 0.1rem;
        font-size: 0.14rem;
        color: rgba(255, 255, 255, 1);
        line-height: 0.28rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
      }
      .call-me__button {
        margin-top: 0.3rem;
        font-size: 0.18rem;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
        line-height: 0.52rem;
        text-align: center;
        width: 1.52rem;
        height: 0.52rem;
        border-radius: 0.38rem;
        border: 2px solid rgba(255, 255, 255, 1);
        span {
          margin-right: 0.1rem;
        }
      }
    }
  }

  .join-hand {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.6rem 0 0.44rem;
    .xia-jian__tou {
      width: 0.92rem;
      height: 0.3rem;
    }
    .top {
      height: 0.17rem;
      font-size: 0.12rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(126, 128, 133, 1);
      line-height: 0.17rem;
      margin: 0.67rem 0 0.07rem;
    }
    .bottom {
      height: 0.46rem;
      font-size: 0.26rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(44, 46, 48, 1);
      line-height: 0.46rem;
    }
  }
  .product-photo {
    position: absolute;
    top: 3.57rem;
    // left: 0.89rem;
    right: 0;
    width: 2.31rem;
    height: 2.3rem;
  }
  .bottom-discription {
    padding-left: 0.24rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .text-box {
      width: 2.71rem;
    }
    .title {
      height: 0.17rem;
      font-size: 0.12rem;
      font-weight: 400;
      color: rgba(126, 128, 133, 1);
      line-height: 0.17rem;
    }
    .disciption-one {
      height: 0.33rem;
      font-size: 0.24rem;
      font-weight: 400;
      color: rgba(44, 46, 48, 1);
      line-height: 0.33rem;
      margin: 0.12rem 0 0.15rem;
    }
    .disciption-two,
    .disciption-three {
      width: 2.71rem;
      margin-bottom: 0.3rem;
      font-size: 0.14;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(126, 128, 133, 1);
      line-height: 0.28rem;
    }
    img {
      width: 2.71rem;
      height: 1.92rem;
      border-radius: 5px;
    }
  }

  .join-store__product {
    width: 7.68rem;
    display: flex;
    flex-direction: column;
    .left-discription {
      padding-top: 0.58rem;
      padding-left: 0.46rem;
      background: rgba(246, 248, 249, 1);
      .ont-line__text {
        height: 0.17rem;
        font-size: 0.12rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(126, 128, 133, 1);
        line-height: 0.17rem;
      }
      .two-line__text {
        height: 0.46rem;
        font-size: 0.26rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(44, 46, 48, 1);
        line-height: 0.46rem;
      }
      .three-line__box {
        width: 2.27rem;
        height: 1.84rem;
        font-size: 0.14rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(84, 86, 90, 1);
        line-height: 0.28rem;
        margin-bottom: 0.1rem;
        .top {
          margin-bottom: 0.3rem;
        }
      }
      .btn {
        display: inline-block;
        width: 1.52rem;
        height: 0.52rem;
        border-radius: 0.38rem;
        border: 2px solid rgba(32, 96, 159, 1);
        box-sizing: border-box;
        text-align: center;
        line-height: 0.52rem;
        font-size: 0.18rem;
        font-family: PingFangSC-Semibold;
        font-weight: 600;
        color: rgba(32, 96, 159, 1);
        margin-bottom: 0.5rem;
      }
    }
    .right-photo {
      width: 3.2rem;
      height: 2.88rem;
    }
  }
  .middle-product__photo--big {
    width: 2.71rem;
    height: 2rem;
    border-radius: 5px;
    background: url("/static/img/cooper-products-1.jpg") no-repeat;
    margin: 0 auto;
    background-size: auto 100%;
    margin-top: 0.27rem;
  }

  .ping-tai {
    // height: 11.86rem;
    padding: 0 0.26rem;
    background: rgba(246, 248, 249, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    .hand-text {
      font-size: 0.12rem;
      color: rgba(126, 128, 133, 1);
      // color: red;
      line-height: 0.17rem;
      margin-top: 0.66rem;
      margin-bottom: 0.05rem;
    }
    .pick-text {
      height: 0.46rem;
      font-size: 0.24rem;
      color: rgba(44, 46, 48, 1);
      line-height: 0.46rem;
      margin-bottom: 0.17rem;
    }
    .pick-so__discripion {
      height: 0.86rem;
      font-size: 0.14rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(126, 128, 133, 1);
      line-height: 0.28rem;
      margin-bottom: 0.6rem;
    }
    .item-box {
      display: none;
      width: 100%;
      // display: flex;
      flex-direction: column;
      align-items: center;
      .item {
        width: 3.46rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 0.49rem;
        .item-img {
          height: 1.12rem;
          width: 1.12rem;
          margin-bottom: 0.25rem;
        }
        .item-title {
          font-size: 0.24rem;
          color: rgba(44, 46, 48, 1);
          line-height: 0.33rem;
          margin-bottom: 0.19rem;
        }
        .item-discription {
          text-align: center;
          font-size: 0.16rem;
          color: rgba(126, 128, 133, 1);
          line-height: 0.28rem;
        }
      }
    }
  }
  .brand-join {
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      .join-function__btn {
        display: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        .join-brand__icon {
          width: 1.2rem;
          height: 0.64rem;
        }
        // padding: 0.14rem 0.28rem;
        // border-radius: 0.38rem;
        // border: 2px solid rgba(32, 96, 159, 1);
        // font-size: 0.18rem;
        // font-weight: 600;
        // color: rgba(32, 96, 159, 1);
        // line-height: 0.25rem;
        // margin: 0.37rem 0 0.52rem;
      }
      .brad-icon__box {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 1.2rem;
          height: 0.64rem;
        }
      }
      .xia-jian__tou {
        width: 0.92rem;
        height: 0.3rem;
        margin: 0.23rem 0 0.4rem;
      }
      .hand-text {
        height: 0.17rem;
        font-size: 0.12rem;
        font-weight: 400;
        color: rgba(126, 128, 133, 1);
        line-height: 0.17rem;
        margin-bottom: 0.06rem;
        margin-top: 0.34rem;
      }
      .middle-text {
        height: 0.46rem;
        font-size: 0.24rem;
        font-weight: 400;
        color: rgba(44, 46, 48, 1);
        line-height: 0.46rem;
        margin-bottom: 0.35rem;
      }
      .xiao-mi__icon {
        width: 2.29rem;
        height: 0.83rem;
        margin-bottom: 0.32rem;
      }
      .bottom-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        span,
        p {
          width: 2.71rem;
          height: 1.66rem;
          font-size: 0.16rem;
          color: rgba(126, 128, 133, 1);
          font-family: PingFangSC-Regular;
          font-weight: 400;
          line-height: 0.28rem;
          // color: red;
        }
        span {
          width: 5.29rem;
        }
        // p {
        //   width: 6.32rem;
        // }
      }
    }
  }
}
</style>
