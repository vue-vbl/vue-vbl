import vblFormItem from './vblFormItem';
import vblForm from './vblForm';
import VeeValidate from 'vee-validate';

VeeValidate.Validator.updateDictionary({
    en: {
        messages: {
            required: field => `${field}不能为空`
        }
    }
});

var plugin = {
    install(Vue, options = {}) {
        if (this.installed) {
            return;
        }
        
        this.installed = true;
        
        for (var i in options) {
            VeeValidate.Validator.extend(i, options[i]);
        }
        
        Vue.component('vblForm', vblForm);
        Vue.component('vblFormItem', vblFormItem);
    }
};

import Vue from 'vue';

Vue.use(VeeValidate);

export default plugin;
