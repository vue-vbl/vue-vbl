import Vue from 'vue';
import 'vbl.css';
import vblIcon from 'vbl-icon';
import vblButton from 'vbl-button';
import vblModal from 'vbl-modal';
import vblUpload from '../src';
import vblUploadExample from './vblUploadExample';

Vue.use(vblUpload);
Vue.use(vblIcon);
Vue.use(vblButton);
Vue.use(vblModal);

new Vue({
  el: '#app',
  render: h => h(vblUploadExample)
});
