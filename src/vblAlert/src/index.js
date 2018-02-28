import vblAlert from './vblAlert';

var alert = {
    info(content) {
        return open({type: 'info', content});
    },
    error(content) {
        return open({type: 'error', content});
    },
    success(content) {
        return open({type: 'success', content});
    }
};

var plugin = {
    install(Vue) {
        if (this.installed) {
            return;
        }
        this.installed = true;
        
        Vue.prototype.$alert = alert;
    }
};

import Vue from 'vue';

function open(propsData) {
    var Component = Vue.extend(vblAlert);
    return new Component({
        el: document.createElement('div'),
        propsData
    });
}

export default plugin;
