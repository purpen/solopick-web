<template>
  <div :class="isShowLanguagePick?'contianer':'contianer-hid'">
    <div class="pick-box" @click="handleSwichLanguage('c')">简体中文</div>
    <div class="pick-box" @click="handleSwichLanguage('e')">English</div>
  </div>
</template>

<script>
import * as types from '../vuex/types.js'
export default {
  name: 'Language',
  props: ['isShowLanguagePick'],
  methods: {
    handleSwichLanguage (option) {
      this.$store.commit(types.LANGUAGE, option)
      this.$emit('handleSwichLanguage', option)
      this.$bus.emit('pc-foot', option)
    }
  }
}
</script>

<style lang="scss" scoped>
  .contianer-hid{
    display: none;
  }
  .contianer{
    position: absolute;
    bottom: 0;
    right: 0;
    height: 0.5rem;
    background-color: white;
    animation: lnaguage 0.3s forwards;
    z-index: 10;
    color: black;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .pick-box{
      flex: 1;
      display: flex;
      align-items: center;
      padding: 0.05rem;
      border-bottom: 1px solid #e9e9e9;
      cursor: pointer;
    }
  }

  @keyframes lnaguage {
    0%{
      height: 0rem;
      bottom: 0;
    }
    100%{
      height: 0.5rem;
      bottom: -0.5rem;
    }
  }

</style>
