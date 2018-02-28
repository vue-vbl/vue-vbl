import vblDatetime from './vblDatetime';

var plugin = {
    install(Vue) {
        if (this.installed) {
            return;
        }
        
        this.installed = true;
        
        Vue.component('vblDatetime', vblDatetime);
    }
};

export default plugin;
