import vblModal from './vblModal';

var modal = {
    alert(options) {
        var opt = options;
        if (typeof options === 'string') {
            opt = {
                content: options
            };
        }
        return open(
            Object.assign({
                global: true,
                alert: true,
                hideCancel: true,
                hideHeader: true,
                width: '310'
            }, opt)
        );
    },
    confirm(options) {
        var opt = options;
        if (typeof options === 'string') {
            opt = {
                content: options
            };
        }
        return open(
            Object.assign({
                global: true,
                prompt: true,
                hideHeader: true,
                width: '310'
            }, opt)
        );
    },
    img(options) {
        var opt = options;
        if (typeof options === 'string') {
            opt = {
                src: options
            };
        }
        return open(
            Object.assign({
                global: true,
                img: true,
                verticalCenter: true,
                hideHeader: true,
                hideFooter: true
            }, opt)
        );
    }
};

var plugin = {
    install(Vue) {
        if (this.installed) {
            return;
        }
        this.installed = true;
        
        Vue.component('vblModal', vblModal);
        Vue.prototype.$modal = modal;
    }
};

import Vue from 'vue';

function open(propsData) {
    var Component = Vue.extend(vblModal);
    return new Component({
        el: document.createElement('div'),
        propsData
    });
}

export default plugin;
