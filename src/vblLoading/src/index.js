import vblLoading from './vblLoading';

var loading = {
    open
};

var plugin = {
    install(Vue) {
        if (this.installed) {
            return;
        }
        
        this.installed = true;
        
        Vue.prototype.$loading = loading;
    }
};

import Vue from 'vue';

function open(propsData) {
    var Component = Vue.extend(vblLoading);
    return new Component({
        el: document.createElement('div'),
        propsData
    });
}

export default plugin;
