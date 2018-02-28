import Vue from 'vue';
import 'vbl.css';
import vblLoading from '../src';
import vblLoadingExample from './vblLoadingExample';

Vue.use(vblLoading);

new Vue({
  el: '#app',
  render: h => h(vblLoadingExample)
});
