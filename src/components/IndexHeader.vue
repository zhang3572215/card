<template>
  <div id="header" class='bjheader' :style="{backgroundImage: 'url('+indexTopBg+')'}">
        <div class="header-left" @click='$router.back(-1)'>
          <i class="iconfont iconxiangzuo header-back"></i>
        </div>
        <h1 class="header-tit" style="margin: 0">{{title}}</h1>
        <div class="header-right" @click="toJump">
           {{isHaveJump?linkText:''}}
        </div>
  </div>
</template>

<script>
export default {
  name: 'common-header',
  data () {
    return {
      indexTopBg: this.imgs.indexTopBg,
    }
  },
  props: {
    title: {
      type:String,
      default: '申请实名认证'
    },
    isHaveJump: {
      type:Boolean,
      default: false
    },
    rightLink: {
      type:String,
      default: ''
    },
    linkText:{
      type: String,
      default:'跳过'
    }
  },
  methods:{
    toJump: function(){
      this.$router.push(this.rightLink)
    }
  }
}
</script>


<style scoped>
/*页面开头*/
.bjheader {
  height: 11.733333vw;
  padding: 3.2vw;
  z-index: 10;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
}
.header-left {
  height: auto;
  flex: 0 0 9.6vw;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.header-left i {
  color: white;
}
.header-tit {
  flex: auto;
  font-size: 4.8vw;
  color: white;
  line-height: 4.8vw;
}
.header-right {
  flex: 0 0 9.6vw;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}
</style>
