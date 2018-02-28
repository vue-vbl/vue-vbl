import Vue from 'vue';
import 'vbl.css';
import vblSelect from '../src';
import vblSelectExample from './vblSelectExample';

Vue.use(vblSelect);

new Vue({
  el: '#app',
  render: h => h(vblSelectExample)
});
