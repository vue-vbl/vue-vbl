import vblPage from './vblPage';

var plugin = {
    install(Vue) {
        if (this.installed) {
            return;
        }
        
        this.installed = true;
        
        Vue.component('vblPage', vblPage);
    }
};

export default plugin;
