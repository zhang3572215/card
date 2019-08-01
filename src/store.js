import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navaInfo:{
      navaTitle: '申请实名认证',
        haveJump:false,
        rightLink:'',
        linkText:'',
    }
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
})
