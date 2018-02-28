import vblButton from './vblButton';

var plugin = {
    install(Vue) {
        if (this.installed) {
            return;
        }
        
        this.installed = true;
        
        Vue.component('vblButton', vblButton);
    }
};

export default plugin;
