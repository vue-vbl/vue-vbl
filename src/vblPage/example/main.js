import Vue from 'vue';
import 'vbl.css';
import vblPage from '../src';
import vblPageExample from './vblPageExample';

Vue.use(vblPage);

new Vue({
  el: '#app',
  render: h => h(vblPageExample)
});
