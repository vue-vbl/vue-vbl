import './css/grid.css';
import vblCol from './vblCol';
import vblRow from './vblRow';

var plugin = {
    install(Vue) {
        if (this.installed) {
            return;
        }
        
        this.installed = true;
        
        Vue.component('vblCol', vblCol);
        Vue.component('vblRow', vblRow);
    }
};

export default plugin;
