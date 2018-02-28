import vblOption from './vblOption';
import vblSelect from './vblSelect';
import vblMultiSelect from './vblMultiSelect';
import vblMultiOption from './vblMultiOption';

var plugin = {
    install(Vue) {
        if (this.installed) {
            return;
        }
        
        this.installed = true;
        
        Vue.component('vblOption', vblOption);
        Vue.component('vblSelect', vblSelect);
        Vue.component('vblMultiSelect', vblMultiSelect);
        Vue.component('vblMultiOption', vblMultiOption);
    }
};

export default plugin;
