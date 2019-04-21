<template>
  <div>
    <img class="tab-btn" src="/static/img/icon-coop-store.png" @click="handleIsShowPick()">
    <div class="pick" :class="isShow?'show-box':'hid-box'" @click="handleIsShowPick()">
      <div class="hand-top">
        <img src="/static/img/solopick-logo-m.png" alt="">
        <span class="off-icon">x</span>
      </div>
      <div class="pick-box">
        <div class="pick-box__item" v-for="(item,index) in category" :key="index" @click="handleGoOtherPage(item.id)">
          <p class="red-round" :class="item.id == categoryActive?'red-show':''"></p>
          <span>{{item.name}}</span>
        </div>
        
        <div class="pick-box__item" v-for="item in languageList" :key="item.id" @click="handleSwichLanguage(item.id)">
          <p class="red-round" :class="item.id == languageActive?'red-show':''"></p>
          <span>{{item.name}}</span>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PcHand',
  data () {
    return {
      isShow: false,
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

      languageActive: 'c',
      languageList:[
        {
          id: 'c',
          name: '简体中文'
        },
        {
          id: 'e',
          name: 'English'
        }
      ]
    }
  },
  methods: {
    // 切换语言
    handleSwichLanguage (e) {
      this.languageActive = e
      this.$emit('h5Language', e)
    },
    handleIsShowPick () {
      this.isShow = !this.isShow
    },
    // 跳转网页
    handleGoOtherPage (e) {
      this.categoryActive = e
      this.$router.push({path: e})
      console.log(this.categoryActive)
    }
  },
  activated () {
    this.categoryActive = window.location.hash.split('/')[1]
  }
}
</script>
<style lang="scss" scoped>
.tab-btn{
  position: absolute;
  top: 0.17rem;
  right: 0.17rem;
  width:0.24rem;
  height:0.24rem;
  z-index: 6;
}
.pick{
  position: fixed;
  top: 0;
  right: -3.20rem;
  height: 100%;
  width: 100%;
  z-index: 88;
  background: url('/static/img/1-header-bg-imgs.jpg') no-repeat;
  background-size: auto 100%;
  overflow: scroll;
  .hand-top{
    background-color:rgba(10,35,61,1);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.16rem 0.21rem;
    .off-icon{
      font-size: 0.3rem;
      color: white;
    }
  }
  .pick-box{
    .pick-box__item{
      height: 0.54rem;
      color: white;
      line-height: 0.54rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      background-color:rgba(10,35,61,1);
      .red-round{
        width:0.08rem;
        height:0.04rem;
        border-radius:2px;
        margin-left: 0.24rem;
        margin-right: 0.12rem;
      }
      .red-show{
        background:#FF0000;
      }
      span{
        border-bottom: 1px solid #184878;
        flex: 1;
        font-size: 0.14rem;
      }
    }
  }
}
.show-box{
  animation:mymove 1s 1 forwards;
}

@keyframes mymove {
  0%{
    right: -3.20rem;
  }
  100%{
    right: 0rem;
  }
}
</style>
