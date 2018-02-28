import './vbl.css/src/index.less';
import vblModal from './vblModal/src';
import vblAlert from './vblAlert/src';
import vblDatetime from './vblDatetime/src';
import vblDropdown from './vblDropdown/src';
import vblPage from './vblPage/src';
import vblTree from './vblTree/src';
import vblTable from './vblTable/src';
import vblInput from './vblInput/src';
import vblTextarea from './vblTextarea/src';
import vblIcon from './vblIcon/src';
import vblButton from './vblButton/src';
import vblLoading from './vblLoading/src';
import vblPopover from './vblPopover/src';
import vblCheckbox from './vblCheckbox/src';
import vblRadio from './vblRadio/src';
import vblSelect from './vblSelect/src';
import vblForm from './vblForm/src';
import vblAutocomplete from './vblAutocomplete/src';
import vblTab from './vblTab/src';
import vblLayout from './vblLayout/src';
import vblUpload from './vblUpload/src';
import vblBreadcrumb from './vblBreadcrumb/src';
import vblNav from './vblNav/src';

export var common = {
    vblLayout,
    vblButton,
    vblIcon
};
export var basic = {
    vblPage,
    vblTree,
    vblTable,
    vblTab,
    vblBreadcrumb,
    vblNav
};
export var float = {
    vblModal,
    vblAlert,
    vblLoading,
    vblDropdown,
    vblPopover
};
export var form = {
    vblInput,
    vblTextarea,
    vblSelect,
    vblCheckbox,
    vblRadio,
    vblUpload,
    vblDatetime,
    vblAutocomplete,
    vblForm
};

export var plugins = Object.assign(
    {}, 
    common, 
    basic, 
    float, 
    form
);

var installObj = {
    install(Vue, options = {}) {
        if (this.installed) {
            return;
        }
        
        this.installed = true;
        
        Object.keys(plugins).forEach((name) => {
            Vue.use(plugins[name], options[name]);
        });
    }
};

export default installObj;