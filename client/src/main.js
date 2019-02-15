import Vue from 'vue'
import App from './App.vue'
import router from './router' // To generate a Navigation
import moment from 'moment' // To format Date
import VModal from 'vue-js-modal' // To create PopUps


Vue.use(VModal, { dialog: true })
Vue.prototype.moment = moment
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

