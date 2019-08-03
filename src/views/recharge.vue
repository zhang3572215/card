<!-- recharge.vue -->
<template>    
  <div class="container" :style="{backgroundImage:'url('+rechargeData.bgTop+')'}">
    <com-header
        :title='rechargeData.navaInfo.navaTitle'
        :is-have-jump='rechargeData.navaInfo.haveJump'
        :right-link='rechargeData.navaInfo.rightLink'
        :link-text='rechargeData.navaInfo.rightLink'
        ></com-header>
    <div class="recharge-container">
        <div class="recharge-title-group">
            <div class="recharge-title-tab">
                <div class="recharge-change-item">
                    <div class="recharge-item-name">选择套餐——移动扬天套餐卡10G流量包</div>
                </div>
                <div class="cut-line"></div>
                <div class="recharge-change-btn">
                    <span>更换<i class="iconfont iconqiehuanzhanghao"></i></span>
                </div>
            </div>
            <div class="recharge-title-content">
                <p class="recharge-content-item">可用余额： 0.00</p>
                <el-switch
                    style="display: block"
                    v-model="isPayByBalance"
                    active-color="#13ce66"
                    inactive-color="#ddd"
                    active-text="余额支付">
                    </el-switch>
                <button type="button" class="">    </button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import {mapState,mapActions} from 'vuex'

export default {
  data () {
    return {
        isPayByBalance: true,
    };
  },
  computed: {
    ...mapState([
		'rechargeData'
  	])
  },
  mounted: function(){
      this.updateNavaInfoBy({
		navaTitle: '余额充值',
	    haveJump:false,
	    rightLink:'',
	    linkText:'跳过',
	})
  },
  methods: {
    ...mapActions('rechargeData',[
		'updateNavaInfoBy'
	]),
  },
  components: {
      'com-header':Header
  }
}

</script>
<style scoped>
.container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #f5f5f5;
    background-position: top center;
    background-size: 100% auto;
    background-repeat: no-repeat;
}
.recharge-container {
    width: 100%;
    padding: 32vw 4vw 0;
}
.recharge-title-group {
    width: 100%;
    overflow: hidden;
    background-color: #ffffff;    
    border-radius: 1.333333vw;
}
.recharge-title-tab {
    padding:2.666667vw; 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;    
    border-bottom: 2px solid #eee;
}
.recharge-item-name {
    font-size: 3.6vw;
    line-height: 8vw;
    color: #333;
}
.recharge-change-btn {
    line-height:8vw;
}
.recharge-change-btn span{
    font-size: 3.6vw;
    line-height: 4.266667vw;
    vertical-align: middle;
    color: #4379ec;
}
.recharge-change-btn span i {
    vertical-align: middle;
}
</style>