import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局引入el2
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

Vue.config.productionTip = false







new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
