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
import router from './router';
import App from './App.vue';


import { domain, clientId } from '../auth_config.json';
import { Auth0Plugin } from './auth';

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: (appState) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  },
});

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
  router,
  render: (h) => h(App),
}).$mount('#app');
