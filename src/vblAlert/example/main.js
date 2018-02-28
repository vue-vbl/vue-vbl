import Vue from 'vue';
import 'vbl.css';
import vblAlert from '../src';
import vblAlertExample from './vblAlertExample';

import vblIcon from 'vbl-icon';
import vblButton from 'vbl-button';

Vue.use(vblAlert);
Vue.use(vblIcon);
Vue.use(vblButton);

new Vue({
  el: '#app',
  render: h => h(vblAlertExample)
});
