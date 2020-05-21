import Vue from 'vue';
import {
  MdButton,
  MdCard,
  MdField,
  MdLayout,
  MdList,
  MdMenu,
  MdProgress,
  MdSnackbar,
} from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import './assets/css/materialize-theme.scss';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(MdButton);
Vue.use(MdCard);
Vue.use(MdField);
Vue.use(MdLayout);
Vue.use(MdList);
Vue.use(MdMenu);
Vue.use(MdProgress);
Vue.use(MdSnackbar);

new Vue({
  render: (h) => h(App),
  // components: {
  //   MdButton,
  //   MdCard,
  //   MdField,
  //   MdLayout,
  //   MdSnackbar
  // }
}).$mount('#app');
