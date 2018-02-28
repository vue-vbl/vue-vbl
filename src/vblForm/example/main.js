import Vue from 'vue';
import 'vbl.css';
import vblForm from '../src';
import vblFormExample from './vblFormExample';

import vblInput from 'vbl-input';
import vblSelect from 'vbl-select';
import vblButton from 'vbl-button';
import vblCheckbox from 'vbl-checkbox';
import vblIcon from 'vbl-icon';
import vblTextarea from 'vbl-textarea';

Vue.use(vblForm, {
    isMail: {
        getMessage: field => '邮件格式不正确',
        validate: value => value.indexOf('@') > 0
    }
});
Vue.use(vblInput);
Vue.use(vblSelect);
Vue.use(vblCheckbox);
Vue.use(vblButton);
Vue.use(vblIcon);
Vue.use(vblTextarea);

new Vue({
  el: '#app',
  render: h => h(vblFormExample)
});
