import Vue from 'vue';
import 'vbl.css';
import vblIcon from 'vbl-icon';
import vblButton from 'vbl-button';
import vblModal from '../src';
import vblModalExample from './vblModalExample';

Vue.use(vblIcon);
Vue.use(vblButton);
Vue.use(vblModal);

new Vue({
  el: '#app',
  render: h => h(vblModalExample)
});
