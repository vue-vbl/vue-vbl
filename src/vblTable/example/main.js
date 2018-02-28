import Vue from 'vue';
import 'vbl.css';
import vblTable from '../src';
import vblTableExample from './vblTableExample';

Vue.use(vblTable);

new Vue({
  el: '#app',
  render: h => h(vblTableExample)
});
