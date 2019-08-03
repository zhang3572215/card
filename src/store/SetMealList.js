export default {
    namespaced: true,
    state: {
      navaInfo:{
        navaTitle: '套餐列表',
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
  }