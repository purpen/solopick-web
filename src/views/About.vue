<template>
  <div>
    <div v-if="languageType=='c'">
      <div
        :class="windowWidth=='bigWindow'?'big-window':windowWidth=='middleWindow'?'middle-window':'small--window'"
      >
        <!-- H5的选择项目 -->
        <h5-tab v-if="windowWidth=='smallWindow'" @h5Language="handleSwichH5Language"></h5-tab>

        <div class="pc-hand__container">
          <!-- 头部导航 -->
          <div class="navbar">
            <img class="logo" src="/static/img/solopick-logo-l.png" @click="handleGoIndex()">
            <div class="handle-pick">
              <div class="top" @click="isShowLanguagePick=!isShowLanguagePick">
                <span>{{languageType=='c'?'简体中文':'English'}}</span>
                <img class="jian-tou" src="/static/img/arrow-down-break.png" alt>
                <language
                  :isShowLanguagePick="isShowLanguagePick"
                  v-on:handleSwichLanguage="handleSwichLanguage"
                ></language>
              </div>
              <div class="bottom">
                <div
                  class="span"
                  v-for="(item,index) in categoryHand"
                  :key="index"
                  @click="handleGoOtherPage(item.id)"
                >
                  <span>{{languageType=='c'?item.name:item.eName}}</span>
                  <p v-show="item.id == categoryActive" class="ren-line"></p>
                </div>
              </div>
            </div>
          </div>

          <!-- 左边的文字 关于我们-->
          <div class="left-text">
            <div class="title-text">
              <span>简</span>介
            </div>
            <div class="discription-text">SOLOPICK 创立的初衷是连接好产品于全球消费者，为中国创新品牌开拓更广阔的市场空间。</div>
          </div>
        </div>

        <!-- 名称的由来 -->
        <div class="name-from">
          <div class="let">
            <p class="one-line">什么是SOLOPICK</p>
            <p class="two-line">名称的由来</p>
            <p
              class="three-line"
            >SOLOPICK具有「搜罗精选」和「个人品味」的双重含义。不绝对追求性价比和标签化，回归本真的选品态度是品牌倡导的深层含义。对每一件选品选物认真审视，追求舒适便利与有温度、有情感的生活态度。</p>
          </div>
          <img class="right-photo" src="static/img/what-means.jpg" alt>
        </div>

        <!-- 选聘理念 -->
        <div class="product-category__box">
          <p class="one-line">关于智美生活</p>
          <p class="two-line">选品理念</p>
          <p class="three-line">SOLOPICK倡导追求品质，同样回归生活，重视科技，更重视人与人之间的连接。</p>
          <div class="product-box">
            <div class="product-box--big" v-for="(item, index) in category" :key="index">
              <div class="product-box__item">
                <img :src="'static/img/' + item.image">
                <p class="one-line__text">{{item.one}}</p>
                <p class="two-line__text">{{item.two}}</p>
              </div>
              <span class="x-mark" v-if="index != 2">x</span>
            </div>
          </div>
        </div>

        <pc-foot-join :languageType="languageType"></pc-foot-join>
      </div>
    </div>

    <!-- 英文 -->
    <div v-else>
      <div
        :class="windowWidth=='bigWindow'?'big-window':windowWidth=='middleWindow'?'middle-window':'small--window'"
      >
        <!-- H5的选择项目 -->
        <h5-tab v-if="windowWidth=='smallWindow'" @h5Language="handleSwichH5Language"></h5-tab>

        <div class="pc-hand__container">
          <!-- 头部导航 -->
          <div class="navbar">
            <img class="logo" src="/static/img/solopick-logo-l.png" @click="handleGoIndex()">
            <div class="handle-pick">
              <div class="top" @click="isShowLanguagePick=!isShowLanguagePick">
                <span>{{languageType=='c'?'简体中文':'English'}}</span>
                <img class="jian-tou" src="/static/img/arrow-down-break.png" alt>
                <language
                  :isShowLanguagePick="isShowLanguagePick"
                  v-on:handleSwichLanguage="handleSwichLanguage"
                ></language>
              </div>
              <div class="bottom">
                <div
                  class="span"
                  v-for="(item,index) in categoryHand"
                  :key="index"
                  @click="handleGoOtherPage(item.id)"
                >
                  <span>{{languageType=='c'?item.name:item.eName}}</span>
                  <p v-show="item.id == categoryActive" class="ren-line"></p>
                </div>
              </div>
            </div>
          </div>

          <!-- 左边的文字 关于我们-->
          <div class="left-text">
            <div class="title-text margin-bottom__01">
              Introduction
            </div>
            <div class="discription-text">SOLOPICK's original intention is to connect good products with global consumers, and open up wider market space for Chinese innovative brands.</div>
          </div>
        </div>

        <!-- 名称的由来 -->
        <div class="name-from">
          <div class="let">
            <p class="one-line">What is SOLOPICK</p>
            <p class="two-line middle-text height-auto">The Origin of SOLOPICK</p>
            <p
              class="three-line middle-text"
            >SOLOPICK has the double meanings of "selecting" and "personal taste". The deep meaning advocated by the brand is not blindly pursuing cost performance and labeling, but returning to the true attitude of choosing good products. SOLOPICK will carefully examine every product and pursue a comfortable and convenient life attitude with warmth and emotion.</p>
          </div>
          <img class="right-photo" src="static/img/what-means.jpg" alt>
        </div>

        <!-- 选聘理念 -->
        <div class="product-category__box">
          <p class="one-line">About the Intelligence and Aesthetic Life</p>
          <p class="two-line height-auto">The Concept of Selecting Products</p>
          <p class="three-line">SOLOPICK advocates pursuing high-quality, returning to life, attaching importance to science and technology, and attaching more importance to the connection between people.</p>
          <div class="product-box">
            <div class="product-box--big" v-for="(item, index) in category" :key="index">
              <div class="product-box__item">
                <img :src="'static/img/' + item.image">
                <p class="one-line__text">{{item.eone}}</p>
                <p class="two-line__text">{{item.etwo}}</p>
              </div>
              <span class="x-mark" v-if="index != 2">x</span>
            </div>
          </div>
        </div>

        <pc-foot-join :languageType="languageType"></pc-foot-join>
      </div>
    </div>
  </div>
</template>

<script>
import * as global from '@/global/index'
import * as types from '../vuex/types.js'
export default {
  name: 'About',
  data () {
    return {
      languageType: 'c', // 语言类型
      isShowLanguagePick: false, // 是否显示语言选择框

      categoryActive: 'index',
      categoryHand: [
        {
          id: 'about',
          name: '关于我们',
          eName: 'ABOUT US'
        },
        {
          id: 'store',
          name: '店铺',
          eName: 'STORE'
        },
        {
          id: 'brand',
          name: '品牌合作',
          eName: 'BRAND'
        },
        {
          id: 'call_me',
          name: '联系',
          eName: 'CONTACT'
        }
      ],

      windowWidth: '', // 屏幕尺寸
      category: [
        {
          image: 'product-selection-1.png',
          one: '品质',
          eone: 'QUALITY',
          two: '精良 · 独特 · 平价',
          etwo: 'Excellent · Unique · Affordable'
        },
        {
          image: 'product-selection-2.png',
          one: '科技',
          eone: 'TECHNOLOGY',
          two: '便捷 · 连接 · 智造',
          etwo: 'Convenient · Connected · Smart'
        },
        {
          image: 'product-selection-3.png',
          one: '美学',
          eone: 'AESTHETICS',
          two: '简约 · 温度 · 情感',
          etwo: 'Simplicity · Design · Warmth'
        }
      ]
    }
  },
  created () {

  },
  mounted () {
    // 计算样式
    this.windowWidth = global.windowWidth()

    let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
    window.addEventListener(resizeEvt, ()=>{
      this.windowWidth = global.windowWidth()
    }, false)
  },
  methods: {
    // h5语言切换
    handleSwichH5Language (e) {
      this.languageType = e
    },
    // 跳转首页
    handleGoIndex () {
      this.$router.push({path:'Index'})
    },
    // 跳转网页
    handleGoOtherPage (e) {
      this.categoryActive = e
      this.$router.push({path: e})
    },
    // 语言切换
    handleSwichLanguage (e) {
      this.languageType = e
    }
  },
  activated () {
    console.log(this.$store.state.languageType)
    this.languageType = this.$store.state.languageType
    this.categoryActive = window.location.hash.split('/')[1]
  }
}
</script>

<style lang="scss" scoped>
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
        cursor: pointer;
      }
      .handle-pick {
        position: relative;
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
          position: relative;
          height: 0.2rem;
          border-bottom: 0.01rem solid white;
          cursor: pointer;
          span {
            position: relative;
          }
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
  .name-from {
    padding: 0 4rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 0.97rem;
    .let {
      .one-line {
        font-size: 0.14rem;
        color: rgba(126, 128, 133, 1);
        line-height: 0.2rem;
        margin-bottom: 0.1rem;
      }
      .two-line {
        font-size: 0.34rem;
        color: rgba(44, 46, 48, 1);
        line-height: 0.46rem;
        margin-bottom: 0.1rem;
      }
      .three-line {
        width: 4.86rem;
        height: 1.1rem;
        font-size: 0.16rem;
        color: rgba(126, 128, 133, 1);
        line-height: 0.28rem;
      }
    }
    .right-photo {
      width: 5.63rem;
      height: 3.49rem;
    }
  }
  .product-category__box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 4rem;
    .one-line {
      font-size: 0.14rem;
      color: rgba(126, 128, 133, 1);
      line-height: 0.2rem;
    }
    .two-line {
      font-size: 0.34rem;
      color: rgba(44, 46, 48, 1);
      line-height: 0.46rem;
      margin: 0.1rem 0 0.2rem;
    }
    .three-line {
      height: 0.86rem;
      font-size: 0.16rem;
      color: rgba(126, 128, 133, 1);
      line-height: 0.28rem;
      margin-bottom: 0.2rem;
    }
    .product-box {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .product-box--big {
        display: flex;
        flex-direction: row;
        .x-mark {
          transform: translate(1rem, 1rem);
          color: rgba(126, 128, 133, 1);
          font-size: 0.24rem;
          font-weight: 300;
        }
      }
      .product-box__item {
        text-align: center;
        img {
          width: 2.19rem;
          height: 2.1rem;
          border-radius: 50%;
          border: 1px solid rgba(232, 236, 237, 1);
        }
        .one-line__text {
          font-size: 0.24rem;
          color: rgba(44, 46, 48, 1);
          line-height: 0.33rem;
          margin: 0.32rem 0 0.12rem;
        }
        .two-line__text {
          font-size: 0.16rem;
          color: rgba(126, 128, 133, 1);
          line-height: 0.28rem;
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
    background: url("/static/img/4-header-bg-imgs.jpg") no-repeat;
    background-size: auto 100%;
    .navbar {
      display: flex;
      flex-direction: row;
      .logo {
        height: 0.3rem;
        width: 0.6rem;
        margin-left: 0.5rem;
        cursor: pointer;
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
          position: relative;
          height: 0.2rem;
          border-bottom: 0.01rem solid white;
          cursor: pointer;
          span {
            position: relative;
          }
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
  .name-from {
    padding: 0 0.47rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 0.97rem;
    margin-top: 1.22rem;
    .let {
      .one-line {
        margin-bottom: 0.1rem;
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
        margin-bottom: 0.1rem;
      }
      .three-line {
        width: 3.03rem;
        height: 1.63rem;
        font-size: 0.16rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(126, 128, 133, 1);
        line-height: 0.28rem;
      }
      .middle-text.two-line,.three-line.middle-text{
        height: auto;
      }
    }
    .right-photo {
      width: 3.36rem;
      height: 2.08rem;
    }
  }
  .product-category__box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .one-line {
      height: 0.2rem;
      font-size: 0.14rem;
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
      margin: 0.1rem 0 0.2rem;
    }
    .three-line {
      height: 0.86rem;
      font-size: 0.16rem;
      color: rgba(126, 128, 133, 1);
      line-height: 0.28rem;
      margin-bottom: 0.2rem;
    }
    .product-box {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      .product-box--big {
        display: flex;
        flex-direction: column;
        margin-bottom: 0.5rem;
        .x-mark {
          text-align: center;
          margin-top: 0.37rem;
          color: rgba(126, 128, 133, 1);
          font-size: 0.24rem;
          font-weight: 300;
        }
      }
      .product-box__item {
        display: flex;
        flex-direction: column;
        text-align: center;
        img {
          width: 2.19rem;
          height: 2.1rem;
          border-radius: 50%;
          border: 1px solid rgba(232, 236, 237, 1);
        }
        .one-line__text {
          height: 0.33rem;
          font-size: 0.24rem;
          color: rgba(44, 46, 48, 1);
          line-height: 0.33rem;
          margin: 0.32rem 0 0.12rem;
        }
        .two-line__text {
          height: 0.28rem;
          font-size: 0.16rem;
          color: rgba(126, 128, 133, 1);
          line-height: 0.28rem;
        }
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
    height: 2.76rem;
    padding-top: 0.16rem;
    background: url("/static/img/4-header-bg-imgs.jpg") no-repeat;
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
        position: relative;
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
          position: relative;
          height: 0.2rem;
          border-bottom: 0.01rem solid white;
          cursor: pointer;
          span {
            position: relative;
          }
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
      .margin-bottom__01.title-text{
        margin-bottom: 0.1rem;
      }
      .title-text {
        // height:0.89rem;
        font-size: 0.26rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 0.37rem;
        display: flex;
        flex-direction: row;
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
        font-family: PingFangSC-Regular;
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
  .name-from {
    padding: 0 0.24rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 0.4rem;
    margin-top: 0.57rem;
    .let {
      .one-line {
        margin-bottom: 0.1rem;
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
        margin-bottom: 0.1rem;
      }
      .height-auto.two-line{
        height: auto;
      }
      .three-line {
        width: 2.71rem;
        height: 1.63rem;
        font-size: 0.14rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(126, 128, 133, 1);
        line-height: 0.28rem;
        // color: red;
      }
    }
    .right-photo {
      width: 2.71rem;
      height: 1.68rem;
    }
  }
  .product-category__box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .one-line {
      height: 0.2rem;
      font-size: 0.12rem;
      color: rgba(126, 128, 133, 1);
      line-height: 0.2rem;
    }
    .two-line {
      height: 0.46rem;
      font-size: 0.24rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(44, 46, 48, 1);
      line-height: 0.46rem;
      margin: 0.1rem 0 0.2rem;
    }
    .height-auto{
      height: auto;
      padding: 0 0.24rem;
    }
    .three-line {
      height: 0.64rem;
      font-size: 0.14rem;
      color: rgba(126, 128, 133, 1);
      line-height: 0.28rem;
      margin-bottom: 0.75rem;
      width: 2.71rem;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      line-height: 0.28rem;
    }
    .product-box {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      .product-box--big {
        display: flex;
        flex-direction: column;
        margin-bottom: 0.5rem;
        .x-mark {
          text-align: center;
          margin-top: 0.37rem;
          color: rgba(126, 128, 133, 1);
          font-size: 0.24rem;
          font-weight: 300;
        }
      }
      .product-box__item {
        display: flex;
        flex-direction: column;
        text-align: center;
        img {
          width: 1.83rem;
          height: 1.75rem;
          border-radius: 50%;
          // border: 1px solid rgba(232, 236, 237, 1);
        }
        .one-line__text {
          height: 0.33rem;
          font-size: 0.24rem;
          color: rgba(44, 46, 48, 1);
          line-height: 0.33rem;
          margin: 0.32rem 0 0.12rem;
        }
        .two-line__text {
          height: 0.28rem;
          font-size: 0.16rem;
          color: rgba(126, 128, 133, 1);
          line-height: 0.28rem;
        }
      }
    }
  }
}
</style>
