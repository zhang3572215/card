<template>
	<div class="container" :style="{backgroundImage:'url('+userData.bgTop+')'}">
		<div class="user-header">
			<p>Mine</p>
			<div class="avatar">
				<img :src="userData.avatar" alt="头像文件">
			</div>			
		</div>
		<div class="user-info-group">
			<div class="user-info-title">
				<span class="user-card-id">8986042241818C0090397
					<span class="user-card-chg" @click="$router.push('/change')">切换卡号<i class="iconfont iconqiehuanzhanghao"></i></span>
				</span>
			</div>
			<div class="user-info-body">	
				<div class="user-info-item">
					<p class="user-info-value">5000.00</p>
					<p class="user-info-key">账户余额</p>
				</div>
				<div class="cut-line"></div>
				<div class="user-info-item">
					<p class="user-info-value color-unverify">未认证</p>
					<p class="user-info-key">认证状态</p>
				</div>
			</div>
		</div>
		<ul class="user-menu">
			<li v-for="item in userData.menuList" :key="item.id" @click="$router.push(item.path)">
				<div class="user-menu-icon" :style="{backgroundImage:'url('+userData.icons+')'}">
				</div>
				<p class="user-menu-text">{{item.text}}</p>
			</li>
		</ul>
		<div class="con-list">
			<div class="con-list-item">
				<span class="el-icon-s-comment"></span>使用说明
			</div>
			<div class="con-list-item con-list-color2">
				看看你的疑惑解决了么<span class="el-icon-arrow-right"></span>
			</div>
        </div>
	</div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  name: 'home',
  data (){
  	return {
		
  	}
  },
  computed: {
  	...mapState([
		'userData'
  	])
  },
  mounted: function(){
	
  },
  methods:{
	...mapActions('userData',[
		'updateNavaInfoBy'
	])
  },
  components: {
  }
}
</script>

<style scoped>
	.container {
		width: 100%;
		height: 100%;
		padding: 8vw 4vw;
		background-color: #f4f4f4;
		background-position: top center;
		background-repeat: no-repeat;
		background-size: 100% auto;
		position: absolute;
	}
	.user-header {
		margin-top: 5.333333vw;
		text-align: center
	}
	.user-header p {
		color: #fff;
		font-size: 10.666667vw;
		line-height: 13.333333vw;
	}
	.avatar {
		width: 22.666667vw;
		height: 22.666667vw;
		display: block;
		margin: 0 auto;
		border-radius: 50%;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.avatar img {
		max-width: 100%;
		max-height: 100%;
	}
	.user-info-group {
		border-radius: 1.333333vw;
		padding: 2.666667vw 0 2.666667vw;
		margin: 4vw 4vw 0;
		box-shadow: 6.5px 11.258px 68px 0px rgba(14, 5, 10, 0.09);
		background-color: #fff;
	}
	.user-info-title {
		font-size: 3.2vw;
		line-height: 4vw;
		color: #8d8d8d;
	}
	.user-card-id {
		color: #8d8d8d;
	}
	.user-card-chg {
		font-size: 3.2vw;
		line-height: 4vw;
		color: #4d80ee;
	}
	.user-card-chg i {
		padding-left: 0.8vw;
		font-size: 4vw;
		line-height: 4vw;
		color: #4d80ee;
		vertical-align: middle;
	}
	.user-info-body {
		width:100%;
		padding: 4vw 0 2vw;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: stretch;
	}
	.user-info-item {
		flex: 1 auto;
		width: 50%;
		text-align: center;
	}
	.user-info-value {
		font-size: 4vw;
		color: #2d2d2d;
	}
	.user-info-key {
		font-size: 3.2vw;
		color: #999;
	}
	.color-unverify {
		color: #fc6563;
	}
	.color-verified {
		color: #67c23a;
	}
	.user-menu {
		margin: 4vw 4vw 8vw;
		background-color: #fff;
		border-radius: 1.333333vw;
		padding: 4vw 0 0;
		box-shadow: 6.5px 11.258px 68px 0px rgba(14, 5, 10, 0.09);
		background-color: #fff;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		flex-wrap: wrap;
		align-content: flex-start;
	}
	.user-menu li {
		flex: 0 0 14.266667vw;
		margin: 0 3.2vw 4vw;
	}
	.user-menu-icon {
		width: 14.266667vw;
		height: 14.266667vw;
		border-radius: 50%;
		overflow: hidden;
		background-repeat: no-repeat;
		background-size: 77.066667vw 72.533333vw;
		background-position: -16.2667vw -58.266667vw;
	}
	/* .user-menu li:nth-child(1) .user-menu-icon {
		background-position: -16.2667vw -58.266667vw;
	} */
	.user-menu-text {
		font-size: 3.2vw;
	}
	.con-list {
		margin: 16vw -4vw 0;
		padding: 4vw 2vw;
		background-color: #fff;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: stretch;
	}
	.con-list-item {
		font-size: 4vw;
		line-height: 5.333333vw;
		color: #666;
	}
	.con-list-item span {
		padding: 0 2vw;
		font-size: 5.333333vw;
		line-height: 5.333333vw;
		color: #666;
		vertical-align: middle;
	}
	.con-list-color2 {
		font-size: 3.2vw;
		line-height: 5.333333vw;
		color: #8d8d8d;
	}
</style>