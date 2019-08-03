<!-- set-meal -->
<template>
  <div class="setmeal">
    <index-header
        :title='navaInfo.navaTitle'
        :is-have-jump='navaInfo.haveJump'
        :right-link='navaInfo.rightLink'
        :link-text='navaInfo.rightLink'
        ></index-header>
    <ul class="meal-list">
        <li :class="item==activeIndex?'sure':''" v-for="item in 3" :key="item" @click="activeIndex=item">
            <p class='tit'>10G包月套餐</p>
            <div class='btn-group fn-clear'>
                <div class='fl btn-link sum'>
                    <em class='icon icon-ball1'>10G</em>
                </div>
                <div class='fl btn-link main-txt'>
                    <p class='txt'>全国流量（不含港澳台）,仅限个人
                        正常使用，10G以内不限速。空卡
                        订购，当月有效（第一次使用）,重
                        复订购，累计时间。</p>
                </div>
                <div class='fl btn-link money'>
                    <p class='txt'>
                        ￥<i>9.9</i>
                        
                    </p>
                    <p class='del'>
                        <span>￥150</span>
                        &nbsp;
                        <em class="icon icon-icon"></em>
                    </p>
                </div>
            </div>
            <em class='icon icon-right'></em>
        </li>
    </ul>
    <div class="bottom-btn-group">
        <button type="button" class="btn btn-primary" @click="submitForm">订购</button>
        <button type="button" class="btn btn-active" @click="toUserCenter">个人中心</button>
    </div>
    <div id='loader'></div>
    <el-dialog         
        width="70vw"
        :visible.sync="suerVisible">
        <div class="dialog-content">
            <em class="iconfont iconjinggao"></em>
            <p class="tit">请选择套餐</p>
            <p class="smalltxt">选择确认套餐后，才可进行下一步</p>
        </div>
        <div slot="footer" class="dialog-footer">
            <button type="button" class="btn-red" @click="suerVisible=false">确认</button>
        </div>
    </el-dialog>
    <el-dialog         
        width="70vw"
        :visible.sync="selectVisible">
        <div class="main-box fn-clear">
            <div class="fl">
                <em class="icon icon-time"></em>
                <p class="txt">
                请选择生效时间
                </p>
            </div>
            <div class="fl">
                <em class="icon icon-person"></em>
            </div>
        </div>
        <ul class="dialog-btn-group">
            <li :class="timeSuer==0?'btn sure':'btn'" @click="timeSuer=0">立即生效(本月)</li>
            <li :class="timeSuer==1?'btn sure':'btn'" @click="timeSuer=1">次月生效(下月)</li>
        </ul>
        <div slot="footer" class="dialog-footer">
            <button type="button" class="btn btn-blue" @click="confirmMeal">确认</button>
        </div>
    </el-dialog> 
  </div>
</template>

<script>
import IndexHeader from '../components/IndexHeader'
import {mapState,mapActions} from 'vuex'
import { Loading } from 'element-ui';
export default {
  data () {
    return {
        activeIndex: 0,
        suerVisible: false,
        selectVisible: false,
        timeSuer: 0,
    };
  },
  computed: {
    ...mapState('setMealList',[
      'navaInfo'
    ])
  },
  mounted: function(){},
  methods: {
    submitForm: function () {
        if (this.activeIndex == 0) {
            this.suerVisible = true
        }else {
            this.selectVisible = true            
        }
    },
    confirmMeal: function () {
        this.selectVisible=false
        const loading = this.$loading({
            lock: true,
            text: '数据加载中。。。',
            target: '#loader',
            spinner: 'el-icon-loading',
            body: true,
            fullscreen: false,
            customClass: 'setmeal-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
            loading.close();
            this.$router.push('/recharge')
        }, 2000);
    },
    toUserCenter: function () {
        this.$router.push('/')
    }
  },
  components: {
    "index-header": IndexHeader
  }
}

</script>
<style >
    .setmeal-loading {
        border-radius: 2.666667vw;
    }
    .setmeal-loading .el-icon-loading {
        font-size: 8vw;
        color: #fff;
    }
    .setmeal-loading .el-loading-text {
        margin-top: 4vw;
        color: #fff;
        text-align: center;
    }
    .el-dialog {
        width: 70%;
        top: 120px;
        left: 15%;
        position: fixed;
        border-radius: 1.333333vw;
    }
    .el-dialog__header {
        padding: 0;
    }
    .el-dialog__body {
        padding: 0;
    }
    .el-dialog__footer {
        padding: 0;
    }
</style>
<style scoped>
    .setmeal {
        width: 100%;
        background-color: #f5f5f5;
    }
    .meal-list {
        width: 100%;
        padding-top:11.733333vw!important;
        padding-bottom: 4vw;
        background-color: transparent;
    }
    .meal-list li {
        margin: 4vw 4vw 0;
        padding: 1.333333vw 4vw;
        border: 1px solid #4379ec;
        position: relative;
        background-color: white;
        border-radius: 1.333333vw;
        box-shadow: 0.959px 10.958px 38px 0px rgba(67, 121, 236, 0.13)
    }
    .tit {
        font-size: 3.333333vw;
        line-height: 8vw;
        color: #333;
        border-bottom: 1px solid #f4f4f4;
    }
    .btn-group  {
        padding: 2.666667vw 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: stretch;
    }
    .sum {
        width: 30%;
        flex: 3;
        border-right: 1px solid #f4f4f4;
    }
    .sum em {
        width: 14.8vw;
        height: 15.066667vw;
        margin: 2.666667vw 0;        
        display: inline-block;
        border-radius: 50%;
        font-size: 6.4vw;
        line-height: 16.266667vw;
        color: #4379ec;
        background-color: transparent;
        text-shadow: 0.279px 3.99px 6px rgba(55, 108, 221, 0.51); 
        background: url('../assets/images/ball1.png');
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .main-txt {
        width: 40%;
        flex: 4;
        border-right: 1px solid #f4f4f4;
    }
    .main-txt .txt {
        font-size: 2vw;
        line-height: 4vw;
        padding: 1.333333vw;
        text-align: left;
        margin-top: 1.333333vw;
    }
    .money {
        width: 30%;
        flex: 3;    
    }
    .money .txt {
        font-size: 2vw;
        color: #4379ec;
        display: block;
    }
    .money .txt i {
        font-size: 8vw;
    }
    .money .del span {
        color: #999;
        font-size: 3.2vw;
        text-align: center;
        text-decoration: line-through;
    }
    .money .del .icon-icon {
        width: 3.333333vw;
        height: 3.466667vw;
        vertical-align: middle;
        display: inline-block;
        background: url('../assets/images/sprite.png') no-repeat -62.8vw -48.8vw;
        background-size: 77.066667vw 72.533333vw;
    }
    .sure .icon-right {
        display: block;
        position: absolute;
        right: 0;
        bottom: 0;
        background: url('../assets/images/sprite.png') no-repeat -34.933333vw -23.733333vw;
        background-size: 77.066667vw 72.533333vw;
        width: 8.133333vw;
        height: 8.933333vw;
    }
    .icon-right {
        display: none;
    }
    .btn {
		padding: 1.6vw 3.2vw;
		font-size: 4vw;
		line-height: 8.8vw;
		border-radius: 5px;
	}
    .bottom-btn-group {
        padding: 0 4vw 4vw;
    }
    .bottom-btn-group .btn {
        display: block;
        margin-bottom: 4vw;
    }
    .bottom-btn-group .btn:last-child {
        margin-bottom: 0;
    }
	.bottom-btn-group .btn-primary {
		width: 100%;
		color: #fff;
		background: -moz-linear-gradient(-10deg, #4379ec 0%, #759df4 100%);
		background: -webkit-linear-gradient(-10deg, #4379ec 0%, #759df4 100%);
		background: -ms-linear-gradient(-10deg, #4379ec 0%, #759df4 100%);
		background: linear-gradient(-10deg, #4379ec 0%, #759df4 100%);
		box-shadow: 0 0.8vw 1.6vw 0 #4379ec;
    }
    .bottom-btn-group .btn-active {
        width: 100%;
		color: #fff;
		background: -moz-linear-gradient(-10deg, #ff9538 0%, #ffbb2c 100%);
		background: -webkit-linear-gradient(-10deg, #ff9538 0%, #ffbb2c 100%);
		background: -ms-linear-gradient(-10deg, #ff9538 0%, #ffbb2c 100%);
		background: linear-gradient(-10deg, #ff9538 0%, #ffbb2c 100%);
		box-shadow: 0 0.8vw 1.6vw 0 #ffbb2c
    }
    #loader {
        width: 40vw;
        height: 40vw;
        position: fixed;
        top: 40%;
        left: 30vw;
        z-index: 1000;
        color: white;
        background-color: transparent;
    }
    .dialog-content {
        margin-top: 4vw;
    }
    .dialog-content .iconfont {
        display: block;
        margin: auto;
        text-align: center;
        font-size: 13.333333vw;
        color: #ff0000;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .dialog-content .tit {
        color: #333;
        line-height: 8vw;
        font-size: 3.2vwz;
        border: none;
    }
    .btn-red {
        width: 26.666667vw;
        display: block;
        margin: 4vw auto;
        background: #e61a1a;
        color: #fff;
        font-size: 3.2vw;
        height: 6.666667vw;
        line-height: 6.666667vw;
    }
    .main-box {
        padding: 8vw 4vw 4vw;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: stretch;
    }
    .fl {
        width: 50%;
        flex: 1;
        display: block;
    }
    .icon-time {
        width: 11.4666667vw;
        height: 11.4666667vw;
        display: block;
        background-size: 77.066667vw 72.533333vw!important;
        background: url('../assets/images/sprite.png') no-repeat -48vw -42vw;
    }
    .main-box .fl .txt {
        color: #333;
        font-size: 4.266667vw;
        line-height: 10.666667vw;
    }
    .fl .icon-person {
        width: 25.6vw;
        height: 21.733333vw;
        display: block;
        background-size: 77.066667vw 72.533333vw!important;
        background: url('../assets/images/sprite.png') no-repeat 0 0;
    }
    .dialog-btn-group {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    .dialog-btn-group li  {
        width: 50%;
        flex: 1;
        margin: 0 4vw;
    }
    .dialog-btn-group .btn {
        flex-grow: 1;
        padding: 0;
        border: 1px solid #ccc;
        border-radius: 1.333333vw;
        margin: 0 2.666667vw;
        line-height: 8vw;
        font-size: 3.2vw;
        color: #ccc;
    }
    .dialog-btn-group .sure {
        border-color: #4379ec;
        color: #4379ec;
    } 
    .btn-blue {
        width: 26.66667vw;
        padding: 0;
        display: inline-block;
        margin: 4vw;
        background: #4379ec;
        border-radius: 1.333333vw;
        color: #fff;
        font-size: 3.2vw;
        height: 6.66666vw;
        line-height: 6.66666vw;
    }
</style>