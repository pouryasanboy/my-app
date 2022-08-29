import Vue from "vue";
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'swiper/swiper-bundle.css'
Vue.use(VueAxios, axios)


import App from "./App.vue";
import "./assets/tailwind.css"



Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

