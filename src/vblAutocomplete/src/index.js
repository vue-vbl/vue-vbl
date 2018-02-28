import vblAutocomplete from './vblAutocomplete';

var plugin = {
    install(Vue) {
        if (this.installed) {
            return;
        }
        
        this.installed = true;
        
        Vue.component('vblAutocomplete', vblAutocomplete);
    }
};

export default plugin;
