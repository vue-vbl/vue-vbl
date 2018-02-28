import Vue from 'vue';
import 'vbl.css';
import vblLayout from '../src';
import vblLayoutExample from './vblLayoutExample';

Vue.use(vblLayout);

new Vue({
  el: '#app',
  render: h => h(vblLayoutExample)
});
