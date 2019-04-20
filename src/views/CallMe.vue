<template>
<div>
  <div
    v-if="languageType=='c'"
    class="call-me__page"
    :class="windowWidth=='bigWindow'?'big-window':windowWidth=='middleWindow'?'middle-window':'small--window'"
  >
    <h5-tab v-if="windowWidth=='smallWindow'"></h5-tab>
    <div class="pc-hand__container">
      <!-- 头部导航 -->
      <div class="navbar">
        <img class="logo" src="/static/img/solopick-logo-l.png" @click="handleGoIndex()">
        <div class="handle-pick">
          <div class="top" @click="isShowLanguagePick=!isShowLanguagePick">
            <span>{{languageType=='c'?'简体中文':'English'}}</span>
            <img class="jian-tou" src="/static/img/arrow-down-break.png" alt>
            <language :isShowLanguagePick="isShowLanguagePick" v-on:handleSwichLanguage="handleSwichLanguage"></language>
          </div>
          <div class="bottom">
            <div
              class="span"
              v-for="(item,index) in category"
              :key="index"
              @click="handleGoOtherPage(item.id)"
            >
              <span>{{languageType=='c'?item.name:item.eName}}</span>
              <p v-show="item.id == categoryActive" class="ren-line"></p>
            </div>
          </div>
        </div>
      </div>

      <!-- 左边的文字 首页-->
      <div class="left-text" v-if="categoryActive == 'Index'">
        <div class="title-text">
          <span>新</span>国货出海第一渠道
        </div>
        <div class="discription-text">我们输送中国制造业优质品牌到海外市场，致力于输送中国制造业优质品牌到海外市场，真正让“中国制造”落于实地。</div>
        <div class="call-me__button">
          <span>关于我们</span>
        </div>
      </div>

      <!-- 左边的文字 关于我们-->
      <div class="left-text" v-if="categoryActive == 'about'">
        <div class="title-text">
          <span>简</span>介
        </div>
        <div class="discription-text">SOLOPICK 创立的初衷是连接好产品于全球消费者，为中国创新品牌开拓更广阔的市场空间。</div>
      </div>

      <!-- 左边的文字 店铺-->
      <div class="left-text" v-if="categoryActive == 'store'">
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

      <!-- 左边的文字 品牌合作-->
      <div class="left-text" v-if="categoryActive == 'brand'">
        <div class="title-text">
          <span>新</span>国货出海第一渠道
        </div>
        <div class="discription-text">我们输送中国制造业优质品牌到海外市场，致力于输送中国制造业优质品牌到海外市场，真正让“中国制造”落于实地。</div>
        <div class="call-me__button">
          <span>关于我们</span>
        </div>
      </div>
      <!-- 左边的文字 -->
      <div class="left-text" v-if="categoryActive == 'call_me'"></div>
    </div>

    <div class="call-me__container">
      <div class="public-join__box--item call-me__item margin-right--30">
        <img class="icon" src="/static/img/icon-coop-brand.png" alt>
        <div class="title">品牌入驻</div>
        <div class="discription">我们期盼将高品质、高颜值的产品推出海外市场，为您的品牌抢占新兴市场的下一个拐点。</div>
        <div class="call-me">brand.coop@solopick.com</div>
      </div>
      <div class="public-join__box--item">
        <img class="icon" src="/static/img/icon-coop-store.png" alt>
        <div class="title">店铺加盟</div>
        <div class="discription">商场、SHOPPING MALL、商业街等人流量相对集中的地段。</div>
        <div class="call-me">brand.coop@solopick.com</div>
      </div>
    </div>

    <div class="bottom">
      <img class="jiantou" src="/static/img/arrow-down-break.png" alt>
      <div>
        <!-- <img src="" alt=""> -->
        <span class="location-text">广州市海珠区工业大道北67号凤凰创意园8号楼203室</span>
      </div>
    </div>
  </div>

  <!-- 英文 -->
    <div
    v-else
    class="call-me__page"
    :class="windowWidth=='bigWindow'?'big-window':windowWidth=='middleWindow'?'middle-window':'small--window'"
  >
    <h5-tab v-if="windowWidth=='smallWindow'"></h5-tab>
    <div class="pc-hand__container">
      <!-- 头部导航 -->
      <div class="navbar">
        <img class="logo" src="/static/img/solopick-logo-l.png" @click="handleGoIndex()">
        <div class="handle-pick">
          <div class="top" @click="isShowLanguagePick=!isShowLanguagePick">
            <span>English</span>
            <img class="jian-tou" src="/static/img/arrow-down-break.png" alt>
            <language :isShowLanguagePick="isShowLanguagePick" v-on:handleSwichLanguage="handleSwichLanguage"></language>
          </div>
          <div class="bottom">
            <div
              class="span"
              v-for="(item,index) in category"
              :key="index"
              @click="handleGoOtherPage(item.id)"
            >
              <span>{{languageType=='c'?item.name:item.eName}}</span>
              <p v-show="item.id == categoryActive" class="ren-line"></p>
            </div>
          </div>
        </div>
      </div>

      <!-- 左边的文字 首页-->
      <div class="left-text" v-if="categoryActive == 'Index'">
        <div class="title-text">
          <span>新</span>国货出海第一渠道
        </div>
        <div class="discription-text">我们输送中国制造业优质品牌到海外市场，致力于输送中国制造业优质品牌到海外市场，真正让“中国制造”落于实地。</div>
        <div class="call-me__button">
          <span>关于我们</span>
        </div>
      </div>

      <!-- 左边的文字 关于我们-->
      <div class="left-text" v-if="categoryActive == 'about'">
        <div class="title-text">
          <span>简</span>介
        </div>
        <div class="discription-text">SOLOPICK 创立的初衷是连接好产品于全球消费者，为中国创新品牌开拓更广阔的市场空间。</div>
      </div>

      <!-- 左边的文字 店铺-->
      <div class="left-text" v-if="categoryActive == 'store'">
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

      <!-- 左边的文字 品牌合作-->
      <div class="left-text" v-if="categoryActive == 'brand'">
        <div class="title-text">
          <span>新</span>国货出海第一渠道
        </div>
        <div class="discription-text">我们输送中国制造业优质品牌到海外市场，致力于输送中国制造业优质品牌到海外市场，真正让“中国制造”落于实地。</div>
        <div class="call-me__button">
          <span>关于我们</span>
        </div>
      </div>
      <!-- 左边的文字 -->
      <div class="left-text" v-if="categoryActive == 'call_me'"></div>
    </div>

    <div class="call-me__container">
      <div class="public-join__box--item call-me__item margin-right--30">
        <img class="icon" src="/static/img/icon-coop-brand.png" alt>
        <div class="title">Brand cooperation</div>
        <div class="discription">SOLOPICK looks forward to launching high-quality and high-value products into overseas markets and seizing the next turning point in emerging markets for your brand.</div>
        <div class="call-me">brand.coop@solopick.com</div>
      </div>
      <div class="public-join__box--item">
        <img class="icon" src="/static/img/icon-coop-store.png" alt>
        <div class="title">Joining stores</div>
        <div class="discription">Shopping malls, commercial streets, pedestrian precincts, subway proximity, near schools and other areas where traffic is relatively concentrated.</div>
        <div class="call-me">brand.coop@solopick.com</div>
      </div>
    </div>

    <div class="bottom">
      <img class="jiantou" src="/static/img/arrow-down-break.png" alt>
      <div>
        <!-- <img src="" alt=""> -->
        <span class="location-text">Room 203, Building 8, Phoenix Creative Park, No.67 Gongye North Avenue, Haizhu District, Guangzhou</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import * as global from '@/global/index'
export default {
  name: 'CallMe',
  data () {
    return {
      windowWidth: '', // 屏幕尺寸

      languageType: 'c', // 语言类型
      isShowLanguagePick: false, // 是否显示语言选择框

      categoryActive: 'index',
      category: [
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
    this.categoryActive = window.location.hash.split('/')[1]
    this.languageType = this.$store.state.languageType
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
    background: url("/static/img/5-header-bg-imgs.jpg") no-repeat;
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
        }
        .bottom {
          padding-top: 0.2rem;
          font-size: 0.17rem;
          color: rgba(255, 255, 255, 1);
          line-height: 0.24rem;
          display: flex;
          flex-direction: row;
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
  .call-me__container {
    position: absolute;
    width: 100%;
    top: 2.58rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .margin-right--30 {
      margin-right: 0.3rem;
    }
    .call-me {
      font-size: 0.14rem;
      color: rgba(32, 96, 159, 1);
      line-height: 0.2rem;
    }
  }
  .bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    // margin-top: 1.65rem;
    padding: 1.65rem 0 1.16rem;
    .jiantou {
      width: 0.92rem;
      height: 0.3rem;
      margin-bottom: 0.4rem;
    }
    .location-text {
      font-size: 0.14rem;
      color: rgba(126, 128, 133, 1);
      line-height: 0.2rem;
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
        height: 0.58rem;
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
        }
        .bottom {
          padding-top: 0.2rem;
          font-size: 0.17rem;
          color: rgba(255, 255, 255, 1);
          line-height: 0.24rem;
          display: flex;
          flex-direction: row;
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
  .call-me__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    .call-me {
      font-size: 0.14rem;
      color: rgba(32, 96, 159, 1);
      line-height: 0.2rem;
    }
    .public-join__box--item {
      margin-top: 0;
    }
    .call-me__item {
      margin-top: -3.6rem;
      z-index: 9;
      margin-bottom: 0.65rem;
    }
  }
  .bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    // margin-top: 1.65rem;
    padding: 0.65rem 0 1.46rem;
    .jiantou {
      width: 0.92rem;
      height: 0.3rem;
      margin-bottom: 0.4rem;
    }
    .location-text {
      font-size: 0.14rem;
      color: rgba(126, 128, 133, 1);
      line-height: 0.2rem;
    }
  }
}

.small--window {
  .pc-hand__container {
    margin-bottom: 0.3rem;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 3.2rem;
    height: 2.42rem;
    padding-top: 0.16rem;
    background: url("/static/img/5-header-bg-imgs.jpg") no-repeat;
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
          position: relative;
          height: 0.2rem;
          border-bottom: 0.01rem solid white;
          cursor: pointer;
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
  .call-me__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    .call-me {
      font-size: 0.14rem;
      color: rgba(32, 96, 159, 1);
      line-height: 0.2rem;
    }
    .public-join__box--item {
      margin-top: 0;
      width: 3.2rem;
      .discription {
        width: 2.7rem;
        text-align: center;
      }
    }
    .call-me__item {
      // margin-top: -3.6rem;
      z-index: 9;
      margin-bottom: 0.65rem;
    }
  }
  .bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    // margin-top: 1.65rem;
    padding: 0.65rem 0 1.46rem;
    .jiantou {
      width: 0.92rem;
      height: 0.3rem;
      margin-bottom: 0.4rem;
    }
    .location-text {
      display: inline-block;
      text-align: center;
      width: 2.39rem;
      font-size: 0.14rem;
      color: rgba(126, 128, 133, 1);
      line-height: 0.2rem;
    }
  }
}
</style>
