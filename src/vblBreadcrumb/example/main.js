import Vue from 'vue';
import VueRouter from 'vue-router';
import 'vbl.css';
import vblBreadcrumb from '../src';
import vblBreadcrumbExample from './vblBreadcrumbExample';

Vue.use(VueRouter);
Vue.use(vblBreadcrumb);

var router = new VueRouter({
    routes: [
    ]
});

new Vue({
  el: '#app',
  router,
  render: h => h(vblBreadcrumbExample)
});
