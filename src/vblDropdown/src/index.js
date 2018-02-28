import vblDropdown from './vblDropdown';

var plugin = {
    install(Vue) {
        if (this.installed) {
            return;
        }
        
        this.installed = true;
        
        Vue.component('vblDropdown', vblDropdown);
    }
};

export default plugin;
