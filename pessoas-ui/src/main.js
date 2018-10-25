import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import './assets/scss/app.scss'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuetify, VueAxios, axios)

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
