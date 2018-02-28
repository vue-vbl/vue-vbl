import Vue from 'vue';
import 'vbl.css';
import vblTextarea from '../src';
import vblTextareaExample from './vblTextareaExample';

Vue.use(vblTextarea);

new Vue({
  el: '#app',
  render: h => h(vblTextareaExample)
});
