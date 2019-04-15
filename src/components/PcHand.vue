<template>
  <div>
    <div :class="windowWidth=='bigWindow'?'pc-hand__container':windowWidth=='middleWindow'?'middle-window':'small--window'">
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
      <div class="left-text" v-if="categoryActive == 'Index'">
        <div class="title-text">
          <span>新</span>国货出海第一渠道
        </div>
        <div
          class="discription-text"
        >我们输送中国制造业优质品牌到海外市场，致力于输送中国制造业优质品牌到海外市场，真正让“中国制造”落于实地。</div>
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
  </div>
</template>

<script>
import * as global from '@/global/index'
export default {
  name: 'PcHand',
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
      ]
    }
  },
  mounted () {
    this.handleSwichCategory()
    // 计算样式
    this.windowWidth = global.windowWidth()
    console.log(this.windowWidth, '头部的尺寸')
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
    },

    // 获取hash改变目前选项
    handleSwichCategory () {
      this.categoryActive = window.location.hash.split('/')[1]
    }
  }
}
</script>

<style lang="scss" scoped>
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
          // padding-left: 0.04rem;
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

.pc-hand__container{
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
      margin-left: 0.50rem;
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

</style>
