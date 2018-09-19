import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'quill/dist/quill.snow.css';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
