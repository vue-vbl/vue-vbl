import vblTextarea from './vblTextarea';

var plugin = {
    install(Vue) {
        if (this.installed) {
            return;
        }
        
        this.installed = true;
        
        Vue.component('vblTextarea', vblTextarea);
    }
};

export default plugin;
