import Vue from 'vue';
import { string1, string2 } from '@/modules/strings';
import showMessage from '@/modules/functions';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

showMessage(string1);
showMessage(string2);
