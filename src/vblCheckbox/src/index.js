import vblCheckbox from './vblCheckbox';

var plugin = {
    install(Vue) {
        if (this.installed) {
            return;
        }
        
        this.installed = true;
        
        Vue.component('vblCheckbox', vblCheckbox);
    }
};

export default plugin;
