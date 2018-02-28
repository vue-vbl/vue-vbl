import vblBreadcrumb from './vblBreadcrumb';
import vblBreadcrumbItem from './vblBreadcrumbItem';

var plugin = {
    install(Vue) {
        if (this.installed) {
            return;
        }
        
        this.installed = true;
        
        Vue.component('vblBreadcrumb', vblBreadcrumb);
        Vue.component('vblBreadcrumbItem', vblBreadcrumbItem);
    }
};

export default plugin;
