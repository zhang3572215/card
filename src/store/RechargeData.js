import images from '../static/image-path'
export default {
    namespaced: true,
    state: {
      navaInfo:{
        navaTitle: '余额充值',
        haveJump:false,
        rightLink:'',
        linkText:'',
      },
      bgTop: images.rachargeBg
    },
    mutations: {
      CREAT_NAVA_INFO (state, data) {
          Object.assign(state.navaInfo,data) 
      },
    },
    actions: {
      updateNavaInfoBy({ commit, state },infoData){
          commit('CREAT_NAVA_INFO',infoData)
      }
    }
  }