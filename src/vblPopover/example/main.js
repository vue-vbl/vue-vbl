import Vue from 'vue';
import 'vbl.css';
import vblPopover from '../src';
import vblPopoverExample from './vblPopoverExample';

Vue.use(vblPopover);

new Vue({
  el: '#app',
  render: h => h(vblPopoverExample)
});
