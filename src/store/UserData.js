
import images from '../static/image-path'
export default {
    namespaced: true,
    state: {
      bgTop: images.userBgTop,
      avatar: images.avatar,
      icons: images.icons,
      menuList: [{
        id: 1,
        text: '我的钱包',
        path:'/wallet'
      },{
        id: 2,
        text: '余额充值',
        path:'/recharge'
      },{
        id: 3,
        text: '套餐订购',
        path: '/set-meals'
      },{
        id: 4,
        text: '流量查询'
      },{
        id: 5,
        text: '消费记录'
      },{
        id: 6,
        text: '实名认证',
        path:'/home'        
      },{
        id: 7,
        text: '智能诊断'
      },{
        id: 8,
        text: '恢复上网'
      }]
    },
    mutations: {
      CREAT_NAVA_INFO (state, data) {
          state.navaInfo = data
      },
    },
    actions: {
      updateNavaInfoBy({ commit, state },infoData){
          commit('CREAT_NAVA_INFO',infoData)
      }
    }
  }