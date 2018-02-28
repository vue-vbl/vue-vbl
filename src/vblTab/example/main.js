import Vue from 'vue';
import 'vbl.css';
import vblTab from '../src';
import vblTabExample from './vblTabExample';

Vue.use(vblTab);

new Vue({
  el: '#app',
  render: h => h(vblTabExample)
});
