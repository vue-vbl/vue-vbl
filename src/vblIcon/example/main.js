import Vue from 'vue';
import 'vbl.css';
import vblIcon from '../src';
import vblIconExample from './vblIconExample';

Vue.use(vblIcon);

new Vue({
  el: '#app',
  render: h => h(vblIconExample)
});
