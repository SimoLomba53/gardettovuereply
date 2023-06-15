import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from "./router/index.js";
import "bootstrap/dist/css/bootstrap.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
import "bootstrap/dist/js/bootstrap.js";


import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

new Vue({  router,  store,  render: h => h(App),}).$mount('#app')