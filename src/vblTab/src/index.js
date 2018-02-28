import vblTab from './vblTab';
import vblTabGroup from './vblTabGroup';

var plugin = {
    install(Vue) {
        if (this.installed) {
            return;
        }
        
        this.installed = true;
        
        Vue.component('vblTab', vblTab);
        Vue.component('vblTabGroup', vblTabGroup);
    }
};

export default plugin;
