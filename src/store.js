import Vue from 'vue'
import Vuex from 'vuex'
import HomeData from './store/HomeData'
import UserData from './store/UserData'
import WalletData from './store/WalletData'
import RechargeData from './store/RechargeData'
import SetMealList from './store/SetMealList'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     
  },
  mutations: {
    
  },
  actions: {
   
  },
  modules:{
    homeData:HomeData,
    userData:UserData,
    walletData:WalletData,
    rechargeData:RechargeData,
    setMealList:SetMealList,
  }
})
