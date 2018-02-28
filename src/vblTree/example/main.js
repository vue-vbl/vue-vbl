import Vue from 'vue';
import 'vbl.css';
import vblTree from '../src';
import vblTreeExample from './vblTreeExample';

Vue.use(vblTree);

new Vue({
  el: '#app',
  render: h => h(vblTreeExample)
});
