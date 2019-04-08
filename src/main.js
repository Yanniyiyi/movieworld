import Vue from 'vue'

import axios from '@/utils/axiosIns'
import VueAxios from 'vue-axios'

import App from './App.vue'

import 'vuetify/dist/vuetify.min.css'


import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';


import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

import router from './route'

Vue.use(ElementUI)

Vue.use(VueAxios, axios)

Vue.config.productionTip = false;


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')