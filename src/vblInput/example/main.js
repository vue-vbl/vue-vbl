import Vue from 'vue';
import 'vbl.css';
import vblInput from '../src';
import vblInputExample from './vblInputExample';

Vue.use(vblInput);

new Vue({
  el: '#app',
  render: h => h(vblInputExample)
});
