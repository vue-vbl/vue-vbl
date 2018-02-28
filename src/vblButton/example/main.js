import Vue from 'vue';
import 'vbl.css';
import vblButton from '../src';
import vblButtonExample from './vblButtonExample';
import vblIcon from 'vbl-icon';

Vue.use(vblIcon);
Vue.use(vblButton);

new Vue({
  el: '#app',
  render: h => h(vblButtonExample)
});
