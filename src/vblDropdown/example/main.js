import Vue from 'vue';
import 'vbl.css';
import vblDropdown from '../src';
import vblDropdownExample from './vblDropdownExample';

Vue.use(vblDropdown);

new Vue({
  el: '#app',
  render: h => h(vblDropdownExample)
});
