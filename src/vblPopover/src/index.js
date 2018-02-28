import vblPopover from './vblPopover';

var plugin = {
    install(Vue) {
        if (this.installed) {
            return;
        }
        
        this.installed = true;
        
        Vue.component('vblPopover', vblPopover);
    }
};

export default plugin;
