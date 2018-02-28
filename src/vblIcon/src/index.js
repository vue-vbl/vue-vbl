import vblIcon from './vblIcon';

var plugin = {
    install(Vue) {
        if (this.installed) {
            return;
        }
        
        this.installed = true;
        
        Vue.component('vblIcon', vblIcon);
    }
};

export default plugin;
