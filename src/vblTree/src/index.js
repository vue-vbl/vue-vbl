import vblTree from './vblTree';

var plugin = {
    install(Vue) {
        if (this.installed) {
            return;
        }
        
        this.installed = true;
        
        Vue.component('vblTree', vblTree);
    }
};

export default plugin;
