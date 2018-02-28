import Vue from 'vue';
import VueRouter from 'vue-router';
import 'vbl.css';
import vblNav from '../src';
import vblNavExample from './vblNavExample';

Vue.use(VueRouter);
Vue.use(vblNav);

var router = new VueRouter({
    routes: [
    ]
});

new Vue({
  el: '#app',
  router,
  render: h => h(vblNavExample)
});
