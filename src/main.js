import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import * as VueGoogleMaps from "vue2-google-maps";
import VueGoogleCharts from 'vue-google-charts'

Vue.config.productionTip = false

Vue.use(VueGoogleCharts)

import Trend from 'vuetrend';

Vue.use(Trend);
import axios from 'axios'
import VueApexCharts from 'vue-apexcharts'

Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyB-0SUyRksj2aPf0oK5yG59Uw2-q4aHDRU",
    libraries: "places" // necessary for places input
  }
});


Vue.prototype.$http = axios
Vue.prototype.$axios = axios


new Vue({
  router,
  store,vuetify,
  render: h => h(App)
}).$mount('#app')


Vue.prototype.$apiURL = process.env.API_URL