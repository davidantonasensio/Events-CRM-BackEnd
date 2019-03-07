import Vue from 'vue'
import App from './App.vue'
import router from './router' // To generate a Navigation
import moment from 'moment' // To format Date
import VModal from 'vue-js-modal' // To create PopUps
import VeeValidate from 'vee-validate';


Vue.use(VModal, { dialog: true });

Vue.use(VeeValidate,{
  aria: true,
  validity: true,
  classes: true,  
  classNames: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
});

Vue.prototype.moment = moment;
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

