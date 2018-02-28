import vblRadio from './vblRadio';

var plugin = {
    install(Vue) {
        if (this.installed) {
            return;
        }
        
        this.installed = true;
        
        Vue.component('vblRadio', vblRadio);
    }
};

export default plugin;