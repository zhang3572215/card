<template>
  <div class="home">
    <index-header
        :title='navaInfo.navaTitle'
        :is-have-jump='navaInfo.haveJump'
        :right-link='navaInfo.rightLink'
        :link-text='navaInfo.rightLink'
        ></index-header>
    <div class="container">
    	<form>
	  		<div class="head-tip">
	  			<em class="iconfont iconjinggao"></em>
	  			尊敬的用户，为了贯彻工信部《电话用户真实身份信息登记规定》请对您购买的流量卡进行实名认证。    
	  		</div>
	  		<div class="base-form">
	  			<div class="form-control">
	  				<label for="cardNumber">卡号</label>
	  				<input type="text" id="cardNumber" placeholder="请输入卡号" v-model="submitData.cardNumber">
	  			</div>
	  			<div class="form-control">
	  				<label for="uname">姓名</label>
	  				<input type="text" id="uname" placeholder="请输入姓名"  v-model="submitData.userName">
	  			</div>
	  			<div class="form-control">
	  				<label for="uphone">手机号</label>
	  				<input type="text" id="uphone" placeholder="请输入手机号"  v-model="submitData.phone">
	  			</div>
	  			<div class="form-control">
	  				<label for="uIdCard">身份证号</label>
	  				<input type="text" id="uIdCard" placeholder="请输入身份证号"  v-model="submitData.userIdCard">
	  			</div>
	  		</div>
	  		<div class="pic-form">
	  			<p class="pic-form-title">上传身份证正反面照</p>
	  			<div class="pic-row">
		            <div class="img_wp">
						<img :src="indexIdCardBgFront"/>
 						<p class="img_intro">身份证正面照</p>
		            </div>

		            <div class="img_wp" onclick="fanmian()">
		                <img :src="indexIdCardBgBack"/>
		                <p class="img_intro">身份证反面照</p>
		            </div>
	  			</div>
	  		</div>
	  	</form>
  	</div>
  </div>  
</template>

<script>
import IndexHeader from '../components/IndexHeader'
import {mapState,mapActions} from 'vuex'
export default {
  name: 'home',
  data (){
  	return {
  	  submitData:{
  	  	cardNumber: '',
		userName: '',
		phone:'',
		userIdCard:'',
		idCardFront:'',
		idCardBack:''
  	  },
  	  indexIdCardBgFront:this.imgs.indexIdCardBgFront,
  	  indexIdCardBgBack:this.imgs.indexIdCardBgBack
  	}
  },
  computed: {
  	...mapState([
		'navaInfo'
  	])
  },
  mounted: function(){
	this.updateNavaInfoBy({
		navaTitle: '申请实名认证',
	    haveJump:false,
	    rightLink:'',
	    linkText:'跳过',
	})
  },
  methods:{
	...mapActions([
		'updateNavaInfoBy'
	])
  },
  components: {
    "index-header": IndexHeader
  }
}
</script>
<style>
	.container {
		width: 100%;
		margin-top: 11.733333vw;
		padding: 4vw 0;
	}
	.head-tip {
		padding: 8vw 8vw 4vw;
		font-size: 3.2vw;
		color:#4379ec;
		line-height: 1em;
	}
	.iconjinggao {
		font-size: 3.2vw!important;
		color:#4379ec;
		line-height: 5.333333vw;
	}
	.base-form {
		margin: 0 8vw 8vw;
		border-radius: 1.333334vw;
		background-color: #f3f3f3;
		border: 1px solid #ccc;
		over-flow: hidden;
	}
	.form-control {
		width: 100%;
		padding: 0 4vw;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: stretch;
		border-bottom: 1px solid #ccc;
	}
	.form-control:last-child {
		border-bottom: none;
	}
	.form-control label {
		flex: 2;
		font-size: 3.2vw;
		line-height: 8vw;
		color: #333;
		text-align: left;
	}
	.form-control input {
		border: none;
		flex: 3;
		font-size: 3.2vw;
		font-weight: normal;
		line-height: 8vw;
		color: #333;
		text-align: right;
	}

	.pic-form-title {
		font-size: 4vw;
		line-height: 8vw;
		color: #4379ec;
		text-align: center;
		border-top: 1px solid #f4f4f4;
	}
	.pic-row {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
</style>