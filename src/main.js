import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import images from './static/image-path'
import './static/common.css'
import './font/FontIcon.css'

Vue.config.productionTip = false

Vue.prototype.imgs = images  

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
