<template>
  <div
    :class="windowWidth=='bigWindow'?'big-window':windowWidth=='middleWindow'?'middle-window':'small--window'">
    <div class="join-hand">
      <img class="xia-jian__tou" src="/static/img/arrow-down-break.png" alt>
      <div class="top">联系我们</div>
      <div class="bottom">诚邀全球范围合作</div>
    </div>

    <div class="bottom-brand__join">
      <div class="public-join__box--item margin-bottom__40">
        <img class="icon" src="/static/img/icon-coop-brand.png" alt>
        <div class="title">品牌入驻</div>
        <div class="discription">我们期盼将高品质、高颜值的产品推出海外市场，为您的品牌抢占新兴市场的下一个拐点。</div>
        <div class="call-me">联系我们</div>
      </div>

      <div class="public-join__box--item margin-left--30px">
        <img class="icon" src="/static/img/icon-coop-store.png" alt>
        <div class="title">店铺加盟</div>
        <div class="discription">商场、SHOPPING MALL、商业街等人流量相对集中的地段。</div>
        <div class="call-me">联系我们</div>
      </div>
    </div>
  </div>
</template>

<script>
import * as global from '@/global/index'
export default {
  name: 'PcFootJoin',
  data () {
    return {
      windowWidth: '' // 屏幕尺寸
    }
  },
  mounted () {
    this.windowWidth = global.windowWidth()
    console.log(this.windowWidth)
    window.onresize = e => {
      this.windowWidth = global.windowWidth()
      console.log(this.windowWidth)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/public.scss";
.big-window {
  .join-hand {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.6rem 0;
    .xia-jian__tou {
      width: 0.92rem;
      height: 0.3rem;
      margin-bottom: 0.6rem;
    }
    .top {
      font-size: 0.16rem;
      font-weight: 400;
      color: rgba(126, 128, 133, 1);
      line-height: 0.22rem;
      margin-bottom: 0.06rem;
    }
    .bottom {
      font-size: 0.34rem;
      font-weight: 400;
      color: rgba(44, 46, 48, 1);
      line-height: 0.46rem;
    }
  }
  .bottom-brand__join {
    width: 19.2rem;
    height: 7.18rem;
    background: rgba(16, 54, 92, 1);
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .margin-left--30px {
      margin-left: 0.3rem;
    }
  }
}

.middle-window{
  .join-hand {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.6rem 0;
    .xia-jian__tou {
      width: 0.92rem;
      height: 0.3rem;
      margin-bottom: 0.6rem;
    }
    .top {
      font-size: 0.16rem;
      font-weight: 400;
      color: rgba(126, 128, 133, 1);
      line-height: 0.22rem;
      margin-bottom: 0.06rem;
    }
    .bottom {
      font-size: 0.34rem;
      font-weight: 400;
      color: rgba(44, 46, 48, 1);
      line-height: 0.46rem;
    }
  }
  .bottom-brand__join {
    width: 7.68rem;
    height: 11.02rem;
    background: rgba(16, 54, 92, 1);
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .public-join__box--item{
    }
  }
  .margin-left--30px{
    margin-top: 0.4rem;
  }
}

.small--window{
  .join-hand {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.52rem 0 0.4rem;
    .xia-jian__tou {
      width: 0.92rem;
      height: 0.3rem;
      margin-bottom: 0.6rem;
    }
    .top {
      font-size: 0.16rem;
      font-weight: 400;
      color: rgba(126, 128, 133, 1);
      line-height: 0.22rem;
      margin-bottom: 0.06rem;
    }
    .bottom {
      font-size: 0.34rem;
      font-weight: 400;
      color: rgba(44, 46, 48, 1);
      line-height: 0.46rem;
    }
  }
  .bottom-brand__join {
    height: 10.92rem;
    background: rgba(16, 54, 92, 1);
    padding-top: 0.36rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .public-join__box--item{
      margin-top: 0rem;
      width:3.20rem;
      height:5.04rem;
      background:rgba(255,255,255,1);
      box-shadow:0px 2px 9px 0px rgba(0,0,0,0.14);
      border-radius:5px;
      .discription{
        width:2.70rem;
        font-size:0.16rem;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(84,86,90,1);
        line-height:0.28rem;
      }
    }
    .margin-bottom__40{
      margin-bottom: 0.4rem;
    }
  }
  .margin-left--30px{
    margin-top: 0.4rem;
  }
}
</style>
