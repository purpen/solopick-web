<template>
  <div
    :class="windowWidth=='bigWindow'?'big-window':windowWidth=='middleWindow'?'middle-window':'small--window'"
  >
    <div class="pc-foot">
      <div class="left">
        <div class="top">
          首页
          <span>|</span>关于我们
          <span>|</span> 店铺
          <span>|</span> 品牌合作
          <span>|</span> 联系
        </div>
        <div class="bottom">COPYRIGHT 2019 SOLOPICK 广州米选科技所有 粤ICP备18068342号-1</div>
      </div>

      <!-- 右面 -->
      <div class="right">
        <div>
          <img src="/static/img/icon-fb.png" alt>
          <img src="/static/img/icon-ins.png" alt>
        </div>
        <div>{{languageType=='c'?'简体中文':'English'}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import * as global from '@/global/index'
export default {
  name: 'PcHand',
  data () {
    return {
      windowWidth: '',
      languageType: 'c'
    }
  },
  created () {
    this.$bus.on('pc-foot', (val) => {
      this.languageType = val
    })
  },
  mounted () {
    // 计算样式
    this.windowWidth = global.windowWidth()
    console.log(this.windowWidth)
    let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
    window.addEventListener(resizeEvt, ()=>{
      this.windowWidth = global.windowWidth()
    }, false)
  }
}
</script>

<style lang="scss" scoped>
.big-window {
  .pc-foot {
    height: 2rem;
    background: rgba(246, 248, 249, 1);
    padding: 0 4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .left {
      font-size: 0.16rem;
      color: rgba(181, 188, 199, 1);
      line-height: 0.22rem;
      .top {
        margin-bottom: 0.2rem;
      }
    }
    .right {
      text-align: right;
      img {
        width: 0.24rem;
        height: 0.24rem;
        margin-left: 0.08rem;
        margin-bottom: 0.2rem;
      }
      color: rgba(181, 188, 199, 1);
      line-height: 0.2rem;
    }
  }
}

.middle-window {
  .pc-foot {
    position: relative;
    height: 2.77rem;
    width: 7.68rem;
    background: rgba(246, 248, 249, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .left {
      font-size: 0.16rem;
      color: rgba(181, 188, 199, 1);
      line-height: 0.22rem;
      .top {
        position: absolute;
        top: 0.47rem;
        left: 50%;
        transform: translateX(-50%);
      }
      .bottom{
        width: 5.20rem;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 2rem;
        text-align: center;
      }
    }
    .right {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 1.05rem;
      text-align: center;
      img {
        width: 0.24rem;
        height: 0.24rem;
        margin-bottom: 0.15rem;
      }
      color: rgba(181, 188, 199, 1);
      line-height: 0.2rem;
    }
  }
}

.small--window{
  .pc-foot {
    position: relative;
    height: 2.69rem;
    width: 3.20rem;
    background: rgba(246, 248, 249, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .left {
      font-size: 0.14rem;
      color: rgba(181, 188, 199, 1);
      line-height: 0.22rem;
      .top {
        position: absolute;
        top: 0.47rem;
        left: 50%;
        transform: translateX(-50%);
        height:0.20rem;
        width:2.69rem;
        font-size:0.14rem;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(181,188,199,1);
        line-height:0.20rem;
      }
      .bottom{
        width:2.69rem;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 2rem;
        text-align: center;
      }
    }
    .right {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 1.05rem;
      text-align: center;
      img {
        width: 0.24rem;
        height: 0.24rem;
        margin-bottom: 0.15rem;
      }
      color: rgba(181, 188, 199, 1);
      line-height: 0.2rem;
    }
  }

}
</style>
