import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import images from './static/image-path'


Vue.config.productionTip = false

Vue.prototype.imgs = images  

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
