import Vue from 'vue';
import App from '@/App';
import store from '@/store';
import services from '@/services';

Vue.config.productionTip = false

Vue.prototype.$services = services;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
