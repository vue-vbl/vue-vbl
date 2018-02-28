import Vue from 'vue';
import 'vbl.css';
import vblDatetime from '../src';
import vblDatetimeExample from './vblDatetimeExample';
import vblIcon from 'vbl-icon';
import vblInput from 'vbl-input';
import vblButton from 'vbl-button';

Vue.use(vblDatetime);
Vue.use(vblIcon);
Vue.use(vblInput);
Vue.use(vblButton);

new Vue({
  el: '#app',
  render: h => h(vblDatetimeExample)
});
