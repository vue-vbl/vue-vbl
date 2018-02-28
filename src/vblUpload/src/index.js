import vblUpload from './vblUpload';

var plugin = {
    install(Vue) {
        if (this.installed) {
            return;
        }
        
        this.installed = true;
        
        Vue.component('vblUpload', vblUpload);
    }
};

export default plugin;
