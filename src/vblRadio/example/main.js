import Vue from 'vue';
import 'vbl.css';
import vblRadio from '../src';
import vblRadioExample from './vblRadioExample';

Vue.use(vblRadio);

new Vue({
  el: '#app',
  render: h => h(vblRadioExample)
});
