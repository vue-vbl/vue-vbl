import vblTable from './vblTable';

var plugin = {
    install(Vue) {
        if (this.installed) {
            return;
        }
        
        this.installed = true;
        
        Vue.component('vblTable', vblTable);
    }
};

export default plugin;
