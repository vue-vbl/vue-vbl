import vblNav from './vblNav';
import vblNavItem from './vblNavItem';

var plugin = {
    install(Vue) {
        if (this.installed) {
            return;
        }
        
        this.installed = true;
        
        Vue.component('vblNav', vblNav);
        Vue.component('vblNavItem', vblNavItem);
    }
};

export default plugin;
