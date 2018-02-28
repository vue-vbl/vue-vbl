import Vue from 'vue';
import 'vbl.css';
import vblCheckbox from '../src';
import vblCheckboxExample from './vblCheckboxExample';

Vue.use(vblCheckbox);

new Vue({
  el: '#app',
  render: h => h(vblCheckboxExample)
});
