import vblInput from './vblInput';

var plugin = {
    install(Vue) {
        if (this.installed) {
            return;
        }
        
        this.installed = true;
        
        Vue.component('vblInput', vblInput);
    }
};

export default plugin;
