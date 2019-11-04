import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// Require Styles
require('./styles/fonts.css');
require('./styles/main.scss');

// Global Components
import Header from '@/components/navigation/Header'
import Footer from '@/components/navigation/Footer'
import Subscribe from '@/components/card/Subscribe'
import Loading from '@/components/snippet/Loading'
import Newsletters from '@/components/snippet/Newsletters'
// Placeholder
import AlaunePlaceholder from "@/components/placeholder/Alaune";
import CategoriesPlaceholder from "@/components/placeholder/Categories";
import ResultPlaceholder from "@/components/placeholder/Result";
import ArticlePlaceholder from "@/components/placeholder/Article";

// Filters
import DateFilter from '@/filters/date-filter.js'

// 
Vue.component('Header', Header)
Vue.component('Footer', Footer)
Vue.component('Subscribe', Subscribe)
Vue.component('Loading', Loading)
Vue.component("AlaunePlaceholder", AlaunePlaceholder);
Vue.component("CategoriesPlaceholder", CategoriesPlaceholder);
Vue.component("ResultPlaceholder", ResultPlaceholder);
Vue.component("ArticlePlaceholder", ArticlePlaceholder);
Vue.component("Newsletters", Newsletters);

// 
Vue.filter('date', DateFilter)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
