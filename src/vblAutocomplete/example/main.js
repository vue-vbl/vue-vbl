import Vue from 'vue';
import 'vbl.css';
import vblInput from 'vbl-input';
import vblAutocomplete from '../src';
import vblAutocompleteExample from './vblAutocompleteExample';

Vue.use(vblInput);
Vue.use(vblAutocomplete);

new Vue({
  el: '#app',
  render: h => h(vblAutocompleteExample)
});
