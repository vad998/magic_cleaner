import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import localizeFilter from './filters/localize.filter'

Vue.config.productionTip = false

Vue.filter('localize', localizeFilter)

new Vue({
  render: h => h(App),
}).$mount('#app')
